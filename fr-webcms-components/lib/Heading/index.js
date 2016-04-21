'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UndecoratedHeading = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _uniqueId = require('../helpers/utils/uniqueId');

var _uniqueId2 = _interopRequireDefault(_uniqueId);

var _lightRawTheme = require('../helpers/styles/rawThemes/lightRawTheme');

var _lightRawTheme2 = _interopRequireDefault(_lightRawTheme);

var _themeManager = require('../helpers/styles/themeManager');

var _themeManager2 = _interopRequireDefault(_themeManager);

var _contextPure = require('../helpers/composedComponents/contextPure');

var _contextPure2 = _interopRequireDefault(_contextPure);

var _stylePropable = require('../helpers/utils/stylePropable');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var string = _react.PropTypes.string;
var func = _react.PropTypes.func;
var object = _react.PropTypes.object;
var oneOf = _react.PropTypes.oneOf;


function getRelevantContextKeys(uniTheme) {
  // add more default styles here
  return {
    textColor: uniTheme.heading.textColor
  };
}

var Heading = function Heading(_ref, context) {
  var id = _ref.id;
  var className = _ref.className;
  var headingText = _ref.headingText;
  var type = _ref.type;
  var style = _ref.style;
  var onPress = _ref.onPress;


  var compTheme = context.muiTheme || _themeManager2.default.getCompTheme(_lightRawTheme2.default);

  var _getRelevantContextKe = getRelevantContextKeys(compTheme);

  var textColor = _getRelevantContextKe.textColor;


  var compType = type || 'h1';
  var compId = id || _uniqueId2.default.generate();
  var compStyles = {
    color: textColor,
    display: 'inline'
  };

  var headingProps = {
    id: compId,
    className: className,
    style: (0, _stylePropable.mergeStyles)(compStyles, style),
    onClick: onPress
  };

  return _react2.default.createElement(compType, headingProps, headingText);
};

Heading.propTypes = {
  className: string,
  headingText: string,
  id: string,
  onPress: func,
  style: object,
  type: oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
};

Heading.contextTypes = {
  muiTheme: object
};

Heading.defaultProps = {
  onPress: function onPress() {
    return null;
  }
};

exports.UndecoratedHeading = Heading;
exports.default = (0, _contextPure2.default)(Heading);