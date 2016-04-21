'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Image = require('../../core/Image');

var _Image2 = _interopRequireDefault(_Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var oneOf = _react.PropTypes.oneOf;
var string = _react.PropTypes.string;
var object = _react.PropTypes.object;


var CollageItem = function CollageItem(props) {
  var style = props.style;
  var link = props.link;
  var target = props.target;
  var altText = props.altText;
  var imageSrc = props.imageSrc;

  return _react2.default.createElement(
    'a',
    { href: link, target: target },
    _react2.default.createElement(_Image2.default, { source: imageSrc, style: style, alternateText: altText })
  );
};

CollageItem.propTypes = {
  imageSrc: string,
  style: object,
  link: string,
  target: oneOf(['_blank', '_self', '_parent', '_top']),
  altText: string
};

CollageItem.defaultProps = {
  target: '_self'
};

exports.default = CollageItem;