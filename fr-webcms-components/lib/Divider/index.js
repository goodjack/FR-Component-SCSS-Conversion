'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('../helpers/utils/styles');

var _styles2 = _interopRequireDefault(_styles);

var _uniThemeable = require('../helpers/styles/uniThemeable');

var _uniThemeable2 = _interopRequireDefault(_uniThemeable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var bool = _react.PropTypes.bool;
var string = _react.PropTypes.string;
var object = _react.PropTypes.object;


var propTypes = {
  className: string,
  inset: bool,
  style: object
};

var defaultProps = {
  inset: false
};

var Divider = function Divider(_ref) {
  var inset = _ref.inset;
  var uniTheme = _ref.uniTheme;
  var style = _ref.style;

  var other = _objectWithoutProperties(_ref, ['inset', 'uniTheme', 'style']);

  var rootStyles = {
    margin: 0,
    marginTop: -1,
    marginLeft: inset ? 72 : 0,
    height: 1,
    border: 'none',
    backgroundColor: uniTheme.rawTheme.palette.borderColor
  };

  return _react2.default.createElement('hr', _extends({}, other, { style: _styles2.default.prepareStyles(uniTheme, rootStyles, style) }));
};

Divider.displayName = 'Divider';
Divider.propTypes = propTypes;
Divider.defaultProps = defaultProps;
Divider = (0, _uniThemeable2.default)(Divider);

exports.default = Divider;