'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var string = _react.PropTypes.string;
var node = _react.PropTypes.node;


var Fillers = function Fillers(props) {
  return _react2.default.createElement(
    'div',
    null,
    ' ',
    props.children,
    ' '
  );
};

Fillers.propTypes = {
  children: node,
  display: string
};

Fillers.defaultProps = {
  display: 'Always'
};
exports.default = Fillers;