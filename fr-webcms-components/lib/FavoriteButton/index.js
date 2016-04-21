'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _stylePropable = require('../helpers/utils/stylePropable');

var _lightRawTheme = require('../helpers/styles/rawThemes/lightRawTheme');

var _lightRawTheme2 = _interopRequireDefault(_lightRawTheme);

var _themeManager = require('../helpers/styles/themeManager');

var _themeManager2 = _interopRequireDefault(_themeManager);

var _contextPure = require('../helpers/composedComponents/contextPure');

var _contextPure2 = _interopRequireDefault(_contextPure);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _Icon = require('../core/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var noop = function noop() {
  return null;
};
var string = _react.PropTypes.string;
var object = _react.PropTypes.object;
var func = _react.PropTypes.func;
var bool = _react.PropTypes.bool;


var prepareStyle = function prepareStyle(_ref) {
  var context = _ref.context;
  var props = _ref.props;


  var CompTheme = context.CompTheme || _themeManager2.default.getCompTheme(_lightRawTheme2.default);
  var compSpacing = CompTheme && CompTheme.rawTheme.spacing || {};
  var compPalette = CompTheme && CompTheme.rawTheme.palette || {};
  var styles = {
    root: {
      position: 'relative',
      boxSizing: 'border-box',
      padding: compSpacing.iconSize / 2,
      width: compSpacing.iconSize * 2,
      height: compSpacing.iconSize * 2,
      fontSize: compSpacing.iconSize,
      backgroundColor: 'transparent',
      color: compPalette.textColor,
      fill: compPalette.textColor
    },
    colorStyle: {
      fill: 'red'
    }
  };

  var iconStyle = _stylePropable.mergeStyles.apply(undefined, [styles.root, props.style]);
  var colorStyle = styles.colorStyle;
  return { iconStyle: iconStyle, colorStyle: colorStyle };
};

var FavoriteButton = function (_Component) {
  _inherits(FavoriteButton, _Component);

  function FavoriteButton() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, FavoriteButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(FavoriteButton)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      clicked: false
    }, _this.handleMouseEnter = function (event) {
      _this.setState({ hovered: true });
      _this.props.onMouseEnter(event);
    }, _this.handleMouseLeave = function (event) {
      _this.setState({ hovered: false });
      _this.props.onMouseLeave(event);
    }, _this.handleTouchTap = function (event) {
      if (_this.state.clicked === false) {
        _this.setState({ clicked: true });
      } else {
        _this.setState({ clicked: false });
      }

      _this.props.onTouchTap(event);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FavoriteButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var style = _props.style;
      var disabled = _props.disabled;
      var hoverStyle = _props.hoverStyle;
      var iconClassName = _props.iconClassName;

      var other = _objectWithoutProperties(_props, ['style', 'disabled', 'hoverStyle', 'iconClassName']);

      var _prepareStyle = prepareStyle(this);

      var iconStyle = _prepareStyle.iconStyle;
      var colorStyle = _prepareStyle.colorStyle;


      var iconButtonProps = {
        iconClassName: iconClassName,
        disabled: disabled,
        hoverStyle: hoverStyle,
        style: iconStyle,
        onMouseLeave: this.handleMouseLeave,
        onTouchTap: this.handleTouchTap,
        onMouseEnter: this.handleMouseEnter
      };
      if (this.state.clicked === true) {
        return _react2.default.createElement(
          _Button2.default,
          iconButtonProps,
          _react2.default.createElement(_Icon2.default, { name: 'Favorite', style: colorStyle })
        );
      } else if (this.state.clicked === false) {
        return _react2.default.createElement(
          _Button2.default,
          iconButtonProps,
          _react2.default.createElement(_Icon2.default, { name: 'AddFavoriteBorder' })
        );
      }
    }
  }]);

  return FavoriteButton;
}(_react.Component);

FavoriteButton.propTypes = {
  children: object,
  disabled: bool,
  hoverStyle: object,
  iconClassName: string,
  onMouseEnter: func,
  onMouseLeave: func,
  onTouchTap: func,
  style: object
};
FavoriteButton.defaultProps = {
  disabled: false,
  onMouseEnter: noop,
  onMouseLeave: noop,
  onTouchTap: noop
};
exports.default = (0, _contextPure2.default)(FavoriteButton);