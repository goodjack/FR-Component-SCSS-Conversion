'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactAddonsUpdate = require('react-addons-update');

var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

var _extend = require('../utils/extend');

var _extend2 = _interopRequireDefault(_extend);

var _getMuiTheme = require('./getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import deprecatedExport from '../utils/deprecatedExport';

exports.default = // deprecatedExport(
{
  getMuiTheme: _getMuiTheme2.default,
  getCompTheme: _getMuiTheme.getCompTheme,
  modifyRawThemeSpacing: function modifyRawThemeSpacing(muiTheme, spacing) {
    return (0, _getMuiTheme2.default)((0, _reactAddonsUpdate2.default)(muiTheme.baseTheme, { spacing: { $set: spacing } }));
  },
  modifyRawThemePalette: function modifyRawThemePalette(muiTheme, palette) {
    var newPalette = (0, _extend2.default)(muiTheme.baseTheme.palette, palette);
    return (0, _getMuiTheme2.default)((0, _reactAddonsUpdate2.default)(muiTheme.baseTheme, { palette: { $set: newPalette } }));
  },
  modifyRawThemeFontFamily: function modifyRawThemeFontFamily(muiTheme, fontFamily) {
    return (0, _getMuiTheme2.default)((0, _reactAddonsUpdate2.default)(muiTheme.baseTheme, { fontFamily: { $set: fontFamily } }));
  }
}; // ,
//  'material-ui/lib/styles/theme-manager',
//  'material-ui/lib/styles/themeManager'
// );