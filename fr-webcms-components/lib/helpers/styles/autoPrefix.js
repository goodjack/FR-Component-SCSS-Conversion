'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inlineStylePrefixer = require('inline-style-prefixer');

var _inlineStylePrefixer2 = _interopRequireDefault(_inlineStylePrefixer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixers = {};

exports.default = {
  getPrefixer: function getPrefixer() {
    // Server-side renderer needs to supply user agent
    if (typeof navigator === 'undefined') {
      console.warn('Material-UI expects the global navigator.userAgent to be defined\nfor server-side rendering. Set this property when receiving the request headers.');
      return null;
    }

    var userAgent = navigator.userAgent;

    // Get prefixing instance for this user agent
    var prefixer = prefixers[userAgent];

    // None found, create a new instance
    if (!prefixer) {
      prefixer = new _inlineStylePrefixer2.default(userAgent);
      prefixers[userAgent] = prefixer;
    }

    return prefixer;
  },
  all: function all(style) {
    if (!style) {
      return {};
    }

    var prefixer = this.getPrefixer();

    var prefixResult = void 0;
    if (prefixer) {
      prefixResult = prefixer.prefix(style);
    } else {
      prefixResult = _inlineStylePrefixer2.default.prefixAll(style);
    }

    return prefixResult;
  },
  set: function set(style, key, value) {
    var newStyle = style;
    newStyle[key] = value;

    var prefixer = this.getPrefixer();

    if (prefixer) {
      newStyle = prefixer.prefix(newStyle);
    } else {
      newStyle = _inlineStylePrefixer2.default.prefixAll(newStyle);
    }
  },
  getPrefix: function getPrefix(key) {
    var style = {};
    style[key] = true;

    var prefixer = this.getPrefixer();
    var prefixes = void 0;

    if (prefixer) {
      prefixes = Object.keys(prefixer.prefix(style));
    } else {
      prefixes = Object.keys(_inlineStylePrefixer2.default.prefixAll(style));
    }

    return prefixes ? prefixes[0] : key;
  }
};