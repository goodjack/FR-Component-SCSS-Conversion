import React, { PropTypes } from 'react';

const { any, number, string } = PropTypes;

const Container = (props) => {
  const {
    bgColor,
    children,
    height,
    width,
  } = props;

  const containerStyles = {
    backgroundColor: bgColor,
    height,
    width,
  };

  return (
    <div style={containerStyles}>
      {children}
    </div>
  );
};

Container.propTypes = {
  bgColor: string,
  children: any,
  height: number,
  width: number,
};

Container.defaultProps = {
  bgColor: '#fff',
};

export default Container;
