'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _stylePropable = require('../../helpers/utils/stylePropable');

var _Image = require('../../core/Image');

var _Image2 = _interopRequireDefault(_Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var string = _react.PropTypes.string;
var object = _react.PropTypes.object;
var func = _react.PropTypes.func;

var SectionImage = function (_Component) {
  _inherits(SectionImage, _Component);

  function SectionImage() {
    _classCallCheck(this, SectionImage);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SectionImage).apply(this, arguments));
  }

  _createClass(SectionImage, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var alternateText = _props.alternateText;
      var imageSrc = _props.imageSrc;
      var imageStyle = _props.imageStyle;
      var link = _props.link;
      var onLoad = _props.onLoad;
      var style = _props.style;
      var targetwindow = _props.targetwindow;


      var imageProps = {
        alternateText: alternateText,
        onLoad: onLoad,
        source: imageSrc,
        style: imageStyle
      };

      var rootStyle = {
        borderColor: '#e6e6e6',
        borderStyle: 'solid',
        borderWidth: 1
      };

      return _react2.default.createElement(
        'div',
        { style: _stylePropable.mergeStyles.apply(this, [rootStyle, style]) },
        _react2.default.createElement(
          'a',
          { href: link, target: targetwindow },
          _react2.default.createElement(_Image2.default, imageProps)
        )
      );
    }
  }]);

  return SectionImage;
}(_react.Component);

SectionImage.propTypes = {
  alternateText: string,
  className: string,
  id: string,
  imageSrc: string,
  imageStyle: object,
  link: string,
  onLoad: func,
  style: object,
  targetwindow: string
};
exports.default = SectionImage;