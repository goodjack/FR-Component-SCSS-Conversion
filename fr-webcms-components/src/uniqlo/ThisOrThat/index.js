import React, { PropTypes } from 'react';
import { mergeStyles } from '../../helpers/utils/stylePropable';
import Heading from '../../Heading';
import Image from '../../core/Image';
import Text from '../../Text';
import DefaultRawTheme from '../../helpers/styles/rawThemes/lightRawTheme';
import ThemeManager from '../../helpers/styles/themeManager';
import composeContextPure from '../../helpers/composedComponents/contextPure';

const { string, object } = PropTypes;

function getRelevantContextKeys(context) {
  const compTheme = context.compTheme || ThemeManager.getCompTheme(DefaultRawTheme);
  const themeThisOrThat = compTheme && compTheme.thisOrThat || {};

  const styles = {
    rootStyle: {
      width: '100%',
      display: 'inline-block',
    },
    imageContainerStyle: {
      display: 'inline-block',
      width: '100%',
      position: 'relative',
      lineHeight: 0,
      float: 'left',
    },
    thisContainerStyle: {
      width: '48%',
      height: 'auto',
      float: 'left',
    },
    thatContainerStyle: {
      width: '48%',
      height: 'auto',
      float: 'right',
    },
    thisImageRootStyle: {
      width: '100%',
    },
    thatImageRootStyle: {
      width: '100%',
    },
    overlayStyle: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: themeThisOrThat.overlaySize,
      height: themeThisOrThat.overlaySize,
      lineHeight: themeThisOrThat.overlaySize,
      textAlign: 'center',
      transform: 'translate(-50%, -50%)',
      borderColor: themeThisOrThat.borderColor,
      borderWidth: 2,
      borderStyle: 'solid',
      borderRadius: '50%',
      backgroundColor: themeThisOrThat.backgroundColor,
    },
    textContainerStyle: {
      width: '100%',
      textAlign: 'center',
    },
  };

  return { styles };
}

const ThisOrThat = (props, context) => {

  const {
    className,
    id,
    style,
    thisImageSrc,
    thatImageSrc,
    thisImageTitle,
    thatImageTitle,
    thisImageStyle,
    thatImageStyle,
    overlayText,
    overlayTextStyle,
    primaryHeading,
    secondaryHeading,
    primaryHeadingStyle,
    secondaryHeadingStyle,
    thisLink,
    thatLink,
    targetwindow,
  } = props;

  const {
    styles,
  } = getRelevantContextKeys(context);

  const rootMergeStyle = mergeStyles.apply(this, [styles.rootStyle, style]);
  const thisImageMergeStyle = mergeStyles.apply(this, [styles.thisImageRootStyle, thisImageStyle]);
  const thatImageMergeStyle = mergeStyles.apply(this, [styles.thatImageRootStyle, thatImageStyle]);

  return (
    <div
      style={rootMergeStyle}
      id= {id}
      className={className}
    >
      <div style={styles.textContainerStyle}>
        <Heading
          type="h3"
          headingText={primaryHeading}
          style={primaryHeadingStyle}
        />
      </div>
      <div style={styles.textContainerStyle}>
        <Heading
          type="h4"
          headingText={secondaryHeading}
          style={secondaryHeadingStyle}
        />
      </div>
      <div style={styles.imageContainerStyle}>
        <div style={styles.thisContainerStyle}>
          <a
            href={thisLink}
            target={targetwindow}
          >
            <Image
              source={thisImageSrc}
              style={thisImageMergeStyle}
              alternateText={thisImageTitle}
            />
          </a>
        </div>
        <div style={styles.thatContainerStyle}>
          <a
            href={thatLink}
            target={targetwindow}
          >
            <Image
              source={thatImageSrc}
              style={thatImageMergeStyle}
              alternateText={thatImageTitle}
            />
          </a>
        </div>
        <div style={styles.overlayStyle}>
          <Text
            content={overlayText}
            style={overlayTextStyle}
          />
        </div>
      </div>
    </div>
  );
};

ThisOrThat.propTypes = {
  className: string,
  id: string,
  style: object,
  thisImageSrc: string.isRequired,
  thatImageSrc: string.isRequired,
  thisImageTitle: string,
  thatImageTitle: string,
  thisImageStyle: object,
  thatImageStyle: object,
  overlayText: string,
  overlayTextStyle: object,
  primaryHeading: string,
  secondaryHeading: string,
  primaryHeadingStyle: object,
  secondaryHeadingStyle: object,
  thisLink: string,
  thatLink: string,
  targetwindow: string,
};

ThisOrThat.contextTypes = {
  compTheme: object,
};

export default composeContextPure(ThisOrThat);
