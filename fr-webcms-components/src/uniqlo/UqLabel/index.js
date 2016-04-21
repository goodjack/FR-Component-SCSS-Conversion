import React, { PropTypes } from 'react';
import DefaultRawTheme from '../../helpers/styles/rawThemes/lightRawTheme';
import ThemeManager from '../../helpers/styles/themeManager';
import composeContextPure from '../../helpers/composedComponents/contextPure';
import ConfigurationManager from '../../helpers/configuration/configurationManager';
import BaseConfig from '../../helpers/configuration/baseConfig';
import Label from '../../Label';
import Colors from '../../helpers/styles/colors';

const { string, oneOf, object } = PropTypes;
const { white } = Colors;

const getRelevantContextKeys = (themeAndConfig) => {
  const {
    compTheme,
  } = themeAndConfig;
  const ulTheme = compTheme && compTheme.uqLabel || {};
  return { ...ulTheme };
};

const getLabelStyles = (type, themeAndConfig) => {
  const uqLabel = getRelevantContextKeys(themeAndConfig);
  const styles = {
    textTransform: 'uppercase',
    height: '12px',
    lineHeight: '12px',
    padding: '3px 3px 2px',
    letterSpacing: '.01em',
    fontSize: uqLabel.fontSize || '.625rem',
    fontWeight: 'bold',
    textAlign: 'left',
    fontFamily: uqLabel.fontFamily,
  };

  // set color and background color based on type value
  switch (type) {
    case 'onlineLowStock': {
      styles.backgroundColor = uqLabel.lowStockBackgroundColor || Colors.grey700;
      styles.color = uqLabel.promoTextColor || white;
      break;
    }

    case 'discount':
    case 'promo': {
      styles.backgroundColor = uqLabel.discountBackgroundColor || Colors.redA500;
      styles.color = uqLabel.discountTextColor || white;
      break;
    }

    case 'new':
    case 'multiBuy':
    case 'limitedOffer': {
      styles.backgroundColor = uqLabel.limitedBackgroundColor || Colors.black;
      styles.color = uqLabel.limitedTextColor || white;
      break;
    }

    /** default case wont arise as type values are selected from list provided.
     * Adding empty default to avoid lint error.
    **/
    default:

  }
  return styles;
};

const UqLabel = (props, context) => {

  const {
    className,
    id,
    text,
    type,
  } = props;

  const themeAndConfig = {
    compTheme: context.compTheme || ThemeManager.getCompTheme(DefaultRawTheme),
    compConfig: context.compConfig || ConfigurationManager.getCompConfig(BaseConfig),
  };

  const labelStyle = getLabelStyles(type, themeAndConfig);

  return (
    <Label
      id={id}
      className={className}
      text={text}
      style={labelStyle}
    />
  );
};

UqLabel.propTypes = {
  className: string,
  id: string,
  text: string.isRequired,
  type: oneOf(
    ['discount', 'promo', 'onlineLowStock', 'new', 'multiBuy', 'limitedOffer']).isRequired,
};

UqLabel.contextTypes = {
  compTheme: object,
  compConfig: object,
};

export default composeContextPure(UqLabel);
