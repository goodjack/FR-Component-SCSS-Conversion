import React, { Component, PropTypes } from 'react';
import { mergeStyles } from '../helpers/utils/stylePropable';
import DefaultRawTheme from '../helpers/styles/rawThemes/lightRawTheme';
import ThemeManager from '../helpers/styles/themeManager';
import composeContextPure from '../helpers/composedComponents/contextPure';
import Button from '../Button';
import Icon from '../core/Icon';
const noop = () => null;
const { string, object, func, bool } = PropTypes;

const prepareStyle = ({ context, props }) => {

  const CompTheme = context.CompTheme || ThemeManager.getCompTheme(DefaultRawTheme);
  const compSpacing = CompTheme && CompTheme.rawTheme.spacing || {};
  const compPalette = CompTheme && CompTheme.rawTheme.palette || {};
  const styles = {
    root: {
      position: 'relative',
      boxSizing: 'border-box',
      padding: compSpacing.iconSize / 2,
      width: compSpacing.iconSize * 2,
      height: compSpacing.iconSize * 2,
      fontSize: compSpacing.iconSize,
      backgroundColor: 'transparent',
      color: compPalette.textColor,
      fill: compPalette.textColor,
    },
    colorStyle: {
      fill: 'red',
    },
  };

  const iconStyle = mergeStyles.apply(this, [styles.root, props.style]);
  const colorStyle = styles.colorStyle;
  return { iconStyle, colorStyle };
};

class FavoriteButton extends Component {

static propTypes = {
  children: object,
  disabled: bool,
  hoverStyle: object,
  iconClassName: string,
  onMouseEnter: func,
  onMouseLeave: func,
  onTouchTap: func,
  style: object,
};

  static defaultProps = {
    disabled: false,
    onMouseEnter: noop,
    onMouseLeave: noop,
    onTouchTap: noop,
  };

  state ={
    clicked: false,
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
    if (this.state.clicked === false) {
      this.setState({ clicked: true });
    } else {
      this.setState({ clicked: false });
    }

    this.props.onTouchTap(event);
  };

  render() {
    const {
      style,
      disabled,
      hoverStyle,
      iconClassName,
      ...other,
    } = this.props;

    const {
    iconStyle,
    colorStyle,
    } = prepareStyle(this);

    const iconButtonProps = {
      iconClassName,
      disabled,
      hoverStyle,
      style: iconStyle,
      onMouseLeave: this.handleMouseLeave,
      onTouchTap: this.handleTouchTap,
      onMouseEnter: this.handleMouseEnter,
    };
    if (this.state.clicked === true) {
      return (<Button {...iconButtonProps}><Icon name = "Favorite" style ={colorStyle}/>
      </Button>);
    } else if (this.state.clicked === false) {
      return (<Button {...iconButtonProps}><Icon name = "AddFavoriteBorder"/></Button>);
    }

  }
}

export default composeContextPure(FavoriteButton);
