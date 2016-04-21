export default {

  isDescendant(parent, child) {
    let node = child.parentNode;

    while (node !== null) {
      if (node === parent) return true;
      node = node.parentNode;
    }

    return false;
  },

  offset(el) {
    const rect = el.getBoundingClientRect();
    return {
      top: rect.top + document.body.scrollTop,
      left: rect.left + document.body.scrollLeft,
    };
  },

  getStyleAttributeAsNumber(el, attr) {
    const attrStyle = el.style[attr];
    let attrNum = 0;
    if (attrStyle && attrStyle.length) {
      attrNum = parseInt(attrStyle, 10);
    }

    return attrNum;
  },

  addClass(element, className) {
    const el = element;
    if (el.classList) {
      el.classList.add(className);
    } else {
      el.className += ` ${className}`;
    }
  },

  removeClass(element, className) {
    const el = element;
    if (el.classList) {
      el.classList.remove(className);
    } else {
      let replacePattern = '(^|\\b)';
      replacePattern += className.split(' ').join('|');
      replacePattern += '(\\b|$)';
      el.className = el.className
        .replace(new RegExp(replacePattern, 'gi'), ' ');
    }
  },

  hasClass(el, className) {
    let result;
    if (el.classList) {
      result = el.classList.contains(className);
    } else {
      let regexPattern = '(^| )';
      regexPattern += className;
      regexPattern += '( |$)';
      result = new RegExp(regexPattern, 'gi').test(el.className);
    }

    return result;
  },

  toggleClass(el, className) {
    if (this.hasClass(el, className)) {
      this.removeClass(el, className);
    } else {
      this.addClass(el, className);
    }
  },

  forceRedraw(element) {
    const el = element;
    const originalDisplay = el.style.display;

    el.style.display = 'none';
    el.style.display = originalDisplay;
  },

  withoutTransition(element, callback) {
    const el = element;
    const originalTransition = el.style.transition;

    // turn off transition
    el.style.transition = null;

    callback();

    // force a redraw
    this.forceRedraw(el);

    // put the transition back
    el.style.transition = originalTransition;
  },

};
