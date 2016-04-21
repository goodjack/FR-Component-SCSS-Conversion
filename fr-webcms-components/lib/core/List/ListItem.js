'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _contextPure = require('../../helpers/composedComponents/contextPure');

var _contextPure2 = _interopRequireDefault(_contextPure);

var _lightRawTheme = require('../../helpers/styles/rawThemes/lightRawTheme');

var _lightRawTheme2 = _interopRequireDefault(_lightRawTheme);

var _stylePropable = require('../../helpers/utils/stylePropable');

var _themeManager = require('../../helpers/styles/themeManager');

var _themeManager2 = _interopRequireDefault(_themeManager);

var _RollOverImage = require('../../RollOverImage');

var _RollOverImage2 = _interopRequireDefault(_RollOverImage);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var bool = _react.PropTypes.bool;
var node = _react.PropTypes.node;
var string = _react.PropTypes.string;
var object = _react.PropTypes.object;
var number = _react.PropTypes.number;
var func = _react.PropTypes.func;

var pushElement = function pushElement(children, element, baseStyles, additionalProps) {
  if (element) {
    var styles = _stylePropable.mergeStyles.apply(undefined, [baseStyles, element.props.style]);
    children.push(_react2.default.cloneElement(element, _extends({
      key: children.length,
      style: styles
    }, additionalProps)));
  }
};

var prepareStyles = function prepareStyles(me) {
  var _me$props = me.props;
  var rightToggle = _me$props.rightToggle;
  var nestedLevel = _me$props.nestedLevel;
  var leftIcon = _me$props.leftIcon;
  var insetChildren = _me$props.insetChildren;
  var rightIcon = _me$props.rightIcon;

  var paddingToggle = rightToggle ? 52 : 16;
  var styles = {
    sRoot: {
      textDecoration: 'none',
      display: 'block',
      fontSize: 16,
      lineHeight: '16px',
      position: 'relative',
      cursor: 'pointer'
    },
    sInnerDiv: {
      marginLeft: nestedLevel * 18,
      paddingLeft: leftIcon || insetChildren ? 52 : 16,
      paddingRight: rightIcon ? 56 : paddingToggle,
      paddingBottom: 12,
      paddingTop: 12,
      position: 'relative'
    },
    sIcons: {
      height: 20,
      width: 20,
      display: 'block',
      position: 'absolute',
      top: 0,
      margin: 10,
      color: me.theme.iconColor,
      fill: me.theme.iconFill
    },
    sLeftIcon: {
      left: 4
    },
    sRightIcon: {
      right: 4
    },
    sRightToggle: {
      position: 'absolute',
      display: 'block',
      width: 54,
      top: 6,
      right: 8
    }
  };
  return styles;
};

var getRootStyles = function getRootStyles(me) {
  var _me$styles = me.styles;
  var sRoot = _me$styles.sRoot;
  var sInnerDiv = _me$styles.sInnerDiv;
  var _me$props2 = me.props;
  var style = _me$props2.style;
  var innerDivStyle = _me$props2.innerDivStyle;
  var hoverStyle = _me$props2.hoverStyle;

  var theme = me.theme;
  var rootColors = {
    backgroundColor: me.state.hovered ? theme.itemHoverBackgroundColor : theme.itemBackgroundColor,
    color: me.state.hovered ? theme.labelHoverColor : theme.labelColor
  };
  var rootStyle = me.state.hovered ? hoverStyle : style;
  rootStyle = _stylePropable.mergeStyles.apply(undefined, [sRoot, rootColors, rootStyle]);
  var divStyle = _stylePropable.mergeStyles.apply(undefined, [sInnerDiv, innerDivStyle]);
  return { rootStyle: rootStyle, divStyle: divStyle };
};

var createChildren = function createChildren(me) {
  var _me$props3 = me.props;
  var autoGenerateNestedIndicator = _me$props3.autoGenerateNestedIndicator;
  var children = _me$props3.children;
  var label = _me$props3.label;
  var leftIcon = _me$props3.leftIcon;
  var nestedLevel = _me$props3.nestedLevel;
  var rightIcon = _me$props3.rightIcon;
  var rightToggle = _me$props3.rightToggle;

  var other = _objectWithoutProperties(_me$props3, ['autoGenerateNestedIndicator', 'children', 'label', 'leftIcon', 'nestedLevel', 'rightIcon', 'rightToggle']);

  var _me$styles2 = me.styles;
  var sIcons = _me$styles2.sIcons;
  var sLeftIcon = _me$styles2.sLeftIcon;
  var sRightIcon = _me$styles2.sRightIcon;
  var sRightToggle = _me$styles2.sRightToggle;

  var contentChildren = [];
  if (leftIcon) {
    pushElement(contentChildren, _react2.default.createElement(_Icon2.default, { name: leftIcon }), _stylePropable.mergeStyles.apply(undefined, [sIcons, sLeftIcon]));
  }

  if (rightIcon) {
    pushElement(contentChildren, _react2.default.createElement(_Icon2.default, { name: rightIcon }), _stylePropable.mergeStyles.apply(undefined, [sIcons, sRightIcon]));
  }

  if (label) {
    contentChildren.push(label);
  }

  var nestedList = void 0;
  var display = me.state.open ? null : 'none';
  var hasNestListItems = false;
  if (children) {
    _react2.default.Children.forEach(children, function (child) {
      if (_react2.default.isValidElement(child) && child.type.displayName === 'List') {
        hasNestListItems = true;
        nestedList = _react2.default.cloneElement(child, {
          style: { display: display },
          nestedLevel: nestedLevel
        });
      } else {
        contentChildren.push(child);
      }
    });
  }

  var needsNestedIndicator = hasNestListItems && autoGenerateNestedIndicator && !(rightIcon || rightToggle);
  if (needsNestedIndicator) {
    var rightIconButtonHandlers = {};
    var rightIconButtonElement = void 0;
    if (needsNestedIndicator) {
      rightIconButtonElement = me.state.open ? _react2.default.createElement(_Icon2.default, { name: 'NavigationArrowDropUp' }) : _react2.default.createElement(_Icon2.default, { name: 'NavigationArrowDropDown' });
      rightIconButtonHandlers.onClick = me.handleNestedListToggle;
    }

    pushElement(contentChildren, rightIconButtonElement, _stylePropable.mergeStyles.apply(undefined, [sRightToggle]), rightIconButtonHandlers);
  }

  if (rightToggle) {
    pushElement(contentChildren, _react2.default.createElement(_Icon2.default, { name: rightToggle }), _stylePropable.mergeStyles.apply(undefined, [sRightToggle]));
  }

  return { contentChildren: contentChildren, nestedList: nestedList };
};

var ListItem = function (_Component) {
  _inherits(ListItem, _Component);

  function ListItem() {
    var _Object$getPrototypeO;

    var _temp, _this2, _ret;

    _classCallCheck(this, ListItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ListItem)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this2), _this2.state = {
      hovered: false,
      open: _this2.props.initiallyOpen
    }, _this2.componentWillMount = function () {
      var _this = _this2;
      var compTheme = _this.context.compTheme || _themeManager2.default.getCompTheme(_lightRawTheme2.default) || {};
      _this.theme = compTheme.listItem || {};
      _this.styles = prepareStyles(_this);
    }, _this2.handleMouseEnter = function (event) {
      _this2.setState({ hovered: true });
      _this2.props.onMouseEnter(event);
    }, _this2.handleMouseLeave = function (event) {
      _this2.setState({ hovered: false });
      _this2.props.onMouseLeave(event);
    }, _this2.handleNestedListToggle = function (event) {
      var _this = _this2;
      event.stopPropagation();
      _this.setState({ open: !_this.state.open });
      _this.props.onNestedListToggle(_this);
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(ListItem, [{
    key: 'render',
    value: function render() {
      var _this = this;
      var _this$props = _this.props;
      var onTouchTap = _this$props.onTouchTap;
      var orientation = _this$props.orientation;
      var imageSrc = _this$props.imageSrc;
      var hoverImageSrc = _this$props.hoverImageSrc;
      var label = _this$props.label;
      var link = _this$props.link;
      var outerDivStyle = _this$props.outerDivStyle;
      var targetWindow = _this$props.targetWindow;

      var other = _objectWithoutProperties(_this$props, ['onTouchTap', 'orientation', 'imageSrc', 'hoverImageSrc', 'label', 'link', 'outerDivStyle', 'targetWindow']);

      var _createChildren = createChildren(_this);

      var contentChildren = _createChildren.contentChildren;
      var nestedList = _createChildren.nestedList;

      var _getRootStyles = getRootStyles(_this);

      var rootStyle = _getRootStyles.rootStyle;
      var divStyle = _getRootStyles.divStyle;


      var handleOnClick = nestedList ? _this.handleNestedListToggle : onTouchTap;
      var outerStyle = orientation === 'horizontal' ? (0, _stylePropable.mergeStyles)(outerDivStyle, { float: 'left' }) : outerDivStyle;

      var innerDiv = imageSrc ? _react2.default.createElement(
        'div',
        { style: divStyle },
        _react2.default.createElement(_RollOverImage2.default, {
          imgSrc: imageSrc,
          rollImgSrc: hoverImageSrc,
          altText: label,
          link: link,
          target: targetWindow,
          style: rootStyle,
          onMouseLeave: _this.handleMouseLeave,
          onMouseEnter: _this.handleMouseEnter,
          onClick: handleOnClick
        })
      ) : _react2.default.createElement(
        'a',
        { href: link, target: targetWindow, style: rootStyle },
        _react2.default.createElement(
          'div',
          {
            style: divStyle,
            onMouseLeave: _this.handleMouseLeave,
            onMouseEnter: _this.handleMouseEnter,
            onClick: handleOnClick
          },
          ' ',
          contentChildren,
          ' '
        )
      );

      return _react2.default.createElement(
        'div',
        { style: outerStyle },
        innerDiv,
        nestedList
      );
    }
  }]);

  return ListItem;
}(_react.Component);

ListItem.propTypes = {
  autoGenerateNestedIndicator: bool,
  children: node,
  hoverStyle: object,
  hoverImageSrc: string,
  imageSrc: string,
  initiallyOpen: bool,
  innerDivStyle: object,
  insetChildren: bool,
  label: string,
  leftIcon: string,
  link: string,
  nestedLevel: number,
  onMouseEnter: func,
  onMouseLeave: func,
  onNestedListToggle: func,
  onTouchTap: func,
  orientation: string,
  outerDivStyle: object,
  rightIcon: string,
  rightToggle: string,
  style: object,
  targetWindow: string
};
ListItem.contextTypes = {
  compTheme: object
};
ListItem.defaultProps = {
  autoGenerateNestedIndicator: true,
  initiallyOpen: false,
  insetChildren: false,
  nestedLevel: 0,
  onMouseEnter: function onMouseEnter() {
    return null;
  },
  onMouseLeave: function onMouseLeave() {
    return null;
  },
  onNestedListToggle: function onNestedListToggle() {
    return null;
  },
  targetWindow: 'self'
};
exports.default = (0, _contextPure2.default)(ListItem);