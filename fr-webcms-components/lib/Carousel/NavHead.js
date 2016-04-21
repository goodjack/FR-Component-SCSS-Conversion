'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _stylePropable = require('../helpers/utils/stylePropable');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var oneOf = _react.PropTypes.oneOf;
var any = _react.PropTypes.any;
var number = _react.PropTypes.number;
var object = _react.PropTypes.object;
var func = _react.PropTypes.func;

var NavHead = function (_Component) {
  _inherits(NavHead, _Component);

  function NavHead() {
    var _Object$getPrototypeO;

    var _temp, _this2, _ret;

    _classCallCheck(this, NavHead);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(NavHead)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this2), _this2.state = {
      highlight: 0,
      over: false
    }, _this2.handleMouseOver = function () {
      _this2.setState({
        over: true
      });
    }, _this2.handleMouseOut = function () {
      _this2.setState({
        over: false
      });
    }, _this2.handleClick = function () {
      var _this2$props = _this2.props;
      var onTouchTap = _this2$props.onTouchTap;
      var value = _this2$props.value;

      if (onTouchTap) {
        if (value) {
          onTouchTap(value);
        } else {
          onTouchTap();
        }
      }
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(NavHead, [{
    key: 'getStyles',
    value: function getStyles() {
      var _props = this.props;
      var direction = _props.direction;
      var size = _props.size;
      var arrowStyle = _props.arrowStyle;
      var navStyle = _props.navStyle;
      var navHoverStyle = _props.navHoverStyle;
      var over = this.state.over;

      var tempStyle = void 0;
      var style = void 0;
      tempStyle = arrowStyle || {};
      style = {
        root: {
          display: 'inline-block',
          textAlign: 'center',
          paddingTop: 5
        },
        arrow: {
          display: 'inline-block',
          borderLeft: '5px solid transparent',
          borderTop: '5px solid transparent',
          borderBottom: '5px solid transparent',
          borderRight: '5px solid transparent'
        }
      };
      if (navStyle && navStyle.color) {
        tempStyle.color = navStyle.color;
      }

      if (over && navHoverStyle && navHoverStyle.color) {
        tempStyle.color = navHoverStyle.color;
      }

      switch (direction) {
        case 'up':
          Object.assign(style.arrow, {
            borderBottomColor: tempStyle.color || 'black'
          });
          break;
        case 'down':
          Object.assign(style.arrow, {
            borderTopColor: tempStyle.color || 'black'
          });
          break;
        case 'left':
          Object.assign(style.arrow, {
            borderLeftColor: tempStyle.color || 'black'
          });
          style.root.paddingLeft = 5;
          break;
        case 'right':
          Object.assign(style.arrow, {
            borderRightColor: tempStyle.color || 'black'
          });
          style.root.paddingRight = 5;
          break;
        default:

          // Nothing happens
          break;
      }

      if (size) {
        Object.assign(style.arrow, {
          borderWidth: size
        });
      }

      return style;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;
      var _this$props = _this.props;
      var style = _this$props.style;
      var arrowStyle = _this$props.arrowStyle;
      var size = _this$props.size;
      var navStyle = _this$props.navStyle;
      var navHoverStyle = _this$props.navHoverStyle;

      var other = _objectWithoutProperties(_this$props, ['style', 'arrowStyle', 'size', 'navStyle', 'navHoverStyle']);

      var over = _this.state.over;

      var styles = _this.getStyles();
      var mergedRootStyles = (0, _stylePropable.mergeStyles)(styles.root, style, navStyle);
      var arrowHeadStyle = (0, _stylePropable.mergeStyles)(styles.arrow, arrowStyle);
      if (over) {
        mergedRootStyles = (0, _stylePropable.mergeStyles)(mergedRootStyles, navHoverStyle);
        arrowHeadStyle = (0, _stylePropable.mergeStyles)(styles.arrow, arrowStyle);
      }

      var renderedChildren = void 0;
      renderedChildren = _react2.default.createElement('div', { style: _stylePropable.prepareStyles.apply(_this, [arrowHeadStyle]) });
      return _react2.default.createElement(
        'div',
        _extends({ style: _stylePropable.prepareStyles.apply(_this, [mergedRootStyles]) }, other, {
          onMouseOver: _this.handleMouseOver,
          onMouseOut: _this.handleMouseOut,
          onClick: _this.handleClick
        }),
        renderedChildren
      );
    }
  }]);

  return NavHead;
}(_react.Component);

NavHead.propTypes = {

  // Style targetted for arrow
  arrowStyle: object,

  // Direction of the arrow
  direction: oneOf(['up', 'down', 'right', 'left', 'none']),

  // Hover style of the container
  navHoverStyle: object,

  // Navigation style
  navStyle: object,

  // Click callback
  onTouchTap: func,

  // Size of the arrow
  size: number,

  // Style prop of the container
  style: object,

  // Value associated with click
  value: any
};
NavHead.defaultProps = {
  direction: 'right'
};
exports.default = NavHead;