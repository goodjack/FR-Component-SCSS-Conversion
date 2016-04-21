import React, { PropTypes } from 'react';
import DefaultRawTheme from '../../helpers/styles/rawThemes/lightRawTheme';
import ThemeManager from '../../helpers/styles/themeManager';
import { mergeStyles } from '../../helpers/utils/stylePropable';
import composeContextPure from '../../helpers/composedComponents/contextPure';
import ConfigurationManager from '../../helpers/configuration/configurationManager';
import BaseConfig from '../../helpers/configuration/baseConfig';
import HeroVariationImageRight from './heroVariationImageRight';
import HeroVariationImageLeft from './heroVariationImageLeft';
import HeroVariationOverlay from './heroVariationOverlay';

const { string, object, oneOf, bool } = PropTypes;

const getRelevantContextKeys = (themeAndConfig) => {
  const {
    compTheme,
    compConfig,
  } = themeAndConfig;

  const hTheme = compTheme && compTheme.hero || {};
  const hConfig = compConfig && compConfig.hero || {};
  return { ...hTheme, ...hConfig };
};

const getStyles = (themeAndConfig, props) => {
  const {
    screenRatio,
    textOverlayMaxWidth,
    textareaBgColor,
  } = props;
  const hero = getRelevantContextKeys(themeAndConfig);
  let leftSideWidth;
  let rightSideWidth;
  if (screenRatio) {
    const widthPercentArray = screenRatio.split(':');
    leftSideWidth = `${widthPercentArray[0]}%`;
    rightSideWidth = `${widthPercentArray[1]}%`;
  }

  return {
    root: {
      position: 'relative',
      width: '100%',
      height: '100%',
      borderColor: hero.borderColor,
      borderWidth: 1,
      padding: 1,
      borderStyle: 'solid',
      overflow: 'hidden',
    },
    leftSide: {
      float: 'left',
      width: leftSideWidth || '50%',
      height: '100%',
    },
    rightSide: {
      position: 'relative',
      float: 'left',
      width: rightSideWidth || '50%',
      height: '100%',
    },
    title: {
      marginBottom: 5,
      fontSize: '1.5em',
      fontWeight: 'bold',
      lineHeight: 1.6,
      color: hero.titleTextColor,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      WebkitLineClamp: hero.titleLinesToShow || 3,
      WebkitBoxOrient: 'vertical',
      padding: 5,
    },
    subtitle: {
      fontSize: '1em',
      lineHeight: 1.6,
      color: hero.subtitleTextColor,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      WebkitLineClamp: hero.subtitleLinesToShow || 3,
      WebkitBoxOrient: 'vertical',
      padding: 5,
    },
    text: {
      fontSize: '1em',
      lineHeight: 1.6,
      color: hero.textColor,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      WebkitLineClamp: hero.textLinesToShow || 3,
      WebkitBoxOrient: 'vertical',
      padding: 5,
    },
    imageContainerStyle: {
      backgroundColor: hero.imageBackgroundColor || 'lightgrey',
    },
    iconContainerStyle: {
      position: 'absolute',
      bottom: 5,
    },
    iconTextStyle: {
      color: 'black',
      fontSize: '0.75em',
      fontWeight: 'bold',
    },
    proxyLinkStyle: {
      position: 'absolute',
      bottom: 5,
      right: 5,
      width: '45%',
      textAlign: 'right',
    },
    textOverlay: {
      backgroundColor: textareaBgColor || hero.textareaBackgroundColor || 'white',
      color: 'yellow',
      position: 'absolute',
      bottom: 15,
      left: 0,
      maxWidth: textOverlayMaxWidth || hero.textOverlayMaxWidth || '50%',
      fontSize: '1em',
      padding: 5,
    },
    overlayProxyLinkStyle: {
      textAlign: 'left',
      padding: 5,
    },
  };
};

const Hero = (props, context) => {

  const {
    className,
    title,
    subtitle,
    text,
    imageSrc,
    imageTitle,
    variation,
    icon,
    iconText,
    textareaBgColor,
    linkText,
    linkUrl,
    linkFontWeight,
    linkFontSize,
    linkTextDecoration,
    navToOverlayComp,
  } = props;
  const themeAndConfig = {
    compTheme: context.compTheme || ThemeManager.getCompTheme(DefaultRawTheme),
    compConfig: context.compConfig || ConfigurationManager.getCompConfig(BaseConfig),
  };
  const styles = getStyles(themeAndConfig, props);

  // setting props to be passed to different variations
  const variationProps = {
    rootStyle: styles.root,
    className,
    titleStyle: styles.title,
    subtitleStyle: styles.subtitle,
    textStyle: styles.text,
    title,
    subtitle,
    imageSrc,
    imageTitle,
    text,
    imageContainerStyle: styles.imageContainerStyle,
    icon,
    iconText,
    iconContainerStyle: styles.iconContainerStyle,
    iconTextStyle: styles.iconTextStyle,
    proxyLinkStyle: styles.proxyLinkStyle,
    rightSideStyle: styles.rightSide,
    textOverlay: styles.textOverlay,
    overlayProxyLinkStyle: styles.overlayProxyLinkStyle,
    linkText,
    linkUrl,
    linkFontWeight,
    linkFontSize,
    linkTextDecoration,
  };
  let markupToRender;
  switch (variation) {
    case 'imageRight': {
      variationProps.leftSideStyle = mergeStyles(
        styles.leftSide, { backgroundColor: textareaBgColor }
      );
      variationProps.rightSideStyle = styles.rightSide;
      markupToRender = (<HeroVariationImageRight {...variationProps} />);
      break;
    }

    case 'imageLeft': {
      variationProps.rightSideStyle = mergeStyles(
        styles.rightSide, { backgroundColor: textareaBgColor }
      );
      variationProps.leftSideStyle = styles.leftSide;
      markupToRender = (<HeroVariationImageLeft {...variationProps} />);
      break;
    }

    case 'overlay': {
      variationProps.navToOverlayComp = navToOverlayComp;
      markupToRender = (<HeroVariationOverlay {...variationProps} />);
      break;
    }

    default:
  }

  return markupToRender;
};

Hero.propTypes = {
  className: string,
  imageSrc: string.isRequired,
  imageTitle: string,
  subtitle: string,
  text: string,
  title: string,
  screenRatio: string,
  variation: oneOf(['imageLeft', 'imageRight', 'overlay']).isRequired,
  icon: string,
  iconText: string,
  textOverlayMaxWidth: string,
  textareaBgColor: string,
  linkText: string,
  linkUrl: string,
  linkFontWeight: string,
  linkFontSize: string,
  linkTextDecoration: string,
  navToOverlayComp: bool,
};

Hero.contextTypes = {
  compTheme: object,
  compConfig: object,
};

export default composeContextPure(Hero);
