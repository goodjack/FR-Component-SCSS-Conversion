'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextInput = require('TextInput');

var _TextInput2 = _interopRequireDefault(_TextInput);

var _Button = require('Button');

var _Button2 = _interopRequireDefault(_Button);

var _stylePropable = require('helpers/utils/stylePropable');

var _contextPure = require('helpers/composedComponents/contextPure');

var _contextPure2 = _interopRequireDefault(_contextPure);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var noop = function noop() {
  return null;
};
var styles = {
  input: {
    width: '30%',
    height: 30
  },
  button: {
    width: '30%',
    marginLeft: 5
  }
};

var string = _react.PropTypes.string;
var object = _react.PropTypes.object;
var bool = _react.PropTypes.bool;
var func = _react.PropTypes.func;

var TextInputGroup = function (_Component) {
  _inherits(TextInputGroup, _Component);

  function TextInputGroup() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, TextInputGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(TextInputGroup)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleTouchTap = function (event) {
      var textBoxValue = _this.textInput.input.value;
      _this.props.onTouchTap(event, textBoxValue);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TextInputGroup, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var id = _props.id;
      var className = _props.className;
      var hintText = _props.hintText;
      var inputDisabled = _props.inputDisabled;
      var onBlur = _props.onBlur;
      var onChange = _props.onChange;
      var type = _props.type;
      var inputStyle = _props.inputStyle;
      var buttonDisabled = _props.buttonDisabled;
      var hoverStyle = _props.hoverStyle;
      var label = _props.label;
      var labelStyle = _props.labelStyle;
      var buttonStyle = _props.buttonStyle;


      var getRefs = function getRefs(ref) {
        return _this2.textInput = ref;
      };

      return _react2.default.createElement(
        'div',
        {
          id: id,
          className: className
        },
        _react2.default.createElement(_TextInput2.default, {
          ref: getRefs,
          hintText: hintText,
          disabled: inputDisabled,
          onBlur: onBlur,
          onChange: onChange,
          type: type,
          style: _stylePropable.mergeStyles.apply(this, [styles.input, inputStyle])
        }),
        _react2.default.createElement(_Button2.default, {
          disabled: buttonDisabled,
          hoverStyle: hoverStyle,
          label: label,
          labelStyle: labelStyle,
          onTouchTap: this.handleTouchTap,
          style: _stylePropable.mergeStyles.apply(this, [styles.button, buttonStyle])
        })
      );
    }
  }]);

  return TextInputGroup;
}(_react.Component);

TextInputGroup.propTypes = {
  buttonDisabled: bool,
  buttonStyle: object,
  className: string,
  hintText: string,
  hoverStyle: object,
  id: string,
  inputDisabled: bool,
  inputStyle: object,
  label: string,
  labelStyle: object,
  onBlur: func,
  onChange: func,
  onTouchTap: func,
  /**
   * Override the inline-styles of the root element.
   */
  style: object,
  type: string
};
TextInputGroup.defaultProps = {
  onTouchTap: noop
};
exports.default = (0, _contextPure2.default)(TextInputGroup);