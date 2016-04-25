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
import HeroVariationTextOnImage from './heroVariationTextOnImage';

const { string, object, oneOf, bool, func } = PropTypes;

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
      color: hero.titleTextColor || 'black',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      WebkitLineClamp: hero.titleLinesToShow || 3,
      WebkitBoxOrient: 'vertical',
      textAlign: 'center',
      padding: 5,
    },
    subtitle: {
      fontSize: '1em',
      lineHeight: 1.6,
      color: hero.subtitleTextColor || 'black',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      WebkitLineClamp: hero.subtitleLinesToShow || 3,
      WebkitBoxOrient: 'vertical',
      textAlign: 'center',
      padding: 5,
    },
    text: {
      fontSize: '1em',
      lineHeight: 1.6,
      color: hero.textColor || 'black',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      WebkitLineClamp: hero.textLinesToShow || 3,
      WebkitBoxOrient: 'vertical',
      textAlign: 'center',
      padding: 5,
    },
    imageContainer: {
      backgroundColor: hero.imageBackgroundColor || 'lightgrey',
    },
    iconContainer: {
      position: 'absolute',
      bottom: 5,
    },
    iconText: {
      color: hero.textColor || 'black',
      fontSize: '0.75em',
      fontWeight: 'bold',
    },
    proxyLink: {
      position: 'absolute',
      bottom: 5,
      right: 5,
      width: '45%',
      textAlign: 'right',
    },
    textOverlay: {
      backgroundColor: textareaBgColor || hero.textareaBackgroundColor || 'white',
      position: 'absolute',
      bottom: 15,
      left: 0,
      maxWidth: textOverlayMaxWidth || hero.textOverlayMaxWidth || '50%',
      fontSize: '1em',
      padding: 5,
    },
    overlayProxyLink: {
      textAlign: 'left',
      padding: 5,
    },
    overlayIconContainer: {
      position: 'relative',
      padding: 5,
    },
    TextOnImage: {
      position: 'absolute',
      top: '40%',
      left: '35%',
      backgroundColor: 'transparent',
      width: '30%',
      fontSize: '1em',
    },
  };
};

const Hero = (props, context) => {

  const {
    style,
    className,
    title,
    titleStyle,
    subtitle,
    subtitleStyle,
    text,
    textStyle,
    imageSrc,
    variation,
    icon,
    iconText,
    textareaBgColor,
    linkText,
    linkTextColor,
    linkUrl,
    linkFontWeight,
    linkFontSize,
    linkTextDecoration,
    navToOverlayComp,
    linkOnClick,
    callOverlay,
  } = props;

  const themeAndConfig = {
    compTheme: context.compTheme || ThemeManager.getCompTheme(DefaultRawTheme),
    compConfig: context.compConfig || ConfigurationManager.getCompConfig(BaseConfig),
  };

  const styles = getStyles(themeAndConfig, props);
  const mergedRootStyle = mergeStyles(styles.root, style);
  const mergedTitleStyle = mergeStyles(styles.title, titleStyle);
  const mergedSubtitleStyle = mergeStyles(styles.subtitle, subtitleStyle);
  const mergedTextStyle = mergeStyles(styles.text, textStyle);

  // setting props to be passed to different variations
  const variationProps = {
    rootStyle: mergedRootStyle,
    className,
    titleStyle: mergedTitleStyle,
    subtitleStyle: mergedSubtitleStyle,
    textStyle: mergedTextStyle,
    title,
    subtitle,
    imageSrc,
    text,
    imageContainerStyle: styles.imageContainer,
    icon,
    iconText,
    iconContainerStyle: styles.iconContainer,
    iconTextStyle: styles.iconText,
    proxyLinkStyle: styles.proxyLink,
    rightSideStyle: styles.rightSide,
    linkText,
    linkTextColor,
    linkUrl,
    linkFontWeight,
    linkFontSize,
    linkTextDecoration,
    linkOnClick,
    callOverlay,
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
      variationProps.overlayIconContainerStyle = styles.overlayIconContainerStyle;
      variationProps.textOverlay = styles.textOverlay;
      variationProps.overlayProxyLinkStyle = styles.overlayProxyLink;
      markupToRender = (<HeroVariationOverlay {...variationProps} />);
      break;
    }

    case 'textOnImage': {
      variationProps.TextOnImage = styles.TextOnImage;
      markupToRender = (<HeroVariationTextOnImage {...variationProps} />);
      break;
    }

    default:
  }

  return markupToRender;
};

Hero.propTypes = {
  style: object,
  className: string,
  imageSrc: string.isRequired,
  subtitle: string,
  subtitleStyle: object,
  text: string,
  textStyle: object,
  title: string,
  titleStyle: object,
  screenRatio: string,
  variation: oneOf(['imageLeft', 'imageRight', 'overlay', 'textOnImage']).isRequired,
  icon: string,
  iconText: string,
  textOverlayMaxWidth: string,
  textareaBgColor: string,
  linkText: string,
  linkTextColor: string,
  linkUrl: string,
  linkFontWeight: string,
  linkFontSize: string,
  linkTextDecoration: string,
  navToOverlayComp: bool,
  linkOnClick: func,
  callOverlay: func,
};

Hero.contextTypes = {
  compTheme: object,
  compConfig: object,
};

export default composeContextPure(Hero);
