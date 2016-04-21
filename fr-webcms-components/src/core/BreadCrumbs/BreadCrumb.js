import React, { Component, PropTypes } from 'react';
import composeContextPure from '../../helpers/composedComponents/contextPure';
import DefaultRawTheme from '../../helpers/styles/rawThemes/lightRawTheme';
import { mergeStyles } from '../../helpers/utils/stylePropable';
import ThemeManager from '../../helpers/styles/themeManager';

const { string, object } = PropTypes;
const prepareStyle = (me) => {
  const {
    context,
    props,
    state,
  } = me;
  const compTheme = context.compTheme || ThemeManager.getCompTheme(DefaultRawTheme) || {};
  const bCrumbTheme = compTheme.breadCrumb || {};
  const styles = {
    root: {
      color: bCrumbTheme.textColor,
      textDecoration: 'none',
    },
    hover: {
      color: bCrumbTheme.hoverColor,
    },
  };

  const mergedHoverStyle = mergeStyles.apply(this, [styles.hover, props.hoverStyle]);
  const mergedDefaultStyle = mergeStyles.apply(this, [styles.root, props.style]);
  const rootStyle = state.hovered ? mergedHoverStyle : mergedDefaultStyle;
  return { mergedDefaultStyle, rootStyle };
};

class BreadCrumb extends Component {

  static propTypes = {
    link: string,
    hoverStyle: object,
    style: object,
    target: string,
    text: string,
  };

  static contextTypes = {
    compTheme: object,
  };

  state = {
    hovered: false,
  };

  handleMouseEnter = () => {
    this.setState({ hovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ hovered: false });
  };

  render() {
    const {
      link,
      target,
      text,
      style,
      hoverStyle,
      ...other,
    } = this.props;
    const {
      mergedDefaultStyle,
      rootStyle,
    } = prepareStyle(this);

    return (link) ? (
        <a
          style={rootStyle}
          href={link}
          target={target}
          onMouseLeave={this.handleMouseLeave}
          onMouseEnter={this.handleMouseEnter}
        >{text}</a>
      ) : (
        <span style={mergedDefaultStyle}>{text}</span>
      );
  }
}

export default composeContextPure(BreadCrumb);
