'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _EnhancedSelect = require('../../EnhancedSelect');

var _EnhancedSelect2 = _interopRequireDefault(_EnhancedSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var any = _react.PropTypes.any;
var func = _react.PropTypes.func;
var object = _react.PropTypes.object;


var Picker = function Picker(props) {
  var onChange = props.onChange;
  var children = props.children;


  return _react2.default.createElement(
    _EnhancedSelect2.default,
    _extends({
      onchange: onChange
    }, props),
    children
  );
};

Picker.propTypes = {
  children: any.isRequired,
  onChange: func,
  style: object
};

exports.default = Picker;