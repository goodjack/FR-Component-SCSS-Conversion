'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _uniqueId = require('../helpers/utils/uniqueId');

var _uniqueId2 = _interopRequireDefault(_uniqueId);

var _stylePropable = require('../helpers/utils/stylePropable');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var any = _react.PropTypes.any;
var string = _react.PropTypes.string;
var bool = _react.PropTypes.bool;
var func = _react.PropTypes.func;
var object = _react.PropTypes.object;


var styles = {
  option: {
    padding: 0,
    margin: 0
  }
};

var EnhancedSelect = function (_Component) {
  _inherits(EnhancedSelect, _Component);

  function EnhancedSelect() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, EnhancedSelect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(EnhancedSelect)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleChange = function (event) {
      if (_this.props.onChange) _this.props.onChange(event);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(EnhancedSelect, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._uniqueId = _uniqueId2.default.generate();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var children = _props.children;
      var disabled = _props.disabled;
      var id = _props.id;
      var style = _props.style;

      var other = _objectWithoutProperties(_props, ['className', 'children', 'disabled', 'id', 'style']);

      var inputId = id || _uniqueId2.default.generate();
      var cursorType = disabled ? 'default' : 'pointer';
      var optionStyles = _extends({ cursor: cursorType }, styles.option);

      var optionProps = _extends({
        style: (0, _stylePropable.mergeStyles)(optionStyles, style),
        id: inputId,
        disabled: disabled
      }, other);

      return _react2.default.createElement(
        'select',
        _extends({
          onChange: this.handleChange
        }, optionProps),
        children
      );
    }
  }]);

  return EnhancedSelect;
}(_react.Component);

EnhancedSelect.propTypes = {
  children: any.isRequired,
  className: string,
  disabled: bool,
  id: string,
  onChange: func,
  style: object
};
EnhancedSelect.defaultProps = {
  onChange: function onChange() {
    return null;
  }
};
exports.default = EnhancedSelect;