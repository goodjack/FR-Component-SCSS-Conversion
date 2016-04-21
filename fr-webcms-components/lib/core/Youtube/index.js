'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lightRawTheme = require('../../helpers/styles/rawThemes/lightRawTheme');

var _lightRawTheme2 = _interopRequireDefault(_lightRawTheme);

var _themeManager = require('../../helpers/styles/themeManager');

var _themeManager2 = _interopRequireDefault(_themeManager);

var _stylePropable = require('../../helpers/utils/stylePropable');

var _contextPure = require('../../helpers/composedComponents/contextPure');

var _contextPure2 = _interopRequireDefault(_contextPure);

var _configurationManager = require('../../helpers/configuration/configurationManager');

var _configurationManager2 = _interopRequireDefault(_configurationManager);

var _baseConfig = require('../../helpers/configuration/baseConfig');

var _baseConfig2 = _interopRequireDefault(_baseConfig);

var _urlGenerator = require('../../helpers/utils/urlGenerator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var string = _react.PropTypes.string;
var object = _react.PropTypes.object;
var bool = _react.PropTypes.bool;


var styles = {
  width: '100%',
  height: '100%',
  border: 0
};

var getRelevantContextKeys = function getRelevantContextKeys(themeAndConfig) {
  var compConfig = themeAndConfig.compConfig;

  var ytConfig = compConfig && compConfig.youtube || {};
  return _extends({}, ytConfig);
};

var getUrl = function getUrl(props, themeAndConfig) {
  var allowAutoplay = props.allowAutoplay;
  var allowFullScreen = props.allowFullScreen;
  var allowLooping = props.allowLooping;
  var origin = props.origin;
  var showControls = props.showControls;
  var showRelatedVideos = props.showRelatedVideos;
  var source = props.source;
  var youtubeEmbedUrlPrefix = props.youtubeEmbedUrlPrefix;

  var youtube = getRelevantContextKeys(themeAndConfig);
  var urlPrefix = youtubeEmbedUrlPrefix || youtube.embedUrlPrefix || 'https://www.youtube.com/embed/';
  var requestOrigin = origin || window.location.origin;
  var ytParams = {
    rel: 0,
    autoplay: 0,
    fs: 1
  };

  if (showRelatedVideos || showRelatedVideos !== false && youtube.showRelatedVideos) {
    ytParams.rel = 1;
  }

  if (allowAutoplay || allowAutoplay !== false && youtube.allowAutoplay) {
    ytParams.autoplay = 1;
  }

  if (showControls === false || !showControls && youtube.showControls === false) {
    ytParams.controls = 0;
    ytParams.fs = 0;
  }

  if (allowLooping || allowLooping !== false && youtube.allowLooping) {
    ytParams.loop = 1;
    ytParams.playlist = source;
  }

  if (allowFullScreen === false || !allowFullScreen && youtube.allowFullScreen === false) {
    ytParams.fs = 0;
  }

  ytParams.origin = requestOrigin;
  var prefix = '' + urlPrefix + source;
  var url = (0, _urlGenerator.generateUrl)(prefix, ytParams);
  return url;
};

// stateless component definition in Es6
var Youtube = function Youtube(props, context) {

  var themeAndConfig = {
    compTheme: context.compTheme || _themeManager2.default.getCompTheme(_lightRawTheme2.default),
    compConfig: context.compConfig || _configurationManager2.default.getCompConfig(_baseConfig2.default)
  };
  var className = props.className;
  var id = props.id;
  var allowFullScreen = props.allowFullScreen;

  var other = _objectWithoutProperties(props, ['className', 'id', 'allowFullScreen']);

  var youtube = getRelevantContextKeys(themeAndConfig);
  var url = getUrl(props, themeAndConfig);
  var allowFullScreenVal = 1;
  if (allowFullScreen === false || !allowFullScreen && youtube.allowFullScreen === false) {
    allowFullScreenVal = 0;
  }

  return _react2.default.createElement('iframe', {
    id: id,
    className: className,
    src: url,
    style: _stylePropable.mergeStyles.apply(undefined, [styles, props.style]),
    allowFullScreen: allowFullScreenVal
  });
};

Youtube.propTypes = {
  allowAutoplay: bool,
  allowFullScreen: bool,
  allowLooping: bool,
  className: string,
  id: string,
  origin: string,
  showControls: bool,
  showRelatedVideos: bool,
  source: string.isRequired,
  style: object,
  youtubeEmbedUrlPrefix: string
};

Youtube.contextTypes = {
  compTheme: object,
  compConfig: object
};

exports.default = (0, _contextPure2.default)(Youtube);