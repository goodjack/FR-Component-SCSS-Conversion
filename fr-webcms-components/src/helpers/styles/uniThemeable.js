import React from 'react';
import DefaultRawTheme from './rawThemes/lightRawTheme';
import ThemeManager from './themeManager';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default function uniThemeable(WrappedComponent) {
  const UniComponent =
  function UniComponent(props, { uniTheme = ThemeManager.getMuiTheme(DefaultRawTheme) }) {
    return <WrappedComponent {...props} uniTheme={uniTheme} />;
  };

  UniComponent.displayName = getDisplayName(WrappedComponent);
  UniComponent.contextTypes = {
    uniTheme: React.PropTypes.object,
  };
  UniComponent.childContextTypes = {
    uniTheme: React.PropTypes.object,
  };

  return UniComponent;
}
