'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Text = require('../../Text');

var _Text2 = _interopRequireDefault(_Text);

var _Heading = require('../../Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _Image = require('../../core/Image');

var _Image2 = _interopRequireDefault(_Image);

var _stylePropable = require('../../helpers/utils/stylePropable');

var _Icon = require('../../core/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Null = require('../../core/Null');

var _Null2 = _interopRequireDefault(_Null);

var _ProxyLink = require('../../core/ProxyLink');

var _ProxyLink2 = _interopRequireDefault(_ProxyLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var noop = function noop() {
  return null;
};
var string = _react.PropTypes.string;
var object = _react.PropTypes.object;
var bool = _react.PropTypes.bool;
var func = _react.PropTypes.func;


var getIconComponent = function getIconComponent(prop) {
  var overlayIconContainerStyle = prop.overlayIconContainerStyle;
  var iconText = prop.iconText;
  var iconTextStyle = prop.iconTextStyle;
  var icon = prop.icon;

  var markup = void 0;
  if (icon) {
    markup = _react2.default.createElement(
      'div',
      { style: overlayIconContainerStyle },
      _react2.default.createElement(_Icon2.default, { name: icon }),
      iconText ? _react2.default.createElement(_Text2.default, { content: iconText, style: iconTextStyle }) : _Null2.default
    );
  } else {
    markup = false;
  }

  return markup || _react2.default.createElement(_Null2.default, null);
};

var getTitleContainer = function getTitleContainer(title, titleStyle) {
  var markup = void 0;
  if (title) {
    markup = _react2.default.createElement(_Heading2.default, { type: 'h1', headingText: title, style: titleStyle });
  } else {
    markup = false;
  }

  return markup || _react2.default.createElement(_Null2.default, null);
};

var getSubtitleContainer = function getSubtitleContainer(subtitle, subtitleStyle) {
  var markup = void 0;
  if (subtitle) {
    markup = _react2.default.createElement(_Heading2.default, { type: 'h3', headingText: subtitle, style: subtitleStyle });
  } else {
    markup = false;
  }

  return markup || _react2.default.createElement(_Null2.default, null);
};

var getTextContainer = function getTextContainer(text, textStyle) {
  var markup = void 0;
  if (text) {
    markup = _react2.default.createElement(_Text2.default, { style: textStyle, content: text });
  } else {
    markup = false;
  }

  return markup || _react2.default.createElement(_Null2.default, null);
};

var getLinkContainer = function getLinkContainer(comp) {
  var _comp$props = comp.props;
  var overlayProxyLinkStyle = _comp$props.overlayProxyLinkStyle;
  var linkText = _comp$props.linkText;
  var linkTextColor = _comp$props.linkTextColor;
  var linkUrl = _comp$props.linkUrl;
  var linkFontWeight = _comp$props.linkFontWeight;
  var linkFontSize = _comp$props.linkFontSize;
  var linkTextDecoration = _comp$props.linkTextDecoration;

  var markup = void 0;
  if (linkText) {
    markup = _react2.default.createElement(
      'div',
      { style: overlayProxyLinkStyle },
      _react2.default.createElement(_ProxyLink2.default, {
        linkText: linkText,
        linkUrl: linkUrl,
        linkFontSize: linkFontSize,
        linkFontWeight: linkFontWeight,
        linkTextDecoration: linkTextDecoration,
        textColor: linkTextColor,
        onClickEvent: comp.hideTextOverlay
      })
    );
  } else {
    markup = false;
  }

  return markup || _react2.default.createElement(_Null2.default, null);
};

var HeroVariationOverlay = function (_Component) {
  _inherits(HeroVariationOverlay, _Component);

  function HeroVariationOverlay() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, HeroVariationOverlay);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(HeroVariationOverlay)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      showOverlay: true
    }, _this.hideTextOverlay = function () {
      if (_this.props.navToOverlayComp) {
        _this.props.callOverlay(true);
        _this.setState({ showOverlay: false });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HeroVariationOverlay, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var imageSrc = _props.imageSrc;
      var rootStyle = _props.rootStyle;
      var subtitle = _props.subtitle;
      var subtitleStyle = _props.subtitleStyle;
      var text = _props.text;
      var textStyle = _props.textStyle;
      var title = _props.title;
      var titleStyle = _props.titleStyle;
      var imageContainerStyle = _props.imageContainerStyle;
      var textOverlay = _props.textOverlay;


      var imgContainer = (0, _stylePropable.mergeStyles)(rootStyle, imageContainerStyle);
      return _react2.default.createElement(
        'div',
        {
          style: imgContainer,
          className: className
        },
        _react2.default.createElement(_Image2.default, {
          source: imageSrc,
          useImgTag: false
        }),
        this.state.showOverlay ? _react2.default.createElement(
          'div',
          { style: textOverlay },
          getTitleContainer(title, titleStyle),
          getSubtitleContainer(subtitle, subtitleStyle),
          getTextContainer(text, textStyle),
          getIconComponent(this.props),
          getLinkContainer(this)
        ) : _react2.default.createElement(_Null2.default, null)
      );
    }
  }]);

  return HeroVariationOverlay;
}(_react.Component);

HeroVariationOverlay.defaultProps = {
  callOverlay: noop
};


HeroVariationOverlay.propTypes = {
  className: string,
  imageSrc: string.isRequired,
  rootStyle: object,
  subtitle: string,
  subtitleStyle: object,
  text: string,
  textStyle: object,
  title: string,
  titleStyle: object,
  icon: string,
  iconText: string,
  imageContainerStyle: object,
  iconTextStyle: object,
  proxyLinkStyle: object,
  textOverlay: object,
  overlayProxyLinkStyle: object,
  linkText: string,
  linkTextColor: string,
  linkUrl: string,
  linkFontWeight: string,
  linkFontSize: string,
  linkTextDecoration: string,
  navToOverlayComp: bool,
  overlayIconContainerStyle: object,
  callOverlay: func
};

exports.default = HeroVariationOverlay;