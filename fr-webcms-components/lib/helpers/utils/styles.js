'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _autoPrefix = require('../styles/autoPrefix');

var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

var _immutabilityHelper = require('../utils/immutabilityHelper');

var _immutabilityHelper2 = _interopRequireDefault(_immutabilityHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reTranslate = /((^|\s)translate(3d|X)?\()(\-?[\d]+)/;

var reSkew = /((^|\s)skew(x|y)?\()\s*(\-?[\d]+)(deg|rad|grad)(,\s*(\-?[\d]+)(deg|rad|grad))?/;

exports.default = {
  merge: function merge() {
    return _immutabilityHelper2.default.merge.apply(this, arguments);
  },
  mergeAndPrefix: function mergeAndPrefix() {
    var mergedStyles = _immutabilityHelper2.default.merge.apply(this, arguments);
    return _autoPrefix2.default.all(mergedStyles);
  },


  // This function ensures that `style` supports both ltr and rtl directions by checking
  //   `styleConstants` in `muiTheme` and replacing attribute keys if necessary.
  ensureDirection: function ensureDirection(muiTheme, styleInput) {
    var style = styleInput;
    if (process.env.NODE_ENV !== 'production') {
      if (style.didFlip) {
        console.warn(new Error('You\'re calling `ensureDirection` on the same style object twice.'));
      }

      style = _immutabilityHelper2.default.merge({
        didFlip: 'true'
      }, style);
    }

    // Left to right is the default. No need to flip anything.
    if (!muiTheme || !muiTheme.isRtl) return style;

    var flippedAttributes = {
      // Keys and their replacements.
      right: 'left',
      left: 'right',
      marginRight: 'marginLeft',
      marginLeft: 'marginRight',
      paddingRight: 'paddingLeft',
      paddingLeft: 'paddingRight',
      borderRight: 'borderLeft',
      borderLeft: 'borderRight'
    };

    var newStyle = {};
    var stylesPusher = function stylesPusher(attribute) {
      var value = style[attribute];
      var key = attribute;

      if (flippedAttributes.hasOwnProperty(attribute)) {
        key = flippedAttributes[attribute];
      }

      switch (attribute) {
        case 'float':
        case 'textAlign':
          if (value === 'right') {
            value = 'left';
          } else if (value === 'left') {
            value = 'right';
          }

          break;
        case 'direction':
          if (value === 'ltr') {
            value = 'rtl';
          } else if (value === 'rtl') {
            value = 'ltr';
          }

          break;
        case 'transform':
          var matches = value.match(reTranslate);
          if (matches) {
            value = value.replace(matches[0], matches[1] + -parseFloat(matches[4]));
          }

          matches = value.match(reSkew);
          if (matches) {
            value = value.replace(matches[0], matches[1] + -parseFloat(matches[4]) + matches[5] + matches[6] ? ',' + -parseFloat(matches[7]) + matches[8] : '');
          }

          break;
        case 'transformOrigin':
          if (value.indexOf('right') > -1) {
            value = value.replace('right', 'left');
          } else if (value.indexOf('left') > -1) {
            value = value.replace('left', 'right');
          }

          break;
        default:
          break;
      }

      newStyle[key] = value;
    };

    Object.keys(style).forEach(stylesPusher);

    return newStyle;
  },
  prepareStyles: function prepareStyles(muiTheme) {
    for (var _len = arguments.length, stylesInput = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      stylesInput[_key - 1] = arguments[_key];
    }

    var styles = stylesInput;
    styles = styles.length > 1 ? _immutabilityHelper2.default.merge.apply(this, styles) : styles[0] || {};
    var flipped = this.ensureDirection(muiTheme, styles);
    return _autoPrefix2.default.all(flipped);
  }
};