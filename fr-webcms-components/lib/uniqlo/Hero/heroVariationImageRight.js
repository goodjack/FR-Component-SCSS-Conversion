'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var getLinkContainer = function getLinkContainer(prop) {
  var proxyLinkStyle = prop.proxyLinkStyle;
  var linkText = prop.linkText;
  var linkTextColor = prop.linkTextColor;
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
        linkTextDecoration: linkTextDecoration,
        textColor: linkTextColor
      })
    );
  } else {
    markup = false;
  }

  return markup || _react2.default.createElement(_Null2.default, null);
};

var HeroVariationImageRight = function HeroVariationImageRight(props) {
  var className = props.className;
  var imageSrc = props.imageSrc;
  var leftSideStyle = props.leftSideStyle;
  var rightSideStyle = props.rightSideStyle;
  var rootStyle = props.rootStyle;
  var subtitle = props.subtitle;
  var subtitleStyle = props.subtitleStyle;
  var text = props.text;
  var textStyle = props.textStyle;
  var title = props.title;
  var titleStyle = props.titleStyle;
  var imageContainerStyle = props.imageContainerStyle;


  var imgContainer = (0, _stylePropable.mergeStyles)(rightSideStyle, imageContainerStyle);
  return _react2.default.createElement(
    'div',
    {
      style: rootStyle,
      className: className
    },
    _react2.default.createElement(
      'div',
      { style: leftSideStyle },
      getTitleContainer(title, titleStyle),
      getSubtitleContainer(subtitle, subtitleStyle),
      getTextContainer(text, textStyle),
      getIconComponent(props),
      getLinkContainer(props)
    ),
    _react2.default.createElement(
      'div',
      { style: imgContainer },
      _react2.default.createElement(_Image2.default, {
        source: imageSrc,
        useImgTag: false
      })
    )
  );
};

HeroVariationImageRight.propTypes = {
  className: string,
  id: string,
  imageSrc: string.isRequired,
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
  linkTextColor: string,
  linkUrl: string,
  linkFontWeight: string,
  linkFontSize: string,
  linkTextDecoration: string
};
exports.default = HeroVariationImageRight;