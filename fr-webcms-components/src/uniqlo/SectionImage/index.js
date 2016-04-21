import React, { Component, PropTypes } from 'react';
import { mergeStyles } from '../../helpers/utils/stylePropable';
import Image from '../../core/Image';

const {
  string,
  object,
  func,
} = PropTypes;

class SectionImage extends Component {

  static propTypes = {
    alternateText: string,
    className: string,
    id: string,
    imageSrc: string,
    imageStyle: object,
    link: string,
    onLoad: func,
    style: object,
    targetwindow: string,
  };

  render() {
    const {
      alternateText,
      imageSrc,
      imageStyle,
      link,
      onLoad,
      style,
      targetwindow,
    } = this.props;

    const imageProps = {
      alternateText,
      onLoad,
      source: imageSrc,
      style: imageStyle,
    };

    const rootStyle = {
      borderColor: '#e6e6e6',
      borderStyle: 'solid',
      borderWidth: 1,
    };

    return (
      <div style={mergeStyles.apply(this, [rootStyle, style])}>
        <a href={link} target={targetwindow}>
          <Image {...imageProps}/>
        </a>
      </div>
    );
  }
}

export default SectionImage;
