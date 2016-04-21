'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _uniqueId = require('../helpers/utils/uniqueId');

var _uniqueId2 = _interopRequireDefault(_uniqueId);

var _lightRawTheme = require('../helpers/styles/rawThemes/lightRawTheme');

var _lightRawTheme2 = _interopRequireDefault(_lightRawTheme);

var _themeManager = require('../helpers/styles/themeManager');

var _themeManager2 = _interopRequireDefault(_themeManager);

var _stylePropable = require('../helpers/utils/stylePropable');

var _contextPure = require('../helpers/composedComponents/contextPure');

var _contextPure2 = _interopRequireDefault(_contextPure);

var _Icon = require('../core/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var string = _react.PropTypes.string;
var object = _react.PropTypes.object;
var func = _react.PropTypes.func;
var node = _react.PropTypes.node;

var styles = {
  display: 'inline'
};

var Text = function (_Component) {
  _inherits(Text, _Component);

  function Text() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Text);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Text)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleOnPress = function (event) {
      if (_this.props.onPress) _this.props.onPress(event);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Text, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._uniqueId = _uniqueId2.default.generate();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var id = _props.id;
      var content = _props.content;
      var style = _props.style;
      var iconButton = _props.iconButton;
      var children = _props.children;


      var getTheme = this.context.compTheme || _themeManager2.default.getCompTheme(_lightRawTheme2.default);
      var theme = getTheme && getTheme.text;

      var textThemeColor = { color: theme.textColor };
      var inputId = id || this._uniqueId;

      return _react2.default.createElement(
        'div',
        {
          id: inputId,
          className: className,
          style: _stylePropable.mergeStyles.apply(this, [styles, textThemeColor, style]),
          onClick: this.handleOnPress
        },
        iconButton ? _react2.default.createElement(_Icon2.default, { name: iconButton, style: this.props.iconStyle }) : null,
        content ? content : children
      );
    }
  }]);

  return Text;
}(_react.Component);

Text.propTypes = {
  children: node,
  className: string,
  iconButton: string,
  iconStyle: object,
  id: string,
  /**
   * onPress props for triggers the click event
   */
  onPress: func,
  /**
   * Override the inline-styles of the root element.
   */
  style: object,
  content: string
};
Text.contextTypes = {
  compTheme: object
};
exports.default = (0, _contextPure2.default)(Text);