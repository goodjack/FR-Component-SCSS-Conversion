'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RollOverImage = require('../../RollOverImage');

var _RollOverImage2 = _interopRequireDefault(_RollOverImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var bool = _react.PropTypes.bool;
var oneOf = _react.PropTypes.oneOf;
var string = _react.PropTypes.string;
var object = _react.PropTypes.object;
var number = _react.PropTypes.number;
var func = _react.PropTypes.func;


var createChild = function createChild(me) {
  var _me$props = me.props;
  var defaultImage = _me$props.defaultImage;
  var hoverImage = _me$props.hoverImage;
  var defaultStyle = _me$props.defaultStyle;
  var hoverStyle = _me$props.hoverStyle;
  var imageStyle = _me$props.imageStyle;
  var link = _me$props.link;
  var target = _me$props.target;
  var text = _me$props.text;
  var active = _me$props.active;

  var tabChild = void 0;
  var activeImage = active ? hoverImage : defaultImage;
  var rootStyle = me.state.hovered ? hoverStyle : defaultStyle;
  if (defaultImage) {
    tabChild = _react2.default.createElement(_RollOverImage2.default, {
      imgSrc: activeImage,
      rollImgSrc: hoverImage,
      link: link,
      style: rootStyle,
      target: target,
      imageStyle: imageStyle
    });
  } else {
    tabChild = _react2.default.createElement(
      'a',
      {
        href: link,
        target: target,
        style: rootStyle
      },
      text
    );
  }

  return tabChild;
};

var Tab = function (_Component) {
  _inherits(Tab, _Component);

  function Tab() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Tab);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Tab)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      hovered: false
    }, _this.handleMouseDown = function (event) {
      var _this$props = _this.props;
      var updateTabSet = _this$props.updateTabSet;
      var onPress = _this$props.onPress;
      var index = _this$props.index;

      updateTabSet(index);
      onPress(event, index);
    }, _this.handleMouseEnter = function () {
      _this.setState({ hovered: true });
    }, _this.handleMouseLeave = function () {
      _this.setState({ hovered: false });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tab, [{
    key: 'render',
    value: function render() {
      var tabChild = createChild(this);
      return _react2.default.createElement(
        'div',
        {
          onMouseDown: this.handleMouseDown,
          onMouseLeave: this.handleMouseLeave,
          onMouseEnter: this.handleMouseEnter
        },
        tabChild
      );
    }
  }]);

  return Tab;
}(_react.Component);

Tab.propTypes = {
  active: bool,
  defaultImage: string,
  defaultStyle: object,
  hoverImage: string,
  hoverStyle: object,
  imageStyle: object,
  index: number,
  link: string,
  onPress: func,
  target: oneOf(['_blank', '_self', '_parent', '_top']),
  text: string,
  updateTabSet: func
};
Tab.defaultProps = {
  onPress: function onPress() {
    return null;
  },
  target: '_self'
};
exports.default = Tab;