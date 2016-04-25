import React, { Component, PropTypes } from 'react';
import { mergeStyles } from '../helpers/utils/stylePropable';
import DefaultRawTheme from '../helpers/styles/rawThemes/lightRawTheme';
import ThemeManager from '../helpers/styles/themeManager';
import composeContextPure from '../helpers/composedComponents/contextPure';
import ConfigurationManager from '../helpers/configuration/configurationManager';
import BaseConfig from '../helpers/configuration/baseConfig';
import Hero from '../uniqlo/Hero';
import Heading from '../Heading';
const { string, object, array, bool, func } = PropTypes;

const prepareStyle = ({ props, context, state }) => {
  const compTheme = context.CompTheme || ThemeManager.getCompTheme(DefaultRawTheme);
  const overlay = compTheme && compTheme.overlay || {};
  const compConfig = context.compConfig || ConfigurationManager.getCompConfig(BaseConfig);
  const overlayConfig = compConfig && compConfig.overlay || {};
  const styles = {
    root: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: -4,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: overlay.borderColor,
      backgroundColor: overlay.backgroundColor,
      opacity: '0.5',
      padding: '5%',
      display: state.displayOverlay,
      textAlign: 'center',
    },
    buttonStyle: {
      backgroundColor: overlay.transparent,
      borderColor: overlay.borderColor,
      borderWidth: 1,
      borderStyle: 'solid',
      width: '100%',
      padding: '3%',
      marginBottom: '5%',
      display: 'inline-block',
    },
    labelStyle: {
      color: overlay.borderColor,
      fontSize: '100%',
    },
    container: {
      position: 'absolute',
      bottom: 0,
      width: '90%',
    },
    containerStyle: {
      position: 'relative',
      height: overlayConfig.containerHeight || 350,
    },
  };
  const rootStyle = mergeStyles.apply(this, [styles.root, props.style]);
  const buttonStyle = mergeStyles.apply(this, [styles.buttonStyle, props.buttonStyle]);
  const labelStyle = mergeStyles.apply(this, [styles.labelStyle, props.labelStyle]);
  const container = mergeStyles.apply(this, [styles.container, props.containerStyle]);
  const containerStyle = styles.containerStyle;
  return { rootStyle, buttonStyle, labelStyle, container, containerStyle };
};

class Overlay extends Component {

  static propTypes = {
    className: string,
    callOverlay: func,
    id: string,
    style: object,
    buttonStyle: object,
    labelStyle: object,
    containerStyle: object,
    children: React.PropTypes.oneOfType([
      array,
      object,
    ]).isRequired,
    linkText: string,
    imageSrc: string,
    imageTitle: string,
    navToOverlayComp: bool,
    subtitle: string,
    text: string,
    title: string,
    variation: string,
  };

   state = {
     displayOverlay: 'none',
   };

  getChildren = (children, buttonStyle, labelStyle) => {
    const renderChildren = React.Children.map(children,
      (child, index) =>
        React.cloneElement(child, {
          refId: index,
          style: buttonStyle,
          labelStyle,
        })
      );
    return renderChildren;
  };

   showOverlay = (val) => {
     this.setState({ displayOverlay: val === true ? 'block' : 'none' });
   };

  render() {
    const {
      className,
      id,
      children,
      imageSrc,
      imageTitle,
      subtitle,
      text,
      title,
      linkText,
      variation,
     } = this.props;

    const { rootStyle, container, containerStyle, labelStyle, buttonStyle } = prepareStyle(this);
    const renderChildren = this.getChildren(children, buttonStyle, labelStyle);

    return (
        <div style = {containerStyle}>
        <Hero
          variation={variation}
          imageSrc = {imageSrc}
          imageTitle = {imageTitle}
          subtitle = {subtitle}
          text = {text}
          title = {title}
          linkText = {linkText}
          navToOverlayComp
          callOverlay ={this.showOverlay}
        />
        <div id={id}
          className={className}
          style={rootStyle}
        >
        <Heading type="h1" headingText={title} style={labelStyle} />
        <div style = {container} >{renderChildren}</div>
        </div>
      </div>
      );
  }
}
export default composeContextPure(Overlay);
