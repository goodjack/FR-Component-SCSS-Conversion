'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lightRawTheme = require('../helpers/styles/rawThemes/lightRawTheme');

var _lightRawTheme2 = _interopRequireDefault(_lightRawTheme);

var _themeManager = require('../helpers/styles/themeManager');

var _themeManager2 = _interopRequireDefault(_themeManager);

var _stylePropable = require('../helpers/utils/stylePropable');

var _configurationManager = require('../helpers/configuration/configurationManager');

var _configurationManager2 = _interopRequireDefault(_configurationManager);

var _baseConfig = require('../helpers/configuration/baseConfig');

var _baseConfig2 = _interopRequireDefault(_baseConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var node = _react.PropTypes.node;
var string = _react.PropTypes.string;
var any = _react.PropTypes.any;
var bool = _react.PropTypes.bool;
var func = _react.PropTypes.func;
var object = _react.PropTypes.object;


var getRelevantContextKeys = function getRelevantContextKeys(config, theme) {
  var tiConfig = config && config.textInput || {};
  var tiTheme = theme && theme.textInput || {};

  return _extends({}, tiConfig, tiTheme);
};

var noop = function noop() {
  return null;
};

var styles = {
  input: {
    tapHighlightColor: 'rgba(0,0,0,0)',
    padding: 0,
    position: 'relative',
    width: '100%',
    height: '100%',
    font: 'inherit'
  }
};

var TextInput = function (_Component) {
  _inherits(TextInput, _Component);

  function TextInput() {
    _classCallCheck(this, TextInput);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TextInput).apply(this, arguments));
  }

  _createClass(TextInput, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this = this;
      var _props = this.props;
      var className = _props.className;
      var disabled = _props.disabled;
      var onBlur = _props.onBlur;
      var onChange = _props.onChange;
      var onFocus = _props.onFocus;
      var onEnterKeyDown = _props.onEnterKeyDown;
      var _onKeyDown = _props.onKeyDown;


      _this.inputProps = {
        className: className,
        onBlur: onBlur,
        disabled: disabled,
        ref: function ref(_ref) {
          return _this.input = _ref;
        },
        onChange: !_this.props.hasOwnProperty('valueLink') ? onChange : null,
        onFocus: !disabled ? onFocus : null,
        onKeyDown: function onKeyDown(event) {
          if (event.keyCode === 13) onEnterKeyDown(event);
          _onKeyDown(event);
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {

      var _this = this;
      var _this$props = _this.props;
      var disabled = _this$props.disabled;
      var hintText = _this$props.hintText;
      var style = _this$props.style;
      var type = _this$props.type;

      var other = _objectWithoutProperties(_this$props, ['disabled', 'hintText', 'style', 'type']);

      var inputProps = _this.inputProps;

      var _this$context = _this.context;
      var compContextTheme = _this$context.compTheme;
      var compContextConfig = _this$context.compConfig;


      var compTheme = compContextTheme || _themeManager2.default.getCompTheme(_lightRawTheme2.default);
      var compConfig = compContextConfig || _configurationManager2.default.getCompConfig(_baseConfig2.default);
      var tiContext = getRelevantContextKeys(compConfig, compTheme);

      var disabledTextColor = tiContext.disabledTextColor;
      var textColor = tiContext.textColor;
      var showHint = tiContext.showHint;


      var inputStyle = (0, _stylePropable.mergeStyles)(styles.input, { color: disabled ? disabledTextColor : textColor }, style);

      if (hintText && showHint) {
        inputProps.placeholder = hintText;
      }

      return _react2.default.createElement('input', _extends({}, other, inputProps, {
        style: inputStyle,
        type: type
      }));
    }
  }]);

  return TextInput;
}(_react.Component);

TextInput.propTypes = {
  children: node,
  className: string,
  defaultValue: any,
  disabled: bool,
  hintText: node,
  id: string,
  onBlur: func,
  onChange: func,
  onEnterKeyDown: func,
  onFocus: func,
  onKeyDown: func,
  style: object,
  type: string,
  value: any
};
TextInput.contextTypes = {
  compTheme: object,
  compConfig: object
};
TextInput.defaultProps = {
  type: 'text',
  disabled: false,
  onBlur: noop,
  onChange: noop,
  onFocus: noop,
  onEnterKeyDown: noop,
  onKeyDown: noop
};
exports.default = TextInput;