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

var _Label = require('../../Label');

var _Label2 = _interopRequireDefault(_Label);

var _colors = require('../../helpers/styles/colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var string = _react.PropTypes.string;
var oneOf = _react.PropTypes.oneOf;
var object = _react.PropTypes.object;
var white = _colors2.default.white;


var getRelevantContextKeys = function getRelevantContextKeys(themeAndConfig) {
  var compTheme = themeAndConfig.compTheme;

  var ulTheme = compTheme && compTheme.uqLabel || {};
  return _extends({}, ulTheme);
};

var getLabelStyles = function getLabelStyles(type, themeAndConfig) {
  var uqLabel = getRelevantContextKeys(themeAndConfig);
  var styles = {
    textTransform: 'uppercase',
    height: '12px',
    lineHeight: '12px',
    padding: '3px 3px 2px',
    letterSpacing: '.01em',
    fontSize: uqLabel.fontSize || '.625rem',
    fontWeight: 'bold',
    textAlign: 'left',
    fontFamily: uqLabel.fontFamily
  };

  // set color and background color based on type value
  switch (type) {
    case 'onlineLowStock':
      {
        styles.backgroundColor = uqLabel.lowStockBackgroundColor || _colors2.default.grey700;
        styles.color = uqLabel.promoTextColor || white;
        break;
      }

    case 'discount':
    case 'promo':
      {
        styles.backgroundColor = uqLabel.discountBackgroundColor || _colors2.default.redA500;
        styles.color = uqLabel.discountTextColor || white;
        break;
      }

    case 'new':
    case 'multiBuy':
    case 'limitedOffer':
      {
        styles.backgroundColor = uqLabel.limitedBackgroundColor || _colors2.default.black;
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

var UqLabel = function UqLabel(props, context) {
  var className = props.className;
  var id = props.id;
  var text = props.text;
  var type = props.type;


  var themeAndConfig = {
    compTheme: context.compTheme || _themeManager2.default.getCompTheme(_lightRawTheme2.default),
    compConfig: context.compConfig || _configurationManager2.default.getCompConfig(_baseConfig2.default)
  };

  var labelStyle = getLabelStyles(type, themeAndConfig);

  return _react2.default.createElement(_Label2.default, {
    id: id,
    className: className,
    text: text,
    style: labelStyle
  });
};

UqLabel.propTypes = {
  className: string,
  id: string,
  text: string.isRequired,
  type: oneOf(['discount', 'promo', 'onlineLowStock', 'new', 'multiBuy', 'limitedOffer']).isRequired
};

UqLabel.contextTypes = {
  compTheme: object,
  compConfig: object
};

exports.default = (0, _contextPure2.default)(UqLabel);