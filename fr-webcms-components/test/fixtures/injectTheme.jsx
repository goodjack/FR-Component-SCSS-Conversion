// import stubContext from 'react-stub-context';
import stubContext from '../reactStubContext';
import ThemeManager from 'helpers/styles/themeManager';
import DefaultRawTheme from 'helpers/styles/rawThemes/lightRawTheme';

function injectTheme(Component, theme) {
  const injectedTheme = theme || ThemeManager.getMuiTheme(DefaultRawTheme);
  return stubContext(Component, { muiTheme: injectedTheme });
}

module.exports = injectTheme;
