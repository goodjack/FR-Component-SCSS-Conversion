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

var _Image = require('../core/Image');

var _Image2 = _interopRequireDefault(_Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var node = _react.PropTypes.node;
var string = _react.PropTypes.string;
var object = _react.PropTypes.object;
var oneOf = _react.PropTypes.oneOf;


var getRelevantContextKeys = function getRelevantContextKeys(theme) {
  var btTheme = theme && theme.buttonTile || {};
  return _extends({}, btTheme);
};

var styles = {
  root: {
    display: 'inline-block',
    borderWidth: 1,
    borderStyle: 'solid',
    width: '99%',
    minHeight: 391
  },

  imageSmall: {
    display: 'inline-block',
    width: '100%',
    minHeight: 332
  },

  imageLarge: {
    display: 'inline-block',
    width: '100%',
    minHeight: 419
  },
  listStyle: {
    display: 'flex',
    paddingTop: 0,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
    margin: 0,
    position: 'relative',
    listStyle: 'none'
  }
};

var ButtonTile = function (_Component) {
  _inherits(ButtonTile, _Component);

  function ButtonTile() {
    _classCallCheck(this, ButtonTile);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ButtonTile).apply(this, arguments));
  }

  _createClass(ButtonTile, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._uniqueId = _uniqueId2.default.generate();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var imageSrc = _props.imageSrc;
      var tileSize = _props.tileSize;
      var id = _props.id;
      var className = _props.className;
      var listStyle = _props.listStyle;
      var imageStyle = _props.imageStyle;
      var style = _props.style;
      var compContextTheme = this.context.compTheme;


      var compTheme = compContextTheme || _themeManager2.default.getCompTheme(_lightRawTheme2.default);

      var _getRelevantContextKe = getRelevantContextKeys(compTheme);

      var borderColor = _getRelevantContextKe.borderColor;


      var inputId = id || this._uniqueId;

      var rootStyle = (0, _stylePropable.mergeStyles)(styles.root, style);

      var tileStyle = tileSize === 'large' ? styles.imageLarge : styles.imageSmall;
      tileStyle = (0, _stylePropable.mergeStyles)(tileStyle, { borderColor: borderColor });

      var imageStyles = (0, _stylePropable.mergeStyles)(tileStyle, imageStyle);
      var ulStyles = (0, _stylePropable.mergeStyles)(styles.listStyle, listStyle);

      return _react2.default.createElement(
        'div',
        {
          id: inputId,
          className: className,
          style: rootStyle
        },
        _react2.default.createElement(_Image2.default, {
          source: imageSrc,
          style: imageStyles
        }),
        _react2.default.createElement(
          'ul',
          { style: ulStyles },
          this.props.children
        )
      );
    }
  }]);

  return ButtonTile;
}(_react.Component);

ButtonTile.propTypes = {
  children: node,
  className: string,
  id: string,
  imageSrc: string.isRequired,
  imageStyle: object,
  listStyle: object,
  style: object,
  tileSize: oneOf(['small', 'large'])
};
ButtonTile.contextTypes = {
  muiTheme: object,
  muiConfig: object
};
ButtonTile.defaultProps = {
  tileSize: 'small'
};
exports.default = (0, _contextPure2.default)(ButtonTile);