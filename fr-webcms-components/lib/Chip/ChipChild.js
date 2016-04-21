'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _stylePropable = require('../helpers/utils/stylePropable');

var _lightRawTheme = require('../helpers/styles/rawThemes/lightRawTheme');

var _lightRawTheme2 = _interopRequireDefault(_lightRawTheme);

var _themeManager = require('../helpers/styles/themeManager');

var _themeManager2 = _interopRequireDefault(_themeManager);

var _contextPure = require('../helpers/composedComponents/contextPure');

var _contextPure2 = _interopRequireDefault(_contextPure);

var _Text = require('../Text');

var _Text2 = _interopRequireDefault(_Text);

var _CloseIcon = require('../SvgIcons/action/CloseIcon');

var _CloseIcon2 = _interopRequireDefault(_CloseIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var noop = function noop() {
  return null;
};

var string = _react.PropTypes.string;
var object = _react.PropTypes.object;
var func = _react.PropTypes.func;
var bool = _react.PropTypes.bool;
var number = _react.PropTypes.number;

var prepareStyle = function prepareStyle(_ref) {
  var context = _ref.context;
  var props = _ref.props;
  var state = _ref.state;

  var compTheme = context.compTheme || _themeManager2.default.getCompTheme(_lightRawTheme2.default);
  var chipTheme = compTheme && compTheme.chip || {};
  var styles = {
    listItem: {
      float: 'left',
      width: '34',
      height: '34',
      borderStyle: 'solid',
      borderWidth: '1',
      boxSizing: 'border-box',
      paddingTop: '5',
      paddingLeft: '5',
      paddingRight: '5',
      outlineStyle: 'solid',
      outlineWidth: '0',
      outlineColor: chipTheme.borderColor,
      marginRight: '8',
      marginBottom: '8',
      borderColor: state.hovered ? chipTheme.borderColor : compTheme && chipTheme.borderBlackColor,
      cursor: 'pointer',
      textAlign: 'center',
      position: 'relative'
    },
    borderRed: {
      outlineStyle: 'solid',
      outlineWidth: '2',
      outlineColor: chipTheme.borderColor,
      borderWidth: '0',
      paddingLeft: '6',
      paddingRight: '6',
      paddingTop: '6'
    },
    toolText: {
      display: state.toolTipDisplay ? 'block' : 'none',
      position: 'absolute',
      top: state.toolTipTop,
      left: state.toolTipLeft,
      backgroundColor: chipTheme.textColor,
      color: compTheme && chipTheme.whiteTextColor,
      padding: '2',
      zIndex: '200'
    },
    chipText: {
      fontWeight: 'bolder',
      color: props.enable ? chipTheme.textColor : chipTheme.borderBlackColor
    },
    colorStyle: {
      width: '100%',
      height: '80%',
      overflow: 'hidden'
    },
    imageStyle: {
      width: '68',
      height: '68'
    },
    icon: {
      fill: chipTheme.borderBlackColor,
      position: 'absolute',
      top: '0',
      left: '0',
      height: '34',
      width: '34',
      display: props.enable ? 'inline' : 'none'
    }
  };
  var iconStyle = styles.icon;
  var listhoverStyle = _stylePropable.mergeStyles.apply(undefined, [styles.listItem, styles.borderRed, props.chipHoverStyle, props.chipStyle]);
  var listStyle = _stylePropable.mergeStyles.apply(undefined, [styles.listItem, props.chipStyle]);
  var toolTextStyle = _stylePropable.mergeStyles.apply(undefined, [styles.toolText, props.toolTipStyle]);
  var childStyle = _stylePropable.mergeStyles.apply(undefined, [styles.colorStyle, props.chipChildStyle]);
  return { listhoverStyle: listhoverStyle, iconStyle: iconStyle, listStyle: listStyle, toolTextStyle: toolTextStyle, childStyle: childStyle };
};

var ChipChild = function (_Component) {
  _inherits(ChipChild, _Component);

  function ChipChild() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, ChipChild);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ChipChild)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      hovered: false,
      toolTipTop: '',
      toolTipLeft: '',
      toolTipDisplay: false,
      clicked: false
    }, _this.handleClick = function (event) {
      var _this2 = _this;
      var props = _this2.props;

      props.clickCallBack(props.refId, event);
      props.onMouseClick(event);
    }, _this.hoverColorchange = function (event) {
      var _this3 = _this;
      var props = _this3.props;

      var toolTop = null;
      var toolLeft = null;
      if (event) {
        var spec = event.target.getBoundingClientRect();
        toolTop = Math.abs(event.clientY - spec.top);
        toolLeft = Math.abs(event.clientX - spec.left);
      }

      _this.setState({
        toolTipTop: toolTop,
        toolTipLeft: toolLeft,
        toolTipDisplay: true,
        hovered: true
      });
      props.hoverCallBack(props.headingContent, event);
      props.onMouseEnter(event);
    }, _this.handleMouseOut = function (event) {
      var _this4 = _this;
      var props = _this4.props;

      _this.setState({ hovered: false, toolTipDisplay: false });
      props.hoverOutCallBack(event);
      props.onMouseLeave(event);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ChipChild, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var enable = _props.enable;
      var chipHoverStyle = _props.chipHoverStyle;
      var clicked = _props.clicked;
      var chipStyle = _props.chipStyle;
      var chipChildStyle = _props.chipChildStyle;
      var chipToolStyle = _props.chipToolStyle;
      var toolTipStyle = _props.toolTipStyle;
      var children = _props.children;
      var toolTipData = _props.toolTipData;

      var other = _objectWithoutProperties(_props, ['enable', 'chipHoverStyle', 'clicked', 'chipStyle', 'chipChildStyle', 'chipToolStyle', 'toolTipStyle', 'children', 'toolTipData']);

      var _prepareStyle = prepareStyle(this);

      var listStyle = _prepareStyle.listStyle;
      var listhoverStyle = _prepareStyle.listhoverStyle;
      var toolTextStyle = _prepareStyle.toolTextStyle;
      var iconStyle = _prepareStyle.iconStyle;
      var childStyle = _prepareStyle.childStyle;


      var stylesList = listStyle;

      if (this.state.hovered || clicked) {
        stylesList = listhoverStyle;
      }

      return _react2.default.createElement(
        'li',
        {
          style: stylesList,
          onMouseEnter: this.hoverColorchange,
          onMouseLeave: this.handleMouseOut, onClick: this.handleClick
        },
        _react2.default.createElement(_CloseIcon2.default, { style: iconStyle }),
        _react2.default.createElement(
          'div',
          { style: childStyle },
          children
        ),
        _react2.default.createElement(
          _Text2.default,
          { style: toolTextStyle },
          toolTipData
        )
      );
    }
  }]);

  return ChipChild;
}(_react.Component);

ChipChild.propTypes = {
  children: object.isRequired,
  chipChildStyle: object,
  chipHoverStyle: object,
  chipStyle: object,
  chipToolStyle: object,
  clickCallBack: func,
  clicked: bool,
  enable: bool,
  headingContent: string,
  hoverCallBack: func,
  hoverOutCallBack: func,
  onMouseClick: func,
  onMouseEnter: func,
  onMouseLeave: func,
  onTouchTap: func,
  refId: number,
  toolTipData: string,
  toolTipStyle: object
};
ChipChild.contextTypes = {
  compTheme: object
};
ChipChild.defaultProps = {
  onMouseClick: noop,
  onMouseEnter: noop,
  onMouseLeave: noop
};
exports.default = (0, _contextPure2.default)(ChipChild);