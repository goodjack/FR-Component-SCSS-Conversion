'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Swipable = require('../../core/Swipable');

var _Swipable2 = _interopRequireDefault(_Swipable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var object = _react.PropTypes.object;
var number = _react.PropTypes.number;
var node = _react.PropTypes.node;


var renderChildren = function renderChildren(props) {
  var children = _react2.default.Children.map(props.children, function (child, index) {
    return _react2.default.cloneElement(child, {
      index: index,
      active: props.activeIndex === index ? true : false
    });
  });
  return children;
};

var SwipableNav = function SwipableNav(props) {
  var activeIndex = props.activeIndex;
  var children = props.children;
  var style = props.style;
  var speed = props.speed;

  var other = _objectWithoutProperties(props, ['activeIndex', 'children', 'style', 'speed']);

  var swipeContent = renderChildren(props);

  return _react2.default.createElement(
    _Swipable2.default,
    { style: style, pan: true, selectedIndex: activeIndex, speed: speed },
    swipeContent
  );
};

SwipableNav.propTypes = {
  children: node.isRequired,
  activeIndex: number,
  speed: number,
  style: object
};

SwipableNav.defaultProps = {
  speed: 200,
  activeIndex: 0
};

exports.default = SwipableNav;