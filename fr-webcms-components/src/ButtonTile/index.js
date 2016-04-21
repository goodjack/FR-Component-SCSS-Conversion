import React, { Component, PropTypes } from 'react';
import { mergeStyles } from '../helpers/utils/stylePropable';
import composeContextPure from '../helpers/composedComponents/contextPure';
import UniqueId from '../helpers/utils/uniqueId';
import DefaultRawTheme from '../helpers/styles/rawThemes/lightRawTheme';
import ThemeManager from '../helpers/styles/themeManager';
import Image from '../core/Image';

const { node, string, object, oneOf } = PropTypes;

const getRelevantContextKeys = theme => {
  const btTheme = theme && theme.buttonTile || {};
  return { ...btTheme };
};

const styles = {
  root: {
    display: 'inline-block',
    borderWidth: 1,
    borderStyle: 'solid',
    width: '99%',
    minHeight: 391,
  },

  imageSmall: {
    display: 'inline-block',
    width: '100%',
    minHeight: 332,
  },

  imageLarge: {
    display: 'inline-block',
    width: '100%',
    minHeight: 419,
  },
  listStyle: {
    display: 'flex',
    paddingTop: 0,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
    margin: 0,
    position: 'relative',
    listStyle: 'none',
  },
};

class ButtonTile extends Component {

  static propTypes = {
    children: node,
    className: string,
    id: string,
    imageSrc: string.isRequired,
    imageStyle: object,
    listStyle: object,
    style: object,
    tileSize: oneOf(['small', 'large']),
  };

  static contextTypes = {
    muiTheme: object,
    muiConfig: object,
  };

  static defaultProps = {
    tileSize: 'small',
  };

  componentDidMount() {
    this._uniqueId = UniqueId.generate();
  }

  render() {
    const {
      imageSrc,
      tileSize,
      id,
      className,
      listStyle,
      imageStyle,
      style,
    } = this.props;

    const {
      compTheme: compContextTheme,
    } = this.context;

    const compTheme = compContextTheme || ThemeManager.getCompTheme(DefaultRawTheme);
    const { borderColor } = getRelevantContextKeys(compTheme);

    const inputId = id || this._uniqueId;

    const rootStyle = mergeStyles(styles.root, style);

    let tileStyle = tileSize === 'large' ? styles.imageLarge : styles.imageSmall;
    tileStyle = mergeStyles(tileStyle, { borderColor });

    const imageStyles = mergeStyles(tileStyle, imageStyle);
    const ulStyles = mergeStyles(styles.listStyle, listStyle);

    return (
      <div
        id={inputId}
        className={className}
        style={rootStyle}
      >
        <Image
          source={imageSrc}
          style={imageStyles}
        />
        <ul style={ulStyles}>
          {this.props.children}
        </ul>
      </div>
    );
  }

}

export default composeContextPure(ButtonTile);
