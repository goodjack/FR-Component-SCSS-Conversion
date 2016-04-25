'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _stylePropable = require('../helpers/utils/stylePropable');

var _contextPure = require('../helpers/composedComponents/contextPure');

var _contextPure2 = _interopRequireDefault(_contextPure);

var _typography = require('../helpers/styles/typography');

var _typography2 = _interopRequireDefault(_typography);

var _lightRawTheme = require('../helpers/styles/rawThemes/lightRawTheme');

var _lightRawTheme2 = _interopRequireDefault(_lightRawTheme);

var _themeManager = require('../helpers/styles/themeManager');

var _themeManager2 = _interopRequireDefault(_themeManager);

var _Text = require('../Text');

var _Text2 = _interopRequireDefault(_Text);

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
var node = _react.PropTypes.node;
var bool = _react.PropTypes.bool;


var prepareStyle = function prepareStyle(_ref) {
  var context = _ref.context;
  var props = _ref.props;
  var state = _ref.state;


  var CompTheme = context.CompTheme || _themeManager2.default.getCompTheme(_lightRawTheme2.default);
  var themeButton = CompTheme && CompTheme.button || {};
  var defaultTextColor = props.disabled ? themeButton.disabledTextColor : themeButton.textColor;
  var styles = {
    button: {
      padding: themeButton.padding,
      color: defaultTextColor,
      backgroundColor: state.hovered && !props.disabled ? themeButton.hoverColor : themeButton.backgroundColor,
      outline: 'none',
      border: 'none',
      textShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 1px',
      cursor: state.hovered && !props.disabled ? 'pointer' : 'default',
      fontWeight: _typography2.default.fontWeightMedium,
      width: '100%',
      overflow: 'hidden',
      opacity: props.disabled ? 0.5 : 'null'
    },
    labelStyle: {
      fontSize: 15
    },
    anchor: {
      display: 'block',
      lineHeight: 0
    }
  };

  var buttonStyle = _stylePropable.mergeStyles.apply(undefined, [styles.button, props.style]);
  var anchorStyle = _stylePropable.mergeStyles.apply(undefined, [styles.anchor, props.linkStyle]);
  if (props.hoverStyle && state.hovered) {
    buttonStyle = _stylePropable.mergeStyles.apply(undefined, [styles.button, props.style, props.hoverStyle]);
  }

  var styleLabel = _stylePropable.mergeStyles.apply(undefined, [styles.labelStyle, props.labelStyle]);
  return { buttonStyle: buttonStyle, styleLabel: styleLabel, anchorStyle: anchorStyle };
};

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Button);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Button)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      hovered: false
    }, _this.handleMouseEnter = function (event) {
      _this.setState({ hovered: true });
      _this.props.onMouseEnter(event);
    }, _this.handleMouseLeave = function (event) {
      _this.setState({ hovered: false });
      _this.props.onMouseLeave(event);
    }, _this.handleTouchTap = function (event) {
      _this.setState({ clicked: true });
      _this.props.onTouchTap(event);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var style = _props.style;
      var label = _props.label;
      var labelStyle = _props.labelStyle;
      var hoverStyle = _props.hoverStyle;
      var className = _props.className;
      var id = _props.id;
      var disabled = _props.disabled;
      var children = _props.children;
      var link = _props.link;
      var target = _props.target;

      var other = _objectWithoutProperties(_props, ['style', 'label', 'labelStyle', 'hoverStyle', 'className', 'id', 'disabled', 'children', 'link', 'target']);

      var _prepareStyle = prepareStyle(this);

      var buttonStyle = _prepareStyle.buttonStyle;
      var styleLabel = _prepareStyle.styleLabel;
      var anchorStyle = _prepareStyle.anchorStyle;


      var enhancedButtonChildren = children ? children : _react2.default.createElement(
        _Text2.default,
        { style: styleLabel },
        label
      );

      var buttonProps = {
        className: className,
        id: id,
        disabled: disabled,
        style: buttonStyle,
        onClick: this.handleTouchTap,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave
      };
      var anchorProps = {
        style: anchorStyle,
        href: link,
        target: target
      };
      var renderNode = _react2.default.createElement(
        'button',
        buttonProps,
        enhancedButtonChildren
      );
      var linkNode = link ? _react2.default.createElement(
        'a',
        anchorProps,
        renderNode
      ) : renderNode;
      return linkNode;
    }
  }]);

  return Button;
}(_react.Component);

Button.propTypes = {
  children: node,
  className: string,
  hoverStyle: object,
  id: string,
  label: string,
  labelStyle: object,
  link: string,
  linkStyle: object,
  onMouseEnter: func,
  onMouseLeave: func,
  onTouchTap: func,
  style: object,
  target: string,
  disabled: bool
};
Button.defaultProps = {
  disabled: false,
  onMouseEnter: noop,
  onMouseLeave: noop,
  onTouchTap: noop
};
exports.default = (0, _contextPure2.default)(Button);