'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _stylePropable = require('../../helpers/utils/stylePropable');

var _Text = require('../../Text');

var _Text2 = _interopRequireDefault(_Text);

var _Image = require('../../core/Image');

var _Image2 = _interopRequireDefault(_Image);

var _contextPure = require('../../helpers/composedComponents/contextPure');

var _contextPure2 = _interopRequireDefault(_contextPure);

var _lightRawTheme = require('../../helpers/styles/rawThemes/lightRawTheme');

var _lightRawTheme2 = _interopRequireDefault(_lightRawTheme);

var _themeManager = require('../../helpers/styles/themeManager');

var _themeManager2 = _interopRequireDefault(_themeManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var string = _react.PropTypes.string;
var object = _react.PropTypes.object;
var number = _react.PropTypes.number;


function getRelevantContextKeys(context, imageWidthRatio) {
  var compTheme = context.muiTheme || _themeManager2.default.getCompTheme(_lightRawTheme2.default);
  var themeImagePlusText = compTheme && compTheme.imagePlusText || {};

  var imageContainerWidth = imageWidthRatio + '%';
  var textContainerWidth = 100 - imageWidthRatio - parseInt(themeImagePlusText.textPaddingLeft, 10) - parseInt(themeImagePlusText.textPaddingRight, 10) + '%';

  var styles = {
    rootStyle: {
      width: '100%',
      display: 'inline-block',
      position: 'relative'
    },
    imageRootStyle: {
      width: '100%'
    },
    imageContainerStyle: {
      float: 'left',
      width: imageContainerWidth,
      lineHeight: 0
    },
    textContainerStyle: {
      position: 'absolute',
      top: '50%',
      right: 0,
      width: textContainerWidth,
      transform: 'translateY(-50%)',
      paddingLeft: themeImagePlusText.textPaddingLeft,
      paddingRight: themeImagePlusText.textPaddingRight
    },
    textRootStyle: {
      display: 'block'
    },
    linkRootStyle: {
      color: themeImagePlusText.textColor,
      fontWeight: 'bold',
      textDecoration: 'underline',
      display: 'block',
      margin: themeImagePlusText.linkMargin
    }
  };

  return { styles: styles };
}

var ImagePlusTextImageLeft = function ImagePlusTextImageLeft(props, context) {
  var className = props.className;
  var id = props.id;
  var style = props.style;
  var imageSrc = props.imageSrc;
  var imageStyle = props.imageStyle;
  var imageTitle = props.imageTitle;
  var imageWidthRatio = props.imageWidthRatio;
  var text = props.text;
  var textStyle = props.textStyle;
  var link = props.link;
  var linkText = props.linkText;
  var linkStyle = props.linkStyle;
  var targetwindow = props.targetwindow;

  var _getRelevantContextKe = getRelevantContextKeys(context, imageWidthRatio);

  var styles = _getRelevantContextKe.styles;


  var rootMergeStyle = _stylePropable.mergeStyles.apply(undefined, [styles.rootStyle, style]);
  var imageMergeStyle = _stylePropable.mergeStyles.apply(undefined, [styles.imageRootStyle, imageStyle]);
  var textMergeStyle = _stylePropable.mergeStyles.apply(undefined, [styles.textRootStyle, textStyle]);
  var linkMergeStyle = _stylePropable.mergeStyles.apply(undefined, [styles.linkRootStyle, linkStyle]);

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
      { style: styles.textContainerStyle },
      _react2.default.createElement(_Text2.default, {
        content: text,
        style: textMergeStyle
      }),
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

ImagePlusTextImageLeft.propTypes = {
  className: string,
  id: string,
  style: object,
  imageSrc: string.isRequired,
  imageTitle: string,
  imageStyle: object,
  imageWidthRatio: number,
  text: string,
  textStyle: object,
  link: string,
  linkText: string,
  linkStyle: object,
  targetwindow: string
};

ImagePlusTextImageLeft.contextTypes = {
  compTheme: object
};

exports.default = (0, _contextPure2.default)(ImagePlusTextImageLeft);