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

var ActionAddShoppingCart = _react2.default.createClass({
  displayName: 'ActionAddShoppingCart',


  mixins: [_reactAddonsPureRenderMixin2.default],

  render: function render() {
    return _react2.default.createElement(
      _index2.default,
      this.props,
      _react2.default.createElement('path', { d: 'M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z' })
    );
  }
});

exports.default = ActionAddShoppingCart;