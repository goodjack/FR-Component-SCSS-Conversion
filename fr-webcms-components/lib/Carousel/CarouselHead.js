'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _stylePropable = require('../helpers/utils/stylePropable');

var _styles = require('../helpers/styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var node = _react.PropTypes.node;
var object = _react.PropTypes.object;
var number = _react.PropTypes.number;
var func = _react.PropTypes.func;


var styles = {
  root: {
    display: 'block',
    textAlign: 'center'
  },
  wrapper: {
    display: 'inline-block',
    minWidth: 8,
    minHeight: 8,
    maxHeight: 75,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    cursor: 'pointer'
  },
  emptyChild: {
    marginLeft: 2,
    marginRight: 2,
    borderRadius: 5,
    backgroundColor: _styles.Colors.grey500
  },
  highlight: {
    basic: {
      border: '1px outset'
    },
    emptyChild: {
      backgroundColor: _styles.Colors.grey800
    }
  }
};

var CarouselHead = function (_Component) {
  _inherits(CarouselHead, _Component);

  function CarouselHead() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, CarouselHead);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(CarouselHead)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      highlight: 0
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CarouselHead, [{
    key: 'componentWillReceiveProps',


    // to update theme inside state whenever a new theme is passed down
    // from the parent / owner using context
    value: function componentWillReceiveProps(nextprops) {
      var current = this.props.current;

      if (nextprops.current !== undefined && nextprops.current !== current) {
        this.setState({ highlight: nextprops.current });
      }
    }
  }, {
    key: 'handleClick',
    value: function handleClick(item) {
      try {
        var newitem = parseInt(item, 10);
        this.props.onTouchTap(newitem);
      } catch (err) {
        // Any error handling
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var children = _props.children;
      var style = _props.style;
      var headCount = _props.headCount;
      var current = _props.current;
      var highlightStyle = _props.highlightStyle;
      var contentStyle = _props.contentStyle;

      var other = _objectWithoutProperties(_props, ['children', 'style', 'headCount', 'current', 'highlightStyle', 'contentStyle']);

      var highlight = this.state.highlight;

      var wrapperStyles = (0, _stylePropable.mergeStyles)(styles.wrapper, style);

      var itemStyle = void 0;
      var mergedRootStyles = (0, _stylePropable.mergeStyles)(styles.root, style);
      var availHead = _react2.default.Children.count(children);
      var renderedChildren = void 0;
      if (availHead) {
        var headWidth = 100 / availHead - 0.3;
        wrapperStyles = (0, _stylePropable.mergeStyles)(wrapperStyles, {
          width: headWidth + '%'
        });
        renderedChildren = _react2.default.Children.map(children, function (child, index) {
          var handleChildClick = _this2.handleClick.bind(_this2, index);
          itemStyle = wrapperStyles;
          var wrappedChild = _react2.default.cloneElement(child, {
            style: (0, _stylePropable.mergeStyles)(child.props.style, {
              width: '100%',
              height: '100%'
            })
          });
          if (highlight === index) {
            itemStyle = (0, _stylePropable.mergeStyles)(itemStyle, styles.highlight.basic, highlightStyle);
            wrappedChild = _react2.default.cloneElement(child, {
              style: (0, _stylePropable.mergeStyles)(child.props.style, {
                width: '100%',
                height: '100%'
              }, contentStyle)
            });
          }

          return _react2.default.createElement(
            'div',
            { key: index,
              style: itemStyle,
              onClick: handleChildClick
            },
            wrappedChild
          );
        });
      } else if (headCount && headCount > 0) {
        renderedChildren = [];
        for (var count = 0; count < headCount; count++) {
          itemStyle = (0, _stylePropable.mergeStyles)(wrapperStyles, styles.emptyChild);
          var handleEmptyClick = this.handleClick.bind(this, count);
          if (highlight === count) {
            itemStyle = (0, _stylePropable.mergeStyles)(itemStyle, styles.highlight.emptyChild, highlightStyle);
          }

          renderedChildren.push(_react2.default.createElement('div', {
            style: itemStyle,
            key: count,
            onClick: handleEmptyClick
          }));
        }
      }

      return _react2.default.createElement(
        'div',
        _extends({ style: _stylePropable.prepareStyles.apply(this, [mergedRootStyles]) }, other),
        renderedChildren
      );
    }
  }]);

  return CarouselHead;
}(_react.Component);

CarouselHead.propTypes = {
  // Childen nodes
  children: node,

  // Styfuncrent selected head
  current: number,

  // Style property to be applied to the carousel head content
  contentStyle: object,

  // Total heads available
  headCount: number,

  // Style to be applied to wrapper of the selected tab
  highlightStyle: object,

  // Event to be triggered on selecting the tab head
  onTouchTap: func,

  // Style property to be applied to the carousel head
  style: object
};
exports.default = CarouselHead;