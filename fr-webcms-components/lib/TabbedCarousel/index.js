'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var oneOf = _react.PropTypes.oneOf;
var node = _react.PropTypes.node;
var object = _react.PropTypes.object;

var TabbedCarousel = function (_Component) {
  _inherits(TabbedCarousel, _Component);

  function TabbedCarousel() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, TabbedCarousel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(TabbedCarousel)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      currentTab: 0
    }, _this.onTabChange = function (newIndex) {
      if (newIndex >= 0) {
        _this.setState({
          currentTab: newIndex
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TabbedCarousel, [{
    key: 'renderChild',
    value: function renderChild() {
      var _this2 = this;

      var _props = this.props;
      var children = _props.children;
      var position = _props.position;
      var currentTab = this.state.currentTab;

      var carouselOverrides = {
        display: 1,
        tabHead: false,
        navHead: false,
        scroll: 1,
        current: currentTab,
        style: {
          display: 'block'
        },
        onSlide: this.onTabChange
      };
      var carousel = void 0;
      var tabset = void 0;
      var content = void 0;
      content = [];
      _react2.default.Children.map(children, function (child, index) {
        var childName = child.type.name;
        if (childName === 'Carousel' && !carousel) {
          carouselOverrides.key = index;
          carousel = _react2.default.cloneElement(child, carouselOverrides);
        } else if (childName === 'Tabs' && !tabset) {
          tabset = _react2.default.cloneElement(child, {
            onTabChange: _this2.onTabChange,
            defaultTabIndex: currentTab,
            key: index
          });
        } else {
          // Seems like there is more than one tabset and carousel.
          // Just Ignore them.
          return;
        }
      });
      if (position === 'top') {
        content.push(tabset);
        content.push(carousel);
      } else {
        content.push(carousel);
        content.push(tabset);
      }

      return content;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.renderChild()
      );
    }
  }]);

  return TabbedCarousel;
}(_react.Component);

TabbedCarousel.propTypes = {

  // Childrens supplied to Carousel
  children: node,

  // position of the tab to be placed
  position: oneOf(['bottom', 'top']),

  // Style object
  style: object
};
TabbedCarousel.defaultProps = {
  position: 'top'
};
exports.default = TabbedCarousel;