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

const { string, object } = PropTypes;

const getRelevantContextKeys = (compTheme) => {
  const hmTheme = compTheme && compTheme.heroMovie || {};
  return { ...hmTheme };
};

const getStyles = (themeAndConfig) => {
  const {
    compTheme,
  } = themeAndConfig;
  const heroMovie = getRelevantContextKeys(compTheme);
  return {
    root: {
      position: 'relative',
      width: 960,
      height: 500,
      borderColor: heroMovie.borderColor,
      borderWidth: '1',
      padding: '1',
      borderStyle: 'solid',
      cursor: 'pointer',
    },
    youtubeVideoSize: {
      width: 960,
      height: 500,
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
      right: 20,
      width: 60,
      top: 20,
      margin: 0,
    },
    playIconTextStyle: {
      color: heroMovie.iconTextColor || 'white',
      fontSize: 16,
      fontFamily: heroMovie.fontFamily,
    },
    iconButtonStyle: {
      position: 'relative',
      backgroundColor: heroMovie.iconBackground || 'rgba(255, 255, 255, 0.6)',
      height: 60,
      width: '100%',
      padding: '0px',
      textAlign: 'center',
    },
    iconHoverStyle: {
      backgroundColor: heroMovie.iconHoverColor || 'rgba(255, 0, 0, .6)',
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
      <Image source={iconSrc} />
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
    text: string,
    videoId: string.isRequired,
  };

  static contextTypes = {
    compTheme: object,
    compConfig: object,
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
      text,
    } = this.props;
    const rootId = id;
    const styles = getStyles(this.themeAndConfig);
    const iconElement = getIconElement(styles, iconSrc);
    const rootStyle = mergeStyles(styles.root, style);
    const iconTextStyle = mergeStyles(styles.playIconContainer, playButtonStyle);

    return (
      <div
        style={rootStyle}
        id={rootId}
        className={className}
        onClick={this.handleClickEvent}
      >
        <div style={iconTextStyle} >
          {iconElement}
          <Text
            style={styles.playIconTextStyle}
            content={text}
          />
        </div>
        <h1>
          <Image
            source={imageSrc}
            alternateText={imageTitle}
            style={styles.image}
          />
        </h1>
        {showVideo ? <Modal dialogStyle={styles.youtubeVideoSize} bodyStyle={styles.modalBodyStyle}>
          <Youtube source={videoId} allowAutoplay />
        </Modal> : Null}
      </div>
    );
  }

}

export default composeContextPure(HeroMovie);
