import React, { PropTypes } from 'react';
import Swipable from '../../core/Swipable';

const {
  object,
  number,
  node,
} = PropTypes;

const renderChildren = (props) => {
  const children = React.Children.map(props.children, (child, index) =>
    React.cloneElement(child, {
      index,
      active: props.activeIndex === index ? true : false,
    })
  );
  return children;
};

const SwipableNav = props => {
  const {
    activeIndex,
    children,
    style,
    speed,
    ...other,
  } = props;
  const swipeContent = renderChildren(props);

  return (
    <Swipable style={style} pan selectedIndex={activeIndex} speed={speed} >
      {swipeContent}
    </Swipable>
  );
};

SwipableNav.propTypes = {
  children: node.isRequired,
  activeIndex: number,
  speed: number,
  style: object,
};

SwipableNav.defaultProps = {
  speed: 200,
  activeIndex: 0,
};

export default SwipableNav;
