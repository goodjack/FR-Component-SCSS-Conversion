'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var objToParams = exports.objToParams = function objToParams(obj) {
  return Object.keys(obj).map(function (key) {
    return key + '=' + obj[key];
  }).join('&');
};

var generateUrl = exports.generateUrl = function generateUrl(prefix, paramsObj) {
  var concatParams = objToParams(paramsObj);
  return prefix + '?' + concatParams;
};