'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Image = require('../Image');

var _Image2 = _interopRequireDefault(_Image);

var _lightRawTheme = require('../../helpers/styles/rawThemes/lightRawTheme');

var _lightRawTheme2 = _interopRequireDefault(_lightRawTheme);

var _themeManager = require('../../helpers/styles/themeManager');

var _themeManager2 = _interopRequireDefault(_themeManager);

var _contextPure = require('../../helpers/composedComponents/contextPure');

var _contextPure2 = _interopRequireDefault(_contextPure);

var _stylePropable = require('../../helpers/utils/stylePropable');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var string = _react.PropTypes.string;
var object = _react.PropTypes.object;

var getStyles = function getStyles(theme, props) {
  return {
    image: (0, _stylePropable.mergeStyles)({
      width: theme.imageWidth || '25px',
      height: theme.imageHeight || 'auto',
      float: 'left'
    }, props.imageStyle),

    title: (0, _stylePropable.mergeStyles)({
      float: 'left',
      fontSize: theme.textSize || '14px',
      color: theme.textColor || '#000'
    }, props.textStyle)
  };
};

var IconHead = function IconHead(props, context) {
  var rootClass = props.rootClass;
  var imageSrc = props.imageSrc;
  var titleText = props.titleText;
  var style = props.style;


  var compTheme = context.compTheme || _themeManager2.default.getCompTheme(_lightRawTheme2.default) || {};
  compTheme = compTheme.iconHead || {};

  var _getStyles = getStyles(compTheme, props);

  var image = _getStyles.image;
  var title = _getStyles.title;


  return _react2.default.createElement(
    'div',
    { style: style, className: rootClass },
    _react2.default.createElement(_Image2.default, { source: imageSrc, style: image }),
    _react2.default.createElement(
      'h4',
      { style: title },
      titleText
    )
  );
};

IconHead.propTypes = {
  rootClass: string,
  imageSrc: string,
  titleText: string,
  style: object,
  textStyle: object,
  imageStyle: object
};

IconHead.ContextTypes = {
  compTheme: object
};

exports.default = (0, _contextPure2.default)(IconHead);