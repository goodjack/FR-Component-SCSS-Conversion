'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lightRawTheme = require('../../helpers/styles/rawThemes/lightRawTheme');

var _lightRawTheme2 = _interopRequireDefault(_lightRawTheme);

var _themeManager = require('../../helpers/styles/themeManager');

var _themeManager2 = _interopRequireDefault(_themeManager);

var _contextPure = require('../../helpers/composedComponents/contextPure');

var _contextPure2 = _interopRequireDefault(_contextPure);

var _http = require('../../helpers/utils/http');

var _stylePropable = require('../../helpers/utils/stylePropable');

var _IconHead = require('../../core/IconHead');

var _IconHead2 = _interopRequireDefault(_IconHead);

var _ImagePlusText = require('../ImagePlusText');

var _ImagePlusText2 = _interopRequireDefault(_ImagePlusText);

var _reactStringReplace = require('../../helpers/utils/reactStringReplace');

var _reactStringReplace2 = _interopRequireDefault(_reactStringReplace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var string = _react.PropTypes.string;
var oneOf = _react.PropTypes.oneOf;
var object = _react.PropTypes.object;

var prepareStyles = function prepareStyles(me) {
  var styles = {
    root: {
      minHeight: '100px',
      color: me.theme.contentColor || '#000',
      padding: me.theme.padding || '10px'
    },
    icon: {
      width: '29px',
      height: '25px'
    },
    title: {
      paddingBottom: '35px',
      color: me.theme.titleColor || '#000'
    },
    imgTxt: {
      border: 'none'
    },
    image: {
      margin: '0 0 12px'
    },
    container: {
      padding: 0
    }
  };
  var _me$props = me.props;
  var style = _me$props.style;
  var imageStyle = _me$props.imageStyle;
  var titleStyle = _me$props.titleStyle;
  var contentStyle = _me$props.contentStyle;


  styles.root = (0, _stylePropable.mergeStyles)(styles.root, style);
  styles.image = (0, _stylePropable.mergeStyles)(styles.image, imageStyle);
  styles.heading = (0, _stylePropable.mergeStyles)(styles.title, titleStyle);
  styles.postText = contentStyle;
  return styles;
};

var parseText = function parseText(text, linkColor, link) {
  var replacedText = void 0;
  var style = { color: linkColor };

  replacedText = (0, _reactStringReplace2.default)(text, /(https?:\/\/\S+)/g, function (match) {
    return _react2.default.createElement(
      'a',
      { key: match, href: match, style: style },
      match
    );
  });
  replacedText = (0, _reactStringReplace2.default)(replacedText, /@(\w+)/g, function (match) {
    return _react2.default.createElement(
      'a',
      { key: match, href: link + '/' + match, style: style },
      '@',
      match
    );
  });
  replacedText = (0, _reactStringReplace2.default)(replacedText, /#(\w+)/g, function (match) {
    return _react2.default.createElement(
      'a',
      { key: match, href: link + '/hashtag/' + match, style: style },
      '#',
      match
    );
  });

  return replacedText;
};

var processData = function processData(me, result) {
  var type = me.props.type;
  var linkColor = me.theme.linkColor || '#CCC';
  if (type === 'twitter') {
    me.setState({
      title: result.user['screen_name'],
      content: parseText(result.text, linkColor, 'http://twitter.com'),
      imageSrc: result.entities.media[0]['media_url'],
      postLink: result.entities.media[0]['expanded_url']
    });
  } else if (type === 'facebook') {
    me.setState({
      title: result.from.name,
      content: parseText(result.name, linkColor, 'http://facebook.com'),
      imageSrc: result.images[6].source,
      postLink: result.link
    });
  }
};

var getPostContent = function getPostContent(me) {
  var _me$props2 = me.props;
  var postId = _me$props2.postId;
  var variation = _me$props2.variation;
  var content = _me$props2.content;
  var altText = _me$props2.altText;
  var imageSrc = _me$props2.imageSrc;
  var _me$styles = me.styles;
  var image = _me$styles.image;
  var postText = _me$styles.postText;
  var imgTxt = _me$styles.imgTxt;
  var container = _me$styles.container;


  var text = me.state.content;
  var postContent = void 0;
  if (variation === 'textOnly') {
    postContent = postId ? _react2.default.createElement(
      'div',
      { style: postText },
      text
    ) : _react2.default.createElement(
      'div',
      { style: postText },
      content
    );
  } else {
    var imageURL = postId ? me.state.imageSrc : imageSrc;
    text = postId ? text : content;
    postContent = _react2.default.createElement(_ImagePlusText2.default, {
      imageSrc: imageURL,
      text: text,
      variation: 'imageTop',
      style: imgTxt,
      imageTitle: altText,
      imageStyle: image,
      textContainerStyle: container
    });
  }

  return postContent;
};

var SocialMediaPost = function (_Component) {
  _inherits(SocialMediaPost, _Component);

  function SocialMediaPost() {
    var _Object$getPrototypeO;

    var _temp, _this2, _ret;

    _classCallCheck(this, SocialMediaPost);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(SocialMediaPost)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this2), _this2.state = {
      postId: null,
      content: {},
      imageSrc: {}
    }, _this2.componentWillMount = function () {
      var _this = _this2;
      var compTheme = _this.context.compTheme || _themeManager2.default.getCompTheme(_lightRawTheme2.default) || {};
      _this.theme = compTheme.social || {};
      _this.styles = prepareStyles(_this);
    }, _this2.componentDidMount = function () {
      var _this2$props = _this2.props;
      var postId = _this2$props.postId;
      var type = _this2$props.type;

      if (postId) {
        (0, _http.getPostDetails)(postId, type, function (result) {
          processData(_this2, result);
        });
      }
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(SocialMediaPost, [{
    key: 'render',
    value: function render() {
      var _this = this;
      var _this$props = _this.props;
      var postId = _this$props.postId;
      var title = _this$props.title;
      var titleImage = _this$props.titleImage;
      var _this$styles = _this.styles;
      var root = _this$styles.root;
      var heading = _this$styles.heading;
      var icon = _this$styles.icon;

      var postContent = getPostContent(_this);
      var postTitle = postId ? '@ ' + _this.state.title : title;
      return _this.state.title || title ? _react2.default.createElement(
        'div',
        { style: root },
        _react2.default.createElement(_IconHead2.default, {
          imageSrc: titleImage,
          titleText: postTitle,
          style: heading,
          imageStyle: icon
        }),
        postContent
      ) : _react2.default.createElement(
        'div',
        { style: root },
        _this.props.loadText
      );
    }
  }]);

  return SocialMediaPost;
}(_react.Component);

SocialMediaPost.propTypes = {
  postId: string,
  title: string,
  variation: oneOf(['textOnly', 'photoPost']),
  content: string,
  altText: string,
  imageSrc: string,
  titleImage: string,
  postLink: string,
  loadText: string,
  type: string,
  style: object,
  imageStyle: object,
  titleStyle: object,
  contentStyle: object
};
SocialMediaPost.contextTypes = {
  compTheme: object,
  compConfig: object
};
SocialMediaPost.defaultProps = {
  loadText: 'Loading..'
};
exports.default = (0, _contextPure2.default)(SocialMediaPost);