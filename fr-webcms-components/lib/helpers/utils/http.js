'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getApiDetail = undefined;

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getApiDetail = exports.getApiDetail = function getApiDetail(queryData, successCallback, failureCallback) {
  var queryParameter = queryData.queryParameter;
  var userName = queryData.userName;
  var password = queryData.password;
  var content = queryData.content;
  var productUrl = queryData.productUrl;

  var queryValue = queryParameter ? queryParameter : '';

  var req = _superagent2.default.post(productUrl);
  if (userName && password && content) {
    req = req.auth(userName, password).set('Content-Type', content);
  }

  req.accept('application/json').send(queryValue).end(function (error, result) {
    if (error) {
      if (error.status === 404) {
        console.log(404);
        failureCallback(error.status);
      } else {
        console.log('Catelog API failed ', error.message || error.status);
        failureCallback(error.status);
      }
    } else {
      var parsedData = JSON.parse(result.text);
      successCallback(parsedData);
    }
  });
};