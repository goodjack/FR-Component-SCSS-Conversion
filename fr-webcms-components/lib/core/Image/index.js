'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _stylePropable = require('../../helpers/utils/stylePropable');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var string = _react.PropTypes.string;
var func = _react.PropTypes.func;
var object = _react.PropTypes.object;
var bool = _react.PropTypes.bool;
var oneOfType = _react.PropTypes.oneOfType;
var number = _react.PropTypes.number;


var styles = {
  imageStyle: {
    border: 'none'
  }
};

var getMarkup = function getMarkup(comp) {
  var _comp$props = comp.props;
  var alternateText = _comp$props.alternateText;
  var className = _comp$props.className;
  var source = _comp$props.source;
  var style = _comp$props.style;
  var useImgTag = _comp$props.useImgTag;
  var _comp$props2 = comp.props;
  var width = _comp$props2.width;
  var height = _comp$props2.height;


  if (!width && !height) {
    width = height = '100%';
  }

  var computedImageStyle = _extends({
    position: 'relative',
    backgroundImage: 'url(\'' + source + '\')',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: width,
    height: height
  }, style);
  var markup = void 0;
  if (useImgTag) {
    var mergedStyle = (0, _stylePropable.mergeStyles)({ width: width, height: height }, style);
    mergedStyle = (0, _stylePropable.mergeStyles)(styles.imageStyle, mergedStyle);
    markup = _react2.default.createElement('img', {
      className: className,
      src: source,
      style: mergedStyle,
      alt: alternateText,
      onLoad: comp.handleOnLoad,
      onClick: comp.handleOnClick
    });
  } else {
    markup = _react2.default.createElement('div', {
      style: computedImageStyle,
      onClick: comp.handleOnClick
    });
  }

  return markup;
};

var Image = function (_Component) {
  _inherits(Image, _Component);

  function Image() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Image);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Image)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleOnLoad = function (event) {
      if (_this.props.onLoad) _this.props.onLoad(event);
    }, _this.handleOnClick = function (event) {
      if (_this.props.onClick) _this.props.onClick(event);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Image, [{
    key: 'render',
    value: function render() {
      return getMarkup(this);
    }
  }]);

  return Image;
}(_react.Component);

Image.propTypes = {
  alternateText: string,
  className: string,
  onLoad: func,
  onClick: func,
  source: string,
  style: object,
  useImgTag: bool,
  width: oneOfType([string, number]),
  height: oneOfType([string, number])
};
Image.defaultProps = {
  source: '',
  onLoad: function onLoad() {
    return null;
  },
  useImgTag: true
};
exports.default = Image;