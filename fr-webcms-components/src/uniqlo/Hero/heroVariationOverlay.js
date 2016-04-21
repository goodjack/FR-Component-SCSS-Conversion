import React, { PropTypes, Component } from 'react';
import Text from '../../Text';
import Heading from '../../Heading';
import Image from '../../core/Image';
import { mergeStyles } from '../../helpers/utils/stylePropable';
import Icon from '../../core/Icon';
import Null from '../../core/Null';
import ProxyLink from '../../core/ProxyLink';
import { getImageDimensions } from '../../helpers/utils/imageDimensions';

const { string, object, bool } = PropTypes;

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

const getLinkContainer = (comp) => {
  const {
  overlayProxyLinkStyle,
  linkText,
  linkUrl,
  linkFontWeight,
  linkFontSize,
  linkTextDecoration,
} = comp.props;
  let markup;
  if (linkText) {
    markup = (<div style={overlayProxyLinkStyle}>
      <ProxyLink
        linkText={linkText}
        linkUrl={linkUrl}
        linkFontSize={linkFontSize}
        linkFontWeight={linkFontWeight}
        linkTextDecoration={linkTextDecoration}
        onClickEvent={comp.hideTextOverlay}
      />
    </div>);
  } else {
    markup = Null;
  }

  return markup;
};

class HeroVariationOverlay extends Component {

  state = {
    imageWidth: '100%',
    imageHeight: '100%',
    showOverlay: true,
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

  hideTextOverlay = () => {
    console.log('here');
    if (this.props.navToOverlayComp) {
      this.setState({ showOverlay: false });
    }
  };

  render() {
    const {
      className,
      imageSrc,
      imageTitle,
      rootStyle,
      subtitle,
      subtitleStyle,
      text,
      textStyle,
      title,
      titleStyle,
      imageContainerStyle,
      textOverlay,
    } = this.props;

    const {
      imageWidth,
      imageHeight,
      marginTop,
      marginLeft,
    } = this.state;

    const imgContainer = mergeStyles(rootStyle, imageContainerStyle);
    return (
      <div
        style={imgContainer}
        className={className}
        ref="heroImage"
      >
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
        { this.state.showOverlay ?
          <div style={textOverlay}>
            {getTitleContainer(title, titleStyle)}
            {getSubtitleContainer(subtitle, subtitleStyle)}
            {getTextContainer(text, textStyle)}
            {getIconComponent(this.props)}
            {getLinkContainer(this)}
          </div> :
          Null}
      </div>
    );
  }
}

HeroVariationOverlay.propTypes = {
  className: string,
  imageSrc: string.isRequired,
  imageTitle: string,
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
  iconTextStyle: object,
  proxyLinkStyle: object,
  textOverlay: object,
  overlayProxyLinkStyle: object,
  linkText: string,
  linkUrl: string,
  linkFontWeight: string,
  linkFontSize: string,
  linkTextDecoration: string,
  navToOverlayComp: bool,
};

export default HeroVariationOverlay;
