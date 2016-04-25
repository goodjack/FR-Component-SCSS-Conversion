import React, { Component, PropTypes } from 'react';
import { mergeStyles } from '../helpers/utils/stylePropable';
import composeContextPure from '../helpers/composedComponents/contextPure';
import DefaultRawTheme from '../helpers/styles/rawThemes/lightRawTheme';
import ThemeManager from '../helpers/styles/themeManager';
import Image from '../core/Image';

const { string, object, func, oneOf } = PropTypes;

const getRelevantContextKeys = theme => {
  const itTheme = theme && theme.imageTile || {};
  return { ...itTheme };
};

const styles = {
  large: {
    display: 'inline-block',
    width: '100%',
  },

  small: {
    display: 'inline-block',
    width: '100%',
  },

  imageLarge: {
    width: '100%',
    minHeight: 473,
    borderWidth: 1,
  },

  imageSmall: {
    width: '100%',
    minHeight: 391,
    borderWidth: 1,
  },

  linkStyle: {
    display: 'inline-block',
    width: '100%',
  },

};

class ImageTile extends Component {

  static propTypes = {
    alternateText: string.isRequired,
    id: string,
    className: string,
    imageSrc: string.isRequired,
    imageStyle: object,
    link: string,
    onLoad: func,
    onMouseEnter: func,
    onMouseLeave: func,
    style: object,
    targetwindow: string,
    tileSize: oneOf(['small', 'large']),
  };

  static contextTypes = {
    compTheme: object,
  };

  static defaultProps = {
    tileSize: 'small',
    onLoad: () => null,
    onMouseEnter: () => null,
    onMouseLeave: () => null,
  };

  state = {
    isHovered: false,
  };

  handleOnLoad = event => {
    this.props.onLoad(event);
  };

  handleMouseEnter = event => {
    this.setState({ isHovered: true });
    this.props.onMouseEnter(event);
  };

  handleMouseLeave = event => {
    this.setState({ isHovered: false });
    this.props.onMouseLeave(event);
  };

  render() {
    const {
      alternateText,
      id,
      className,
      imageSrc,
      imageStyle,
      link,
      style,
      targetwindow,
      tileSize,
    } = this.props;

    const {
      compTheme: compContextTheme,
    } = this.context;

    const compTheme = compContextTheme || ThemeManager.getCompTheme(DefaultRawTheme);
    const { imageBorderColor } = getRelevantContextKeys(compTheme);

    const imageBorderStyle = {
      borderColor: imageBorderColor,
      borderStyle: this.state.isHovered ? 'solid' : 'none',
    };

    let rootStyle;
    let inlineImageStyle;

    if (tileSize === 'large') {
      rootStyle = styles.large;
      inlineImageStyle = mergeStyles(styles.imageLarge, imageBorderStyle);
    } else {
      rootStyle = styles.small;
      inlineImageStyle = mergeStyles(styles.imageSmall, imageBorderStyle);
    }

    const containerStyle = mergeStyles(rootStyle, style);

    const divProps = {
      id,
      className,
    };

    const imageProps = {
      alternateText,
      source: imageSrc,
      style: mergeStyles(inlineImageStyle, imageStyle),
    };

    const aProps = {
      href: link,
      target: targetwindow,
      style: styles.linkStyle,
    };

    return (
      <div
        style={containerStyle}
        onLoad={this.handleOnLoad}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        {...divProps}
      >
        <a {...aProps}>
          <Image {...imageProps} />
        </a>
      </div>
    );
  }

}

export default composeContextPure(ImageTile);
