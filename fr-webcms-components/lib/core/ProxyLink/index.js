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

var _contextPure = require('../../helpers/composedComponents/contextPure');

var _contextPure2 = _interopRequireDefault(_contextPure);

var _configurationManager = require('../../helpers/configuration/configurationManager');

var _configurationManager2 = _interopRequireDefault(_configurationManager);

var _baseConfig = require('../../helpers/configuration/baseConfig');

var _baseConfig2 = _interopRequireDefault(_baseConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var string = _react.PropTypes.string;
var object = _react.PropTypes.object;
var func = _react.PropTypes.func;
var node = _react.PropTypes.node;


var getRelevantContextKeys = function getRelevantContextKeys(themeAndConfig) {
  var compTheme = themeAndConfig.compTheme;
  var compConfig = themeAndConfig.compConfig;

  var plTheme = compTheme && compTheme.proxyLink || {};
  var plConfig = compConfig && compConfig.proxyLink || {};
  return _extends({}, plTheme, plConfig);
};

var getStyle = function getStyle(prop, themeAndConfig) {
  var textColor = prop.textColor;
  var textDecoration = prop.textDecoration;
  var fontWeight = prop.fontWeight;
  var fontSize = prop.fontSize;


  var plContext = getRelevantContextKeys(themeAndConfig);
  return {
    color: textColor || plContext.textColor || 'black',
    fontWeight: fontWeight || 'bold',
    fontSize: fontSize || '0.75em',
    textDecoration: textDecoration || plContext.textDecoration || 'underline'
  };
};

var ProxyLink = function ProxyLink(props, context) {
  var linkUrl = props.linkUrl;
  var onClickEvent = props.onClickEvent;
  var linkText = props.linkText;
  var children = props.children;
  var targetwindow = props.targetwindow;
  var rootClass = props.rootClass;


  var themeAndConfig = {
    compTheme: context.compTheme || _themeManager2.default.getCompTheme(_lightRawTheme2.default),
    compConfig: context.compConfig || _configurationManager2.default.getCompConfig(_baseConfig2.default)
  };

  var style = getStyle(props, themeAndConfig);

  return _react2.default.createElement(
    'a',
    {
      className: rootClass,
      href: linkUrl,
      onClick: onClickEvent,
      style: style,
      target: targetwindow
    },
    children,
    linkText
  );
};

ProxyLink.propTypes = {
  linkText: string,
  linkUrl: string,
  onClickEvent: func,
  /**
    Basic style properties are passed to be added from cms
  **/
  textColor: string,
  fontWeight: string,
  fontSize: string,
  textDecoration: string,
  /**
    This prop would allow ProxyLink component to be used as a wrapper to child component
  **/
  children: node,
  rootClass: string,
  targetwindow: string
};

ProxyLink.ContextTypes = {
  compTheme: object,
  compConfig: object
};

exports.default = (0, _contextPure2.default)(ProxyLink);