import React, { PropTypes } from 'react';
import SvgIcons from '../../SvgIcons/svgIcons';
import Null from '../Null';
const { string } = PropTypes;

const Icon = (props) => {
  const { name } = props;
  const IconRender = SvgIcons[name] ? SvgIcons[name] : Null;
  return (<IconRender {...props}/>);
};

Icon.propTypes = {
  name: string.isRequired,
};

export default Icon;
