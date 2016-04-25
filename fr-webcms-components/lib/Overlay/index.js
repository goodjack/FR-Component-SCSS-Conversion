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

var _configurationManager = require('../helpers/configuration/configurationManager');

var _configurationManager2 = _interopRequireDefault(_configurationManager);

var _baseConfig = require('../helpers/configuration/baseConfig');

var _baseConfig2 = _interopRequireDefault(_baseConfig);

var _Hero = require('../uniqlo/Hero');

var _Hero2 = _interopRequireDefault(_Hero);

var _Heading = require('../Heading');

var _Heading2 = _interopRequireDefault(_Heading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var string = _react.PropTypes.string;
var object = _react.PropTypes.object;
var array = _react.PropTypes.array;
var bool = _react.PropTypes.bool;
var func = _react.PropTypes.func;


var prepareStyle = function prepareStyle(_ref) {
  var props = _ref.props;
  var context = _ref.context;
  var state = _ref.state;

  var compTheme = context.CompTheme || _themeManager2.default.getCompTheme(_lightRawTheme2.default);
  var overlay = compTheme && compTheme.overlay || {};
  var compConfig = context.compConfig || _configurationManager2.default.getCompConfig(_baseConfig2.default);
  var overlayConfig = compConfig && compConfig.overlay || {};
  var styles = {
    root: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: -4,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: overlay.borderColor,
      backgroundColor: overlay.backgroundColor,
      opacity: '0.5',
      padding: '5%',
      display: state.displayOverlay,
      textAlign: 'center'
    },
    buttonStyle: {
      backgroundColor: overlay.transparent,
      borderColor: overlay.borderColor,
      borderWidth: 1,
      borderStyle: 'solid',
      width: '100%',
      padding: '3%',
      marginBottom: '5%',
      display: 'inline-block'
    },
    labelStyle: {
      color: overlay.borderColor,
      fontSize: '100%'
    },
    container: {
      position: 'absolute',
      bottom: 0,
      width: '90%'
    },
    containerStyle: {
      position: 'relative',
      height: overlayConfig.containerHeight || 350
    }
  };
  var rootStyle = _stylePropable.mergeStyles.apply(undefined, [styles.root, props.style]);
  var buttonStyle = _stylePropable.mergeStyles.apply(undefined, [styles.buttonStyle, props.buttonStyle]);
  var labelStyle = _stylePropable.mergeStyles.apply(undefined, [styles.labelStyle, props.labelStyle]);
  var container = _stylePropable.mergeStyles.apply(undefined, [styles.container, props.containerStyle]);
  var containerStyle = styles.containerStyle;
  return { rootStyle: rootStyle, buttonStyle: buttonStyle, labelStyle: labelStyle, container: container, containerStyle: containerStyle };
};

var Overlay = function (_Component) {
  _inherits(Overlay, _Component);

  function Overlay() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Overlay);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Overlay)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      displayOverlay: 'none'
    }, _this.getChildren = function (children, buttonStyle, labelStyle) {
      var renderChildren = _react2.default.Children.map(children, function (child, index) {
        return _react2.default.cloneElement(child, {
          refId: index,
          style: buttonStyle,
          labelStyle: labelStyle
        });
      });
      return renderChildren;
    }, _this.showOverlay = function (val) {
      _this.setState({ displayOverlay: val === true ? 'block' : 'none' });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Overlay, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var id = _props.id;
      var children = _props.children;
      var imageSrc = _props.imageSrc;
      var imageTitle = _props.imageTitle;
      var subtitle = _props.subtitle;
      var text = _props.text;
      var title = _props.title;
      var linkText = _props.linkText;
      var variation = _props.variation;

      var _prepareStyle = prepareStyle(this);

      var rootStyle = _prepareStyle.rootStyle;
      var container = _prepareStyle.container;
      var containerStyle = _prepareStyle.containerStyle;
      var labelStyle = _prepareStyle.labelStyle;
      var buttonStyle = _prepareStyle.buttonStyle;

      var renderChildren = this.getChildren(children, buttonStyle, labelStyle);

      return _react2.default.createElement(
        'div',
        { style: containerStyle },
        _react2.default.createElement(_Hero2.default, {
          variation: variation,
          imageSrc: imageSrc,
          imageTitle: imageTitle,
          subtitle: subtitle,
          text: text,
          title: title,
          linkText: linkText,
          navToOverlayComp: true,
          callOverlay: this.showOverlay
        }),
        _react2.default.createElement(
          'div',
          { id: id,
            className: className,
            style: rootStyle
          },
          _react2.default.createElement(_Heading2.default, { type: 'h1', headingText: title, style: labelStyle }),
          _react2.default.createElement(
            'div',
            { style: container },
            renderChildren
          )
        )
      );
    }
  }]);

  return Overlay;
}(_react.Component);

Overlay.propTypes = {
  className: string,
  callOverlay: func,
  id: string,
  style: object,
  buttonStyle: object,
  labelStyle: object,
  containerStyle: object,
  children: _react2.default.PropTypes.oneOfType([array, object]).isRequired,
  linkText: string,
  imageSrc: string,
  imageTitle: string,
  navToOverlayComp: bool,
  subtitle: string,
  text: string,
  title: string,
  variation: string
};
exports.default = (0, _contextPure2.default)(Overlay);