'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _stylePropable = require('../../helpers/utils/stylePropable');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var bool = _react.PropTypes.bool;
var func = _react.PropTypes.func;
var object = _react.PropTypes.object;
var string = _react.PropTypes.string;

var EnhancedSwitch = function (_Component) {
  _inherits(EnhancedSwitch, _Component);

  function EnhancedSwitch() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, EnhancedSwitch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(EnhancedSwitch)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      checked: false
    }, _this.componentWillMount = function () {
      _this.setState({ checked: _this.props.checked });
    }, _this.componentWillReceiveProps = function (nextProps) {
      if (nextProps.hasOwnProperty('checked') && nextProps.checked !== _this.state.checked) {
        _this.setState({ checked: nextProps.checked });
      }
    }, _this.handleChange = function (event) {
      var _this$props = _this.props;
      var inputType = _this$props.inputType;
      var checked = _this$props.checked;
      var onSwitch = _this$props.onSwitch;

      var isInputChecked = _reactDom2.default.findDOMNode(_this.refs.enhancedSwitch).checked;
      onSwitch(event, isInputChecked);
      if (checked && inputType === 'checkbox') {
        _this.setState({ checked: !_this.state.checked });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(EnhancedSwitch, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var name = _props.name;
      var value = _props.value;
      var checked = _props.checked;
      var inputType = _props.inputType;
      var style = _props.style;
      var disabled = _props.disabled;

      var other = _objectWithoutProperties(_props, ['name', 'value', 'checked', 'inputType', 'style', 'disabled']);

      var inputStyle = {
        cursor: disabled ? 'default' : 'pointer',
        margin: 0
      };
      var inputProps = {
        name: name,
        value: value,
        disabled: disabled,
        ref: 'enhancedSwitch',
        type: inputType,
        style: _stylePropable.mergeStyles.apply(this, [inputStyle, style]),
        onChange: this.handleChange,
        checked: this.state.checked
      };

      return _react2.default.createElement('input', _extends({}, other, inputProps));
    }
  }]);

  return EnhancedSwitch;
}(_react.Component);

EnhancedSwitch.propTypes = {
  checked: bool,
  disabled: bool,
  inputType: string.isRequired,
  name: string,
  onSwitch: func,
  required: bool,
  style: object,
  value: string
};
EnhancedSwitch.defaultProps = {
  onSwitch: function onSwitch() {
    return null;
  }
};
exports.default = EnhancedSwitch;