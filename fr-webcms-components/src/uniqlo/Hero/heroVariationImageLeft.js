import React, { PropTypes } from 'react';
import Text from '../../Text';
import Heading from '../../Heading';
import Image from '../../core/Image';
import { mergeStyles } from '../../helpers/utils/stylePropable';
import Icon from '../../core/Icon';
import Null from '../../core/Null';
import ProxyLink from '../../core/ProxyLink';

const { string, object } = PropTypes;

const getIconComponent = (prop) => {
  const {
    iconContainerStyle,
    iconText,
    iconTextStyle,
    icon,
  } = prop;
  let markup;
  if (icon) {
    markup = (
      <div style={iconContainerStyle}>
        <Icon name={icon} />
        {iconText ? <Text content={iconText} style={iconTextStyle} /> : Null}
      </div>
    );
  } else {
    markup = false;
  }

  return markup || <Null />;
};

const getTitleContainer = (title, titleStyle) => {
  let markup;
  if (title) {
    markup = (<Heading type="h1" headingText={title} style={titleStyle} />);
  } else {
    markup = false;
  }

  return markup || <Null />;
};

const getSubtitleContainer = (subtitle, subtitleStyle) => {
  let markup;
  if (subtitle) {
    markup = (<Heading type="h3" headingText={subtitle} style={subtitleStyle} />);
  } else {
    markup = false;
  }

  return markup || <Null />;
};

const getTextContainer = (text, textStyle) => {
  let markup;
  if (text) {
    markup = (<Text style={textStyle} content={text} />);
  } else {
    markup = false;
  }

  return markup || <Null />;
};

const getLinkContainer = (prop) => {
  const {
  proxyLinkStyle,
  linkText,
  linkTextColor,
  linkUrl,
  linkFontWeight,
  linkFontSize,
  linkTextDecoration,
  } = prop;
  let markup;
  if (linkText) {
    markup = (<div style={proxyLinkStyle}>
      <ProxyLink
        linkText={linkText}
        linkUrl={linkUrl}
        linkFontSize={linkFontSize}
        linkFontWeight={linkFontWeight}
        linkTextDecoration={linkTextDecoration}
        textColor={linkTextColor}
      />
    </div>);
  } else {
    markup = false;
  }

  return markup || <Null />;
};

const HeroVariationImageLeft = (props) => {

  const {
    className,
    imageSrc,
    leftSideStyle,
    rightSideStyle,
    rootStyle,
    subtitle,
    subtitleStyle,
    text,
    textStyle,
    title,
    titleStyle,
    imageContainerStyle,
  } = props;

  const imgContainer = mergeStyles(leftSideStyle, imageContainerStyle);
  return (
    <div
      style={rootStyle}
      className={className}
    >
      <div style={imgContainer}>
        <Image
          source={imageSrc}
          useImgTag={false}
        />
      </div>
      <div style={rightSideStyle}>
        {getTitleContainer(title, titleStyle)}
        {getSubtitleContainer(subtitle, subtitleStyle)}
        {getTextContainer(text, textStyle)}
        {getIconComponent(props)}
        {getLinkContainer(props)}
      </div>
    </div>
  );

};

HeroVariationImageLeft.propTypes = {
  className: string,
  id: string,
  imageSrc: string.isRequired,
  leftSideStyle: object,
  rightSideStyle: object,
  rootStyle: object,
  subtitle: string,
  subtitleStyle: object,
  text: string,
  textStyle: object,
  title: string,
  titleStyle: object,
  icon: string,
  iconText: string,
  imageContainerStyle: object,
  iconContainerStyle: object,
  iconTextStyle: object,
  proxyLinkStyle: object,
  linkText: string,
  linkTextColor: string,
  linkUrl: string,
  linkFontWeight: string,
  linkFontSize: string,
  linkTextDecoration: string,
};

export default HeroVariationImageLeft;
