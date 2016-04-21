import React, { PropTypes, Component } from 'react';
import { mergeStyles, prepareStyles } from '../helpers/utils/stylePropable';
import CarouselHead from './CarouselHead';
import CarouselTile from './CarouselTile';
import NavHead from './NavHead';
import { Colors } from '../helpers/styles';

const { bool, oneOf, node, number, object, func } = PropTypes;
const styles = {
  root: {
    display: 'inline-block',
    overflow: 'hidden',
    position: 'relative',
    height: 'auto',
    width: '100%',
  },
  navHead: {
    position: 'absolute',
    zIndex: 3,
    backgroundColor: Colors.grey500,
    color: Colors.white,
  },
  navHeadOver: {
    backgroundColor: Colors.grey900,
  },
  arrowStyle: {
    color: Colors.white,
  },
};
export default class Carousel extends Component {

  static propTypes = {
    // Animation for the carousel,
    animation: oneOf(['none', 'scroll', 'fade']),

    // Does the animation is auto
    autoScroll: bool,

    // Childrens supplied to Carousel
    children: node,

    // Currently selected tile.
    current: number,

    // Delay for animation
    delay: number,

    // Tiles to be displayed on screen
    display: number,

    // Navigation arrows for carousel
    navHead: bool,

    // MouseOver Style Object
    navHoverStyle: object,

    // Style Object
    navStyle: object,

    // Callback to receive post slide
    onSlide: func,

    // Tiles to scroll on animation
    scroll: PropTypes.number,

    // Style object
    style: object,

    // To show/hide the tab head of Carousel
    tabHead: bool,

    // Tab Head Position
    tabPosition: oneOf(['bottom', 'top']),
  };

  static defaultProps = {
    autoScroll: false,
    delay: 4000,
    tabHead: true,
    animation: 'none',
    tabPosition: 'bottom',
    navHead: false,
    display: 1,
    scroll: 1,
  };

  state = {
    current: this.props.current || 0,
    tileCount: 0,
    totalTile: 0,
    currentAnim: null,
  };

  componentWillMount() {
    const {
      current,
    } = this.state;
    let tileCount = 0;
    React.Children.map(this.props.children, (child) => {
      if (child.type.name !== 'CarouselHead') {
        tileCount++;
      }
    });
    this.setState({
      current,
      totalTile: tileCount,
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.current !== nextProps.current) {
      this.setState({
        current: nextProps.current,
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.current !== nextProps.current) {
      clearTimeout(this.state.currentAnim);
    }

    return nextState.current !== this.state.current || this.props.current !== nextProps.current;
  }

  initScroll(newCurrent) {
    const {
      current,
      totalTile,
      currentAnim,
    } = this.state;
    const {
      scroll,
      onSlide,
    } = this.props;
    let activeTile;
    clearTimeout(currentAnim);
    activeTile = newCurrent !== undefined ? newCurrent : (current + scroll);
    activeTile = activeTile < 0 ? totalTile + activeTile : activeTile;
    activeTile = (activeTile === totalTile) ? 0 : activeTile;
    this.setState({
      current: activeTile,
      currentAnim: null,
    });
    if (onSlide) {
      onSlide(activeTile);
    }
  }

  handleClick = (item) => {
    const { current } = this.state;
    const newitem = parseInt(item, 10);
    if (!isNaN(newitem) && newitem !== current) {
      this.initScroll(newitem);
    }
  };

  handleNavigator = (type) => {
    const {
      current,
      currentAnim,
    } = this.state;
    const {
      scroll,
      autoScroll,
    } = this.props;
    if (currentAnim !== null || autoScroll === false) {
      if (type === 'forward') {
        this.initScroll(current + scroll);
      } else if (type === 'back') {
        this.initScroll(current - scroll);
      }
    }
  };

  renderChild() {
    const {
      children,
      delay,
      style,
      animation,
      tabHead,
      tabPosition,
      autoScroll,
      navHead,
      display,
      scroll,
      ...other,
    } = this.props;
    const {
      current,
      totalTile,
    } = this.state;
    let tiles;
    let head;
    let offset = 0;
    tiles = React.Children.map(children, (child, index) => {
      let additionalProps;
      let currentChild;
      additionalProps = {
        key: index,
      };
      if (child.type.name === 'CarouselHead') {
        Object.assign(additionalProps, {
          current,
          animation,
          onTouchTap: this.handleClick,
        });
        head = React.cloneElement(child, additionalProps);
        offset++;
      } else {
        const width = 100 / display;
        additionalProps.style = child.props.style || {};
        Object.assign(additionalProps.style, {
          width: `${width}%`,
        });
        Object.assign(additionalProps, {
          delay,
          animation,
          tilePosition: (tabPosition === 'top' ? 'bottom' : 'top'),
          index: (head) ? index - offset : index,
          display,
          current,
          scroll,
          totalTile,
        });
        if (child.type.name === 'CarouselTile') {
          currentChild = React.cloneElement(child, additionalProps);
        } else {
          currentChild = (<CarouselTile {...additionalProps}>{child}</CarouselTile>);
        }

        return currentChild;
      }
    });
    return {
      tiles,
      head,
    };
  }

  renderArrowHead() {
    const {
      navHead,
      navStyle,
      navHoverStyle,
    } = this.props;
    if (!navHead) {
      return {};
    }

    let leftArrowHead;
    let rightArrowHead;
    let props;
    const leftArrow = mergeStyles(styles.navHead, {
      left: 0,
      top: '40%',
    });
    const rightArrow = mergeStyles(styles.navHead, {
      right: 0,
      top: '40%',
    });
    props = {
      size: 10,
      arrowStyle: styles.arrowStyle,
      navHoverStyle: mergeStyles(styles.navHeadOver, navHoverStyle),
      value: 'back',
      onTouchTap: this.handleNavigator,
      navStyle,
    };
    leftArrowHead = (<NavHead style={leftArrow} {...props} />);
    Object.assign(props, {
      value: 'forward',
      direction: 'left',
    });
    rightArrowHead = (<NavHead style={rightArrow} {...props} />);
    return {
      left: leftArrowHead,
      right: rightArrowHead,
    };
  }

  render() {
    const {
      children,
      delay,
      style,
      animation,
      tabHead,
      tabPosition,
      autoScroll,
      navHead,
      ...other,
    } = this.props;
    const {
      current,
      totalTile,
      currentAnim,
    } = this.state;

    let renderedChildren;
    let carouselHead;
    let navigation;
    renderedChildren = this.renderChild();
    const mergedRootStyles = mergeStyles(styles.root, style);
    if (tabHead) {
      if (!renderedChildren.head) {
        carouselHead = (<CarouselHead headCount={totalTile}
          current={current}
          tabPosition={tabPosition}
          onTouchTap={this.handleClick}
          key={renderedChildren.tiles.length}
        />);
      } else {
        carouselHead = renderedChildren.head;
      }
    }

    if (tabPosition === 'top') {
      renderedChildren.tiles.unshift(carouselHead);
    } else {
      renderedChildren.tiles.push(carouselHead);
    }

    if (autoScroll && currentAnim === null) {
      const timeoutScroll = setTimeout(() => {
        this.initScroll();
      }, delay);
      setTimeout(() => {
        this.setState({
          currentAnim: timeoutScroll,
        });
      }, 0);
    }

    navigation = this.renderArrowHead();
    return (
      <div style={prepareStyles.apply(this, [mergedRootStyles])} {...other}>
        {navigation.left}
        {renderedChildren.tiles}
        {navigation.right}
      </div>
    );
  }
}
