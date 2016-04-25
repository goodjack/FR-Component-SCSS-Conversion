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

var Star = _react2.default.createClass({
  displayName: 'Star',


  mixins: [_reactAddonsPureRenderMixin2.default],

  render: function render() {
    var pathValue = 'M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,';
    pathValue += '8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z';
    return _react2.default.createElement(
      _index2.default,
      this.props,
      _react2.default.createElement('path', { d: pathValue })
    );
  }
});

exports.default = Star;