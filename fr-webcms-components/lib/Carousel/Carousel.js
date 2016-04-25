'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _stylePropable = require('../helpers/utils/stylePropable');

var _CarouselHead = require('./CarouselHead');

var _CarouselHead2 = _interopRequireDefault(_CarouselHead);

var _CarouselTile = require('./CarouselTile');

var _CarouselTile2 = _interopRequireDefault(_CarouselTile);

var _NavHead = require('./NavHead');

var _NavHead2 = _interopRequireDefault(_NavHead);

var _styles = require('../helpers/styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var bool = _react.PropTypes.bool;
var oneOf = _react.PropTypes.oneOf;
var node = _react.PropTypes.node;
var number = _react.PropTypes.number;
var object = _react.PropTypes.object;
var func = _react.PropTypes.func;

var styles = {
  root: {
    display: 'inline-block',
    overflow: 'hidden',
    position: 'relative',
    height: 'auto',
    width: '100%'
  },
  navHead: {
    position: 'absolute',
    zIndex: 3,
    backgroundColor: _styles.Colors.grey500,
    color: _styles.Colors.white
  },
  navHeadOver: {
    backgroundColor: _styles.Colors.grey900
  },
  arrowStyle: {
    color: _styles.Colors.white
  }
};

var Carousel = function (_Component) {
  _inherits(Carousel, _Component);

  function Carousel() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Carousel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Carousel)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      current: _this.props.current || 0,
      tileCount: 0,
      totalTile: 0,
      currentAnim: null
    }, _this.handleClick = function (item) {
      var current = _this.state.current;

      var newitem = parseInt(item, 10);
      if (!isNaN(newitem) && newitem !== current) {
        _this.initScroll(newitem);
      }
    }, _this.handleNavigator = function (type) {
      var _this$state = _this.state;
      var current = _this$state.current;
      var currentAnim = _this$state.currentAnim;
      var _this$props = _this.props;
      var scroll = _this$props.scroll;
      var autoScroll = _this$props.autoScroll;

      if (currentAnim !== null || autoScroll === false) {
        if (type === 'forward') {
          _this.initScroll(current + scroll);
        } else if (type === 'back') {
          _this.initScroll(current - scroll);
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Carousel, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var current = this.state.current;

      var tileCount = 0;
      _react2.default.Children.map(this.props.children, function (child) {
        if (child.type.name !== 'CarouselHead') {
          tileCount++;
        }
      });
      this.setState({
        current: current,
        totalTile: tileCount
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.current !== nextProps.current) {
        this.setState({
          current: nextProps.current
        });
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (this.props.current !== nextProps.current) {
        clearTimeout(this.state.currentAnim);
      }

      return nextState.current !== this.state.current || this.props.current !== nextProps.current;
    }
  }, {
    key: 'initScroll',
    value: function initScroll(newCurrent) {
      var _state = this.state;
      var current = _state.current;
      var totalTile = _state.totalTile;
      var currentAnim = _state.currentAnim;
      var _props = this.props;
      var scroll = _props.scroll;
      var onSlide = _props.onSlide;

      var activeTile = void 0;
      clearTimeout(currentAnim);
      activeTile = newCurrent !== undefined ? newCurrent : current + scroll;
      activeTile = activeTile < 0 ? totalTile + activeTile : activeTile;
      activeTile = activeTile === totalTile ? 0 : activeTile;
      this.setState({
        current: activeTile,
        currentAnim: null
      });
      if (onSlide) {
        onSlide(activeTile);
      }
    }
  }, {
    key: 'renderChild',
    value: function renderChild() {
      var _this2 = this;

      var _props2 = this.props;
      var children = _props2.children;
      var delay = _props2.delay;
      var style = _props2.style;
      var animation = _props2.animation;
      var tabHead = _props2.tabHead;
      var tabPosition = _props2.tabPosition;
      var autoScroll = _props2.autoScroll;
      var navHead = _props2.navHead;
      var display = _props2.display;
      var scroll = _props2.scroll;

      var other = _objectWithoutProperties(_props2, ['children', 'delay', 'style', 'animation', 'tabHead', 'tabPosition', 'autoScroll', 'navHead', 'display', 'scroll']);

      var _state2 = this.state;
      var current = _state2.current;
      var totalTile = _state2.totalTile;

      var tiles = void 0;
      var head = void 0;
      var offset = 0;
      tiles = _react2.default.Children.map(children, function (child, index) {
        var additionalProps = void 0;
        var currentChild = void 0;
        additionalProps = {
          key: index
        };
        if (child.type.name === 'CarouselHead') {
          Object.assign(additionalProps, {
            current: current,
            animation: animation,
            onTouchTap: _this2.handleClick
          });
          head = _react2.default.cloneElement(child, additionalProps);
          offset++;
        } else {
          var width = 100 / display;
          additionalProps.style = child.props.style || {};
          Object.assign(additionalProps.style, {
            width: width + '%'
          });
          Object.assign(additionalProps, {
            delay: delay,
            animation: animation,
            tilePosition: tabPosition === 'top' ? 'bottom' : 'top',
            index: head ? index - offset : index,
            display: display,
            current: current,
            scroll: scroll,
            totalTile: totalTile
          });
          if (child.type.name === 'CarouselTile') {
            currentChild = _react2.default.cloneElement(child, additionalProps);
          } else {
            currentChild = _react2.default.createElement(
              _CarouselTile2.default,
              additionalProps,
              child
            );
          }

          return currentChild;
        }
      });
      return {
        tiles: tiles,
        head: head
      };
    }
  }, {
    key: 'renderArrowHead',
    value: function renderArrowHead() {
      var _props3 = this.props;
      var navHead = _props3.navHead;
      var navStyle = _props3.navStyle;
      var navHoverStyle = _props3.navHoverStyle;

      if (!navHead) {
        return {};
      }

      var leftArrowHead = void 0;
      var rightArrowHead = void 0;
      var props = void 0;
      var leftArrow = (0, _stylePropable.mergeStyles)(styles.navHead, {
        left: 0,
        top: '40%'
      });
      var rightArrow = (0, _stylePropable.mergeStyles)(styles.navHead, {
        right: 0,
        top: '40%'
      });
      props = {
        size: 10,
        arrowStyle: styles.arrowStyle,
        navHoverStyle: (0, _stylePropable.mergeStyles)(styles.navHeadOver, navHoverStyle),
        value: 'back',
        onTouchTap: this.handleNavigator,
        navStyle: navStyle
      };
      leftArrowHead = _react2.default.createElement(_NavHead2.default, _extends({ style: leftArrow }, props));
      Object.assign(props, {
        value: 'forward',
        direction: 'left'
      });
      rightArrowHead = _react2.default.createElement(_NavHead2.default, _extends({ style: rightArrow }, props));
      return {
        left: leftArrowHead,
        right: rightArrowHead
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props4 = this.props;
      var children = _props4.children;
      var delay = _props4.delay;
      var style = _props4.style;
      var animation = _props4.animation;
      var tabHead = _props4.tabHead;
      var tabPosition = _props4.tabPosition;
      var autoScroll = _props4.autoScroll;
      var navHead = _props4.navHead;

      var other = _objectWithoutProperties(_props4, ['children', 'delay', 'style', 'animation', 'tabHead', 'tabPosition', 'autoScroll', 'navHead']);

      var _state3 = this.state;
      var current = _state3.current;
      var totalTile = _state3.totalTile;
      var currentAnim = _state3.currentAnim;


      var renderedChildren = void 0;
      var carouselHead = void 0;
      var navigation = void 0;
      renderedChildren = this.renderChild();
      var mergedRootStyles = (0, _stylePropable.mergeStyles)(styles.root, style);
      if (tabHead) {
        if (!renderedChildren.head) {
          carouselHead = _react2.default.createElement(_CarouselHead2.default, { headCount: totalTile,
            current: current,
            tabPosition: tabPosition,
            onTouchTap: this.handleClick,
            key: renderedChildren.tiles.length
          });
        } else {
          carouselHead = renderedChildren.head;
        }
      }

      if (tabPosition === 'top') {
        renderedChildren.tiles.unshift(carouselHead);
      } else {
        renderedChildren.tiles.push(carouselHead);
      }

      if (autoScroll && currentAnim === null) {
        (function () {
          var timeoutScroll = setTimeout(function () {
            _this3.initScroll();
          }, delay);
          setTimeout(function () {
            _this3.setState({
              currentAnim: timeoutScroll
            });
          }, 0);
        })();
      }

      navigation = this.renderArrowHead();
      return _react2.default.createElement(
        'div',
        _extends({ style: _stylePropable.prepareStyles.apply(this, [mergedRootStyles]) }, other),
        navigation.left,
        renderedChildren.tiles,
        navigation.right
      );
    }
  }]);

  return Carousel;
}(_react.Component);

Carousel.propTypes = {
  // Animation for the carousel,
  animation: oneOf(['none', 'scroll', 'fade']),

  // Does the animation is auto
  autoScroll: bool,

  // Childrens supplied to Carousel
  children: node,

  // Currently selected tile.
  current: number,

  // Delay for animation
  delay: number,

  // Tiles to be displayed on screen
  display: number,

  // Navigation arrows for carousel
  navHead: bool,

  // MouseOver Style Object
  navHoverStyle: object,

  // Style Object
  navStyle: object,

  // Callback to receive post slide
  onSlide: func,

  // Tiles to scroll on animation
  scroll: _react.PropTypes.number,

  // Style object
  style: object,

  // To show/hide the tab head of Carousel
  tabHead: bool,

  // Tab Head Position
  tabPosition: oneOf(['bottom', 'top'])
};
Carousel.defaultProps = {
  autoScroll: false,
  delay: 4000,
  tabHead: true,
  animation: 'none',
  tabPosition: 'bottom',
  navHead: false,
  display: 1,
  scroll: 1
};
exports.default = Carousel;