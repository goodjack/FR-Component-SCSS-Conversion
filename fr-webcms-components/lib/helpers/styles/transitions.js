'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {

  easeOutFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
  easeInOutFunction: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',

  easeOut: function easeOut(duration, property, delay, easeFunctionInput) {
    var easeFunction = easeFunctionInput;
    easeFunction = easeFunction || this.easeOutFunction;

    var newTransition = void 0;
    if (property && Object.prototype.toString.call(property) === '[object Array]') {

      var transitions = '';
      for (var pos = 0; pos < property.length; pos++) {
        if (transitions) transitions += ',';
        transitions += this.create(duration, property[pos], delay, easeFunction);
      }

      newTransition = transitions;
    } else {
      newTransition = this.create(duration, property, delay, easeFunction);
    }

    return newTransition;
  },
  create: function create(duration, property, delay, easeFunction) {
    var transitionDuration = duration || '450ms';
    var transitionProperty = property || 'all';
    var transitionDelay = delay || '0ms';
    var transitionEaseFunction = easeFunction || 'linear';

    return transitionProperty + ' ' + transitionDuration + ' ' + transitionEaseFunction + ' ' + transitionDelay;
  }
};