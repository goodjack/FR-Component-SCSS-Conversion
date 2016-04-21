'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,\n      19L12,13.41L17.59,\n      19L19,17.59L13.41,12L19,6.41Z'], ['M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,\n      19L12,13.41L17.59,\n      19L19,17.59L13.41,12L19,6.41Z']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsPureRenderMixin = require('react-addons-pure-render-mixin');

var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CloseIcon = _react2.default.createClass({
  displayName: 'CloseIcon',


  mixins: [_reactAddonsPureRenderMixin2.default],

  render: function render() {
    var str = String.raw(_templateObject);
    return _react2.default.createElement(
      _index2.default,
      this.props,
      _react2.default.createElement('path', { d: str })
    );
  }
});

exports.default = CloseIcon;