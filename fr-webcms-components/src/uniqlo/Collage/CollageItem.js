import React, { PropTypes } from 'react';
import Image from '../../core/Image';

const {
  oneOf,
  string,
  object,
} = PropTypes;

const CollageItem = props => {
  const {
    style,
    link,
    target,
    altText,
    imageSrc,
  } = props;
  return (
    <a href={link} target={target} >
      <Image source={imageSrc} style={style} alternateText={altText} />
    </a>
  );
};

CollageItem.propTypes = {
  imageSrc: string,
  style: object,
  link: string,
  target: oneOf(['_blank', '_self', '_parent', '_top']),
  altText: string,
};

CollageItem.defaultProps = {
  target: '_self',
};

export default CollageItem;
