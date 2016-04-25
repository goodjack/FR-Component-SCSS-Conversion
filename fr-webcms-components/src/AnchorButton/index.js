import React, { PropTypes } from 'react';
import { mergeStyles } from '../helpers/utils/stylePropable';
import GridCell from '../core/GridCell';
import RollOverImage from '../RollOverImage';

const { string, func, object } = PropTypes;

const styles = {
  anchorButton: {
    height: 111,
    width: 111,
  },
};

const AnchorButton = props => {
  const {
    defaultImage,
    rollOverImage,
    sectionLink,
    style,
    onClick,
  } = props;

  const anchorButtonStyle = mergeStyles(styles.anchorButton, style);

  return (
    <GridCell onClick={onClick}>
      <RollOverImage
        imgSrc={defaultImage}
        rollImgSrc={rollOverImage}
        link={sectionLink}
        style={anchorButtonStyle}
      />
    </GridCell>
  );
};

AnchorButton.propTypes = {
  defaultImage: string.isRequired,
  onClick: func,
  rollOverImage: string,
  sectionLink: string.isRequired,
  style: object,
};

AnchorButton.defaultProps = {
  onClick: () => null,
};

export default AnchorButton;
