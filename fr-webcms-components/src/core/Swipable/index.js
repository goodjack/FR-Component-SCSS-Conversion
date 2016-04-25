import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Image from '../Image';
import Noop from '../Null';
import { mergeStyles } from '../../helpers/utils/stylePropable';

const {
  node,
  object,
  number,
  func,
  bool,
  string,
} = PropTypes;
let totalWidth;

const prepareStyle = (me) => {
  const {
    translation,
    animate,
  } = me.state;

  const {
    display,
    children,
    pan,
    speed,
  } = me.props;
  const styles = {
    swipeMain: {
      transitionDuration: `${speed}ms`,
      transitionTimingFunction: 'ease-in-out',
      height: '100%',
      display: 'flex',
      flexFlow: 'row nowrap',
      overflowX: !pan ? 'hidden' : 'visible',
      transform: `translateX(-${translation}%)`,
      WebkitTransform: `translateX(-${translation}%)`,
      transitionProperty: animate ? 'all' : 'none',
      WebkitTransitionProperty: animate ? 'all' : 'none',
      width: !pan ? `${(children.length / display) * 100}%` : `${totalWidth}`,
      whiteSpace: !pan ? 'normal' : 'nowrap',
    },
    swipeContainer: {
      height: '100%',
      display: 'flex',
      flexFlow: 'column nowrap',
      overflow: 'hidden',
      position: 'relative',
    },
    swipeItem: {
      width: !pan ? `${100 / display}%` : 'auto',
      flexBasis: pan ? 'auto' : 'initial',
    },
  };

  return styles;
};

const getNavigation = (me) => {
  const {
    nextIcon,
    previousIcon,
    nextStyle,
    previousStyle,
  } = me.props;
  const navigation = {
    next: Noop,
    previous: Noop,
  };
  const mergedNext = mergeStyles({
    position: 'absolute',
    width: '30px',
    height: '35px',
    top: '40%',
    right: 0,
    zIndex: 5,
  }, nextStyle);
  const mergedPrevous = mergeStyles({
    position: 'absolute',
    width: '30px',
    height: '35px',
    top: '40%',
    left: 0,
    zIndex: 5,
  }, previousStyle);
  const index = me.state.selectedIndex;
  if (nextIcon && me.props.children.length - 1 > index) {
    navigation.next = <Image source={nextIcon} onClick={me.goNext} style={mergedNext} />;
  }

  if (previousIcon && index > 0) {
    navigation.previous = <Image source={previousIcon} onClick={me.goPrevious} style={mergedPrevous} />;
  }

  return navigation;
};

const selectIndex = (me, selectedIndex) => {
  let defaultTranslation;
  const children = me.rootElement.childNodes[0];
  const childNodes = children.childNodes;
  let defaultSelectWidth = 0;
  totalWidth = 0;
  for (let count = 0; count < childNodes.length; count++) {
    if (me.props.selectedIndex === count) {
      defaultSelectWidth = totalWidth;
    }

    totalWidth += childNodes[count].offsetWidth;
  }

  const childWidth = children.offsetWidth;
  totalWidth = totalWidth < childWidth ? childWidth : totalWidth + ((100 / totalWidth) * 9);
  const maxTranslation = (totalWidth - childWidth) / totalWidth * 100;

  defaultTranslation = (defaultSelectWidth / totalWidth) * 100;
  defaultTranslation = defaultTranslation > maxTranslation ? maxTranslation : defaultTranslation;
  if (Number.isInteger(selectedIndex)) {
    const translation = (!me.props.pan) ? selectedIndex * me.state.pageWidthPerCent : defaultTranslation;
    me.setState({
      selectedIndex,
      translation,
      clientX: null,
      animate: true,
    });
  }
};

const transformComponent = (me, event) => {
  const {
    clientX,
    pageWidthPerCent,
    translation,
    selectedIndex,
  } = me.state;

  const newClientX = event.changedTouches[0].clientX;
  const dx = (newClientX - clientX);
  const thisElem = me.rootElement;
  const elemWidth = thisElem.childNodes[0].offsetWidth || 1;
  const containerWidth = thisElem.offsetWidth;
  const dxPerCent = dx / (elemWidth) * 100;
  let newTranslation = translation - dxPerCent;
  const maxTranslation = (elemWidth - containerWidth) / elemWidth * 100;
  const previousTranslation = selectedIndex * pageWidthPerCent;
  const tippingPoint = pageWidthPerCent * 0.3;
  if (!clientX) {
    me.setState({
      clientX: newClientX,
    });
  } else {
    if (newTranslation < 0) {
      newTranslation = 0;
    } else if (newTranslation > maxTranslation) {
      newTranslation = maxTranslation;
    }

    let newSelectedIndex = selectedIndex;
    if (dx > 0 && translation < previousTranslation - tippingPoint) {
      newSelectedIndex -= 1;
    } else if (dx < 0 && translation > previousTranslation + tippingPoint) {
      newSelectedIndex += 1;
    }

    me.setState({
      selectedIndex: newSelectedIndex,
      translation: newTranslation,
      clientX: newClientX,
      animate: false,
    });
  }
};

class Swipable extends Component {

  static propTypes = {
    children: node,
    selectedIndex: number,
    style: object,
    onIndexChange: func,
    display: number,
    pan: bool,
    speed: number,
    leftNavIcon: string,
    rightNavIcon: string,
    nextStyle: object,
    previousStyle: object,
  };

  static defaultProps = {
    display: 1,
    pan: false,
    speed: 200,
  };

  componentWillMount = () => {
    const children = this.props.children;
    this.children = Array.isArray(children) ? children : [children];
    const selectedIndex = this.props.selectedIndex || 0;
    const pageWidthPerCent = 100 / this.children.length;
    const translation = selectedIndex * pageWidthPerCent;
    this.state = {
      selectedIndex,
      pageWidthPerCent,
      translation,
      clientX: null,
      animate: true,
    };
  };

  componentDidMount = () => {
    this.rootElement = ReactDOM.findDOMNode(this);
    selectIndex(this);
  };

  componentWillReceiveProps = (nextProps) => {
    selectIndex(this, parseInt(nextProps.selectedIndex, 10));
  };

  transitionTo = (selectedIndex) => {
    if (this.props.onIndexChange) {
      this.props.onIndexChange(selectedIndex);
    }
  };

  handleTouchMove = (event) => {
    transformComponent(this, event);
  };

  handleTouchEnd = () => {
    const _this = this;
    const selectedIndex = _this.state.selectedIndex;
    const translation = (!_this.props.pan) ? selectedIndex * _this.state.pageWidthPerCent : _this.state.translation;
    _this.setState({
      selectedIndex,
      translation,
      clientX: null,
      animate: true,
    }, _this.transitionTo(selectedIndex));
  };

  goNext = () => {
    selectIndex(this, this.state.selectedIndex + 1);
  };

  goPrevious = () => {
    selectIndex(this, this.state.selectedIndex - 1);
  };

  render() {
    const _this = this;
    const {
      swipeMain,
      swipeItem,
      swipeContainer,
    } = prepareStyle(_this);

    let children = _this.children;
    children = Array.isArray(children) ? children : [children];
    const rootStyle = mergeStyles(swipeContainer, _this.props.style);
    const navigation = getNavigation(_this);
    return (
      <div style={rootStyle}>
         <div
           style={swipeMain}
           onTouchMove={_this.handleTouchMove}
           onTouchEnd={_this.handleTouchEnd}
         >
           {children.map((child, index) =>
               <div
                 style={swipeItem}
                 key={index}
               >
                 {child}
               </div>
           )}
         </div>
         {navigation.previous} {navigation.next}
       </div>
    );
  }
}

export default Swipable;
