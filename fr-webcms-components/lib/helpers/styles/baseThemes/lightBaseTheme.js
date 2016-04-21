'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colors = require('../colors');

var _colors2 = _interopRequireDefault(_colors);

var _colorManipulator = require('../../utils/colorManipulator');

var _colorManipulator2 = _interopRequireDefault(_colorManipulator);

var _spacing = require('../spacing');

var _spacing2 = _interopRequireDefault(_spacing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 *  Light Theme is the default theme used in material-ui. It is guaranteed to
 *  have all theme variables needed for every component. Variables not defined
 *  in a custom theme will default to these values.
 */

exports.default = {
  spacing: _spacing2.default,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: _colors2.default.cyan500,
    primary2Color: _colors2.default.cyan700,
    primary3Color: _colors2.default.grey300,
    primary4Color: _colors2.default.grey600,
    primary5Color: _colors2.default.redA700,
    primary6Color: _colors2.default.redA500,
    primary7Color: _colors2.default.grey700,
    primary8Color: _colors2.default.black,
    primary9Color: _colors2.default.white,
    linkColor: _colors2.default.lightBlueA700,
    accent1Color: _colors2.default.pinkA200,
    accent2Color: _colors2.default.grey100,
    accent3Color: _colors2.default.redA700,
    textColor: _colors2.default.darkBlack,
    alternateTextColor: _colors2.default.white,
    canvasColor: _colors2.default.white,
    borderColor: _colors2.default.grey400,
    disabledColor: _colorManipulator2.default.fade(_colors2.default.darkBlack, 0.3),
    pickerHeaderColor: _colors2.default.cyan500,
    clockCircleColor: _colorManipulator2.default.fade(_colors2.default.darkBlack, 0.07)
  }
};