'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var any = _react.PropTypes.any;
var number = _react.PropTypes.number;
var string = _react.PropTypes.string;


var Container = function Container(props) {
  var bgColor = props.bgColor;
  var children = props.children;
  var height = props.height;
  var width = props.width;


  var containerStyles = {
    backgroundColor: bgColor,
    height: height,
    width: width
  };

  return _react2.default.createElement(
    'div',
    { style: containerStyles },
    children
  );
};

Container.propTypes = {
  bgColor: string,
  children: any,
  height: number,
  width: number
};

Container.defaultProps = {
  bgColor: '#fff'
};

exports.default = Container;