import React, { PropTypes } from 'react';
import composeContextPure from '../../helpers/composedComponents/contextPure';
import ImagePlusTextImageRight from './ImagePlusTextImageRight';
import ImagePlusTextImageLeft from './ImagePlusTextImageLeft';
import ImagePlusTextImageTop from './ImagePlusTextImageTop';
import ImagePlusTextImageBottom from './ImagePlusTextImageBottom';

const { string, object, oneOf, oneOfType, number, node } = PropTypes;

const ImagePlusText = (props) => {
  let MarkupToRender = null;

  switch (props.variation) {
    case 'imageRight':
      MarkupToRender = ImagePlusTextImageRight;
      break;
    case 'imageLeft':
      MarkupToRender = ImagePlusTextImageLeft;
      break;
    case 'imageTop':
      MarkupToRender = ImagePlusTextImageTop;
      break;
    case 'imageBottom':
      MarkupToRender = ImagePlusTextImageBottom;
      break;
    default:
      MarkupToRender = ImagePlusTextImageTop;
  }

  return (<MarkupToRender {...props} />);
};

ImagePlusText.propTypes = {
  className: string,
  id: string,
  style: object,
  imageSrc: string.isRequired,
  imageStyle: object,
  imageTitle: string,
  imageWidthRatio: number,
  text: oneOfType([node, string]),
  textStyle: object,
  link: string,
  linkText: string,
  linkStyle: object,
  textContainerStyle: object,
  targetwindow: string,
  variation: oneOf(['imageRight', 'imageLeft', 'imageTop', 'imageBottom']).isRequired,
};

export default composeContextPure(ImagePlusText);
