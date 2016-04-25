'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jsonpGetRequest = exports.getPostDetails = exports.getApiDetail = undefined;

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _fetchJsonp = require('fetch-jsonp');

var _fetchJsonp2 = _interopRequireDefault(_fetchJsonp);

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
        console.error(404);
      } else {
        console.error('Catelog API failed ', error.message || error.status);
      }

      if (failureCallback) {
        failureCallback(error.status);
      }
    } else {
      var parsedData = JSON.parse(result.text);
      successCallback(parsedData);
    }
  });
};

var getPostDetails = exports.getPostDetails = function getPostDetails(id, type, successCallback, failureCallback) {
  _superagent2.default.get('/social/' + type).query({ id: id }).accept('application/json').end(function (error, result) {
    if (error) {
      if (error.status === 404) {
        console.error(404);
      } else {
        console.error('/' + type + ' API failed', error.message || error.status);
      }

      if (failureCallback) {
        failureCallback(error.status);
      }
    } else {
      var parsedData = JSON.parse(result.text);
      successCallback(parsedData);
    }
  });
};

var jsonpGetRequest = exports.jsonpGetRequest = function jsonpGetRequest(requestUrl, successCallback, failureCallback) {
  (0, _fetchJsonp2.default)(requestUrl).then(function (response) {
    return response.json();
  }).then(function (json) {
    return successCallback(json);
  }).catch(function (err) {
    return failureCallback(err);
  });
};