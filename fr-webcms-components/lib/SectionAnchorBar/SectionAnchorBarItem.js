'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _uniqueId = require('../helpers/utils/uniqueId');

var _uniqueId2 = _interopRequireDefault(_uniqueId);

var _Text = require('../Text');

var _Text2 = _interopRequireDefault(_Text);

var _lightRawTheme = require('../helpers/styles/rawThemes/lightRawTheme');

var _lightRawTheme2 = _interopRequireDefault(_lightRawTheme);

var _themeManager = require('../helpers/styles/themeManager');

var _themeManager2 = _interopRequireDefault(_themeManager);

var _ChevronDown = require('../SvgIcons/navigation/ChevronDown');

var _ChevronDown2 = _interopRequireDefault(_ChevronDown);

var _stylePropable = require('../helpers/utils/stylePropable');

var _contextPure = require('../helpers/composedComponents/contextPure');

var _contextPure2 = _interopRequireDefault(_contextPure);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var string = _react.PropTypes.string;
var object = _react.PropTypes.object;
var func = _react.PropTypes.func;


var styles = {
  listItem: {
    listStyleType: 'none',
    textDecoration: 'none',
    position: 'relative',
    float: 'left',
    margin: 0,
    fontSize: 14,
    fontWeight: 'bold',
    flex: 1,
    minWidth: 100,
    lastChild: {
      border: 'none'
    }
  },
  text: {
    paddingTop: 22,
    paddingRight: 0,
    paddingBottom: 16,
    paddingLeft: 0,
    display: 'inline-block',
    width: '100%',
    textDecoration: 'none',
    cursor: 'pointer'
  },
  divider: {
    content: '',
    position: 'absolute',
    top: '50%',
    left: -1,
    width: 1,
    height: 40,
    marginTop: -20
  },
  navigationArrow: {
    content: '',
    display: 'inline-block',
    width: 15,
    height: 15,
    position: 'absolute',
    left: '50%',
    bottom: 4,
    marginLeft: -8
  }
};

var SectionAnchorBarItem = function (_Component) {
  _inherits(SectionAnchorBarItem, _Component);

  function SectionAnchorBarItem() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, SectionAnchorBarItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(SectionAnchorBarItem)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      hovered: false
    }, _this.handleMouseEnter = function () {
      _this.setState({ hovered: true });
    }, _this.handleMouseLeave = function () {
      _this.setState({ hovered: false });
    }, _this.handleOnPress = function (event) {
      if (_this.props.onClick) _this.props.onClick(event);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SectionAnchorBarItem, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._uniqueId = _uniqueId2.default.generate();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var title = _props.title;
      var link = _props.link;
      var listItemStyle = _props.listItemStyle;
      var listItemHoverStyle = _props.listItemHoverStyle;
      var textStyle = _props.textStyle;
      var textHoverStyle = _props.textHoverStyle;
      var arrowStyle = _props.arrowStyle;
      var dividerStyle = _props.dividerStyle;


      var getTheme = this.context.compTheme || _themeManager2.default.getCompTheme(_lightRawTheme2.default);
      var theme = getTheme && getTheme.sectionAnchorBar;

      var textMergeStyle = '';
      var listItemMergeStyle = '';

      if (this.state.hovered) {
        var listHoverStyle = { cursor: 'pointer', backgroundColor: theme.accent3Color };
        textMergeStyle = _stylePropable.mergeStyles.apply(this, [styles.text, { color: theme.alternateTextColor }, textHoverStyle]);
        listItemMergeStyle = _stylePropable.mergeStyles.apply(this, [styles.listItem, listHoverStyle, listItemHoverStyle]);
      } else {
        var listStyle = { cursor: 'default', backgroundColor: theme.primary3Color };
        textMergeStyle = _stylePropable.mergeStyles.apply(this, [styles.text, { color: theme.textColor }, textStyle]);
        listItemMergeStyle = _stylePropable.mergeStyles.apply(this, [styles.listItem, listStyle, listItemStyle]);
      }

      var arrowColor = this.state.hovered ? theme.alternateTextColor : theme.textColor;
      var dividerColor = { backgroundColor: theme.borderColor };

      return _react2.default.createElement(
        'li',
        {
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave,
          onClick: this.handleOnPress,
          style: listItemMergeStyle
        },
        _react2.default.createElement(
          'a',
          { href: link },
          _react2.default.createElement(
            _Text2.default,
            { style: textMergeStyle },
            title
          )
        ),
        _react2.default.createElement(_ChevronDown2.default, {
          color: arrowColor,
          style: _stylePropable.mergeStyles.apply(this, [styles.navigationArrow, arrowStyle])
        }),
        _react2.default.createElement('div', { style: _stylePropable.mergeStyles.apply(this, [styles.divider, dividerColor, dividerStyle]) })
      );
    }
  }]);

  return SectionAnchorBarItem;
}(_react.Component);

SectionAnchorBarItem.propTypes = {
  arrowStyle: object,
  className: string,
  dividerStyle: object,
  id: string,
  link: string,
  listItemStyle: object,
  listItemHoverStyle: object,
  /**
   * onClick props for triggers the click event
   */
  onClick: func,
  /**
   * Override the inline-styles of the root element.
   */
  style: object,
  textStyle: object,
  textHoverStyle: object,
  title: string
};
SectionAnchorBarItem.contextTypes = {
  compTheme: object
};
exports.default = (0, _contextPure2.default)(SectionAnchorBarItem);