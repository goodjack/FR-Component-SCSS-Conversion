'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var replaceString = function replaceString(str, match, fn) {
  if (str === '') {
    return str;
  } else if (!str || !(0, _lodash.isString)(str)) {
    throw new TypeError('First argument to react-string-replace#replaceString must be a string');
  }

  var re = match;
  if (!(0, _lodash.isRegExp)(re)) {
    re = new RegExp('(' + (0, _lodash.escapeRegExp)(re) + ')', 'gi');
  }

  var result = str.split(re);
  for (var index = 1, length = result.length; index < length; index += 2) {
    result[index] = fn(result[index], index);
  }

  return result;
};

var reactStringReplace = function reactStringReplace(source, match, fn) {
  var sources = !(0, _lodash.isArray)(source) ? [source] : source;
  return (0, _lodash.flatten)(sources.map(function (part) {
    return (0, _lodash.isString)(part) ? replaceString(part, match, fn) : part;
  }));
};

exports.default = reactStringReplace;