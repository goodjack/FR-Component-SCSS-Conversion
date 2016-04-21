'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _stylePropable = require('../helpers/utils/stylePropable');

var _GridCell = require('../core/GridCell');

var _GridCell2 = _interopRequireDefault(_GridCell);

var _RollOverImage = require('../RollOverImage');

var _RollOverImage2 = _interopRequireDefault(_RollOverImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var string = _react.PropTypes.string;
var func = _react.PropTypes.func;
var object = _react.PropTypes.object;


var styles = {
  anchorButton: {
    height: 111,
    width: 111
  }
};

var AnchorButton = function AnchorButton(props) {
  var defaultImage = props.defaultImage;
  var rollOverImage = props.rollOverImage;
  var sectionLink = props.sectionLink;
  var style = props.style;
  var onClick = props.onClick;


  var anchorButtonStyle = (0, _stylePropable.mergeStyles)(styles.anchorButton, style);

  return _react2.default.createElement(
    _GridCell2.default,
    { onClick: onClick },
    _react2.default.createElement(_RollOverImage2.default, {
      imgSrc: defaultImage,
      rollImgSrc: rollOverImage,
      link: sectionLink,
      style: anchorButtonStyle
    })
  );
};

AnchorButton.propTypes = {
  defaultImage: string.isRequired,
  onClick: func,
  rollOverImage: string,
  sectionLink: string.isRequired,
  style: object
};

AnchorButton.defaultProps = {
  onClick: function onClick() {
    return null;
  }
};

exports.default = AnchorButton;