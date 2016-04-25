import React, { PropTypes } from 'react';
import { mergeStyles } from '../../helpers/utils/stylePropable';
import Text from '../../Text';
import Image from '../../core/Image';
import composeContextPure from '../../helpers/composedComponents/contextPure';
import DefaultRawTheme from '../../helpers/styles/rawThemes/lightRawTheme';
import ThemeManager from '../../helpers/styles/themeManager';

const { string, object, number } = PropTypes;

function getRelevantContextKeys(context, imageWidthRatio) {
  const compTheme = context.muiTheme || ThemeManager.getCompTheme(DefaultRawTheme);
  const themeImagePlusText = compTheme && compTheme.imagePlusText || {};

  const imageContainerWidth = `${imageWidthRatio}%`;
  const textContainerWidth = `${100 - imageWidthRatio -
    parseInt(themeImagePlusText.textPaddingLeft, 10) -
    parseInt(themeImagePlusText.textPaddingRight, 10)}%`;

  const styles = {
    rootStyle: {
      width: '100%',
      display: 'inline-block',
      position: 'relative',
    },
    imageRootStyle: {
      width: '100%',
    },
    imageContainerStyle: {
      float: 'left',
      width: imageContainerWidth,
      lineHeight: 0,
    },
    textContainerStyle: {
      position: 'absolute',
      top: '50%',
      right: 0,
      width: textContainerWidth,
      transform: 'translateY(-50%)',
      paddingLeft: themeImagePlusText.textPaddingLeft,
      paddingRight: themeImagePlusText.textPaddingRight,
    },
    textRootStyle: {
      display: 'block',
    },
    linkRootStyle: {
      color: themeImagePlusText.textColor,
      fontWeight: 'bold',
      textDecoration: 'underline',
      display: 'block',
      margin: themeImagePlusText.linkMargin,
    },
  };

  return { styles };
}

const ImagePlusTextImageLeft = (props, context) => {

  const {
    className,
    id,
    style,
    imageSrc,
    imageStyle,
    imageTitle,
    imageWidthRatio,
    text,
    textStyle,
    link,
    linkText,
    linkStyle,
    targetwindow,
  } = props;

  const {
    styles,
  } = getRelevantContextKeys(context, imageWidthRatio);

  const rootMergeStyle = mergeStyles.apply(this, [styles.rootStyle, style]);
  const imageMergeStyle = mergeStyles.apply(this, [styles.imageRootStyle, imageStyle]);
  const textMergeStyle = mergeStyles.apply(this, [styles.textRootStyle, textStyle]);
  const linkMergeStyle = mergeStyles.apply(this, [styles.linkRootStyle, linkStyle]);

  return (
    <div
      style={rootMergeStyle}
      id= {id}
      className={className}
    >
      <div style={styles.imageContainerStyle}>
        <Image
          source={imageSrc}
          style={imageMergeStyle}
          alternateText={imageTitle}
        />
      </div>
      <div style={styles.textContainerStyle}>
        <Text
          content={text}
          style={textMergeStyle}
        />
        <a
          href={link}
          target={targetwindow}
          style={linkMergeStyle}
        >
          {linkText}
        </a>
      </div>
    </div>
  );
};

ImagePlusTextImageLeft.propTypes = {
  className: string,
  id: string,
  style: object,
  imageSrc: string.isRequired,
  imageTitle: string,
  imageStyle: object,
  imageWidthRatio: number,
  text: string,
  textStyle: object,
  link: string,
  linkText: string,
  linkStyle: object,
  targetwindow: string,
};

ImagePlusTextImageLeft.contextTypes = {
  compTheme: object,
};

export default composeContextPure(ImagePlusTextImageLeft);
