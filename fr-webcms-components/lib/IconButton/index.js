'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _stylePropable = require('../helpers/mixins/stylePropable');

var _stylePropable2 = _interopRequireDefault(_stylePropable);

var _lightRawTheme = require('../helpers/styles/rawThemes/lightRawTheme');

var _lightRawTheme2 = _interopRequireDefault(_lightRawTheme);

var _themeManager = require('../helpers/styles/themeManager');

var _themeManager2 = _interopRequireDefault(_themeManager);

var _contextPure = require('../helpers/mixins/contextPure');

var _contextPure2 = _interopRequireDefault(_contextPure);

var _configurationManager = require('../helpers/configuration/configurationManager');

var _configurationManager2 = _interopRequireDefault(_configurationManager);

var _baseConfig = require('../helpers/configuration/baseConfig');

var _baseConfig2 = _interopRequireDefault(_baseConfig);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _Image = require('../core/Image');

var _Image2 = _interopRequireDefault(_Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var IconButton = _react2.default.createClass({
  displayName: 'IconButton',


  propTypes: {
    /**
     * Override the inline-styles of the root element.
     */
    children: _react2.default.PropTypes.object,
    disable: _react2.default.PropTypes.bool,
    hoverStyle: _react2.default.PropTypes.object,
    iconImageSrc: _react2.default.PropTypes.string,
    iconclassName: _react2.default.PropTypes.string,
    iconImageStyles: _react2.default.PropTypes.object,
    onMouseEnter: _react2.default.PropTypes.func,
    onMouseLeave: _react2.default.PropTypes.func,
    onTouchTap: _react2.default.PropTypes.func,
    style: _react2.default.PropTypes.object
  },

  contextTypes: {
    muiTheme: _react2.default.PropTypes.object,
    muiConfig: _react2.default.PropTypes.object
  },

  // for passing default theme context to children
  childContextTypes: {
    muiTheme: _react2.default.PropTypes.object,
    muiConfig: _react2.default.PropTypes.object
  },

  mixins: [_contextPure2.default, _stylePropable2.default],

  statics: {
    getRelevantContextKeys: function getRelevantContextKeys(muiTheme) {
      // const buttonTheme = uniTheme.button;
      // Fill theming information
      var spacing = muiTheme.rawTheme.spacing;
      var palette = muiTheme.rawTheme.palette;

      return {
        iconSize: spacing.iconSize,
        textColor: palette.textColor
      };
    },
    getRelevantContextConfig: function getRelevantContextConfig(uniConfig) {
      return uniConfig.button;
    },
    getChildrenClasses: function getChildrenClasses() {
      return [];
    }
  },

  getInitialState: function getInitialState() {
    // let props = (this.props.children) ? this.props.children.props : this.props;
    // TODO: fill the state from props if needed
    return {
      muiTheme: this.context.muiTheme ? this.context.muiTheme : _themeManager2.default.getMuiTheme(_lightRawTheme2.default),
      muiConfig: this.context.muiConfig ? this.context.muiConfig : _configurationManager2.default.getMuiConfig(_baseConfig2.default)
    };
  },
  getChildContext: function getChildContext() {
    return {
      muiTheme: this.state.muiTheme,
      muiConfig: this.state.muiConfig
    };
  },
  getStyles: function getStyles() {
    var _constructor$getRelev = this.constructor.getRelevantContextKeys(this.state.muiTheme);

    var iconSize = _constructor$getRelev.iconSize;
    var textColor = _constructor$getRelev.textColor;


    var styles = {
      root: {
        position: 'relative',
        boxSizing: 'border-box',
        padding: iconSize / 2,
        width: iconSize * 2,
        height: iconSize * 2,
        fontSize: iconSize,
        backgroundColor: 'transparent',
        color: textColor,
        fill: textColor
      }
    };

    return styles;
  },
  handleMouseEnter: function handleMouseEnter(event) {
    // Cancel hover styles for touch devices
    if (!this.state.touch) this.setState({ hovered: true });
    if (this.props.onMouseEnter) this.props.onMouseEnter(event);
  },
  handleMouseLeave: function handleMouseLeave(event) {
    this.setState({ hovered: false });
    if (this.props.onMouseLeave) this.props.onMouseLeave(event);
  },
  handleTouchTap: function handleTouchTap(event) {
    this.setState({ clicked: true });
    if (this.props.onTouchTap) this.props.onTouchTap(event);
  },
  render: function render() {
    var _props = this.props;
    var style = _props.style;
    var disable = _props.disable;
    var hoverStyle = _props.hoverStyle;
    var iconclassName = _props.iconclassName;
    var iconImageSrc = _props.iconImageSrc;

    var other = _objectWithoutProperties(_props, ['style', 'disable', 'hoverStyle', 'iconclassName', 'iconImageSrc']);

    var styles = this.getStyles();
    var iconStyle = this.mergeStyles(styles.root, style);

    var iconButtonProps = {
      className: iconclassName,
      disable: disable,
      hoverStyle: hoverStyle,
      onMouseLeave: this.handleMouseLeave,
      onTouchTap: this.handleTouchTap,
      onMouseEnter: this.handleMouseEnter
    };
    iconButtonProps.style = iconStyle;

    var iconButtonElement = this.props.children ? _react2.default.createElement(
      _Button2.default,
      iconButtonProps,
      this.props.children
    ) : _react2.default.createElement(
      _Button2.default,
      iconButtonProps,
      iconImageSrc ? _react2.default.createElement(_Image2.default, {
        source: iconImageSrc,
        style: this.props.iconImageStyles
      }) : null
    );

    return iconButtonElement;
  }
});

exports.default = IconButton;