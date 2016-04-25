import React, { Component, PropTypes } from 'react';
import { mergeStyles } from '../../helpers/utils/stylePropable';

const { string, func, object, bool, oneOfType, number } = PropTypes;

const styles = {
  imageStyle: {
    border: 'none',
  },
};

const getMarkup = (comp) => {
  const {
    alternateText,
    className,
    source,
    style,
    useImgTag,
  } = comp.props;

  let {
    width,
    height,
  } = comp.props;

  if (!width && !height) {
    width = height = '100%';
  }

  const computedImageStyle = {
    position: 'relative',
    backgroundImage: `url('${source}')`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width,
    height,
    ...style,
  };
  let markup;
  if (useImgTag) {
    let mergedStyle = mergeStyles({ width, height }, style);
    mergedStyle = mergeStyles(styles.imageStyle, mergedStyle);
    markup = (
      <img
        className={className}
        src={source}
        style={mergedStyle}
        alt={alternateText}
        onLoad={comp.handleOnLoad}
        onClick={comp.handleOnClick}
      />
    );
  } else {
    markup = (
      <div
        style={computedImageStyle}
        onClick={comp.handleOnClick}
      />
    );
  }

  return markup;
};

class Image extends Component {

  static propTypes = {
    alternateText: string,
    className: string,
    onLoad: func,
    onClick: func,
    source: string,
    style: object,
    useImgTag: bool,
    width: oneOfType([string, number]),
    height: oneOfType([string, number]),
  };

  static defaultProps = {
    source: '',
    onLoad: () => null,
    useImgTag: true,
  };

  handleOnLoad = event => {
    if (this.props.onLoad) this.props.onLoad(event);
  };

  handleOnClick = event => {
    if (this.props.onClick) this.props.onClick(event);
  };

  render() {
    return getMarkup(this);
  }
}

export default Image;
