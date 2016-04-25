import React, { PropTypes } from 'react';
import { mergeStyles } from '../../helpers/utils/stylePropable';
import Image from '../../core/Image';
import DefaultRawTheme from '../../helpers/styles/rawThemes/lightRawTheme';
import ThemeManager from '../../helpers/styles/themeManager';
import composeContextPure from '../../helpers/composedComponents/contextPure';

const { string, object, oneOfType, node } = PropTypes;

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
      margin: themeImagePlusText.linkMargin, // '10px 0 10px 0',
    },
  };

  return { styles };
}

const ImagePlusTextImageTop = (props, context) => {

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
    textContainerStyle,
  } = props;

  const {
    styles,
  } = getRelevantContextKeys(context);

  const rootMergeStyle = mergeStyles.apply(this, [styles.rootStyle, style]);
  const imageMergeStyle = mergeStyles.apply(this, [styles.imageRootStyle, imageStyle]);
  const textMergeStyle = mergeStyles.apply(this, [styles.textRootStyle, textStyle]);
  const linkMergeStyle = mergeStyles.apply(this, [styles.linkRootStyle, linkStyle]);
  const textContainerMergeStyle = mergeStyles.apply(this, [styles.textContainerStyle, textContainerStyle]);
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
      <div style={textContainerMergeStyle}>
        <div style={textMergeStyle}>{text}</div>
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

ImagePlusTextImageTop.propTypes = {
  className: string,
  id: string,
  style: object,
  imageSrc: string.isRequired,
  imageTitle: string,
  imageStyle: object,
  text: oneOfType([node, string]),
  textStyle: object,
  link: string,
  linkText: string,
  linkStyle: object,
  textContainerStyle: object,
  targetwindow: string,
};

ImagePlusTextImageTop.contextTypes = {
  compTheme: object,
};

export default composeContextPure(ImagePlusTextImageTop);
