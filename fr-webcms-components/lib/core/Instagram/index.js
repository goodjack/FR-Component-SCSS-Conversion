'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lightRawTheme = require('../../helpers/styles/rawThemes/lightRawTheme');

var _lightRawTheme2 = _interopRequireDefault(_lightRawTheme);

var _themeManager = require('../../helpers/styles/themeManager');

var _themeManager2 = _interopRequireDefault(_themeManager);

var _dateTime = require('../../helpers/utils/dateTime');

var _dateTime2 = _interopRequireDefault(_dateTime);

var _configurationManager = require('../../helpers/configuration/configurationManager');

var _configurationManager2 = _interopRequireDefault(_configurationManager);

var _baseConfig = require('../../helpers/configuration/baseConfig');

var _baseConfig2 = _interopRequireDefault(_baseConfig);

var _http = require('../../helpers/utils/http');

var _Text = require('../../Text');

var _Text2 = _interopRequireDefault(_Text);

var _Null = require('../Null');

var _Null2 = _interopRequireDefault(_Null);

var _Hero = require('../../uniqlo/Hero');

var _Hero2 = _interopRequireDefault(_Hero);

var _Container = require('../Container');

var _Container2 = _interopRequireDefault(_Container);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _ImagePlusText = require('../../uniqlo/ImagePlusText');

var _ImagePlusText2 = _interopRequireDefault(_ImagePlusText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var string = _react.PropTypes.string;
var object = _react.PropTypes.object;
var oneOf = _react.PropTypes.oneOf;


var getRelevantContextKeys = function getRelevantContextKeys(themeAndConfig) {
  var compTheme = themeAndConfig.compTheme;
  var compConfig = themeAndConfig.compConfig;

  var instaTheme = compTheme && compTheme.instagram || {};
  var instaConfig = compConfig && compConfig.instagram || {};
  return _extends({}, instaTheme, instaConfig);
};

var getStyles = function getStyles(themeAndConfig) {
  var insta = getRelevantContextKeys(themeAndConfig);
  return {
    titleTextStyle: {
      fontSize: '1em',
      fontWeight: 'normal',
      color: '#B1B1B1',
      padding: 5
    },
    captionTextStyle: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      WebkitLineClamp: insta.captionLinesToShow || 3,
      WebkitBoxOrient: 'vertical',
      fontWeight: 'normal',
      fontSize: '1em',
      color: insta.captionTextColor || 'black'
    }
  };
};

// function to fetch time at which instagram post was done
var getInstagramPostDatetime = function getInstagramPostDatetime(htmlString) {
  var reg = new RegExp('datetime=\"(.*)\">');
  var dateTimeVal = reg.exec(htmlString)[1];
  var postDate = new Date(dateTimeVal);
  postDate = postDate.getTime();
  var currentDate = new Date();
  currentDate = currentDate.getTime();
  var postAge = _dateTime2.default.getDateDiffText(currentDate, postDate);
  return postAge;
};

// retruns instagram markup to render
var getInstaMarkup = function getInstaMarkup(comp) {
  var _comp$props = comp.props;
  var variation = _comp$props.variation;
  var title = _comp$props.title;
  var themeAndConfig = comp.themeAndConfig;

  var insta = getRelevantContextKeys(themeAndConfig);
  var styles = getStyles(themeAndConfig);
  var childProp = comp.state.variationProps;
  var containerHeight = insta.containerHeight || 350;

  // sets variable to either title or post author name in case of imageWithCaption variation
  var instaTitle = title || childProp.authorName;

  // sets instagram post title markup
  var textMarkup = _react2.default.createElement(_Text2.default, { content: instaTitle, style: styles.titleTextStyle });
  var markupToRender = void 0;
  if (variation === 'imageWithCaption') {
    markupToRender = _react2.default.createElement(
      _Container2.default,
      { height: containerHeight },
      _react2.default.createElement(_Icon2.default, { name: 'Instagram' }),
      instaTitle ? textMarkup : _react2.default.createElement(_Null2.default, null),
      _react2.default.createElement(_ImagePlusText2.default, {
        text: childProp.text,
        textStyle: styles.captionTextStyle,
        imageSrc: childProp.imageSrc,
        variation: 'imageTop'
      })
    );
  } else {
    markupToRender = _react2.default.createElement(
      _Container2.default,
      { height: containerHeight },
      title ? textMarkup : _react2.default.createElement(_Null2.default, null),
      _react2.default.createElement(_Hero2.default, childProp)
    );
  }

  return markupToRender;
};

var Instagram = function (_Component) {
  _inherits(Instagram, _Component);

  function Instagram() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Instagram);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Instagram)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      imageSrc: null,
      title: null,
      postAge: null
    }, _this.themeAndConfig = {
      compTheme: _this.context.compTheme || _themeManager2.default.getCompTheme(_lightRawTheme2.default),
      compConfig: _this.context.compConfig || _configurationManager2.default.getCompConfig(_baseConfig2.default)
    }, _this.fetchInstagramPostDetails = function (themeAndConfig, instagramId, successCallback, failureCallback) {

      var insta = getRelevantContextKeys(themeAndConfig);
      var instaUrl = insta.instagramApiUrl + '?url=' + insta.instagramImageUrl + instagramId;

      // make jsonp get request to instagram API
      (0, _http.jsonpGetRequest)(instaUrl, successCallback, failureCallback);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Instagram, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var _props = this.props;
      var variation = _props.variation;
      var instagramId = _props.instagramId;
      var imageTitle = _props.imageTitle;
      var textareaBgColor = _props.textareaBgColor;
      var mode = _props.mode;
      var imageSrc = _props.imageSrc;
      var imageCaption = _props.imageCaption;
      var postAge = _props.postAge;

      var styles = getStyles(this.themeAndConfig);
      var screenRatio = void 0;
      var variationProps = void 0;
      if (variation === 'imageLeft') {
        screenRatio = '60:40';
      }

      variationProps = {
        imageSrc: imageSrc,
        text: imageCaption,
        textStyle: styles.captionTextStyle,
        textareaBgColor: textareaBgColor,
        imageTitle: imageTitle,
        icon: 'Instagram',
        iconText: postAge,
        variation: variation,
        screenRatio: screenRatio
      };
      if (mode === 'static') {
        this.setState({ variationProps: variationProps });
      } else if (mode === 'dynamic' && instagramId) {
        var promiseObj = new Promise(function (resolve, reject) {
          _this2.fetchInstagramPostDetails(_this2.themeAndConfig, instagramId, resolve, reject);
        });
        promiseObj.then(function (json) {
          var postAgeValue = getInstagramPostDatetime(json.html);
          variationProps.authorName = json['author_name'];
          variationProps.imageSrc = json['thumbnail_url'];
          variationProps.text = imageCaption || json.title;
          variationProps.iconText = postAgeValue;
          _this2.setState({ variationProps: variationProps });
        });
      }
    }

    // function that fetches instagram post detail

  }, {
    key: 'render',
    value: function render() {
      var markupToRender = void 0;
      if (this.state.variationProps) {
        markupToRender = getInstaMarkup(this);
      } else {
        markupToRender = _react2.default.createElement(_Null2.default, null);
      }

      return markupToRender;
    }
  }]);

  return Instagram;
}(_react.Component);

Instagram.propTypes = {
  instagramId: string,
  textareaBgColor: string,
  variation: oneOf(['imageLeft', 'overlay', 'imageWithCaption']),
  title: string,
  imageTitle: string,
  mode: oneOf(['static', 'dynamic']),
  imageSrc: string,
  imageCaption: string,
  postAge: string
};
Instagram.contextTypes = {
  compTheme: object,
  compConfig: object
};
Instagram.defaultProps = {
  variation: 'imageWithCaption',
  mode: 'static'
};
exports.default = Instagram;