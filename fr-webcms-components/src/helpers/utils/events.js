export default {

  once(el, type, callback) {
    const typeArray = type ? type.split(' ') : [];
    const recursiveFunction = (event) => {
      event.target.removeEventListener(event.type, recursiveFunction);
      return callback(event);
    };

    for (let index = typeArray.length - 1; index >= 0; index--) {
      this.on(el, typeArray[index], recursiveFunction);
    }
  },

  on(el, type, callback) {
    if (el.addEventListener) {
      el.addEventListener(type, callback);
    } else {
      // IE8+ Support
      el.attachEvent(`on${type}`, () => {
        callback.call(el);
      });
    }
  },

  off(el, type, callback) {
    if (el.removeEventListener) {
      el.removeEventListener(type, callback);
    } else {
      // IE8+ Support
      el.detachEvent(`on${type}`, callback);
    }
  },

  isKeyboard(event) {
    return [
      'keydown',
      'keypress',
      'keyup',
    ].indexOf(event.type) !== -1;
  },
};
