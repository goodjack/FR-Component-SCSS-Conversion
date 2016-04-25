'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _contextPure = require('../../helpers/composedComponents/contextPure');

var _contextPure2 = _interopRequireDefault(_contextPure);

var _ImagePlusTextImageRight = require('./ImagePlusTextImageRight');

var _ImagePlusTextImageRight2 = _interopRequireDefault(_ImagePlusTextImageRight);

var _ImagePlusTextImageLeft = require('./ImagePlusTextImageLeft');

var _ImagePlusTextImageLeft2 = _interopRequireDefault(_ImagePlusTextImageLeft);

var _ImagePlusTextImageTop = require('./ImagePlusTextImageTop');

var _ImagePlusTextImageTop2 = _interopRequireDefault(_ImagePlusTextImageTop);

var _ImagePlusTextImageBottom = require('./ImagePlusTextImageBottom');

var _ImagePlusTextImageBottom2 = _interopRequireDefault(_ImagePlusTextImageBottom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var string = _react.PropTypes.string;
var object = _react.PropTypes.object;
var oneOf = _react.PropTypes.oneOf;
var oneOfType = _react.PropTypes.oneOfType;
var number = _react.PropTypes.number;
var node = _react.PropTypes.node;


var ImagePlusText = function ImagePlusText(props) {
  var MarkupToRender = null;

  switch (props.variation) {
    case 'imageRight':
      MarkupToRender = _ImagePlusTextImageRight2.default;
      break;
    case 'imageLeft':
      MarkupToRender = _ImagePlusTextImageLeft2.default;
      break;
    case 'imageTop':
      MarkupToRender = _ImagePlusTextImageTop2.default;
      break;
    case 'imageBottom':
      MarkupToRender = _ImagePlusTextImageBottom2.default;
      break;
    default:
      MarkupToRender = _ImagePlusTextImageTop2.default;
  }

  return _react2.default.createElement(MarkupToRender, props);
};

ImagePlusText.propTypes = {
  className: string,
  id: string,
  style: object,
  imageSrc: string.isRequired,
  imageStyle: object,
  imageTitle: string,
  imageWidthRatio: number,
  text: oneOfType([node, string]),
  textStyle: object,
  link: string,
  linkText: string,
  linkStyle: object,
  textContainerStyle: object,
  targetwindow: string,
  variation: oneOf(['imageRight', 'imageLeft', 'imageTop', 'imageBottom']).isRequired
};

exports.default = (0, _contextPure2.default)(ImagePlusText);