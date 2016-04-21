import React, { PropTypes } from 'react';
import { mergeStyles } from '../../helpers/utils/stylePropable';
import GridCell from 'core/GridCell';
import Text from 'Text';

const { string, number, any, object } = PropTypes;

const styles = {
  root: {
    boxSizing: 'border-box',
    border: '1px solid #B1B1B1',
    display: 'block',
  },
  heading: {
    padding: 10,
    paddingTop: 30,
    textAlign: 'center',
    display: 'block',
    fontWeight: 'bolder',
  },
  description: {
    display: 'block',
    fontSize: 10,
    lineHeight: '12px',
    textAlign: 'center',
    padding: 10,
    paddingBottom: 30,
  },
  normal: {
    heading: {
      fontSize: 13,
      lineHeight: '15px',
      paddingBottom: 10,
    },
    description: {
      paddingTop: 0,
    },
    cellStyle: {
    },
  },
  spaced: {
    root: {
      boxShadow: '0 1px 5px #7D7D7D',
    },
    heading: {
      fontSize: 10,
      lineHeight: '12px',
      paddingTop: 30,
      paddingBottom: 0,
    },
    description: {
      paddingTop: 10,
    },
    cellStyle: {
      margin: 3,
      height: 118,
      border: '1px solid #7D7D7D',
    },
  },
  divider: {
    display: 'block',
    textAlign: 'center',
    lineHeight: '10px',
  },
};

const TapableItem = (props) => {
  const {
    heading,
    headStyle,
    description,
    descStyle,
    dividerStyle,
    style,
    variation,
  } = props;

  const dividerContent = '.......';
  const rootStyles = mergeStyles(styles.root, styles[variation].root, style);
  const headingStyles = mergeStyles(styles.heading, styles[variation].heading, headStyle);
  const descriptionStyles = mergeStyles(styles.description, styles[variation].description, descStyle);

  return (
    <GridCell style={rootStyles}>
      <div style={styles[variation].cellStyle}>
        <Text content={heading} style={headingStyles} />
        {
          (variation === 'spaced') &&
          <Text content={dividerContent} style={mergeStyles(styles.divider, dividerStyle)} />
        }
        <Text content={description} style={descriptionStyles} />
      </div>
    </GridCell>
  );
};

TapableItem.propTypes = {
  children: any,
  rowSpan: number,
  accentColor: string,
  heading: string,
  headStyle: object,
  description: string,
  descStyle: object,
  imageSrc: string,
  style: string,
  dividerStyle: string,
  divider: string,
  variation: string,
};

TapableItem.defaultProps = {
  variation: 'normal',
};

export default TapableItem;
