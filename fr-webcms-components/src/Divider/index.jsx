import React, { PropTypes } from 'react';
import styleUtils from '../helpers/utils/styles';
import uniThemeable from '../helpers/styles/uniThemeable';
const {
  bool,
  string,
  object,
} = PropTypes;

const propTypes = {
  className: string,
  inset: bool,
  style: object,
};

const defaultProps = {
  inset: false,
};

let Divider = ({ inset, uniTheme, style, ...other }) => {
  const rootStyles = {
    margin: 0,
    marginTop: -1,
    marginLeft: inset ? 72 : 0,
    height: 1,
    border: 'none',
    backgroundColor: uniTheme.rawTheme.palette.borderColor,
  };

  return (
    <hr {...other} style={styleUtils.prepareStyles(uniTheme, rootStyles, style)} />
  );
};

Divider.displayName = 'Divider';
Divider.propTypes = propTypes;
Divider.defaultProps = defaultProps;
Divider = uniThemeable(Divider);

export default Divider;
