import React, { PropTypes, Component } from 'react';
import Text from '../../Text';
import Heading from '../../Heading';
import Image from '../../core/Image';
import { mergeStyles } from '../../helpers/utils/stylePropable';
import Icon from '../../core/Icon';
import Null from '../../core/Null';
import ProxyLink from '../../core/ProxyLink';
const noop = () => null;
const { string, object, bool, func } = PropTypes;

const getIconComponent = (prop) => {
  const {
    overlayIconContainerStyle,
    iconText,
    iconTextStyle,
    icon,
  } = prop;
  let markup;
  if (icon) {
    markup = (
      <div style={overlayIconContainerStyle}>
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

const getLinkContainer = (comp) => {
  const {
  overlayProxyLinkStyle,
  linkText,
  linkTextColor,
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
        textColor={linkTextColor}
        onClickEvent={comp.hideTextOverlay}
      />
    </div>);
  } else {
    markup = false;
  }

  return markup || <Null />;
};

class HeroVariationOverlay extends Component {

  static defaultProps = {
    callOverlay: noop,
  };

  state = {
    showOverlay: true,
  };

  hideTextOverlay = () => {
    if (this.props.navToOverlayComp) {
      this.props.callOverlay(true);
      this.setState({ showOverlay: false });
    }
  };

  render() {
    const {
      className,
      imageSrc,
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

    const imgContainer = mergeStyles(rootStyle, imageContainerStyle);
    return (
      <div
        style={imgContainer}
        className={className}
      >
        <Image
          source={imageSrc}
          useImgTag={false}
        />
        { this.state.showOverlay ?
          <div style={textOverlay}>
            {getTitleContainer(title, titleStyle)}
            {getSubtitleContainer(subtitle, subtitleStyle)}
            {getTextContainer(text, textStyle)}
            {getIconComponent(this.props)}
            {getLinkContainer(this)}
          </div> :
          <Null />}
      </div>
    );
  }
}

HeroVariationOverlay.propTypes = {
  className: string,
  imageSrc: string.isRequired,
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
  linkTextColor: string,
  linkUrl: string,
  linkFontWeight: string,
  linkFontSize: string,
  linkTextDecoration: string,
  navToOverlayComp: bool,
  overlayIconContainerStyle: object,
  callOverlay: func,
};

export default HeroVariationOverlay;
