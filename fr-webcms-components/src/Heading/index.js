import React, { PropTypes } from 'react';
import UniqueId from '../helpers/utils/uniqueId';
import DefaultRawTheme from '../helpers/styles/rawThemes/lightRawTheme';
import ThemeManager from '../helpers/styles/themeManager';
import composeContextPure from '../helpers/composedComponents/contextPure';
import { mergeStyles } from '../helpers/utils/stylePropable';

const { string, func, object, oneOf } = PropTypes;

function getRelevantContextKeys(uniTheme) {
  // add more default styles here
  return {
    textColor: uniTheme.heading.textColor,
  };
}

const Heading = ({
  id,
  className,
  headingText,
  type,
  style,
  onPress,
}, context) => {

  const compTheme = context.muiTheme || ThemeManager.getCompTheme(DefaultRawTheme);
  const {
    textColor,
  } = getRelevantContextKeys(compTheme);

  const compType = type || 'h1';
  const compId = id || UniqueId.generate();
  const compStyles = {
    color: textColor,
    display: 'inline',
  };

  const headingProps = {
    id: compId,
    className,
    style: mergeStyles(compStyles, style),
    onClick: onPress,
  };

  return React.createElement(compType, headingProps, headingText);
};

Heading.propTypes = {
  className: string,
  headingText: string,
  id: string,
  onPress: func,
  style: object,
  type: oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
};

Heading.contextTypes = {
  muiTheme: object,
};

Heading.defaultProps = {
  onPress: () => null,
};

export { Heading as UndecoratedHeading };
export default composeContextPure(Heading);
