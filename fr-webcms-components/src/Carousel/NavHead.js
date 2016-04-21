import React, { PropTypes, Component } from 'react';
import { mergeStyles, prepareStyles } from '../helpers/utils/stylePropable';

const { oneOf, any, number, object, func } = PropTypes;

export default class NavHead extends Component {

  static propTypes = {

    // Style targetted for arrow
    arrowStyle: object,

    // Direction of the arrow
    direction: oneOf(['up', 'down', 'right', 'left', 'none']),

    // Hover style of the container
    navHoverStyle: object,

    // Navigation style
    navStyle: object,

    // Click callback
    onTouchTap: func,

    // Size of the arrow
    size: number,

    // Style prop of the container
    style: object,

    // Value associated with click
    value: any,
  };

  static defaultProps = {
    direction: 'right',
  };

  state = {
    highlight: 0,
    over: false,
  };

  getStyles() {
    const {
      direction,
      size,
      arrowStyle,
      navStyle,
      navHoverStyle,
    } = this.props;
    const {
      over,
    } = this.state;
    let tempStyle;
    let style;
    tempStyle = arrowStyle || {};
    style = {
      root: {
        display: 'inline-block',
        textAlign: 'center',
        paddingTop: 5,
      },
      arrow: {
        display: 'inline-block',
        borderLeft: '5px solid transparent',
        borderTop: '5px solid transparent',
        borderBottom: '5px solid transparent',
        borderRight: '5px solid transparent',
      },
    };
    if (navStyle && navStyle.color) {
      tempStyle.color = navStyle.color;
    }

    if (over && navHoverStyle && navHoverStyle.color) {
      tempStyle.color = navHoverStyle.color;
    }

    switch (direction) {
      case 'up':
        Object.assign(style.arrow, {
          borderBottomColor: tempStyle.color || 'black',
        });
        break;
      case 'down':
        Object.assign(style.arrow, {
          borderTopColor: tempStyle.color || 'black',
        });
        break;
      case 'left':
        Object.assign(style.arrow, {
          borderLeftColor: tempStyle.color || 'black',
        });
        style.root.paddingLeft = 5;
        break;
      case 'right':
        Object.assign(style.arrow, {
          borderRightColor: tempStyle.color || 'black',
        });
        style.root.paddingRight = 5;
        break;
      default:

        // Nothing happens
        break;
    }

    if (size) {
      Object.assign(style.arrow, {
        borderWidth: size,
      });
    }

    return style;
  }

  handleMouseOver = () => {
    this.setState({
      over: true,
    });
  };

  handleMouseOut = () => {
    this.setState({
      over: false,
    });
  };

  handleClick = () => {
    const {
      onTouchTap,
      value,
    } = this.props;
    if (onTouchTap) {
      if (value) {
        onTouchTap(value);
      } else {
        onTouchTap();
      }
    }
  };

  render() {
    const _this = this;
    const {
      style,
      arrowStyle,
      size,
      navStyle,
      navHoverStyle,
      ...other,
    } = _this.props;
    const { over } = _this.state;
    const styles = _this.getStyles();
    let mergedRootStyles = mergeStyles(styles.root, style, navStyle);
    let arrowHeadStyle = mergeStyles(styles.arrow, arrowStyle);
    if (over) {
      mergedRootStyles = mergeStyles(mergedRootStyles, navHoverStyle);
      arrowHeadStyle = mergeStyles(styles.arrow, arrowStyle);
    }

    let renderedChildren;
    renderedChildren = (<div style={prepareStyles.apply(_this, [arrowHeadStyle])}></div>);
    return (
      <div style={prepareStyles.apply(_this, [mergedRootStyles])} {...other}
        onMouseOver={_this.handleMouseOver}
        onMouseOut={_this.handleMouseOut}
        onClick={_this.handleClick}
      >
        {renderedChildren}
      </div>
    );
  }
}
