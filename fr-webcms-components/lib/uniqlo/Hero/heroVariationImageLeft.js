'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

var _imageDimensions = require('../../helpers/utils/imageDimensions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var string = _react.PropTypes.string;
var object = _react.PropTypes.object;


var getIconComponent = function getIconComponent(prop) {
  var iconContainerStyle = prop.iconContainerStyle;
  var iconText = prop.iconText;
  var iconTextStyle = prop.iconTextStyle;
  var icon = prop.icon;

  var markup = void 0;
  if (icon) {
    markup = _react2.default.createElement(
      'div',
      { style: iconContainerStyle },
      _react2.default.createElement(_Icon2.default, { name: icon }),
      iconText ? _react2.default.createElement(_Text2.default, { content: iconText, style: iconTextStyle }) : _Null2.default
    );
  } else {
    markup = _Null2.default;
  }

  return markup;
};

var getTitleContainer = function getTitleContainer(title, titleStyle) {
  var markup = void 0;
  if (title) {
    markup = _react2.default.createElement(_Heading2.default, { type: 'h1', headingText: title, style: titleStyle });
  } else {
    markup = _Null2.default;
  }

  return markup;
};

var getSubtitleContainer = function getSubtitleContainer(subtitle, subtitleStyle) {
  var markup = void 0;
  if (subtitle) {
    markup = _react2.default.createElement(_Heading2.default, { type: 'h3', headingText: subtitle, style: subtitleStyle });
  } else {
    markup = _Null2.default;
  }

  return markup;
};

var getTextContainer = function getTextContainer(text, textStyle) {
  var markup = void 0;
  if (text) {
    markup = _react2.default.createElement(_Text2.default, { style: textStyle, content: text });
  } else {
    markup = _Null2.default;
  }

  return markup;
};

var getLinkContainer = function getLinkContainer(prop) {
  var proxyLinkStyle = prop.proxyLinkStyle;
  var linkText = prop.linkText;
  var linkUrl = prop.linkUrl;
  var linkFontWeight = prop.linkFontWeight;
  var linkFontSize = prop.linkFontSize;
  var linkTextDecoration = prop.linkTextDecoration;

  var markup = void 0;
  if (linkText) {
    markup = _react2.default.createElement(
      'div',
      { style: proxyLinkStyle },
      _react2.default.createElement(_ProxyLink2.default, {
        linkText: linkText,
        linkUrl: linkUrl,
        linkFontSize: linkFontSize,
        linkFontWeight: linkFontWeight,
        linkTextDecoration: linkTextDecoration
      })
    );
  } else {
    markup = _Null2.default;
  }

  return markup;
};

var HeroVariationImageLeft = function (_Component) {
  _inherits(HeroVariationImageLeft, _Component);

  function HeroVariationImageLeft() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, HeroVariationImageLeft);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(HeroVariationImageLeft)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      imageWidth: '100%',
      imageHeight: '100%'
    }, _this.onImageLoaded = function () {
      var imgRef = _this.refs.heroImage;
      var imageDimensions = (0, _imageDimensions.getImageDimensions)(imgRef.childNodes[0].naturalHeight, imgRef.childNodes[0].naturalWidth, imgRef.clientHeight, imgRef.clientWidth);
      _this.setState(_extends({}, imageDimensions));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HeroVariationImageLeft, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var imageSrc = _props.imageSrc;
      var imageTitle = _props.imageTitle;
      var leftSideStyle = _props.leftSideStyle;
      var rightSideStyle = _props.rightSideStyle;
      var rootStyle = _props.rootStyle;
      var subtitle = _props.subtitle;
      var subtitleStyle = _props.subtitleStyle;
      var text = _props.text;
      var textStyle = _props.textStyle;
      var title = _props.title;
      var titleStyle = _props.titleStyle;
      var imageContainerStyle = _props.imageContainerStyle;
      var _state = this.state;
      var imageWidth = _state.imageWidth;
      var imageHeight = _state.imageHeight;
      var marginTop = _state.marginTop;
      var marginLeft = _state.marginLeft;


      var imgContainer = (0, _stylePropable.mergeStyles)(leftSideStyle, imageContainerStyle);
      return _react2.default.createElement(
        'div',
        {
          style: rootStyle,
          className: className
        },
        _react2.default.createElement(
          'div',
          { style: imgContainer, ref: 'heroImage' },
          _react2.default.createElement(_Image2.default, {
            onLoad: this.onImageLoaded,
            source: imageSrc,
            style: {
              width: imageWidth,
              height: imageHeight,
              marginTop: marginTop,
              marginLeft: marginLeft
            },
            alternateText: imageTitle
          })
        ),
        _react2.default.createElement(
          'div',
          { style: rightSideStyle },
          getTitleContainer(title, titleStyle),
          getSubtitleContainer(subtitle, subtitleStyle),
          getTextContainer(text, textStyle),
          getIconComponent(this.props),
          getLinkContainer(this.props)
        )
      );
    }
  }]);

  return HeroVariationImageLeft;
}(_react.Component);

HeroVariationImageLeft.propTypes = {
  className: string,
  id: string,
  imageSrc: string.isRequired,
  imageTitle: string,
  leftSideStyle: object,
  rightSideStyle: object,
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
  iconContainerStyle: object,
  iconTextStyle: object,
  proxyLinkStyle: object,
  linkText: string,
  linkUrl: string,
  linkFontWeight: string,
  linkFontSize: string,
  linkTextDecoration: string
};

exports.default = HeroVariationImageLeft;