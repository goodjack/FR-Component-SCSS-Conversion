'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lightRawTheme = require('../../helpers/styles/rawThemes/lightRawTheme');

var _lightRawTheme2 = _interopRequireDefault(_lightRawTheme);

var _themeManager = require('../../helpers/styles/themeManager');

var _themeManager2 = _interopRequireDefault(_themeManager);

var _stylePropable = require('../../helpers/utils/stylePropable');

var _contextPure = require('../../helpers/composedComponents/contextPure');

var _contextPure2 = _interopRequireDefault(_contextPure);

var _configurationManager = require('../../helpers/configuration/configurationManager');

var _configurationManager2 = _interopRequireDefault(_configurationManager);

var _baseConfig = require('../../helpers/configuration/baseConfig');

var _baseConfig2 = _interopRequireDefault(_baseConfig);

var _heroVariationImageRight = require('./heroVariationImageRight');

var _heroVariationImageRight2 = _interopRequireDefault(_heroVariationImageRight);

var _heroVariationImageLeft = require('./heroVariationImageLeft');

var _heroVariationImageLeft2 = _interopRequireDefault(_heroVariationImageLeft);

var _heroVariationOverlay = require('./heroVariationOverlay');

var _heroVariationOverlay2 = _interopRequireDefault(_heroVariationOverlay);

var _heroVariationTextOnImage = require('./heroVariationTextOnImage');

var _heroVariationTextOnImage2 = _interopRequireDefault(_heroVariationTextOnImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var string = _react.PropTypes.string;
var object = _react.PropTypes.object;
var oneOf = _react.PropTypes.oneOf;
var bool = _react.PropTypes.bool;
var func = _react.PropTypes.func;


var getRelevantContextKeys = function getRelevantContextKeys(themeAndConfig) {
  var compTheme = themeAndConfig.compTheme;
  var compConfig = themeAndConfig.compConfig;


  var hTheme = compTheme && compTheme.hero || {};
  var hConfig = compConfig && compConfig.hero || {};
  return _extends({}, hTheme, hConfig);
};

var getStyles = function getStyles(themeAndConfig, props) {
  var screenRatio = props.screenRatio;
  var textOverlayMaxWidth = props.textOverlayMaxWidth;
  var textareaBgColor = props.textareaBgColor;

  var hero = getRelevantContextKeys(themeAndConfig);
  var leftSideWidth = void 0;
  var rightSideWidth = void 0;
  if (screenRatio) {
    var widthPercentArray = screenRatio.split(':');
    leftSideWidth = widthPercentArray[0] + '%';
    rightSideWidth = widthPercentArray[1] + '%';
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
      overflow: 'hidden'
    },
    leftSide: {
      float: 'left',
      width: leftSideWidth || '50%',
      height: '100%'
    },
    rightSide: {
      position: 'relative',
      float: 'left',
      width: rightSideWidth || '50%',
      height: '100%'
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
      padding: 5
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
      padding: 5
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
      padding: 5
    },
    imageContainer: {
      backgroundColor: hero.imageBackgroundColor || 'lightgrey'
    },
    iconContainer: {
      position: 'absolute',
      bottom: 5
    },
    iconText: {
      color: hero.textColor || 'black',
      fontSize: '0.75em',
      fontWeight: 'bold'
    },
    proxyLink: {
      position: 'absolute',
      bottom: 5,
      right: 5,
      width: '45%',
      textAlign: 'right'
    },
    textOverlay: {
      backgroundColor: textareaBgColor || hero.textareaBackgroundColor || 'white',
      position: 'absolute',
      bottom: 15,
      left: 0,
      maxWidth: textOverlayMaxWidth || hero.textOverlayMaxWidth || '50%',
      fontSize: '1em',
      padding: 5
    },
    overlayProxyLink: {
      textAlign: 'left',
      padding: 5
    },
    overlayIconContainer: {
      position: 'relative',
      padding: 5
    },
    TextOnImage: {
      position: 'absolute',
      top: '40%',
      left: '35%',
      backgroundColor: 'transparent',
      width: '30%',
      fontSize: '1em'
    }
  };
};

var Hero = function Hero(props, context) {
  var style = props.style;
  var className = props.className;
  var title = props.title;
  var titleStyle = props.titleStyle;
  var subtitle = props.subtitle;
  var subtitleStyle = props.subtitleStyle;
  var text = props.text;
  var textStyle = props.textStyle;
  var imageSrc = props.imageSrc;
  var variation = props.variation;
  var icon = props.icon;
  var iconText = props.iconText;
  var textareaBgColor = props.textareaBgColor;
  var linkText = props.linkText;
  var linkTextColor = props.linkTextColor;
  var linkUrl = props.linkUrl;
  var linkFontWeight = props.linkFontWeight;
  var linkFontSize = props.linkFontSize;
  var linkTextDecoration = props.linkTextDecoration;
  var navToOverlayComp = props.navToOverlayComp;
  var linkOnClick = props.linkOnClick;
  var callOverlay = props.callOverlay;


  var themeAndConfig = {
    compTheme: context.compTheme || _themeManager2.default.getCompTheme(_lightRawTheme2.default),
    compConfig: context.compConfig || _configurationManager2.default.getCompConfig(_baseConfig2.default)
  };

  var styles = getStyles(themeAndConfig, props);
  var mergedRootStyle = (0, _stylePropable.mergeStyles)(styles.root, style);
  var mergedTitleStyle = (0, _stylePropable.mergeStyles)(styles.title, titleStyle);
  var mergedSubtitleStyle = (0, _stylePropable.mergeStyles)(styles.subtitle, subtitleStyle);
  var mergedTextStyle = (0, _stylePropable.mergeStyles)(styles.text, textStyle);

  // setting props to be passed to different variations
  var variationProps = {
    rootStyle: mergedRootStyle,
    className: className,
    titleStyle: mergedTitleStyle,
    subtitleStyle: mergedSubtitleStyle,
    textStyle: mergedTextStyle,
    title: title,
    subtitle: subtitle,
    imageSrc: imageSrc,
    text: text,
    imageContainerStyle: styles.imageContainer,
    icon: icon,
    iconText: iconText,
    iconContainerStyle: styles.iconContainer,
    iconTextStyle: styles.iconText,
    proxyLinkStyle: styles.proxyLink,
    rightSideStyle: styles.rightSide,
    linkText: linkText,
    linkTextColor: linkTextColor,
    linkUrl: linkUrl,
    linkFontWeight: linkFontWeight,
    linkFontSize: linkFontSize,
    linkTextDecoration: linkTextDecoration,
    linkOnClick: linkOnClick,
    callOverlay: callOverlay
  };

  var markupToRender = void 0;
  switch (variation) {
    case 'imageRight':
      {
        variationProps.leftSideStyle = (0, _stylePropable.mergeStyles)(styles.leftSide, { backgroundColor: textareaBgColor });
        variationProps.rightSideStyle = styles.rightSide;
        markupToRender = _react2.default.createElement(_heroVariationImageRight2.default, variationProps);
        break;
      }

    case 'imageLeft':
      {
        variationProps.rightSideStyle = (0, _stylePropable.mergeStyles)(styles.rightSide, { backgroundColor: textareaBgColor });
        variationProps.leftSideStyle = styles.leftSide;
        markupToRender = _react2.default.createElement(_heroVariationImageLeft2.default, variationProps);
        break;
      }

    case 'overlay':
      {
        variationProps.navToOverlayComp = navToOverlayComp;
        variationProps.overlayIconContainerStyle = styles.overlayIconContainerStyle;
        variationProps.textOverlay = styles.textOverlay;
        variationProps.overlayProxyLinkStyle = styles.overlayProxyLink;
        markupToRender = _react2.default.createElement(_heroVariationOverlay2.default, variationProps);
        break;
      }

    case 'textOnImage':
      {
        variationProps.TextOnImage = styles.TextOnImage;
        markupToRender = _react2.default.createElement(_heroVariationTextOnImage2.default, variationProps);
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
  callOverlay: func
};

Hero.contextTypes = {
  compTheme: object,
  compConfig: object
};

exports.default = (0, _contextPure2.default)(Hero);