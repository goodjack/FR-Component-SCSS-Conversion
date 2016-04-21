import Events from './events';

export default {

  _testSupportedProps(props) {
    let pos;
    const el = document.createElement('div');

    for (pos in props) {
      if (props.hasOwnProperty(pos) && el.style[pos] !== undefined) {
        return props[pos];
      }
    }
  },

  // Returns the correct event name to use
  transitionEndEventName() {
    return this._testSupportedProps({
      transition: 'transitionend',
      OTransition: 'otransitionend',
      MozTransition: 'transitionend',
      WebkitTransition: 'webkitTransitionEnd',
    });
  },

  animationEndEventName() {
    return this._testSupportedProps({
      animation: 'animationend',
      '-o-animation': 'oAnimationEnd',
      '-moz-animation': 'animationend',
      '-webkit-animation': 'webkitAnimationEnd',
    });
  },

  onTransitionEnd(el, callback) {
    const transitionEnd = this.transitionEndEventName();

    const eventsCallback = function eventsCallback() {
      return callback();
    };

    Events.once(el, transitionEnd, eventsCallback);
  },

  onAnimationEnd(el, callback) {
    const animationEnd = this.animationEndEventName();

    const animationEndCallback = function animationEndCallback() {
      return callback();
    };

    Events.once(el, animationEnd, animationEndCallback);
  },
};
