'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var viewBox = '0 -10 40 40';
var dOne = 'M8,18l0,11.2c0,1.5,1.2,2.8,2.8,2.8h18.5c1.5,0,2.8-1.2,2.8-2.8    L32,18H8z';
var dTwo = 'M8,18l0-7.2C8,9.2,9.2,8,10.8,8h18.5c1.5,0,2.8,1.2,2.8,2.8    l0,7.2H8z';
var dThree = 'M20,13c-3.9,0-7,3.1-7,7c0,3.9,3.1,7,7,7c3.9,0,7-3.1,7-7    C27,16.1,23.9,13,20,13';
var dFour = 'M20,15c-2.8,0-5,2.2-5,5c0,2.8,2.2,5,5,5c2.8,0,5-2.2,5-5    C25,17.2,22.8,15,20,15';
var dFive = 'M29,11.6c0-0.3-0.3-0.6-0.6-0.6h-1.8c-0.3,0-0.6,0.3-0.6,0.6v1.8    ';
dFive += 'c0,0.3,0.3,0.6,0.6,0.6h1.8c0.3,0,0.6-0.3,0.6-0.6V11.6z';
var dSix = 'M20,16.7c-1.8,0-3.3,1.5-3.3,3.3c0,1.8,1.5,3.3,3.3,3.3    ';
dSix += 'c1.8,0,3.3-1.5,3.3-3.3C23.3,18.1,21.8,16.7,20,16.7';

var Instagram = function Instagram() {
  return _react2.default.createElement(
    _index2.default,
    { viewBox: viewBox },
    _react2.default.createElement('path', {
      'clip-rule': 'evenodd',
      d: dOne,
      fill: '#DFD1C7',
      'fill-rule': 'evenodd'
    }),
    _react2.default.createElement('path', {
      'clip-rule': 'evenodd',
      d: dTwo,
      fill: '#A46D4E',
      'fill-rule': 'evenodd'
    }),
    _react2.default.createElement('rect', {
      'clip-rule': 'evenodd',
      fill: '#845640',
      'fill-rule': 'evenodd',
      height: '2',
      width: '24',
      x: '8',
      y: '16'
    }),
    _react2.default.createElement('path', {
      'clip-rule': 'evenodd',
      d: dThree,
      fill: '#2C3E50',
      'fill-rule': 'evenodd'
    }),
    _react2.default.createElement('path', {
      'clip-rule': 'evenodd',
      d: dFour,
      fill: '#34495E',
      'fill-rule': 'evenodd'
    }),
    _react2.default.createElement('path', {
      'clip-rule': 'evenodd',
      d: dFive,
      fill: '#2C3E50',
      'fill-rule': 'evenodd'
    }),
    _react2.default.createElement('rect', {
      'clip-rule': 'evenodd',
      fill: '#E74C3C',
      'fill-rule': 'evenodd',
      height: '6',
      width: '1',
      x: '11',
      y: '8'
    }),
    _react2.default.createElement('rect', {
      'clip-rule': 'evenodd',
      fill: '#F1C40F',
      'fill-rule': 'evenodd',
      height: '6',
      width: '1',
      x: '12',
      y: '8'
    }),
    _react2.default.createElement('rect', {
      'clip-rule': 'evenodd',
      fill: '#3498D8',
      'fill-rule': 'evenodd',
      height: '6',
      width: '1',
      x: '13',
      y: '8'
    }),
    _react2.default.createElement('rect', {
      'clip-rule': 'evenodd',
      fill: '#2ECC71',
      'fill-rule': 'evenodd',
      height: '6',
      width: '1',
      x: '14',
      y: '8'
    }),
    _react2.default.createElement('path', {
      'clip-rule': 'evenodd',
      d: dSix,
      fill: '#7F8C8D',
      'fill-rule': 'evenodd'
    })
  );
};

exports.default = Instagram;