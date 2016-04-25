import React, { PropTypes } from 'react';
import { mergeStyles } from '../helpers/utils/stylePropable';
import DefaultRawTheme from '../helpers/styles/rawThemes/lightRawTheme';
import ThemeManager from '../helpers/styles/themeManager';
import composeContextPure from '../helpers/composedComponents/contextPure';
import ActionStar from '../SvgIcons/action/Star';
import HalfStar from '../SvgIcons/action/HalfStar';

const { string, object, number } = PropTypes;

const prepareStyle = (props, context) => {
  const CompTheme = context.CompTheme || ThemeManager.getCompTheme(DefaultRawTheme);
  const starTheme = CompTheme && CompTheme.ratingStar || {};
  const styles = {
    root: {
      listStyle: 'none',
    },
    listStyle: {
      float: 'left',
    },
    halfStarStyle: {
      fill: starTheme.fullStarColor,
    },
    fullStarStyle: {
      fill: starTheme.fullStarColor,
    },
    smallSize: {
      width: '16',
      height: '16',
    },
    largeSize: {
      width: '28',
      height: '28',
    },
    mediumSize: {
      width: '22',
      height: '22',
    },
    emptyStarStyle: {
      fill: starTheme.emptyStarColor,
      stroke: starTheme.strokeColor,
      strokeWidth: '0.3',
    },
  };
  let sizeStyle = styles.mediumSize;
  if (props.size === 'Large') {
    sizeStyle = styles.largeSize;
  } else if (props.size === 'Small') {
    sizeStyle = styles.smallSize;
  }

  const halfStarStyle = mergeStyles.apply(this, [styles.halfStarStyle, sizeStyle, props.halfStyle]);
  const fullStarStyle = mergeStyles.apply(this, [styles.fullStarStyle, sizeStyle, props.fullStyle]);
  const emptyStarStyle =
  mergeStyles.apply(this, [styles.emptyStarStyle, sizeStyle, props.emptyStyle]);
  const listStyle = mergeStyles.apply(this, [styles.listStyle, props.ratingStyle]);
  const rootStyle = mergeStyles.apply(this, [styles.root, props.style]);
  return { halfStarStyle, fullStarStyle, emptyStarStyle, listStyle, rootStyle };
};

const getStar = (index, Star, type, props, context) => {
  const {
      halfStarStyle,
      listStyle,
      fullStarStyle,
      emptyStarStyle,
    } = prepareStyle(props, context);
  let starStyle = emptyStarStyle;

  if (type === 'half') {
    starStyle = halfStarStyle;
  } else if (type === 'full') {
    starStyle = fullStarStyle;
  }

  return (<li
    key={index}
    style={listStyle}
  ><Star style={starStyle}/>
  </li>);
};

const Rating = (props, context) => {
  const {
    className,
    id,
    ratingCount,
    maxCount,
} = props;

  const { rootStyle } = prepareStyle(props, context);

  let halfStarIndex = null;
  const fullStarIndex = Math.floor(ratingCount);
  const decimalCount = Math.ceil(ratingCount);
  if (ratingCount !== decimalCount) {
    halfStarIndex = decimalCount;
  }

  let val = null;
  const renderChildren = Array(Math.max(maxCount, ratingCount))
   .fill()
   .map((star, index) => {
     val = index + 1;
     if (val === halfStarIndex) {
       return getStar(val, HalfStar, 'half', props, context);
     }

     if (val <= fullStarIndex) {
       return getStar(val, ActionStar, 'full', props, context);
     }

     return getStar(val, ActionStar, 'empty', props, context);
   });

  return (
     <ul id={id}
       className={className}
       style={rootStyle}
     >
       {renderChildren}
     </ul>
   );

};

Rating.propTypes = {
  className: string,
  emptyStyle: object,
  fullStyle: object,
  halfStyle: object,
  id: string,
  maxCount: number,
  ratingCount: number,
  ratingStyle: object,
  style: object,
  size: string,
};
Rating.defaultProps = { maxCount: 5 };
Rating.contextTypes = {
  compTheme: object,
};

export default composeContextPure(Rating);
