'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _contextPure = require('../../helpers/composedComponents/contextPure');

var _contextPure2 = _interopRequireDefault(_contextPure);

var _lightRawTheme = require('../../helpers/styles/rawThemes/lightRawTheme');

var _lightRawTheme2 = _interopRequireDefault(_lightRawTheme);

var _stylePropable = require('../../helpers/utils/stylePropable');

var _themeManager = require('../../helpers/styles/themeManager');

var _themeManager2 = _interopRequireDefault(_themeManager);

var _EnhancedSwitch = require('../EnhancedSwitch');

var _EnhancedSwitch2 = _interopRequireDefault(_EnhancedSwitch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var bool = _react.PropTypes.bool;
var string = _react.PropTypes.string;
var object = _react.PropTypes.object;
var oneOf = _react.PropTypes.oneOf;
var func = _react.PropTypes.func;


var prepareStyle = function prepareStyle(props, context) {
  var compTheme = context.compTheme || _themeManager2.default.getCompTheme(_lightRawTheme2.default) || {};
  var checkboxTheme = compTheme.checkBox || {};
  var labelRoot = {
    marginLeft: '10px',
    marginRight: '10px',
    color: props.disabled ? checkboxTheme.labelDisabledColor : checkboxTheme.labelColor,
    display: 'inline'
  };
  return _stylePropable.mergeStyles.apply(undefined, [labelRoot, props.labelStyle]);
};

var CheckBox = function CheckBox(props, context) {
  var onCheck = props.onCheck;
  var label = props.label;
  var disabled = props.disabled;
  var checked = props.checked;
  var labelPosition = props.labelPosition;
  var value = props.value;
  var style = props.style;

  var other = _objectWithoutProperties(props, ['onCheck', 'label', 'disabled', 'checked', 'labelPosition', 'value', 'style']);

  var handleCheck = function handleCheck(event) {
    onCheck(event, value);
  };

  var rootStyle = prepareStyle(props, context);
  var labelElement = label ? _react2.default.createElement(
    'div',
    { style: rootStyle },
    label
  ) : null;

  var enhancedSwitchProps = {
    checked: checked,
    disabled: disabled,
    value: value,
    style: style,
    inputType: 'checkbox',
    onSwitch: handleCheck
  };

  var isLabelLeft = labelPosition.toUpperCase() === 'LEFT';

  return isLabelLeft ? _react2.default.createElement(
    'div',
    null,
    labelElement,
    _react2.default.createElement(_EnhancedSwitch2.default, _extends({}, other, enhancedSwitchProps))
  ) : _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_EnhancedSwitch2.default, _extends({}, other, enhancedSwitchProps)),
    labelElement
  );
};

CheckBox.propTypes = {
  checked: bool,
  disabled: bool,
  label: string,
  labelPosition: oneOf(['left', 'right']),
  labelStyle: object,
  onCheck: func,
  value: string
};

CheckBox.contextTypes = {
  compTheme: object
};

CheckBox.defaultProps = {
  onCheck: function onCheck() {
    return null;
  },
  labelPosition: 'right'
};

exports.default = (0, _contextPure2.default)(CheckBox);