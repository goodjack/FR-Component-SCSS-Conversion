import React from 'react';
import StylePropable from '../helpers/mixins/stylePropable';
import DefaultRawTheme from '../helpers/styles/rawThemes/lightRawTheme';
import ThemeManager from '../helpers/styles/themeManager';
import ContextPure from '../helpers/mixins/contextPure';
import ConfigurationManager from '../helpers/configuration/configurationManager';
import BaseConfig from '../helpers/configuration/baseConfig';
import Button from '../Button';
import Image from '../core/Image';

const IconButton = React.createClass({

  propTypes: {
    /**
     * Override the inline-styles of the root element.
     */
    children: React.PropTypes.object,
    disable: React.PropTypes.bool,
    hoverStyle: React.PropTypes.object,
    iconImageSrc: React.PropTypes.string,
    iconclassName: React.PropTypes.string,
    iconImageStyles: React.PropTypes.object,
    onMouseEnter: React.PropTypes.func,
    onMouseLeave: React.PropTypes.func,
    onTouchTap: React.PropTypes.func,
    style: React.PropTypes.object,
  },

  contextTypes: {
    muiTheme: React.PropTypes.object,
    muiConfig: React.PropTypes.object,
  },

  // for passing default theme context to children
  childContextTypes: {
    muiTheme: React.PropTypes.object,
    muiConfig: React.PropTypes.object,
  },

  mixins: [
    ContextPure,
    StylePropable,
  ],

  statics: {
    getRelevantContextKeys(muiTheme) {
      // const buttonTheme = uniTheme.button;
      // Fill theming information
      const spacing = muiTheme.rawTheme.spacing;
      const palette = muiTheme.rawTheme.palette;

      return {
        iconSize: spacing.iconSize,
        textColor: palette.textColor,
      };

    },

    getRelevantContextConfig(uniConfig) {
      return uniConfig.button;
    },

    getChildrenClasses() {
      return [
      ];
    },
  },

  getInitialState() {
    // let props = (this.props.children) ? this.props.children.props : this.props;
    // TODO: fill the state from props if needed
    return {
      muiTheme: this.context.muiTheme ? this.context.muiTheme :
      ThemeManager.getMuiTheme(DefaultRawTheme),
      muiConfig: this.context.muiConfig ? this.context.muiConfig :
      ConfigurationManager.getMuiConfig(BaseConfig),
    };
  },

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme,
      muiConfig: this.state.muiConfig,
    };
  },

  getStyles() {
    const {
      iconSize,
      textColor,
    } = this.constructor.getRelevantContextKeys(this.state.muiTheme);

    const styles = {
      root: {
        position: 'relative',
        boxSizing: 'border-box',
        padding: iconSize / 2,
        width: iconSize * 2,
        height: iconSize * 2,
        fontSize: iconSize,
        backgroundColor: 'transparent',
        color: textColor,
        fill: textColor,
      },
    };

    return styles;
  },

  handleMouseEnter(event) {
    // Cancel hover styles for touch devices
    if (!this.state.touch) this.setState({ hovered: true });
    if (this.props.onMouseEnter) this.props.onMouseEnter(event);
  },

  handleMouseLeave(event) {
    this.setState({ hovered: false });
    if (this.props.onMouseLeave) this.props.onMouseLeave(event);
  },

  handleTouchTap(event) {
    this.setState({ clicked: true });
    if (this.props.onTouchTap) this.props.onTouchTap(event);
  },

  render() {
    const {
      style,
      disable,
      hoverStyle,
      iconclassName,
      iconImageSrc,
      ...other,
    } = this.props;
    const styles = this.getStyles();
    const iconStyle = this.mergeStyles(styles.root, style);

    const iconButtonProps = {
      className: iconclassName,
      disable,
      hoverStyle,
      onMouseLeave: this.handleMouseLeave,
      onTouchTap: this.handleTouchTap,
      onMouseEnter: this.handleMouseEnter,
    };
    iconButtonProps.style = iconStyle;

    const iconButtonElement = this.props.children ? (
      <Button {...iconButtonProps}>
        {this.props.children}
      </Button>
    ) : (
      <Button {...iconButtonProps}>
        {iconImageSrc ? <Image
          source={iconImageSrc}
          style={this.props.iconImageStyles}
        /> : null}
      </Button>
    );

    return iconButtonElement;
  },

});

export default IconButton;
