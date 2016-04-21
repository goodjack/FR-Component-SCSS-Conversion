'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _uniqueId = require('../../helpers/utils/uniqueId');

var _uniqueId2 = _interopRequireDefault(_uniqueId);

var _stylePropable = require('../../helpers/utils/stylePropable');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var string = _react.PropTypes.string;
var func = _react.PropTypes.func;
var object = _react.PropTypes.object;


var styles = {
  imageStyle: {
    border: 'none'
  }
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
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Image, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._uniqueId = _uniqueId2.default.generate();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var alternateText = _props.alternateText;
      var className = _props.className;
      var id = _props.id;
      var source = _props.source;
      var style = _props.style;


      var inputId = id || this._uniqueId;

      return _react2.default.createElement('img', {
        className: className,
        id: inputId,
        src: source,
        style: (0, _stylePropable.mergeStyles)(styles.imageStyle, style),
        alt: alternateText,
        onLoad: this.handleOnLoad
      });
    }
  }]);

  return Image;
}(_react.Component);

Image.propTypes = {
  alternateText: string,
  className: string,
  id: string,
  onLoad: func,
  source: string,
  style: object
};
Image.defaultProps = {
  source: '',
  onLoad: function onLoad() {
    return null;
  }
};
exports.default = Image;