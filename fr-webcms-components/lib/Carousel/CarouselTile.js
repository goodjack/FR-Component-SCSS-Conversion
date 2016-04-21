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
var number = _react.PropTypes.number;
var object = _react.PropTypes.object;
var node = _react.PropTypes.node;

var CarouselTile = function (_Component) {
  _inherits(CarouselTile, _Component);

  function CarouselTile() {
    _classCallCheck(this, CarouselTile);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(CarouselTile).apply(this, arguments));
  }

  _createClass(CarouselTile, [{
    key: 'getStyles',
    value: function getStyles() {
      var _props = this.props;
      var animation = _props.animation;
      var tilePosition = _props.tilePosition;
      var index = _props.index;
      var current = _props.current;
      var delay = this.props.delay;

      var style = void 0;
      delay = delay / 1000;
      while (delay > 2) {
        delay = delay / 2;
      }

      style = {
        display: 'inline-block',
        width: '100%',
        overflow: 'hidden',
        position: 'absolute',
        verticalAlign: 'middle',
        opacity: 0,
        left: 0
      };
      if (index === current) {
        Object.assign(style, {
          zIndex: 2,
          opacity: 1,
          position: 'static',
          marginLeft: 0
        });
      }

      switch (animation) {
        case 'scroll':
          style.transition = 'left ' + delay + 's, opacity ' + delay + 's, margin-left ' + delay + 's';
          this.getCalculatedStyle(style);
          break;
        case 'fade':
          style.transition = 'opacity ' + delay + 's';
          break;
        default:
      }
      style[tilePosition] = 0;
      return style;
    }
  }, {
    key: 'getCalculatedStyle',
    value: function getCalculatedStyle(style) {
      var _props2 = this.props;
      var display = _props2.display;
      var index = _props2.index;
      var current = _props2.current;
      var scroll = _props2.scroll;
      var totalTile = _props2.totalTile;

      var left = 100 / display;
      var max = current + display + scroll;
      var lowMax = void 0;
      var highMin = void 0;
      var tileLeft = void 0;
      var min = current - scroll;
      if (max > totalTile - 1) {
        lowMax = max - totalTile;
      }

      if (min < 0) {
        highMin = totalTile + min;
      }

      if (index > current && index < max) {
        tileLeft = (index - current) * left;
        Object.assign(style, {
          zIndex: 1,
          marginLeft: tileLeft + '%'
        });
        if (index < current + display) {
          Object.assign(style, {
            opacity: 1
          });
        }
      } else if (max > totalTile - 1 && index < lowMax) {
        tileLeft = (totalTile + index - current) * left;
        Object.assign(style, {
          zIndex: 1,
          marginLeft: tileLeft + '%'
        });
        if (index < lowMax - scroll) {
          Object.assign(style, {
            opacity: 1
          });
        }
      } else if (index < current && index >= min) {
        tileLeft = (index - current) * left;
        Object.assign(style, {
          zIndex: 1,
          marginLeft: tileLeft + '%'
        });
      } else if (index >= highMin) {
        tileLeft = (index - totalTile) * left;
        Object.assign(style, {
          zIndex: 1,
          marginLeft: tileLeft + '%'
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props;
      var children = _props3.children;
      var style = _props3.style;
      var current = _props3.current;
      var index = _props3.index;

      var other = _objectWithoutProperties(_props3, ['children', 'style', 'current', 'index']);

      var styles = this.getStyles();
      var mergedRootStyles = (0, _stylePropable.mergeStyles)(styles, style);
      var updatedChild = _react2.default.Children.map(this.props.children, function (child) {
        var childStyle = void 0;
        childStyle = {};
        Object.assign(childStyle, child.props.style, {
          verticalAlign: 'middle'
        });
        return _react2.default.cloneElement(child, {
          style: childStyle
        });
      });
      return _react2.default.createElement(
        'div',
        _extends({ style: _stylePropable.prepareStyles.apply(this, [mergedRootStyles]) }, other),
        updatedChild
      );
    }
  }]);

  return CarouselTile;
}(_react.Component);

CarouselTile.propTypes = {

  // Animation for the carousel
  animation: oneOf(['none', 'scroll', 'fade']),

  // Children of the tile
  children: node,

  // Current tab to be open
  current: number,

  // delay in case of animation
  delay: number,

  // items to be displayed per screen
  display: number,

  // index of the tile
  index: number,

  // Items to scroll
  scroll: number,

  // style
  style: object,

  // Position of the tile
  tilePosition: oneOf(['top', 'bottom']),

  // total number of tiles
  totalTile: number
};
CarouselTile.defaultProps = {
  current: 0
};
exports.default = CarouselTile;