'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = uniThemeable;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lightRawTheme = require('./rawThemes/lightRawTheme');

var _lightRawTheme2 = _interopRequireDefault(_lightRawTheme);

var _themeManager = require('./themeManager');

var _themeManager2 = _interopRequireDefault(_themeManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function uniThemeable(WrappedComponent) {
  var UniComponent = function UniComponent(props, _ref) {
    var _ref$uniTheme = _ref.uniTheme;
    var uniTheme = _ref$uniTheme === undefined ? _themeManager2.default.getMuiTheme(_lightRawTheme2.default) : _ref$uniTheme;

    return _react2.default.createElement(WrappedComponent, _extends({}, props, { uniTheme: uniTheme }));
  };

  UniComponent.displayName = getDisplayName(WrappedComponent);
  UniComponent.contextTypes = {
    uniTheme: _react2.default.PropTypes.object
  };
  UniComponent.childContextTypes = {
    uniTheme: _react2.default.PropTypes.object
  };

  return UniComponent;
}