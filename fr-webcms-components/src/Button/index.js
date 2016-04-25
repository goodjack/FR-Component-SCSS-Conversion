import React, { Component, PropTypes } from 'react';
import { mergeStyles } from '../helpers/utils/stylePropable';
import composeContextPure from '../helpers/composedComponents/contextPure';
import Typography from '../helpers/styles/typography';
import DefaultRawTheme from '../helpers/styles/rawThemes/lightRawTheme';
import ThemeManager from '../helpers/styles/themeManager';
import Text from '../Text';

const noop = () => null;
const { string, object, func, node, bool } = PropTypes;

const prepareStyle = ({ context, props, state }) => {

  const CompTheme = context.CompTheme || ThemeManager.getCompTheme(DefaultRawTheme);
  const themeButton = CompTheme && CompTheme.button || {};
  const defaultTextColor = props.disabled ?
  themeButton.disabledTextColor :
  themeButton.textColor;
  const styles = {
    button: {
      padding: themeButton.padding,
      color: defaultTextColor,
      backgroundColor:
      state.hovered && !props.disabled ?
      themeButton.hoverColor :
      themeButton.backgroundColor,
      outline: 'none',
      border: 'none',
      textShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 1px',
      cursor: state.hovered && !props.disabled ? 'pointer' : 'default',
      fontWeight: Typography.fontWeightMedium,
      width: '100%',
      overflow: 'hidden',
      opacity: props.disabled ? 0.5 : 'null',
    },
    labelStyle: {
      fontSize: 15,
    },
    anchor: {
      display: 'block',
      lineHeight: 0,
    },
  };

  let buttonStyle = mergeStyles.apply(this, [styles.button, props.style]);
  const anchorStyle = mergeStyles.apply(this, [styles.anchor, props.linkStyle]);
  if (props.hoverStyle && state.hovered) {
    buttonStyle = mergeStyles.apply(this, [styles.button, props.style, props.hoverStyle]);
  }

  const styleLabel = mergeStyles.apply(this, [styles.labelStyle, props.labelStyle]);
  return { buttonStyle, styleLabel, anchorStyle };
};

class Button extends Component {
 static propTypes = {
   children: node,
   className: string,
   hoverStyle: object,
   id: string,
   label: string,
   labelStyle: object,
   link: string,
   linkStyle: object,
   onMouseEnter: func,
   onMouseLeave: func,
   onTouchTap: func,
   style: object,
   target: string,
   disabled: bool,
 };

 static defaultProps = {
   disabled: false,
   onMouseEnter: noop,
   onMouseLeave: noop,
   onTouchTap: noop,
 };

 state ={
   hovered: false,
 };

  handleMouseEnter = (event) => {
    this.setState({ hovered: true });
    this.props.onMouseEnter(event);
  };

  handleMouseLeave = (event) => {
    this.setState({ hovered: false });
    this.props.onMouseLeave(event);
  };

  handleTouchTap = (event) => {
    this.setState({ clicked: true });
    this.props.onTouchTap(event);
  };

  render() {
    const {
      style,
      label,
      labelStyle,
      hoverStyle,
      className,
      id,
      disabled,
      children,
      link,
      target,
      ...other,
    } = this.props;

    const {
    buttonStyle,
    styleLabel,
    anchorStyle,
  } = prepareStyle(this);

    const enhancedButtonChildren = children ? (children)
    : (<Text style={styleLabel}>{label}</Text>);

    const buttonProps = {
      className,
      id,
      disabled,
      style: buttonStyle,
      onClick: this.handleTouchTap,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
    };
    const anchorProps = {
      style: anchorStyle,
      href: link,
      target,
    };
    const renderNode = (<button {...buttonProps}>{enhancedButtonChildren}</button>);
    const linkNode = link ? (<a {...anchorProps}>{renderNode}</a>) : renderNode;
    return (linkNode);
  }
}

export default composeContextPure(Button);
