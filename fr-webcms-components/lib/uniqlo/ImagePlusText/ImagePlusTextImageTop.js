'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _stylePropable = require('../../helpers/utils/stylePropable');

var _Image = require('../../core/Image');

var _Image2 = _interopRequireDefault(_Image);

var _lightRawTheme = require('../../helpers/styles/rawThemes/lightRawTheme');

var _lightRawTheme2 = _interopRequireDefault(_lightRawTheme);

var _themeManager = require('../../helpers/styles/themeManager');

var _themeManager2 = _interopRequireDefault(_themeManager);

var _contextPure = require('../../helpers/composedComponents/contextPure');

var _contextPure2 = _interopRequireDefault(_contextPure);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var string = _react.PropTypes.string;
var object = _react.PropTypes.object;
var oneOfType = _react.PropTypes.oneOfType;
var node = _react.PropTypes.node;


function getRelevantContextKeys(context) {
  var compTheme = context.muiTheme || _themeManager2.default.getCompTheme(_lightRawTheme2.default);
  var themeImagePlusText = compTheme && compTheme.imagePlusText || {};

  var styles = {
    rootStyle: {
      width: '100%'
    },
    imageRootStyle: {
      width: '100%'
    },
    imageContainerStyle: {
      lineHeight: 0,
      width: '100%'
    },
    textContainerStyle: {
      padding: themeImagePlusText.textMargin
    },
    textRootStyle: {
      display: 'block'
    },
    linkRootStyle: {
      color: themeImagePlusText.textColor,
      fontWeight: 'bold',
      textDecoration: 'underline',
      display: 'block',
      margin: themeImagePlusText.linkMargin }
  };

  // '10px 0 10px 0',
  return { styles: styles };
}

var ImagePlusTextImageTop = function ImagePlusTextImageTop(props, context) {
  var className = props.className;
  var id = props.id;
  var style = props.style;
  var imageSrc = props.imageSrc;
  var imageStyle = props.imageStyle;
  var imageTitle = props.imageTitle;
  var text = props.text;
  var textStyle = props.textStyle;
  var link = props.link;
  var linkText = props.linkText;
  var linkStyle = props.linkStyle;
  var targetwindow = props.targetwindow;
  var textContainerStyle = props.textContainerStyle;

  var _getRelevantContextKe = getRelevantContextKeys(context);

  var styles = _getRelevantContextKe.styles;


  var rootMergeStyle = _stylePropable.mergeStyles.apply(undefined, [styles.rootStyle, style]);
  var imageMergeStyle = _stylePropable.mergeStyles.apply(undefined, [styles.imageRootStyle, imageStyle]);
  var textMergeStyle = _stylePropable.mergeStyles.apply(undefined, [styles.textRootStyle, textStyle]);
  var linkMergeStyle = _stylePropable.mergeStyles.apply(undefined, [styles.linkRootStyle, linkStyle]);
  var textContainerMergeStyle = _stylePropable.mergeStyles.apply(undefined, [styles.textContainerStyle, textContainerStyle]);
  return _react2.default.createElement(
    'div',
    {
      style: rootMergeStyle,
      id: id,
      className: className
    },
    _react2.default.createElement(
      'div',
      { style: styles.imageContainerStyle },
      _react2.default.createElement(_Image2.default, {
        source: imageSrc,
        style: imageMergeStyle,
        alternateText: imageTitle
      })
    ),
    _react2.default.createElement(
      'div',
      { style: textContainerMergeStyle },
      _react2.default.createElement(
        'div',
        { style: textMergeStyle },
        text
      ),
      _react2.default.createElement(
        'a',
        {
          href: link,
          target: targetwindow,
          style: linkMergeStyle
        },
        linkText
      )
    )
  );
};

ImagePlusTextImageTop.propTypes = {
  className: string,
  id: string,
  style: object,
  imageSrc: string.isRequired,
  imageTitle: string,
  imageStyle: object,
  text: oneOfType([node, string]),
  textStyle: object,
  link: string,
  linkText: string,
  linkStyle: object,
  textContainerStyle: object,
  targetwindow: string
};

ImagePlusTextImageTop.contextTypes = {
  compTheme: object
};

exports.default = (0, _contextPure2.default)(ImagePlusTextImageTop);