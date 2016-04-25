import React, { Component, PropTypes } from 'react';
import composeContextPure from '../../helpers/composedComponents/contextPure';
import DefaultRawTheme from '../../helpers/styles/rawThemes/lightRawTheme';
import { mergeStyles } from '../../helpers/utils/stylePropable';
import ThemeManager from '../../helpers/styles/themeManager';

const {
  bool,
  oneOf,
  string,
  object,
  number,
  func,
} = PropTypes;

class SwipableNavItem extends Component {

  static propTypes = {
    active: bool,
    style: object,
    activeStyle: object,
    index: number,
    link: string,
    onPress: func,
    target: oneOf(['_blank', '_self', '_parent', '_top']),
    text: string,
  };

  static defaultProps = {
    onPress: () => null,
    target: '_self',
    active: 'false',
  };

  componentWillMount = () => {
    const _this = this;
    const compTheme = _this.context.compTheme || ThemeManager.getCompTheme(DefaultRawTheme) || {};
    _this.theme = compTheme.swipeableNavItem || {};
  };

  handleMouseDown = (event) => {
    const {
      onPress,
      index,
    } = this.props;
    onPress(event, index);
  };

  render() {
    const {
      style,
      activeStyle,
      link,
      target,
      text,
      active,
    } = this.props;
    const itemMargin = this.theme.margin;
    const activeRootStyle = mergeStyles({ color: this.theme.activeColor, margin: itemMargin }, activeStyle);
    let rooStyle = mergeStyles({ color: this.theme.txtColor, margin: itemMargin }, style);
    rooStyle = active ? activeRootStyle : rooStyle;
    return (
      <a
        onMouseDown={this.handleMouseDown}
        href={link}
        target={target}
        style={rooStyle}
      >{text}</a>
    );
  }
}

export default composeContextPure(SwipableNavItem);
