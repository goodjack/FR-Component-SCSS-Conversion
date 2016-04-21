export default {

  easeOutFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
  easeInOutFunction: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',

  easeOut(duration, property, delay, easeFunctionInput) {
    let easeFunction = easeFunctionInput;
    easeFunction = easeFunction || this.easeOutFunction;

    let newTransition;
    if (property &&
      Object.prototype.toString.call(property) === '[object Array]') {

      let transitions = '';
      for (let pos = 0; pos < property.length; pos++) {
        if (transitions) transitions += ',';
        transitions += this.create(duration, property[pos], delay, easeFunction);
      }

      newTransition = transitions;
    } else {
      newTransition = this.create(duration, property, delay, easeFunction);
    }

    return newTransition;
  },

  create(duration, property, delay, easeFunction) {
    const transitionDuration = duration || '450ms';
    const transitionProperty = property || 'all';
    const transitionDelay = delay || '0ms';
    const transitionEaseFunction = easeFunction || 'linear';

    return `${transitionProperty} ${transitionDuration} ${transitionEaseFunction} ${transitionDelay}`;
  },
};
