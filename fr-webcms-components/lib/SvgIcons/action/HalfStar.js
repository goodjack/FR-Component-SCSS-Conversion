'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsPureRenderMixin = require('react-addons-pure-render-mixin');

var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HalfStar = _react2.default.createClass({
  displayName: 'HalfStar',


  mixins: [_reactAddonsPureRenderMixin2.default],

  render: function render() {
    var pathValue = 'M12,15.89V6.59L13.71,10.63L18.09,11L14.77,13.88L15.76,18.16M22,9.74L14.81,';
    pathValue += '9.13L12,2.5L9.19,9.13L2,9.74L7.45,14.47L5.82,21.5L12,17.77L18.18,';
    pathValue += '21.5L16.54,14.47L22,9.74Z';
    return _react2.default.createElement(
      _index2.default,
      this.props,
      _react2.default.createElement('path', { d: pathValue })
    );
  }
});

exports.default = HalfStar;