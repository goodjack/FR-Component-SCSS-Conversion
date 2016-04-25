'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Heading = require('../../Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _Image = require('../../core/Image');

var _Image2 = _interopRequireDefault(_Image);

var _stylePropable = require('../../helpers/utils/stylePropable');

var _Null = require('../../core/Null');

var _Null2 = _interopRequireDefault(_Null);

var _ProxyLink = require('../../core/ProxyLink');

var _ProxyLink2 = _interopRequireDefault(_ProxyLink);

var _Button = require('../../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var string = _react.PropTypes.string;
var object = _react.PropTypes.object;
var bool = _react.PropTypes.bool;
var func = _react.PropTypes.func;


var styles = {
  title: {
    fontSize: '1em',
    padding: 0
  },
  subtitle: {
    fontSize: '0.65em',
    padding: 0
  }
};
var getTitleContainer = function getTitleContainer(title, titleStyle) {
  var markup = void 0;
  if (title) {
    var mergedTitleStyle = (0, _stylePropable.mergeStyles)(titleStyle, styles.title);
    markup = _react2.default.createElement(_Heading2.default, { type: 'h1', headingText: title, style: mergedTitleStyle });
  } else {
    markup = false;
  }

  return markup || _react2.default.createElement(_Null2.default, null);
};

var getSubtitleContainer = function getSubtitleContainer(subtitle, subtitleStyle) {
  var markup = void 0;
  if (subtitle) {
    var mergedSubtitleStyle = (0, _stylePropable.mergeStyles)(subtitleStyle, styles.subtitle);
    markup = _react2.default.createElement(_Heading2.default, { type: 'h3', headingText: subtitle, style: mergedSubtitleStyle });
  } else {
    markup = false;
  }

  return markup || _react2.default.createElement(_Null2.default, null);
};

var getButtonComponent = function getButtonComponent(comp) {
  var _comp$props = comp.props;
  var linkText = _comp$props.linkText;
  var linkTextColor = _comp$props.linkTextColor;
  var linkUrl = _comp$props.linkUrl;
  var linkFontWeight = _comp$props.linkFontWeight;
  var linkFontSize = _comp$props.linkFontSize;
  var linkTextDecoration = _comp$props.linkTextDecoration;


  var buttonStyle = {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: '5%',
    width: 'auto',
    textAlign: 'center',
    padding: 5,
    marginLeft: '20%',
    border: '1px solid grey'
  };
  var buttonTextStyle = {
    fontSize: '0.8em'
  };
  var markup = void 0;
  if (linkText) {
    markup = _react2.default.createElement(
      _Button2.default,
      { labelStyle: buttonTextStyle, style: buttonStyle },
      _react2.default.createElement(_ProxyLink2.default, {
        linkText: linkText,
        linkUrl: linkUrl,
        textDecoration: linkTextDecoration,
        textColor: linkTextColor,
        fontWeight: linkFontWeight,
        fontSize: linkFontSize,
        onClickEvent: comp.handleClick
      })
    );
  } else {
    markup = false;
  }

  return markup || _react2.default.createElement(_Null2.default, null);
};

var HeroVariationTextOnImage = function (_Component) {
  _inherits(HeroVariationTextOnImage, _Component);

  function HeroVariationTextOnImage() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, HeroVariationTextOnImage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(HeroVariationTextOnImage)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      showButton: true
    }, _this.handleClick = function () {
      var _this$props = _this.props;
      var navToOverlayComp = _this$props.navToOverlayComp;
      var linkOnClick = _this$props.linkOnClick;

      if (navToOverlayComp) {
        _this.setState({ showButton: false });
      }

      if (linkOnClick) {
        linkOnClick();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HeroVariationTextOnImage, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var imageSrc = _props.imageSrc;
      var rootStyle = _props.rootStyle;
      var subtitle = _props.subtitle;
      var subtitleStyle = _props.subtitleStyle;
      var title = _props.title;
      var titleStyle = _props.titleStyle;
      var imageContainerStyle = _props.imageContainerStyle;
      var TextOnImage = _props.TextOnImage;


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
        _react2.default.createElement(
          'div',
          { style: TextOnImage },
          getTitleContainer(title, titleStyle),
          getSubtitleContainer(subtitle, subtitleStyle)
        ),
        this.state.showButton ? getButtonComponent(this) : _react2.default.createElement(_Null2.default, null)
      );
    }
  }]);

  return HeroVariationTextOnImage;
}(_react.Component);

HeroVariationTextOnImage.propTypes = {
  className: string,
  imageSrc: string.isRequired,
  rootStyle: object,
  subtitle: string,
  subtitleStyle: object,
  title: string,
  titleStyle: object,
  icon: string,
  iconText: string,
  imageContainerStyle: object,
  iconTextStyle: object,
  proxyLinkStyle: object,
  TextOnImage: object,
  overlayProxyLinkStyle: object,
  linkText: string,
  linkTextColor: string,
  linkUrl: string,
  linkFontWeight: string,
  linkFontSize: string,
  linkTextDecoration: string,
  navToOverlayComp: bool,
  linkOnClick: func,
  overlayIconContainerStyle: object
};

exports.default = HeroVariationTextOnImage;