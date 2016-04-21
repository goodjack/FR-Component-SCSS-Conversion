import ImmutabilityHelper from '../utils/immutabilityHelper';
import Styles from '../utils/styles';

// Moved this function to ImmutabilityHelper.merge
export const mergeStyles = function mergeStyles() {
  return ImmutabilityHelper.merge.apply(this, arguments);
};

// Moved this function to /utils/styles.js
export const mergeAndPrefix = function mergeAndPrefix() {
  return Styles.mergeAndPrefix.apply(this, arguments);
};

// prepareStyles is used to merge multiple styles, make sure they are flipped to rtl
// if needed, and then autoprefix them. It should probably always be used instead of
// mergeAndPrefix.
//
// Never call this on the same style object twice. As a rule of thumb,
// only call it when passing style attribute to html elements.
// If you call it twice you'll get a warning anyway.
export const prepareStyles = function prepareStyles() {
  return Styles.prepareStyles.apply(Styles,
    [
      (this.context && this.context.muiTheme),
    ].concat([].slice.apply(arguments))
  );
};
