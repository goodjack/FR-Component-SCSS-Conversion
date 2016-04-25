import React, { PropTypes } from 'react';
import Image from '../Image';
import DefaultRawTheme from '../../helpers/styles/rawThemes/lightRawTheme';
import ThemeManager from '../../helpers/styles/themeManager';
import composeContextPure from '../../helpers/composedComponents/contextPure';
import { mergeStyles } from '../../helpers/utils/stylePropable';

const { string, object } = PropTypes;
const getStyles = (theme, props) => ({
  image: mergeStyles({
    width: theme.imageWidth || '25px',
    height: theme.imageHeight || 'auto',
    float: 'left',
  }, props.imageStyle),

  title: mergeStyles({
    float: 'left',
    fontSize: theme.textSize || '14px',
    color: theme.textColor || '#000',
  }, props.textStyle),
});

const IconHead = (props, context) => {
  const {
    rootClass,
    imageSrc,
    titleText,
    style,
  } = props;

  let compTheme = context.compTheme || ThemeManager.getCompTheme(DefaultRawTheme) || {};
  compTheme = compTheme.iconHead || {};
  const {
    image,
    title,
  } = getStyles(compTheme, props);

  return (
    <div style={style} className={rootClass} >
      <Image source={imageSrc} style={image} />
      <h4 style={title} >{titleText}</h4>
    </div>
  );
};

IconHead.propTypes = {
  rootClass: string,
  imageSrc: string,
  titleText: string,
  style: object,
  textStyle: object,
  imageStyle: object,
};

IconHead.ContextTypes = {
  compTheme: object,
};

export default composeContextPure(IconHead);
