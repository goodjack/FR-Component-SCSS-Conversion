'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _contextPure = require('../../helpers/composedComponents/contextPure');

var _contextPure2 = _interopRequireDefault(_contextPure);

var _RadioButton = require('./RadioButton');

var _RadioButton2 = _interopRequireDefault(_RadioButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var string = _react.PropTypes.string;
var object = _react.PropTypes.object;
var oneOf = _react.PropTypes.oneOf;
var func = _react.PropTypes.func;
var node = _react.PropTypes.node;

var RadioButtonGroup = function (_Component) {
  _inherits(RadioButtonGroup, _Component);

  function RadioButtonGroup() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, RadioButtonGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(RadioButtonGroup)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      checkedCount: 0,
      selected: _this.props.valueSelected || null
    }, _this.componentWillMount = function () {
      var count = 0;
      _react2.default.Children.forEach(_this.props.children, function (option) {
        if (_this.hasCheckAttribute(option)) count++;
      }, _this);
      _this.setState({ checkedCount: count });
    }, _this.onChange = function (event, newSelection) {
      _this.updateRadioButtons(newSelection);
      if (_this.state.checkedCount === 0) {
        _this.props.onChange(event, newSelection);
      }
    }, _this.hasCheckAttribute = function (radioButton) {
      return radioButton.props.hasOwnProperty('checked') && radioButton.props.checked;
    }, _this.updateRadioButtons = function (newSelection) {
      if (_this.state.checkedCount === 0) {
        _this.setState({ selected: newSelection });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RadioButtonGroup, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var children = _props.children;
      var style = _props.style;
      var propLabelPosition = _props.labelPosition;


      var options = _react2.default.Children.map(children, function (option) {
        var _option$props = option.props;
        var name = _option$props.name;
        var value = _option$props.value;
        var onCheck = _option$props.onCheck;
        var labelPosition = _option$props.labelPosition;

        var other = _objectWithoutProperties(_option$props, ['name', 'value', 'onCheck', 'labelPosition']);

        return _react2.default.createElement(_RadioButton2.default, _extends({}, other, {
          name: name,
          key: value,
          labelPosition: propLabelPosition || labelPosition,
          value: value,
          onCheck: _this2.onChange,
          checked: value === _this2.state.selected
        }));
      }, this);

      return _react2.default.createElement(
        'div',
        {
          style: style
        },
        ' ',
        options,
        ' '
      );
    }
  }]);

  return RadioButtonGroup;
}(_react.Component);

RadioButtonGroup.propTypes = {
  children: node,
  labelPosition: oneOf(['left', 'right']),
  name: string.isRequired,
  onChange: func,
  style: object,
  valueSelected: string
};
RadioButtonGroup.contextTypes = {
  compTheme: object
};
RadioButtonGroup.defaultProps = {
  onChange: function onChange() {
    return null;
  }
};
exports.default = (0, _contextPure2.default)(RadioButtonGroup);