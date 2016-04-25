import React, { PropTypes } from 'react';
import Image from '../core/Image';
import { mergeStyles } from '../helpers/utils/stylePropable';
import composeContextPure from '../helpers/composedComponents/contextPure';

const { string, object } = PropTypes;

const styles = {
  root: {
    display: 'inline-block',
    width: '100%',
  },
  imageContainerStyle: {
    width: '100%',
    lineHeight: 0,
  },
  imageStyle: {
    width: '100%',
  },
};

const FilmStripItem = (props) => {
  const {
    link,
    imageSource,
    stripStyle,
    imageContainerStyle,
    imageStyle,
    targetwindow,
  } = props;

  return (
    <div style={mergeStyles.apply(this, [styles.root, stripStyle])}>
      <div style={mergeStyles.apply(this, [styles.imageContainerStyle, imageContainerStyle])}>
        <a
          href={link}
          target={targetwindow}
        >
          <Image
            source={imageSource}
            style={mergeStyles.apply(this, [styles.imageStyle, imageStyle])}
          />
        </a>
      </div>
    </div>
  );
};

FilmStripItem.propTypes = {
  imageSource: string,
  imageContainerStyle: object,
  imageStyle: object,
  link: string,
  stripStyle: object,
  targetwindow: string,
};

FilmStripItem.contextTypes = {
  compTheme: object,
};

export default composeContextPure(FilmStripItem);
