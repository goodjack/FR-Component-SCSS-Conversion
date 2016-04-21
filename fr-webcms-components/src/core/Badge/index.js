import React, { PropTypes, Component } from 'react';
import DefaultRawTheme from '../../helpers/styles/rawThemes/lightRawTheme';
import ThemeManager from '../../helpers/styles/themeManager';
import { mergeStyles } from '../../helpers/utils/stylePropable';
import composeContextPure from '../../helpers/composedComponents/contextPure';
import ConfigurationManager from '../../helpers/configuration/configurationManager';
import BaseConfig from '../../helpers/configuration/baseConfig';
import Colors from '../../helpers/styles/colors';

const { object, string, number, node, oneOf } = PropTypes;

const getRelevantContextKeys = (themeAndConfig) => {
  const {
    compTheme,
    compConfig,
  } = themeAndConfig;
  const bTheme = compTheme && compTheme.badge || {};
  const bConfig = compConfig && compConfig.badge || {};
  return { ...bTheme, ...bConfig };
};

const setBadgeIconPosition = (comp) => {
  const {
    props,
    themeAndConfig,
    refs,
  } = comp;
  const badgeContext = getRelevantContextKeys(themeAndConfig);
  const position = props.position || badgeContext.position;

  // switch case to set the badge position
  switch (position) {
    case 'right': {
      comp.setState({ badgePosition: { right: 0 } });
      break;
    }

    case 'center': {
      const widthVal = refs.rootElement.clientWidth - refs.badgeIcon.clientWidth;
      comp.setState({ badgePosition: { left: widthVal / 2 } });
      break;
    }

    case 'left':
    default: {
      comp.setState({ badgePosition: { left: 0 } });
    }
  }
};

const getStyles = (themeAndConfig) => {
  const badgeContext = getRelevantContextKeys(themeAndConfig);
  return {
    root: {
      position: 'relative',
      display: 'inline-block',
      paddingTop: '12px',
    },
    badge: {
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 0,
      fontWeight: badgeContext.fontWeight,
      fontFamily: badgeContext.fontFamily,
      fontSize: '9px',
      lineHeight: '21px',
      borderRadius: '50%',
      backgroundColor: badgeContext.backgroundColor || Colors.redA500,
      color: badgeContext.textColor || Colors.white,
      padding: '0px 5px',
    },
  };
};

class Badge extends Component {

  static propTypes = {
    badgeStyle: object,
    children: node,
    className: string,
    maxLimit: number,
    number: number.isRequired,
    position: oneOf(['left', 'right', 'center']),
    style: object,
  };

  static contextTypes = {
    compTheme: object,
    compConfig: object,
  };

  // set initial badgePosition
  state = {
    badgePosition: { left: 0 },
  };

  componentDidMount() {
    setBadgeIconPosition(this);
  }

  themeAndConfig = {
    compTheme: this.context.compTheme || ThemeManager.getCompTheme(DefaultRawTheme),
    compConfig: this.context.compConfig || ConfigurationManager.getCompConfig(BaseConfig),
  };

  render() {
    const {
      style,
      children,
      number: content,
      maxLimit,
      badgeStyle,
      ...other,
    } = this.props;
    const styles = getStyles(this.themeAndConfig);
    const badgeStyles = mergeStyles(styles.badge, badgeStyle);
    const badgeContext = getRelevantContextKeys(this.themeAndConfig);
    const contentMaxLimit = maxLimit || badgeContext.maxLimit || null;
    let badgeIconContent = content;
    if (contentMaxLimit && (badgeIconContent > contentMaxLimit)) {
      badgeIconContent = `${contentMaxLimit}+`;
    }

    return (
      <div
        ref="rootElement"
        {...other}
        style={mergeStyles(styles.root, style)}
      >
        {children}
        <span
          ref="badgeIcon"
          style={mergeStyles(badgeStyles, this.state.badgePosition)}
        >
          {badgeIconContent}
        </span>
      </div>
    );
  }
}

export default composeContextPure(Badge);
