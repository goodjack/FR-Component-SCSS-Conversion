'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  isDescendant: function isDescendant(parent, child) {
    var node = child.parentNode;

    while (node !== null) {
      if (node === parent) return true;
      node = node.parentNode;
    }

    return false;
  },
  offset: function offset(el) {
    var rect = el.getBoundingClientRect();
    return {
      top: rect.top + document.body.scrollTop,
      left: rect.left + document.body.scrollLeft
    };
  },
  getStyleAttributeAsNumber: function getStyleAttributeAsNumber(el, attr) {
    var attrStyle = el.style[attr];
    var attrNum = 0;
    if (attrStyle && attrStyle.length) {
      attrNum = parseInt(attrStyle, 10);
    }

    return attrNum;
  },
  addClass: function addClass(element, className) {
    var el = element;
    if (el.classList) {
      el.classList.add(className);
    } else {
      el.className += ' ' + className;
    }
  },
  removeClass: function removeClass(element, className) {
    var el = element;
    if (el.classList) {
      el.classList.remove(className);
    } else {
      var replacePattern = '(^|\\b)';
      replacePattern += className.split(' ').join('|');
      replacePattern += '(\\b|$)';
      el.className = el.className.replace(new RegExp(replacePattern, 'gi'), ' ');
    }
  },
  hasClass: function hasClass(el, className) {
    var result = void 0;
    if (el.classList) {
      result = el.classList.contains(className);
    } else {
      var regexPattern = '(^| )';
      regexPattern += className;
      regexPattern += '( |$)';
      result = new RegExp(regexPattern, 'gi').test(el.className);
    }

    return result;
  },
  toggleClass: function toggleClass(el, className) {
    if (this.hasClass(el, className)) {
      this.removeClass(el, className);
    } else {
      this.addClass(el, className);
    }
  },
  forceRedraw: function forceRedraw(element) {
    var el = element;
    var originalDisplay = el.style.display;

    el.style.display = 'none';
    el.style.display = originalDisplay;
  },
  withoutTransition: function withoutTransition(element, callback) {
    var el = element;
    var originalTransition = el.style.transition;

    // turn off transition
    el.style.transition = null;

    callback();

    // force a redraw
    this.forceRedraw(el);

    // put the transition back
    el.style.transition = originalTransition;
  }
};