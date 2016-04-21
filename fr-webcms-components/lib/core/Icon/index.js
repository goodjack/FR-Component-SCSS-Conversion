'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _svgIcons = require('../../SvgIcons/svgIcons');

var _svgIcons2 = _interopRequireDefault(_svgIcons);

var _Null = require('../Null');

var _Null2 = _interopRequireDefault(_Null);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var string = _react.PropTypes.string;


var Icon = function Icon(props) {
  var name = props.name;

  var IconRender = _svgIcons2.default[name] ? _svgIcons2.default[name] : _Null2.default;
  return _react2.default.createElement(IconRender, props);
};

Icon.propTypes = {
  name: string.isRequired
};

exports.default = Icon;