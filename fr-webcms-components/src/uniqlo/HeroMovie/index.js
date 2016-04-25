import React, { PropTypes, Component } from 'react';
import DefaultRawTheme from '../../helpers/styles/rawThemes/lightRawTheme';
import ThemeManager from '../../helpers/styles/themeManager';
import { mergeStyles } from '../../helpers/utils/stylePropable';
import composeContextPure from '../../helpers/composedComponents/contextPure';
import ConfigurationManager from '../../helpers/configuration/configurationManager';
import BaseConfig from '../../helpers/configuration/baseConfig';
import Image from '../../core/Image';
import Text from '../../Text';
import Modal from '../../core/Modal';
import Youtube from '../../core/Youtube';
import Button from '../../Button';
import Null from '../../core/Null';

const { string, object, oneOf, bool } = PropTypes;

const getRelevantContextKeys = (compTheme) => {
  const hmTheme = compTheme && compTheme.heroMovie || {};
  return { ...hmTheme };
};

const getStyles = (themeAndConfig, props) => {
  const {
    compTheme,
  } = themeAndConfig;

  const {
    splitView,
    textPosition,
    iconPosition,
  } = props;

  const textOrder = (textPosition === 'top' || textPosition === 'left') ? 1 : 2;
  const imgOrder = (textOrder === 1) ? 2 : 1;

  const heroMovie = getRelevantContextKeys(compTheme);
  return {
    root: {
      position: 'relative',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: splitView ? 'row' : 'column',
    },
    youtubeVideoSize: {
      width: 'auto',
      height: 300,
    },
    modalBodyStyle: {
      backgroundColor: 'transparent',
    },
    image: {
      width: '100%',
      height: '100%',
    },
    playIconContainer: {
      position: 'absolute',
      margin: '3px 0px',
      left: (iconPosition.indexOf('left') > -1) ? 0 : 'initial',
      right: (iconPosition.indexOf('right') > -1) ? 0 : 'initial',
      bottom: (iconPosition.indexOf('bottom') > -1) ? 0 : 'initial',
      top: (iconPosition.indexOf('top') > -1) ? 0 : 'initial',
    },
    playIconTextStyle: {
      color: heroMovie.iconTextColor || 'white',
      fontSize: 16,
      fontFamily: heroMovie.fontFamily,
    },
    iconButtonStyle: {
      padding: 5,
      backgroundColor: '#000',
      height: !splitView ? 50 : 25,
      width: !splitView ? 50 : 25,
      textAlign: 'center',
    },
    iconImage: {
      maxHeight: '60%',
      maxWidth: '60%',
    },
    iconHoverStyle: {
      backgroundColor: heroMovie.iconHoverColor || 'rgba(255, 0, 0, .6)',
    },
    thumbnail: {
      order: imgOrder,
      position: 'relative',
      padding: '4%',
      flex: 1,
    },
    imageWrapper: {
      position: 'relative',
    },
    description: {
      order: textOrder,
      fontSize: 16,
      margin: 'auto',
      paddingBottom: (textOrder === 2) && !splitView ? '4%' : 0,
      paddingTop: (textOrder === 1) && !splitView ? '4%' : 0,
      paddingRight: (textOrder === 2) || !splitView ? '4%' : 0,
      paddingLeft: (textOrder === 1) || !splitView ? '4%' : 0,
      flex: splitView ? 1.5 : 1,
    },
  };
};

const getIconElement = (styles, iconSrc) => {
  const buttonProps = {
    style: styles.iconButtonStyle,
    hoverStyle: styles.iconHoverStyle,
  };

  return (
    <Button {...buttonProps} >
      <Image source={iconSrc} style={styles.iconImage}/>
    </Button>
  );
};

class HeroMovie extends Component {

  static propTypes = {
    className: string,
    iconSrc: string,
    id: string,
    imageSrc: string.isRequired,
    imageTitle: string,
    playButtonStyle: object,
    style: object,
    iconText: string,
    videoId: string.isRequired,
    splitView: bool,
    iconPosition: oneOf(['left-top', 'left-bottom', 'right-top', 'right-bottom', 'center']),
    variation: oneOf(['mobile', 'desktop']),
    textPosition: oneOf(['top', 'bottom', 'right', 'left']),
    description: string,
  };

  static contextTypes = {
    compTheme: object,
    compConfig: object,
  };

  static defaultProps = {
    iconPosition: 'left-bottom',
    variation: 'mobile',
  };

  state = {
    showVideoPopup: false,
  };

  themeAndConfig = {
    compTheme: this.context.compTheme || ThemeManager.getCompTheme(DefaultRawTheme),
    compConfig: this.context.compConfig || ConfigurationManager.getCompConfig(BaseConfig),
  };

  handleClickEvent = () => {
    this.setState({ showVideoPopup: !this.state.showVideoPopup });
  };

  render() {
    const showVideo = this.state.showVideoPopup;
    const {
      id,
      className,
      iconSrc,
      style,
      playButtonStyle,
      imageSrc,
      imageTitle,
      videoId,
      iconText,
      description,
    } = this.props;

    const rootId = id;
    const styles = getStyles(this.themeAndConfig, this.props);
    const iconElement = getIconElement(styles, iconSrc);
    const rootStyle = mergeStyles(styles.root, style);
    const iconTextStyle = mergeStyles(styles.playIconContainer, playButtonStyle);
    const descriptionStyle = styles.description;
    const thumbnailStyle = styles.thumbnail;

    return (
      <div
        style={rootStyle}
        id={rootId}
        className={className}
        onClick={this.handleClickEvent}
      >
        {
          description &&
          <Text
            style={descriptionStyle}
            content={description}
          />
        }
        <div style={thumbnailStyle}>
          <h1 style={styles.imageWrapper}>
            <div style={iconTextStyle} >
              {iconElement}
              <Text
                style={styles.playIconTextStyle}
                content={iconText}
              />
            </div>
            <Image
              source={imageSrc}
              alternateText={imageTitle}
              style={styles.image}
            />
          </h1>
        </div>
        {
          showVideo ?
          <Modal dialogStyle={styles.youtubeVideoSize} bodyStyle={styles.modalBodyStyle}>
            <Youtube source={videoId} allowAutoplay />
          </Modal>
          : Null
        }
      </div>
    );
  }

}

export default composeContextPure(HeroMovie);
