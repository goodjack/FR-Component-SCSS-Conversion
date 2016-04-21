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

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var string = _react.PropTypes.string;
var object = _react.PropTypes.object;

var prepareStyle = function prepareStyle(me) {
  var context = me.context;
  var props = me.props;
  var state = me.state;

  var compTheme = context.compTheme || _themeManager2.default.getCompTheme(_lightRawTheme2.default) || {};
  var bCrumbTheme = compTheme.breadCrumb || {};
  var styles = {
    root: {
      color: bCrumbTheme.textColor,
      textDecoration: 'none'
    },
    hover: {
      color: bCrumbTheme.hoverColor
    }
  };

  var mergedHoverStyle = _stylePropable.mergeStyles.apply(undefined, [styles.hover, props.hoverStyle]);
  var mergedDefaultStyle = _stylePropable.mergeStyles.apply(undefined, [styles.root, props.style]);
  var rootStyle = state.hovered ? mergedHoverStyle : mergedDefaultStyle;
  return { mergedDefaultStyle: mergedDefaultStyle, rootStyle: rootStyle };
};

var BreadCrumb = function (_Component) {
  _inherits(BreadCrumb, _Component);

  function BreadCrumb() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, BreadCrumb);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(BreadCrumb)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      hovered: false
    }, _this.handleMouseEnter = function () {
      _this.setState({ hovered: true });
    }, _this.handleMouseLeave = function () {
      _this.setState({ hovered: false });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BreadCrumb, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var link = _props.link;
      var target = _props.target;
      var text = _props.text;
      var style = _props.style;
      var hoverStyle = _props.hoverStyle;

      var other = _objectWithoutProperties(_props, ['link', 'target', 'text', 'style', 'hoverStyle']);

      var _prepareStyle = prepareStyle(this);

      var mergedDefaultStyle = _prepareStyle.mergedDefaultStyle;
      var rootStyle = _prepareStyle.rootStyle;


      return link ? _react2.default.createElement(
        'a',
        {
          style: rootStyle,
          href: link,
          target: target,
          onMouseLeave: this.handleMouseLeave,
          onMouseEnter: this.handleMouseEnter
        },
        text
      ) : _react2.default.createElement(
        'span',
        { style: mergedDefaultStyle },
        text
      );
    }
  }]);

  return BreadCrumb;
}(_react.Component);

BreadCrumb.propTypes = {
  link: string,
  hoverStyle: object,
  style: object,
  target: string,
  text: string
};
BreadCrumb.contextTypes = {
  compTheme: object
};
exports.default = (0, _contextPure2.default)(BreadCrumb);