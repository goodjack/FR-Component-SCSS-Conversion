import React, { PropTypes } from 'react';
const { string, node } = PropTypes;

const Fillers = (props) =>
   (<div> {props.children} </div>);

Fillers.propTypes = {
  children: node,
  display: string,
};

Fillers.defaultProps = {
  display: 'Always',
};
export default Fillers;
