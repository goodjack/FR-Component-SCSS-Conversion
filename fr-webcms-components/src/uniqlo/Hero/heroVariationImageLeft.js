import React, { PropTypes, Component } from 'react';
import Text from '../../Text';
import Heading from '../../Heading';
import Image from '../../core/Image';
import { mergeStyles } from '../../helpers/utils/stylePropable';
import Icon from '../../core/Icon';
import Null from '../../core/Null';
import ProxyLink from '../../core/ProxyLink';
import { getImageDimensions } from '../../helpers/utils/imageDimensions';

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
    markup = Null;
  }

  return markup;
};

const getTitleContainer = (title, titleStyle) => {
  let markup;
  if (title) {
    markup = (<Heading type="h1" headingText={title} style={titleStyle} />);
  } else {
    markup = Null;
  }

  return markup;
};

const getSubtitleContainer = (subtitle, subtitleStyle) => {
  let markup;
  if (subtitle) {
    markup = (<Heading type="h3" headingText={subtitle} style={subtitleStyle} />);
  } else {
    markup = Null;
  }

  return markup;
};

const getTextContainer = (text, textStyle) => {
  let markup;
  if (text) {
    markup = (<Text style={textStyle} content={text} />);
  } else {
    markup = Null;
  }

  return markup;
};

const getLinkContainer = (prop) => {
  const {
  proxyLinkStyle,
  linkText,
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
      />
    </div>);
  } else {
    markup = Null;
  }

  return markup;
};

class HeroVariationImageLeft extends Component {

  state = {
    imageWidth: '100%',
    imageHeight: '100%',
  };

  onImageLoaded = () => {
    const imgRef = this.refs.heroImage;
    const imageDimensions = getImageDimensions(
      imgRef.childNodes[0].naturalHeight,
      imgRef.childNodes[0].naturalWidth,
      imgRef.clientHeight,
      imgRef.clientWidth
    );
    this.setState({ ...imageDimensions });
  };

  render() {
    const {
      className,
      imageSrc,
      imageTitle,
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
    } = this.props;

    const {
      imageWidth,
      imageHeight,
      marginTop,
      marginLeft,
    } = this.state;

    const imgContainer = mergeStyles(leftSideStyle, imageContainerStyle);
    return (
      <div
        style={rootStyle}
        className={className}
      >
        <div style={imgContainer} ref="heroImage">
          <Image
            onLoad={this.onImageLoaded}
            source={imageSrc}
            style={{
              width: imageWidth,
              height: imageHeight,
              marginTop,
              marginLeft,
            }}
            alternateText={imageTitle}
          />
        </div>
        <div style={rightSideStyle}>
          {getTitleContainer(title, titleStyle)}
          {getSubtitleContainer(subtitle, subtitleStyle)}
          {getTextContainer(text, textStyle)}
          {getIconComponent(this.props)}
          {getLinkContainer(this.props)}
        </div>
      </div>
    );
  }

}

HeroVariationImageLeft.propTypes = {
  className: string,
  id: string,
  imageSrc: string.isRequired,
  imageTitle: string,
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
  linkUrl: string,
  linkFontWeight: string,
  linkFontSize: string,
  linkTextDecoration: string,
};

export default HeroVariationImageLeft;
