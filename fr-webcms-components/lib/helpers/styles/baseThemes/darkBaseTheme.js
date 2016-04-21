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

exports.default = {
  spacing: _spacing2.default,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: _colors2.default.cyan700,
    primary2Color: _colors2.default.cyan700,
    primary3Color: _colors2.default.grey600,
    primary4Color: _colors2.default.grey500,
    primary5Color: _colors2.default.redA700,
    primary6Color: _colors2.default.redA500,
    primary7Color: _colors2.default.grey700,
    primary8Color: _colors2.default.black,
    primary9Color: _colors2.default.white,
    accent1Color: _colors2.default.pinkA200,
    accent2Color: _colors2.default.pinkA400,
    accent3Color: _colors2.default.pinkA100,
    textColor: _colors2.default.fullWhite,
    alternateTextColor: '#303030',
    canvasColor: '#303030',
    borderColor: _colorManipulator2.default.fade(_colors2.default.fullWhite, 0.3),
    disabledColor: _colorManipulator2.default.fade(_colors2.default.fullWhite, 0.3),
    pickerHeaderColor: _colorManipulator2.default.fade(_colors2.default.fullWhite, 0.12),
    clockCircleColor: _colorManipulator2.default.fade(_colors2.default.fullWhite, 0.12)
  }
};