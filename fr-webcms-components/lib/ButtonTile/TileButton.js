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

var _uniqueId = require('../helpers/utils/uniqueId');

var _uniqueId2 = _interopRequireDefault(_uniqueId);

var _lightRawTheme = require('../helpers/styles/rawThemes/lightRawTheme');

var _lightRawTheme2 = _interopRequireDefault(_lightRawTheme);

var _themeManager = require('../helpers/styles/themeManager');

var _themeManager2 = _interopRequireDefault(_themeManager);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var string = _react.PropTypes.string;
var object = _react.PropTypes.object;


var getRelevantContextKeys = function getRelevantContextKeys(theme) {
  var tbTheme = theme && theme.tileButton || {};
  return _extends({}, tbTheme);
};

var styles = {
  list: {
    flex: 1,
    position: 'relative',
    height: 29
  },
  button: {
    flex: 1,
    display: 'inline-block',
    padding: 0,
    position: 'relative',
    transform: 'translate3d(0,0,0)',
    top: 0,
    height: '100%',
    borderRadius: 0
  },
  label: {
    fontSize: 10,
    fontWeight: 'bold',
    position: 'absolute',
    paddingTop: 10,
    margin: 'auto',
    width: '100%',
    height: '100%',
    left: '0',
    top: '0'
  }
};

var TileButton = function (_Component) {
  _inherits(TileButton, _Component);

  function TileButton() {
    _classCallCheck(this, TileButton);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TileButton).apply(this, arguments));
  }

  _createClass(TileButton, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._uniqueId = _uniqueId2.default.generate();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var color = _props.color;
      var title = _props.title;
      var link = _props.link;
      var targetwindow = _props.targetwindow;
      var listItemStyle = _props.listItemStyle;
      var buttonStyle = _props.buttonStyle;
      var compContextTheme = this.context.compTheme;


      var compTheme = compContextTheme || _themeManager2.default.getCompTheme(_lightRawTheme2.default);

      var _getRelevantContextKe = getRelevantContextKeys(compTheme);

      var textColor = _getRelevantContextKe.textColor;

      var labelStyle = (0, _stylePropable.mergeStyles)(styles.label, { color: textColor });

      var defaultButtonStyles = (0, _stylePropable.mergeStyles)(styles.button, { backgroundColor: color });

      return _react2.default.createElement(
        'li',
        { style: (0, _stylePropable.mergeStyles)(styles.list, listItemStyle) },
        _react2.default.createElement(
          'a',
          { href: link, target: targetwindow },
          _react2.default.createElement(_Button2.default, { style: (0, _stylePropable.mergeStyles)(defaultButtonStyles, buttonStyle),
            label: title,
            labelStyle: labelStyle
          })
        )
      );
    }
  }]);

  return TileButton;
}(_react.Component);

TileButton.propTypes = {
  buttonStyle: object,
  color: string,
  link: string,
  listItemStyle: object,
  targetwindow: string,
  title: string
};
TileButton.contextTypes = {
  muiTheme: object
};
exports.default = (0, _contextPure2.default)(TileButton);