'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _stylePropable = require('../helpers/utils/stylePropable');

var _contextPure = require('../helpers/composedComponents/contextPure');

var _contextPure2 = _interopRequireDefault(_contextPure);

var _lightRawTheme = require('../helpers/styles/rawThemes/lightRawTheme');

var _lightRawTheme2 = _interopRequireDefault(_lightRawTheme);

var _themeManager = require('../helpers/styles/themeManager');

var _themeManager2 = _interopRequireDefault(_themeManager);

var _Image = require('../core/Image');

var _Image2 = _interopRequireDefault(_Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var string = _react.PropTypes.string;
var object = _react.PropTypes.object;
var func = _react.PropTypes.func;
var oneOf = _react.PropTypes.oneOf;


var getRelevantContextKeys = function getRelevantContextKeys(theme) {
  var itTheme = theme && theme.imageTile || {};
  return _extends({}, itTheme);
};

var styles = {
  large: {
    display: 'inline-block',
    width: '100%'
  },

  small: {
    display: 'inline-block',
    width: '100%'
  },

  imageLarge: {
    width: '100%',
    minHeight: 473,
    borderWidth: 1
  },

  imageSmall: {
    width: '100%',
    minHeight: 391,
    borderWidth: 1
  },

  linkStyle: {
    display: 'inline-block',
    width: '100%'
  }

};

var ImageTile = function (_Component) {
  _inherits(ImageTile, _Component);

  function ImageTile() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, ImageTile);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ImageTile)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      isHovered: false
    }, _this.handleOnLoad = function (event) {
      _this.props.onLoad(event);
    }, _this.handleMouseEnter = function (event) {
      _this.setState({ isHovered: true });
      _this.props.onMouseEnter(event);
    }, _this.handleMouseLeave = function (event) {
      _this.setState({ isHovered: false });
      _this.props.onMouseLeave(event);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ImageTile, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var alternateText = _props.alternateText;
      var id = _props.id;
      var className = _props.className;
      var imageSrc = _props.imageSrc;
      var imageStyle = _props.imageStyle;
      var link = _props.link;
      var style = _props.style;
      var targetwindow = _props.targetwindow;
      var tileSize = _props.tileSize;
      var compContextTheme = this.context.compTheme;


      var compTheme = compContextTheme || _themeManager2.default.getCompTheme(_lightRawTheme2.default);

      var _getRelevantContextKe = getRelevantContextKeys(compTheme);

      var imageBorderColor = _getRelevantContextKe.imageBorderColor;


      var imageBorderStyle = {
        borderColor: imageBorderColor,
        borderStyle: this.state.isHovered ? 'solid' : 'none'
      };

      var rootStyle = void 0;
      var inlineImageStyle = void 0;

      if (tileSize === 'large') {
        rootStyle = styles.large;
        inlineImageStyle = (0, _stylePropable.mergeStyles)(styles.imageLarge, imageBorderStyle);
      } else {
        rootStyle = styles.small;
        inlineImageStyle = (0, _stylePropable.mergeStyles)(styles.imageSmall, imageBorderStyle);
      }

      var containerStyle = (0, _stylePropable.mergeStyles)(rootStyle, style);

      var divProps = {
        id: id,
        className: className
      };

      var imageProps = {
        alternateText: alternateText,
        source: imageSrc,
        style: (0, _stylePropable.mergeStyles)(inlineImageStyle, imageStyle)
      };

      var aProps = {
        href: link,
        target: targetwindow,
        style: styles.linkStyle
      };

      return _react2.default.createElement(
        'div',
        _extends({
          style: containerStyle,
          onLoad: this.handleOnLoad,
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave
        }, divProps),
        _react2.default.createElement(
          'a',
          aProps,
          _react2.default.createElement(_Image2.default, imageProps)
        )
      );
    }
  }]);

  return ImageTile;
}(_react.Component);

ImageTile.propTypes = {
  alternateText: string.isRequired,
  id: string,
  className: string,
  imageSrc: string.isRequired,
  imageStyle: object,
  link: string,
  onLoad: func,
  onMouseEnter: func,
  onMouseLeave: func,
  style: object,
  targetwindow: string,
  tileSize: oneOf(['small', 'large'])
};
ImageTile.contextTypes = {
  compTheme: object
};
ImageTile.defaultProps = {
  tileSize: 'small',
  onLoad: function onLoad() {
    return null;
  },
  onMouseEnter: function onMouseEnter() {
    return null;
  },
  onMouseLeave: function onMouseLeave() {
    return null;
  }
};
exports.default = (0, _contextPure2.default)(ImageTile);