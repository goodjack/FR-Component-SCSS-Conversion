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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var string = _react.PropTypes.string;
var object = _react.PropTypes.object;
var oneOf = _react.PropTypes.oneOf;
var bool = _react.PropTypes.bool;


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
      color: hero.titleTextColor,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      WebkitLineClamp: hero.titleLinesToShow || 3,
      WebkitBoxOrient: 'vertical',
      padding: 5
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
      padding: 5
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
      padding: 5
    },
    imageContainerStyle: {
      backgroundColor: hero.imageBackgroundColor || 'lightgrey'
    },
    iconContainerStyle: {
      position: 'absolute',
      bottom: 5
    },
    iconTextStyle: {
      color: 'black',
      fontSize: '0.75em',
      fontWeight: 'bold'
    },
    proxyLinkStyle: {
      position: 'absolute',
      bottom: 5,
      right: 5,
      width: '45%',
      textAlign: 'right'
    },
    textOverlay: {
      backgroundColor: textareaBgColor || hero.textareaBackgroundColor || 'white',
      color: 'yellow',
      position: 'absolute',
      bottom: 15,
      left: 0,
      maxWidth: textOverlayMaxWidth || hero.textOverlayMaxWidth || '50%',
      fontSize: '1em',
      padding: 5
    },
    overlayProxyLinkStyle: {
      textAlign: 'left',
      padding: 5
    }
  };
};

var Hero = function Hero(props, context) {
  var className = props.className;
  var title = props.title;
  var subtitle = props.subtitle;
  var text = props.text;
  var imageSrc = props.imageSrc;
  var imageTitle = props.imageTitle;
  var variation = props.variation;
  var icon = props.icon;
  var iconText = props.iconText;
  var textareaBgColor = props.textareaBgColor;
  var linkText = props.linkText;
  var linkUrl = props.linkUrl;
  var linkFontWeight = props.linkFontWeight;
  var linkFontSize = props.linkFontSize;
  var linkTextDecoration = props.linkTextDecoration;
  var navToOverlayComp = props.navToOverlayComp;

  var themeAndConfig = {
    compTheme: context.compTheme || _themeManager2.default.getCompTheme(_lightRawTheme2.default),
    compConfig: context.compConfig || _configurationManager2.default.getCompConfig(_baseConfig2.default)
  };
  var styles = getStyles(themeAndConfig, props);

  // setting props to be passed to different variations
  var variationProps = {
    rootStyle: styles.root,
    className: className,
    titleStyle: styles.title,
    subtitleStyle: styles.subtitle,
    textStyle: styles.text,
    title: title,
    subtitle: subtitle,
    imageSrc: imageSrc,
    imageTitle: imageTitle,
    text: text,
    imageContainerStyle: styles.imageContainerStyle,
    icon: icon,
    iconText: iconText,
    iconContainerStyle: styles.iconContainerStyle,
    iconTextStyle: styles.iconTextStyle,
    proxyLinkStyle: styles.proxyLinkStyle,
    rightSideStyle: styles.rightSide,
    textOverlay: styles.textOverlay,
    overlayProxyLinkStyle: styles.overlayProxyLinkStyle,
    linkText: linkText,
    linkUrl: linkUrl,
    linkFontWeight: linkFontWeight,
    linkFontSize: linkFontSize,
    linkTextDecoration: linkTextDecoration
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
        markupToRender = _react2.default.createElement(_heroVariationOverlay2.default, variationProps);
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
  navToOverlayComp: bool
};

Hero.contextTypes = {
  compTheme: object,
  compConfig: object
};

exports.default = (0, _contextPure2.default)(Hero);