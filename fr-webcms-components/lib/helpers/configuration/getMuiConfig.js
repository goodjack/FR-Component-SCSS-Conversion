'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getMuiConfig;
exports.getCompConfig = getCompConfig;

var _lodash = require('lodash.merge');

var _lodash2 = _interopRequireDefault(_lodash);

var _baseConfig = require('./baseConfig');

var _baseConfig2 = _interopRequireDefault(_baseConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get the component config corresponding to a base config.
 */
function getMuiConfig(overrideConfig) {
  return (0, _lodash2.default)({}, _baseConfig2.default, overrideConfig);
}

function getCompConfig(overrideConfig) {
  return (0, _lodash2.default)({}, _baseConfig2.default, overrideConfig);
}