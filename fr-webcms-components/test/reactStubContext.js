// "react-stub-context": "^0.3.0",

import React from 'react';
import StubbedContextParent from './StubbedContextParent';

function stubContext(BaseComponentOrig, inputContext) {
  const BaseComponent = BaseComponentOrig;
  let context = inputContext;
  if (typeof context === 'undefined' || context === null) context = {};

  const _contextTypes = {};
  const _context = context;

  try {
    const contextAggregator = function contextAggregator(key) {
      _contextTypes[key] = React.PropTypes.any;
    };

    Object.keys(_context).forEach(contextAggregator);
  } catch (err) {
    throw new TypeError('createdStubbedContextComponent requires an object');
  }

  StubbedContextParent.contextTypes = _contextTypes;
  StubbedContextParent.childContextTypes = _contextTypes;
  StubbedContextParent.getChildContext = function getChildContext() {
    return _context;
  };

  class StubbedContextHandler extends React.Component {
    displayName: 'StubbedContextHandler';

    getWrappedElement() { return this._wrappedElement; }

    getWrappedParentElement() { return this._wrappedParentElement; }

    render() {
      this._wrappedElement = <BaseComponent {...this.state} {...this.props} />;
      this._wrappedParentElement = <StubbedContextParent>{this._wrappedElement}</StubbedContextParent>;

      return this._wrappedParentElement;
    }
  }
  StubbedContextHandler.childContextTypes = _contextTypes;
  StubbedContextHandler.getChildContext = function getChildContext() {
    return _context;
  };

  BaseComponent.contextTypes = Object.assign({}, BaseComponent.contextTypes, _contextTypes);

  StubbedContextHandler.getWrappedComponent = function getWrappedComponent() { return BaseComponent; };

  StubbedContextHandler.getWrappedParentComponent = function getWrappedComponent() { return StubbedContextParent; };

  return StubbedContextHandler;
}

module.exports = stubContext;
