import React, { PropTypes } from 'react';
import { mergeStyles } from '../../helpers/utils/stylePropable';
import GridCell from '../../core/GridCell';
import Text from '../../Text';
import Image from '../../core/Image';

const { string, number, any, object } = PropTypes;

const styles = {
  root: {
    boxSizing: 'border-box',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#B1B1B1',
    display: 'block',
    textDecoration: 'none',
  },
  heading: {
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: 'bolder',
    color: '#1B1B1B',
    textAlign: 'center',
    display: 'block',
  },
  subheading: {
    color: '#1B1B1B',
    display: 'block',
    fontSize: 10,
    lineHeight: '12px',
    textAlign: 'center',
    padding: 10,
    paddingBottom: 30,
  },
  regular: {
    root: {
    },
    heading: {
      fontSize: 13,
      lineHeight: '15px',
      paddingTop: 30,
      paddingBottom: 10,
    },
    subheading: {
      paddingTop: 0,
    },
  },
  spaced: {
    root: {
      boxShadow: '0 1px 5px #7D7D7D',
      paddingRight: 0,
    },
    heading: {
      fontSize: 10,
      lineHeight: '12px',
      paddingTop: 30,
      paddingBottom: 0,
    },
    subheading: {
      paddingTop: 10,
    },
    cellStyle: {
      margin: 3,
      height: 105,
      border: '1px solid #7D7D7D',
    },
  },
  irregular: {
    root: {
      boxShadow: '0 1px 5px #7D7D7D',
    },
    heading: {
      textTransform: 'none',
      fontWeight: 'lighter',
      fontSize: 14,
      lineHeight: '12px',
      paddingTop: 10,
    },
    subheading: {
      textTransform: 'uppercase',
      fontSize: 14,
      fontWeight: 'bolder',
      paddingBottom: 15,
    },
    cellStyle: {
      margin: 3,
      height: 'auto',
      display: 'block',
      verticalAlign: 'middle',
      border: '1px solid #7D7D7D',
    },
  },
  image: {
    display: 'block',
    padding: 10,
    paddingBottom: 0,
    width: 'calc(100% - 20px)',
  },
  divider: {
    display: 'block',
    textAlign: 'center',
    lineHeight: '10px',
  },
};

const TapableItem = (props) => {
  const {
    divider,
    dividerStyle,
    heading,
    headStyle,
    imageSrc,
    imageStyle,
    link,
    style,
    subheading,
    subheadStyle,
    variation,
  } = props;

  const rootStyles = mergeStyles(styles.root, styles[variation].root, style);
  let headingStyles = mergeStyles(styles.heading, styles[variation].heading, headStyle);
  if (variation === 'irregular' && !imageSrc) {
    headingStyles = mergeStyles(headingStyles, { paddingTop: 20 });
  }

  const subheadingStyles = mergeStyles(styles.subheading, styles[variation].subheading, subheadStyle);

  return (
    <GridCell
      rootClass="a"
      href={link}
      target="_blank"
      style={rootStyles}
    >
      <div style={styles[variation].cellStyle}>

        {
          imageSrc &&
          <Image
            source={imageSrc}
            style={mergeStyles(styles.image, imageStyle)}
          />
        }

        <Text content={heading} style={headingStyles} />

        {
          (variation === 'spaced') &&
          <Text
            content={divider}
            style={mergeStyles(styles.divider, dividerStyle)}
          />
        }

        <Text content={subheading} style={subheadingStyles} />
      </div>
    </GridCell>
  );
};

TapableItem.propTypes = {
  accentColor: string,
  children: any,
  divider: string,
  dividerStyle: string,
  heading: string,
  headStyle: object,
  imageSrc: string,
  imageStyle: object,
  link: string,
  rowSpan: number,
  style: string,
  subheading: string,
  subheadStyle: object,
  variation: string.isRequired,
};

TapableItem.defaultProps = {
  divider: '.......',
  variation: 'regular',
};

export default TapableItem;
