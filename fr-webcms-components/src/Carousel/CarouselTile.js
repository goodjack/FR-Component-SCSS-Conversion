import React, { PropTypes, Component } from 'react';
import { mergeStyles, prepareStyles } from '../helpers/utils/stylePropable';

const { oneOf, number, object, node } = PropTypes;

export default class CarouselTile extends Component {

  static propTypes = {

    // Animation for the carousel
    animation: oneOf(['none', 'scroll', 'fade']),

    // Children of the tile
    children: node,

    // Current tab to be open
    current: number,

    // delay in case of animation
    delay: number,

    // items to be displayed per screen
    display: number,

    // index of the tile
    index: number,

    // Items to scroll
    scroll: number,

    // style
    style: object,

    // Position of the tile
    tilePosition: oneOf(['top', 'bottom']),

    // total number of tiles
    totalTile: number,
  };

  static defaultProps = {
    current: 0,
  };

  getStyles() {
    const {
      animation,
      tilePosition,
      index,
      current,
    } = this.props;
    let {
      delay,
    } = this.props;
    let style;
    delay = delay / 1000;
    while (delay > 2) {
      delay = delay / 2;
    }

    style = {
      display: 'inline-block',
      width: '100%',
      overflow: 'hidden',
      position: 'absolute',
      verticalAlign: 'middle',
      opacity: 0,
      left: 0,
    };
    if (index === current) {
      Object.assign(style, {
        zIndex: 2,
        opacity: 1,
        position: 'static',
        marginLeft: 0,
      });
    }

    switch (animation) {
      case 'scroll':
        style.transition = `left ${delay}s, opacity ${delay}s, margin-left ${delay}s`;
        this.getCalculatedStyle(style);
        break;
      case 'fade':
        style.transition = `opacity ${delay}s`;
        break;
      default:
    }
    style[tilePosition] = 0;
    return style;
  }

  getCalculatedStyle(style) {
    const {
      display,
      index,
      current,
      scroll,
      totalTile,
    } = this.props;
    const left = 100 / display;
    const max = current + display + scroll;
    let lowMax;
    let highMin;
    let tileLeft;
    const min = current - scroll;
    if (max > totalTile - 1) {
      lowMax = max - totalTile;
    }

    if (min < 0) {
      highMin = totalTile + min;
    }

    if (index > current && index < max) {
      tileLeft = ((index - current) * left);
      Object.assign(style, {
        zIndex: 1,
        marginLeft: `${tileLeft}%`,
      });
      if (index < (current + display)) {
        Object.assign(style, {
          opacity: 1,
        });
      }
    } else if (max > totalTile - 1 && index < lowMax) {
      tileLeft = ((totalTile + index - current) * left);
      Object.assign(style, {
        zIndex: 1,
        marginLeft: `${tileLeft}%`,
      });
      if (index < (lowMax - scroll)) {
        Object.assign(style, {
          opacity: 1,
        });
      }
    } else if (index < current && index >= min) {
      tileLeft = ((index - current) * left);
      Object.assign(style, {
        zIndex: 1,
        marginLeft: `${tileLeft}%`,
      });
    } else if (index >= highMin) {
      tileLeft = ((index - totalTile) * left);
      Object.assign(style, {
        zIndex: 1,
        marginLeft: `${tileLeft}%`,
      });
    }
  }

  render() {
    const {
      children,
      style,
      current,
      index,
      ...other,
    } = this.props;
    const styles = this.getStyles();
    const mergedRootStyles = mergeStyles(styles, style);
    const updatedChild = React.Children.map(this.props.children, (child) => {
      let childStyle;
      childStyle = {};
      Object.assign(childStyle, child.props.style, {
        verticalAlign: 'middle',
      });
      return React.cloneElement(child, {
        style: childStyle,
      });
    });
    return (
      <div style={prepareStyles.apply(this, [mergedRootStyles])} {...other}>
        {updatedChild}
      </div>
    );
  }
}
