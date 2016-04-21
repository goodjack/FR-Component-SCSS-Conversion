import React, { PropTypes } from 'react';
import EnhancedSelect from '../../EnhancedSelect';

const {
  any,
  func,
  object,
} = PropTypes;

const Picker = props => {
  const {
    onChange,
    children,
  } = props;

  return (
    <EnhancedSelect
      onchange={onChange}
      {...props}
    >
      {children}
    </EnhancedSelect>
  );
};

Picker.propTypes = {
  children: any.isRequired,
  onChange: func,
  style: object,
};

export default Picker;
