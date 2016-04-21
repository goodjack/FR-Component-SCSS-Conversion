'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _contextPure = require('../../helpers/composedComponents/contextPure');

var _contextPure2 = _interopRequireDefault(_contextPure);

var _lightRawTheme = require('../../helpers/styles/rawThemes/lightRawTheme');

var _lightRawTheme2 = _interopRequireDefault(_lightRawTheme);

var _stylePropable = require('../../helpers/utils/stylePropable');

var _themeManager = require('../../helpers/styles/themeManager');

var _themeManager2 = _interopRequireDefault(_themeManager);

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

var SwipableNavItem = function (_Component) {
  _inherits(SwipableNavItem, _Component);

  function SwipableNavItem() {
    var _Object$getPrototypeO;

    var _temp, _this2, _ret;

    _classCallCheck(this, SwipableNavItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(SwipableNavItem)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this2), _this2.componentWillMount = function () {
      var _this = _this2;
      var compTheme = _this.context.compTheme || _themeManager2.default.getCompTheme(_lightRawTheme2.default) || {};
      _this.theme = compTheme.swipeableNavItem || {};
    }, _this2.handleMouseDown = function (event) {
      var _this2$props = _this2.props;
      var onPress = _this2$props.onPress;
      var index = _this2$props.index;

      onPress(event, index);
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(SwipableNavItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var style = _props.style;
      var activeStyle = _props.activeStyle;
      var link = _props.link;
      var target = _props.target;
      var text = _props.text;
      var active = _props.active;

      var itemMargin = this.theme.margin;
      var activeRootStyle = (0, _stylePropable.mergeStyles)({ color: this.theme.activeColor, margin: itemMargin }, activeStyle);
      var rooStyle = (0, _stylePropable.mergeStyles)({ color: this.theme.txtColor, margin: itemMargin }, style);
      rooStyle = active ? activeRootStyle : rooStyle;
      return _react2.default.createElement(
        'a',
        {
          onMouseDown: this.handleMouseDown,
          href: link,
          target: target,
          style: rooStyle
        },
        text
      );
    }
  }]);

  return SwipableNavItem;
}(_react.Component);

SwipableNavItem.propTypes = {
  active: bool,
  style: object,
  activeStyle: object,
  index: number,
  link: string,
  onPress: func,
  target: oneOf(['_blank', '_self', '_parent', '_top']),
  text: string
};
SwipableNavItem.defaultProps = {
  onPress: function onPress() {
    return null;
  },
  target: '_self',
  active: 'false'
};
exports.default = (0, _contextPure2.default)(SwipableNavItem);