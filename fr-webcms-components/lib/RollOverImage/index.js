'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _uniqueId = require('../helpers/utils/uniqueId');

var _uniqueId2 = _interopRequireDefault(_uniqueId);

var _Image = require('../core/Image');

var _Image2 = _interopRequireDefault(_Image);

var _contextPure = require('../helpers/composedComponents/contextPure');

var _contextPure2 = _interopRequireDefault(_contextPure);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Uniqlo UI
var noop = function noop() {
  return null;
};
var string = _react.PropTypes.string;
var object = _react.PropTypes.object;
var func = _react.PropTypes.func;

var RollOverImage = function (_Component) {
  _inherits(RollOverImage, _Component);

  function RollOverImage() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, RollOverImage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(RollOverImage)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      hovered: false
    }, _this.componentDidMount = function () {
      _this._uniqueId = _uniqueId2.default.generate();
    }, _this.getMouseClick = function (event) {
      _this.props.onMouseClick(event);
    }, _this.getMouseOver = function (event) {
      if (_this.props.rollImgSrc) {
        _this.setState({ hovered: true });
      }

      _this.props.onMouseOver(event);
    }, _this.getMouseLeave = function (event) {
      _this.setState({ hovered: false });
      _this.props.onMouseLeave(event);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RollOverImage, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var imageStyle = _props.imageStyle;
      var className = _props.className;
      var id = _props.id;
      var link = _props.link;
      var style = _props.style;
      var target = _props.target;
      var altText = _props.altText;
      var imgSrc = _props.imgSrc;
      var rollImgSrc = _props.rollImgSrc;

      var other = _objectWithoutProperties(_props, ['imageStyle', 'className', 'id', 'link', 'style', 'target', 'altText', 'imgSrc', 'rollImgSrc']);

      var inputProps = null;
      if (link) {
        inputProps = {
          href: link
        };
      }

      var imageSource = this.state.hovered ? rollImgSrc : imgSrc;
      return _react2.default.createElement(
        'a',
        _extends({}, inputProps, {
          className: className,
          id: id,
          style: style,
          onMouseOver: this.getMouseOver,
          onMouseLeave: this.getMouseLeave,
          onClick: this.getMouseClick,
          target: target
        }),
        _react2.default.createElement(_Image2.default, {
          style: imageStyle,
          source: imageSource,
          alt: altText
        })
      );
    }
  }]);

  return RollOverImage;
}(_react.Component);

RollOverImage.propTypes = {
  altText: string,
  className: string,
  id: string,
  imageStyle: object,
  imgSrc: string.isRequired,
  link: string,
  onMouseClick: func,
  onMouseLeave: func,
  onMouseOver: func,
  rollImgSrc: string,
  style: object,
  target: string
};
RollOverImage.defaultProps = {
  onMouseClick: noop,
  onMouseOver: noop,
  onMouseLeave: noop
};
exports.default = (0, _contextPure2.default)(RollOverImage);