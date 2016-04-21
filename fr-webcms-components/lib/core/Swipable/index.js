'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _stylePropable = require('../../helpers/utils/stylePropable');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var node = _react.PropTypes.node;
var object = _react.PropTypes.object;
var number = _react.PropTypes.number;
var func = _react.PropTypes.func;
var bool = _react.PropTypes.bool;

var totalWidth = void 0;

var prepareStyle = function prepareStyle(me) {
  var _me$state = me.state;
  var translation = _me$state.translation;
  var animate = _me$state.animate;
  var _me$props = me.props;
  var display = _me$props.display;
  var children = _me$props.children;
  var pan = _me$props.pan;
  var speed = _me$props.speed;

  var styles = {
    swipeMain: {
      transitionDuration: speed + 'ms',
      transitionTimingFunction: 'ease-in-out',
      height: '100%',
      display: 'flex',
      flexFlow: 'row nowrap',
      overflowX: !pan ? 'hidden' : 'visible',
      transform: 'translateX(-' + translation + '%)',
      WebkitTransform: 'translateX(-' + translation + '%)',
      transitionProperty: animate ? 'all' : 'none',
      WebkitTransitionProperty: animate ? 'all' : 'none',
      width: !pan ? children.length / display * 100 + '%' : '' + totalWidth,
      whiteSpace: !pan ? 'normal' : 'nowrap'
    },
    swipeContainer: {
      height: '100%',
      display: 'flex',
      flexFlow: 'column nowrap',
      overflow: 'hidden'
    },
    swipeItem: {
      width: !pan ? 100 / display + '%' : 'auto',
      flexBasis: pan ? 'auto' : 'initial'
    }
  };

  return styles;
};

var selectIndex = function selectIndex(me, selectedIndex) {
  var defaultTranslation = void 0;
  var children = me.rootElement.childNodes[0];
  var childNodes = children.childNodes;
  var defaultSelectWidth = 0;
  totalWidth = 0;
  for (var count = 0; count < childNodes.length; count++) {
    if (me.props.selectedIndex === count) {
      defaultSelectWidth = totalWidth;
    }

    totalWidth += childNodes[count].offsetWidth;
  }

  var childWidth = children.offsetWidth;
  totalWidth = totalWidth < childWidth ? childWidth : totalWidth + 100 / totalWidth * 9;
  var maxTranslation = (totalWidth - childWidth) / totalWidth * 100;

  defaultTranslation = defaultSelectWidth / totalWidth * 100;
  defaultTranslation = defaultTranslation > maxTranslation ? maxTranslation : defaultTranslation;
  if (Number.isInteger(selectedIndex)) {
    var translation = !me.props.pan ? selectedIndex * me.state.pageWidthPerCent : defaultTranslation;
    me.setState({
      selectedIndex: selectedIndex,
      translation: translation,
      clientX: null,
      animate: true
    });
  }
};

var transformComponent = function transformComponent(me, event) {
  var _me$state2 = me.state;
  var clientX = _me$state2.clientX;
  var pageWidthPerCent = _me$state2.pageWidthPerCent;
  var translation = _me$state2.translation;
  var selectedIndex = _me$state2.selectedIndex;


  var newClientX = event.changedTouches[0].clientX;
  var dx = newClientX - clientX;
  var thisElem = me.rootElement;
  var elemWidth = thisElem.childNodes[0].offsetWidth || 1;
  var containerWidth = thisElem.offsetWidth;
  var dxPerCent = dx / elemWidth * 100;
  var newTranslation = translation - dxPerCent;
  var maxTranslation = (elemWidth - containerWidth) / elemWidth * 100;
  var previousTranslation = selectedIndex * pageWidthPerCent;
  var tippingPoint = pageWidthPerCent * 0.3;
  if (!clientX) {
    me.setState({
      clientX: newClientX
    });
  } else {
    if (newTranslation < 0) {
      newTranslation = 0;
    } else if (newTranslation > maxTranslation) {
      newTranslation = maxTranslation;
    }

    var newSelectedIndex = selectedIndex;
    if (dx > 0 && translation < previousTranslation - tippingPoint) {
      newSelectedIndex -= 1;
    } else if (dx < 0 && translation > previousTranslation + tippingPoint) {
      newSelectedIndex += 1;
    }

    me.setState({
      selectedIndex: newSelectedIndex,
      translation: newTranslation,
      clientX: newClientX,
      animate: false
    });
  }
};

var Swipable = function (_Component) {
  _inherits(Swipable, _Component);

  function Swipable() {
    var _Object$getPrototypeO;

    var _temp, _this2, _ret;

    _classCallCheck(this, Swipable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Swipable)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this2), _this2.componentWillMount = function () {
      var children = _this2.props.children;
      _this2.children = Array.isArray(children) ? children : [children];
      var selectedIndex = _this2.props.selectedIndex || 0;
      var pageWidthPerCent = 100 / _this2.children.length;
      var translation = selectedIndex * pageWidthPerCent;
      _this2.state = {
        selectedIndex: selectedIndex,
        pageWidthPerCent: pageWidthPerCent,
        translation: translation,
        clientX: null,
        animate: true
      };
    }, _this2.componentDidMount = function () {
      _this2.rootElement = _reactDom2.default.findDOMNode(_this2);
      selectIndex(_this2);
    }, _this2.componentWillReceiveProps = function (nextProps) {
      selectIndex(_this2, parseInt(nextProps.selectedIndex, 10));
    }, _this2.transitionTo = function (selectedIndex) {
      if (_this2.props.onIndexChange) {
        _this2.props.onIndexChange(selectedIndex);
      }
    }, _this2.handleTouchMove = function (event) {
      transformComponent(_this2, event);
    }, _this2.handleTouchEnd = function () {
      var _this = _this2;
      var selectedIndex = _this.state.selectedIndex;
      var translation = !_this.props.pan ? selectedIndex * _this.state.pageWidthPerCent : _this.state.translation;
      _this.setState({
        selectedIndex: selectedIndex,
        translation: translation,
        clientX: null,
        animate: true
      }, _this.transitionTo(selectedIndex));
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(Swipable, [{
    key: 'render',
    value: function render() {
      var _this = this;

      var _prepareStyle = prepareStyle(_this);

      var swipeMain = _prepareStyle.swipeMain;
      var swipeItem = _prepareStyle.swipeItem;
      var swipeContainer = _prepareStyle.swipeContainer;


      var children = _this.children;
      children = Array.isArray(children) ? children : [children];
      var rootStyle = (0, _stylePropable.mergeStyles)(swipeContainer, _this.props.style);

      return _react2.default.createElement(
        'div',
        { style: rootStyle },
        _react2.default.createElement(
          'div',
          {
            style: swipeMain,
            onTouchMove: _this.handleTouchMove,
            onTouchEnd: _this.handleTouchEnd
          },
          children.map(function (child, index) {
            return _react2.default.createElement(
              'div',
              {
                style: swipeItem,
                key: index
              },
              child
            );
          })
        )
      );
    }
  }]);

  return Swipable;
}(_react.Component);

Swipable.propTypes = {
  children: node,
  selectedIndex: number,
  style: object,
  onIndexChange: func,
  display: number,
  pan: bool,
  speed: number
};
Swipable.defaultProps = {
  display: 1,
  pan: false,
  speed: 200
};
exports.default = Swipable;