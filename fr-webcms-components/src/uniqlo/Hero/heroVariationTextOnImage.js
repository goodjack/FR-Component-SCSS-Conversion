import React, { PropTypes, Component } from 'react';
import Heading from '../../Heading';
import Image from '../../core/Image';
import { mergeStyles } from '../../helpers/utils/stylePropable';
import Null from '../../core/Null';
import ProxyLink from '../../core/ProxyLink';
import Button from '../../Button';

const { string, object, bool, func } = PropTypes;

const styles = {
  title: {
    fontSize: '1em',
    padding: 0,
  },
  subtitle: {
    fontSize: '0.65em',
    padding: 0,
  },
};
const getTitleContainer = (title, titleStyle) => {
  let markup;
  if (title) {
    const mergedTitleStyle = mergeStyles(titleStyle, styles.title);
    markup = (<Heading type="h1" headingText={title} style={mergedTitleStyle} />);
  } else {
    markup = false;
  }

  return markup || <Null />;
};

const getSubtitleContainer = (subtitle, subtitleStyle) => {
  let markup;
  if (subtitle) {
    const mergedSubtitleStyle = mergeStyles(subtitleStyle, styles.subtitle);
    markup = (<Heading type="h3" headingText={subtitle} style={mergedSubtitleStyle} />);
  } else {
    markup = false;
  }

  return markup || <Null />;
};

const getButtonComponent = (comp) => {
  const {
    linkText,
    linkTextColor,
    linkUrl,
    linkFontWeight,
    linkFontSize,
    linkTextDecoration,
  } = comp.props;

  const buttonStyle = {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: '5%',
    width: 'auto',
    textAlign: 'center',
    padding: 5,
    marginLeft: '20%',
    border: '1px solid grey',
  };
  const buttonTextStyle = {
    fontSize: '0.8em',
  };
  let markup;
  if (linkText) {
    markup = (
      <Button labelStyle={buttonTextStyle} style={buttonStyle}>
        <ProxyLink
          linkText={linkText}
          linkUrl={linkUrl}
          textDecoration={linkTextDecoration}
          textColor={linkTextColor}
          fontWeight={linkFontWeight}
          fontSize={linkFontSize}
          onClickEvent={comp.handleClick}
        />
      </Button>
    );
  } else {
    markup = false;
  }

  return markup || <Null />;
};

class HeroVariationTextOnImage extends Component {

  state = {
    showButton: true,
  };

  handleClick = () => {
    const {
      navToOverlayComp,
      linkOnClick,
    } = this.props;
    if (navToOverlayComp) {
      this.setState({ showButton: false });
    }

    if (linkOnClick) {
      linkOnClick();
    }
  };

  render() {
    const {
      className,
      imageSrc,
      rootStyle,
      subtitle,
      subtitleStyle,
      title,
      titleStyle,
      imageContainerStyle,
      TextOnImage,
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
        <div style={TextOnImage}>
            {getTitleContainer(title, titleStyle)}
            {getSubtitleContainer(subtitle, subtitleStyle)}
        </div>
        {this.state.showButton ? getButtonComponent(this) : <Null />}
      </div>
    );
  }
}

HeroVariationTextOnImage.propTypes = {
  className: string,
  imageSrc: string.isRequired,
  rootStyle: object,
  subtitle: string,
  subtitleStyle: object,
  title: string,
  titleStyle: object,
  icon: string,
  iconText: string,
  imageContainerStyle: object,
  iconTextStyle: object,
  proxyLinkStyle: object,
  TextOnImage: object,
  overlayProxyLinkStyle: object,
  linkText: string,
  linkTextColor: string,
  linkUrl: string,
  linkFontWeight: string,
  linkFontSize: string,
  linkTextDecoration: string,
  navToOverlayComp: bool,
  linkOnClick: func,
  overlayIconContainerStyle: object,
};

export default HeroVariationTextOnImage;
