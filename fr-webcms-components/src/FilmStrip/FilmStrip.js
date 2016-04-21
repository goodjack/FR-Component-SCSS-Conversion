import React, { PropTypes } from 'react';
import { mergeStyles } from '../helpers/utils/stylePropable';
import composeContextPure from '../helpers/composedComponents/contextPure';
import Swipable from '../core/Swipable';

const { string, object, array, oneOfType, number } = PropTypes;
const container = {
  width: '100%',
};

const FilmStrip = (props) => {
  const {
    className,
    id,
    style,
    children,
    display,
  } = props;

  return (
    <div
      id={id}
      className={className}
      style={mergeStyles.apply(this, [container, style])}
    >
      <Swipable display={display}>
        {children}
      </Swipable>
    </div>
  );
};

FilmStrip.propTypes = {
  children: oneOfType([array, object]),
  className: string,
  display: number,
  id: string,
  style: object,
};

export default composeContextPure(FilmStrip);
