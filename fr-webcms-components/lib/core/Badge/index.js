'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lightRawTheme = require('../../helpers/styles/rawThemes/lightRawTheme');

var _lightRawTheme2 = _interopRequireDefault(_lightRawTheme);

var _themeManager = require('../../helpers/styles/themeManager');

var _themeManager2 = _interopRequireDefault(_themeManager);

var _stylePropable = require('../../helpers/utils/stylePropable');

var _contextPure = require('../../helpers/composedComponents/contextPure');

var _contextPure2 = _interopRequireDefault(_contextPure);

var _configurationManager = require('../../helpers/configuration/configurationManager');

var _configurationManager2 = _interopRequireDefault(_configurationManager);

var _baseConfig = require('../../helpers/configuration/baseConfig');

var _baseConfig2 = _interopRequireDefault(_baseConfig);

var _colors = require('../../helpers/styles/colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var object = _react.PropTypes.object;
var string = _react.PropTypes.string;
var number = _react.PropTypes.number;
var node = _react.PropTypes.node;
var oneOf = _react.PropTypes.oneOf;


var getRelevantContextKeys = function getRelevantContextKeys(themeAndConfig) {
  var compTheme = themeAndConfig.compTheme;
  var compConfig = themeAndConfig.compConfig;

  var bTheme = compTheme && compTheme.badge || {};
  var bConfig = compConfig && compConfig.badge || {};
  return _extends({}, bTheme, bConfig);
};

var setBadgeIconPosition = function setBadgeIconPosition(comp) {
  var props = comp.props;
  var themeAndConfig = comp.themeAndConfig;
  var refs = comp.refs;

  var badgeContext = getRelevantContextKeys(themeAndConfig);
  var position = props.position || badgeContext.position;

  // switch case to set the badge position
  switch (position) {
    case 'right':
      {
        comp.setState({ badgePosition: { right: 0 } });
        break;
      }

    case 'center':
      {
        var widthVal = refs.rootElement.clientWidth - refs.badgeIcon.clientWidth;
        comp.setState({ badgePosition: { left: widthVal / 2 } });
        break;
      }

    case 'left':
    default:
      {
        comp.setState({ badgePosition: { left: 0 } });
      }
  }
};

var getStyles = function getStyles(themeAndConfig) {
  var badgeContext = getRelevantContextKeys(themeAndConfig);
  return {
    root: {
      position: 'relative',
      display: 'inline-block',
      paddingTop: '12px'
    },
    badge: {
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 0,
      fontWeight: badgeContext.fontWeight,
      fontFamily: badgeContext.fontFamily,
      fontSize: '9px',
      lineHeight: '21px',
      borderRadius: '50%',
      backgroundColor: badgeContext.backgroundColor || _colors2.default.redA500,
      color: badgeContext.textColor || _colors2.default.white,
      padding: '0px 5px'
    }
  };
};

var Badge = function (_Component) {
  _inherits(Badge, _Component);

  function Badge() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Badge);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Badge)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      badgePosition: { left: 0 }
    }, _this.themeAndConfig = {
      compTheme: _this.context.compTheme || _themeManager2.default.getCompTheme(_lightRawTheme2.default),
      compConfig: _this.context.compConfig || _configurationManager2.default.getCompConfig(_baseConfig2.default)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // set initial badgePosition


  _createClass(Badge, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      setBadgeIconPosition(this);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var style = _props.style;
      var children = _props.children;
      var content = _props.number;
      var maxLimit = _props.maxLimit;
      var badgeStyle = _props.badgeStyle;

      var other = _objectWithoutProperties(_props, ['style', 'children', 'number', 'maxLimit', 'badgeStyle']);

      var styles = getStyles(this.themeAndConfig);
      var badgeStyles = (0, _stylePropable.mergeStyles)(styles.badge, badgeStyle);
      var badgeContext = getRelevantContextKeys(this.themeAndConfig);
      var contentMaxLimit = maxLimit || badgeContext.maxLimit || null;
      var badgeIconContent = content;
      if (contentMaxLimit && badgeIconContent > contentMaxLimit) {
        badgeIconContent = contentMaxLimit + '+';
      }

      return _react2.default.createElement(
        'div',
        _extends({
          ref: 'rootElement'
        }, other, {
          style: (0, _stylePropable.mergeStyles)(styles.root, style)
        }),
        children,
        _react2.default.createElement(
          'span',
          {
            ref: 'badgeIcon',
            style: (0, _stylePropable.mergeStyles)(badgeStyles, this.state.badgePosition)
          },
          badgeIconContent
        )
      );
    }
  }]);

  return Badge;
}(_react.Component);

Badge.propTypes = {
  badgeStyle: object,
  children: node,
  className: string,
  maxLimit: number,
  number: number.isRequired,
  position: oneOf(['left', 'right', 'center']),
  style: object
};
Badge.contextTypes = {
  compTheme: object,
  compConfig: object
};
exports.default = (0, _contextPure2.default)(Badge);