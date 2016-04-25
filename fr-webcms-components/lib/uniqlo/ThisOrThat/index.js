'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _stylePropable = require('../../helpers/utils/stylePropable');

var _Heading = require('../../Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _Image = require('../../core/Image');

var _Image2 = _interopRequireDefault(_Image);

var _Text = require('../../Text');

var _Text2 = _interopRequireDefault(_Text);

var _lightRawTheme = require('../../helpers/styles/rawThemes/lightRawTheme');

var _lightRawTheme2 = _interopRequireDefault(_lightRawTheme);

var _themeManager = require('../../helpers/styles/themeManager');

var _themeManager2 = _interopRequireDefault(_themeManager);

var _contextPure = require('../../helpers/composedComponents/contextPure');

var _contextPure2 = _interopRequireDefault(_contextPure);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var string = _react.PropTypes.string;
var object = _react.PropTypes.object;


function getRelevantContextKeys(context) {
  var compTheme = context.compTheme || _themeManager2.default.getCompTheme(_lightRawTheme2.default);
  var themeThisOrThat = compTheme && compTheme.thisOrThat || {};

  var styles = {
    rootStyle: {
      width: '100%',
      display: 'inline-block'
    },
    imageContainerStyle: {
      display: 'inline-block',
      width: '100%',
      position: 'relative',
      lineHeight: 0,
      float: 'left'
    },
    thisContainerStyle: {
      width: '48%',
      height: 'auto',
      float: 'left'
    },
    thatContainerStyle: {
      width: '48%',
      height: 'auto',
      float: 'right'
    },
    thisImageRootStyle: {
      width: '100%'
    },
    thatImageRootStyle: {
      width: '100%'
    },
    overlayStyle: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: themeThisOrThat.overlaySize,
      height: themeThisOrThat.overlaySize,
      lineHeight: themeThisOrThat.overlaySize,
      textAlign: 'center',
      transform: 'translate(-50%, -50%)',
      borderColor: themeThisOrThat.borderColor,
      borderWidth: 2,
      borderStyle: 'solid',
      borderRadius: '50%',
      backgroundColor: themeThisOrThat.backgroundColor
    },
    textContainerStyle: {
      width: '100%',
      textAlign: 'center'
    }
  };

  return { styles: styles };
}

var ThisOrThat = function ThisOrThat(props, context) {
  var className = props.className;
  var id = props.id;
  var style = props.style;
  var thisImageSrc = props.thisImageSrc;
  var thatImageSrc = props.thatImageSrc;
  var thisImageTitle = props.thisImageTitle;
  var thatImageTitle = props.thatImageTitle;
  var thisImageStyle = props.thisImageStyle;
  var thatImageStyle = props.thatImageStyle;
  var overlayText = props.overlayText;
  var overlayTextStyle = props.overlayTextStyle;
  var primaryHeading = props.primaryHeading;
  var secondaryHeading = props.secondaryHeading;
  var primaryHeadingStyle = props.primaryHeadingStyle;
  var secondaryHeadingStyle = props.secondaryHeadingStyle;
  var thisLink = props.thisLink;
  var thatLink = props.thatLink;
  var targetwindow = props.targetwindow;

  var _getRelevantContextKe = getRelevantContextKeys(context);

  var styles = _getRelevantContextKe.styles;


  var rootMergeStyle = _stylePropable.mergeStyles.apply(undefined, [styles.rootStyle, style]);
  var thisImageMergeStyle = _stylePropable.mergeStyles.apply(undefined, [styles.thisImageRootStyle, thisImageStyle]);
  var thatImageMergeStyle = _stylePropable.mergeStyles.apply(undefined, [styles.thatImageRootStyle, thatImageStyle]);

  return _react2.default.createElement(
    'div',
    {
      style: rootMergeStyle,
      id: id,
      className: className
    },
    _react2.default.createElement(
      'div',
      { style: styles.textContainerStyle },
      _react2.default.createElement(_Heading2.default, {
        type: 'h3',
        headingText: primaryHeading,
        style: primaryHeadingStyle
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.textContainerStyle },
      _react2.default.createElement(_Heading2.default, {
        type: 'h4',
        headingText: secondaryHeading,
        style: secondaryHeadingStyle
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.imageContainerStyle },
      _react2.default.createElement(
        'div',
        { style: styles.thisContainerStyle },
        _react2.default.createElement(
          'a',
          {
            href: thisLink,
            target: targetwindow
          },
          _react2.default.createElement(_Image2.default, {
            source: thisImageSrc,
            style: thisImageMergeStyle,
            alternateText: thisImageTitle
          })
        )
      ),
      _react2.default.createElement(
        'div',
        { style: styles.thatContainerStyle },
        _react2.default.createElement(
          'a',
          {
            href: thatLink,
            target: targetwindow
          },
          _react2.default.createElement(_Image2.default, {
            source: thatImageSrc,
            style: thatImageMergeStyle,
            alternateText: thatImageTitle
          })
        )
      ),
      _react2.default.createElement(
        'div',
        { style: styles.overlayStyle },
        _react2.default.createElement(_Text2.default, {
          content: overlayText,
          style: overlayTextStyle
        })
      )
    )
  );
};

ThisOrThat.propTypes = {
  className: string,
  id: string,
  style: object,
  thisImageSrc: string.isRequired,
  thatImageSrc: string.isRequired,
  thisImageTitle: string,
  thatImageTitle: string,
  thisImageStyle: object,
  thatImageStyle: object,
  overlayText: string,
  overlayTextStyle: object,
  primaryHeading: string,
  secondaryHeading: string,
  primaryHeadingStyle: object,
  secondaryHeadingStyle: object,
  thisLink: string,
  thatLink: string,
  targetwindow: string
};

ThisOrThat.contextTypes = {
  compTheme: object
};

exports.default = (0, _contextPure2.default)(ThisOrThat);