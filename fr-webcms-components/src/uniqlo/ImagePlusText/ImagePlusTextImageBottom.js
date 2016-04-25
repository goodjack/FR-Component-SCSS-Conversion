import React, { PropTypes } from 'react';
import { mergeStyles } from '../../helpers/utils/stylePropable';
import Text from '../../Text';
import Image from '../../core/Image';
import DefaultRawTheme from '../../helpers/styles/rawThemes/lightRawTheme';
import ThemeManager from '../../helpers/styles/themeManager';
import composeContextPure from '../../helpers/composedComponents/contextPure';

const { string, object } = PropTypes;

function getRelevantContextKeys(context) {
  const compTheme = context.muiTheme || ThemeManager.getCompTheme(DefaultRawTheme);
  const themeImagePlusText = compTheme && compTheme.imagePlusText || {};

  const styles = {
    rootStyle: {
      width: '100%',
    },
    imageRootStyle: {
      width: '100%',
    },
    imageContainerStyle: {
      lineHeight: 0,
      width: '100%',
    },
    textContainerStyle: {
      padding: themeImagePlusText.textMargin,
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

const ImagePlusTextImageBottom = (props, context) => {

  const {
    className,
    id,
    style,
    imageSrc,
    imageStyle,
    imageTitle,
    text,
    textStyle,
    link,
    linkText,
    linkStyle,
    targetwindow,
  } = props;

  const {
    styles,
  } = getRelevantContextKeys(context);

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
      <div style={styles.imageContainerStyle}>
        <Image
          source={imageSrc}
          style={imageMergeStyle}
          alternateText={imageTitle}
        />
      </div>
    </div>
  );
};

ImagePlusTextImageBottom.propTypes = {
  className: string,
  id: string,
  style: object,
  imageSrc: string.isRequired,
  imageTitle: string,
  imageStyle: object,
  text: string,
  textStyle: object,
  link: string,
  linkText: string,
  linkStyle: object,
  targetwindow: string,
};

ImagePlusTextImageBottom.contextTypes = {
  compTheme: object,
};

export default composeContextPure(ImagePlusTextImageBottom);
