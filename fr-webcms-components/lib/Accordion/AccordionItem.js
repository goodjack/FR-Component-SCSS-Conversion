'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _stylePropable = require('../helpers/utils/stylePropable');

var _contextPure = require('../helpers/composedComponents/contextPure');

var _contextPure2 = _interopRequireDefault(_contextPure);

var _lightRawTheme = require('../helpers/styles/rawThemes/lightRawTheme');

var _lightRawTheme2 = _interopRequireDefault(_lightRawTheme);

var _themeManager = require('../helpers/styles/themeManager');

var _themeManager2 = _interopRequireDefault(_themeManager);

var _Icon = require('../core/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var object = _react.PropTypes.object;
var array = _react.PropTypes.array;
var bool = _react.PropTypes.bool;
var func = _react.PropTypes.func;
var number = _react.PropTypes.number;
var string = _react.PropTypes.string;
var oneOfType = _react.PropTypes.oneOfType;


var prepareStyle = function prepareStyle(context) {
  var CompTheme = context.CompTheme || _themeManager2.default.getCompTheme(_lightRawTheme2.default);
  var themeAccordion = CompTheme && CompTheme.accordion || {};

  var styles = {
    container: {
      width: '100%',
      border: '1px solid',
      borderColor: themeAccordion.borderColor,
      marginBottom: 5,
      borderRadius: 4
    },
    headingStyleExpend: {
      borderBottom: '1px solid',
      borderBottomColor: themeAccordion.borderColor,
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
      cursor: 'pointer',
      backgroundColor: themeAccordion.backgroundColor
    },
    headingStyleCollapse: {
      cursor: 'pointer'
    },
    headingStyle: {
      padding: 5,
      position: 'relative',
      display: 'block',
      height: 38,
      lineHeight: '38px'
    },
    contentStyle: {
      padding: 10
    },
    expand: {
      opacity: 1,
      transition: 'opacity 1s',
      height: 'auto'
    },
    collapse: {
      padding: 0,
      opacity: 0,
      transition: 'opacity 1s',
      height: 0
    },
    headingTextStyle: {
      display: 'inline-block'
    },
    iconButtonStyle: {
      display: 'inline-block',
      position: 'absolute',
      top: 12,
      right: 20
    }
  };

  return { styles: styles };
};

var AccordionItem = function (_Component) {
  _inherits(AccordionItem, _Component);

  function AccordionItem() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, AccordionItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(AccordionItem)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      multipleExpandTab: null
    }, _this.expandCollapse = function (event) {
      var _this$props = _this.props;
      var expandMultipleTabs = _this$props.expandMultipleTabs;
      var accordionCallback = _this$props.accordionCallback;
      var itemReferenceId = _this$props.itemReferenceId;


      if (expandMultipleTabs) {
        _this.setState({ multipleExpandTab: _this.state.multipleExpandTab ? false : true });
      } else {
        accordionCallback(itemReferenceId, event);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AccordionItem, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({ multipleExpandTab: this.props.expandTab });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.expandTab !== this.state.expandTab) {
        this.setState({ multipleExpandTab: nextProps.expandTab });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var itemReferenceId = _props.itemReferenceId;
      var tileStyle = _props.tileStyle;
      var headingStyle = _props.headingStyle;
      var contentStyle = _props.contentStyle;
      var iconButtonStyle = _props.iconButtonStyle;
      var headingTextStyle = _props.headingTextStyle;
      var showIcon = _props.showIcon;
      var hideIcon = _props.hideIcon;
      var children = _props.children;
      var showIconStyle = _props.showIconStyle;
      var hideIconStyle = _props.hideIconStyle;

      var _prepareStyle = prepareStyle(this);

      var styles = _prepareStyle.styles;


      var multipleExpandTab = this.state.multipleExpandTab;
      var headingContainerStyle = multipleExpandTab ? styles.headingStyleExpend : styles.headingStyleCollapse;
      var toggle = multipleExpandTab ? styles.expand : styles.collapse;
      var accordionIcon = multipleExpandTab ? _react2.default.createElement(_Icon2.default, { name: showIcon, style: showIconStyle }) : _react2.default.createElement(_Icon2.default, { name: hideIcon, style: hideIconStyle });

      var heading = null;
      var content = _react2.default.Children.map(children, function (child) {
        if (child.type.displayName === 'Heading') {
          heading = child;
        } else {
          return child;
        }
      });

      var tileMergeStyle = _stylePropable.mergeStyles.apply(this, [styles.container, tileStyle]);
      var headingMergeStyle = _stylePropable.mergeStyles.apply(this, [styles.headingStyle, headingContainerStyle, headingStyle]);
      var headingTextMergeStyle = _stylePropable.mergeStyles.apply(this, [styles.headingTextStyle, headingTextStyle]);
      var iconButtonMergeStyle = _stylePropable.mergeStyles.apply(this, [styles.iconButtonStyle, iconButtonStyle]);
      var contentMergeStyle = _stylePropable.mergeStyles.apply(this, [styles.contentStyle, toggle, contentStyle]);

      return _react2.default.createElement(
        'div',
        {
          id: itemReferenceId,
          style: tileMergeStyle
        },
        _react2.default.createElement(
          'div',
          {
            onClick: this.expandCollapse,
            style: headingMergeStyle
          },
          _react2.default.createElement(
            'div',
            { style: headingTextMergeStyle },
            heading
          ),
          _react2.default.createElement(
            'div',
            { style: iconButtonMergeStyle },
            accordionIcon
          )
        ),
        _react2.default.createElement(
          'div',
          { style: contentMergeStyle },
          content
        )
      );
    }
  }]);

  return AccordionItem;
}(_react.Component);

AccordionItem.propTypes = {
  accordionCallback: func,
  children: oneOfType([array, object]),
  contentStyle: object,
  headingStyle: object,
  headingTextStyle: object,
  hideIcon: string,
  hideIconStyle: object,
  iconButtonStyle: object,
  expandMultipleTabs: bool,
  itemReferenceId: number,
  showIcon: string,
  showIconStyle: object,
  expandTab: bool,
  /**
   * Override the inline-styles of the root element.
   */
  tileStyle: object
};
exports.default = (0, _contextPure2.default)(AccordionItem);