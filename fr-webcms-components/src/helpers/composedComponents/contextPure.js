import React, { Component } from 'react';
import shallowEqual from '../utils/shallowEqual';

const relevantContextKeysEqual = (
  { getRelevantContextKeys, getChildrenClasses },
  currentContext,
  nextContext
) => {
  // Get those keys from current object's context that we care
  // about and check whether those keys have changed or not
  if (getRelevantContextKeys) {
    const currentContextKeys = getRelevantContextKeys(currentContext);
    const nextContextKeys = getRelevantContextKeys(nextContext);

    if (!shallowEqual(currentContextKeys, nextContextKeys)) {
      return false;
    }
  }

  // Check if children context keys changed
  if (getChildrenClasses) {
    const areKeysEqual = getChildrenClasses().findIndex(
      child => !relevantContextKeysEqual(child, currentContext, nextContext)
    ) === -1;
    return areKeysEqual;
  }

  // context keys are equal
  return true;
};

export default function composeContextPure(OriginalComponent) {
  class composedWithContextPure extends Component {
    // For get the name & display name of the component
    static displayName = OriginalComponent.displayName || OriginalComponent.name;

    // Don't update if state, prop, and context are equal
    shouldComponentUpdate(nextProps, nextState, nextContext) {
      const { context } = this;

      // If either the props or state have changed, component should update
      if (!shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState)) {
        return true;
      }

      // If current theme and next theme are both undefined, do not update
      if (!context.muiTheme && !nextContext.muiTheme) {
        return false;
      }

      // If both themes exist, compare keys only if current theme is not static
      if (context.muiTheme && nextContext.muiTheme) {
        return !context.muiTheme.static &&
          !relevantContextKeysEqual(this.constructor, context.muiTheme, nextContext.muiTheme);
      }

      // At this point it is guaranteed that exactly one theme is undefined so simply update
      return true;
    }

    render() {
      return <OriginalComponent {...this.props} {...this.state} />;
    }
  }

  return composedWithContextPure;
}
