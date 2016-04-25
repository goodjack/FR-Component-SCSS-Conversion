import React, { Component, PropTypes } from 'react';
import UniqueId from '../helpers/utils/uniqueId';
import Image from '../core/Image';
import composeContextPure from '../helpers/composedComponents/contextPure';

// Uniqlo UI
const noop = () => null;
const { string, object, func } = PropTypes;
class RollOverImage extends Component {

static propTypes = {
  altText: string,
  className: string,
  id: string,
  imageStyle: object,
  imgSrc: string.isRequired,
  link: string,
  onMouseClick: func,
  onMouseLeave: func,
  onMouseOver: func,
  rollImgSrc: string,
  style: object,
  target: string,
};

static defaultProps = {
  onMouseClick: noop,
  onMouseOver: noop,
  onMouseLeave: noop,
};

  state = {
    hovered: false,
  };

  componentDidMount = () => {
    this._uniqueId = UniqueId.generate();
  };

  getMouseClick = (event) => {
    this.props.onMouseClick(event);
  };

  getMouseOver = (event) => {
    if (this.props.rollImgSrc) {
      this.setState({ hovered: true });
    }

    this.props.onMouseOver(event);
  };

  getMouseLeave = (event) => {
    this.setState({ hovered: false });
    this.props.onMouseLeave(event);
  };

  render() {
    const {
      imageStyle,
      className,
      id,
      link,
      style,
      target,
      altText,
      imgSrc,
      rollImgSrc,
      ...other,
    } = this.props;
    let inputProps = null;
    if (link) {
      inputProps = {
        href: link,
      };
    }

    const imageSource = this.state.hovered ? rollImgSrc : imgSrc;
    return (
      <a {...inputProps}
        className={className}
        id ={id}
        style={style}
        onMouseOver= {this.getMouseOver}
        onMouseLeave= {this.getMouseLeave}
        onClick= {this.getMouseClick}
        target= {target}
      >
        <Image
          style= {imageStyle}
          source={imageSource}
          alt ={altText}
        />
      </a>
    );
  }

}

export default composeContextPure(RollOverImage);
