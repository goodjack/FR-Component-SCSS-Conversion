'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = require('./events');

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  _testSupportedProps: function _testSupportedProps(props) {
    var pos = void 0;
    var el = document.createElement('div');

    for (pos in props) {
      if (props.hasOwnProperty(pos) && el.style[pos] !== undefined) {
        return props[pos];
      }
    }
  },


  // Returns the correct event name to use
  transitionEndEventName: function transitionEndEventName() {
    return this._testSupportedProps({
      transition: 'transitionend',
      OTransition: 'otransitionend',
      MozTransition: 'transitionend',
      WebkitTransition: 'webkitTransitionEnd'
    });
  },
  animationEndEventName: function animationEndEventName() {
    return this._testSupportedProps({
      animation: 'animationend',
      '-o-animation': 'oAnimationEnd',
      '-moz-animation': 'animationend',
      '-webkit-animation': 'webkitAnimationEnd'
    });
  },
  onTransitionEnd: function onTransitionEnd(el, callback) {
    var transitionEnd = this.transitionEndEventName();

    var eventsCallback = function eventsCallback() {
      return callback();
    };

    _events2.default.once(el, transitionEnd, eventsCallback);
  },
  onAnimationEnd: function onAnimationEnd(el, callback) {
    var animationEnd = this.animationEndEventName();

    var animationEndCallback = function animationEndCallback() {
      return callback();
    };

    _events2.default.once(el, animationEnd, animationEndCallback);
  }
};