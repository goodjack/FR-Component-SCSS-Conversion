import React, { Component, PropTypes } from 'react';
import RollOverImage from '../../RollOverImage';

const {
  bool,
  oneOf,
  string,
  object,
  number,
  func,
} = PropTypes;

const createChild = (me) => {
  const {
    defaultImage,
    hoverImage,
    defaultStyle,
    hoverStyle,
    imageStyle,
    link,
    target,
    text,
    active,
  } = me.props;
  let tabChild;
  const activeImage = active ? hoverImage : defaultImage;
  const rootStyle = me.state.hovered ? hoverStyle : defaultStyle;
  if (defaultImage) {
    tabChild = (
      <RollOverImage
        imgSrc={activeImage}
        rollImgSrc={hoverImage}
        link={link}
        style={rootStyle}
        target={target}
        imageStyle= {imageStyle}
      />);
  } else {
    tabChild = (
      <a
        href={link}
        target={target}
        style={rootStyle}
      >{text}</a>);
  }

  return tabChild;
};

class Tab extends Component {

  static propTypes = {
    active: bool,
    defaultImage: string,
    defaultStyle: object,
    hoverImage: string,
    hoverStyle: object,
    imageStyle: object,
    index: number,
    link: string,
    onPress: func,
    target: oneOf(['_blank', '_self', '_parent', '_top']),
    text: string,
    updateTabSet: func,
  };

  static defaultProps = {
    onPress: () => null,
    target: '_self',
  };

  state = {
    hovered: false,
  };

  handleMouseDown = (event) => {
    const {
      updateTabSet,
      onPress,
      index,
    } = this.props;
    updateTabSet(index);
    onPress(event, index);
  };

  handleMouseEnter = () => {
    this.setState({ hovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ hovered: false });
  };

  render() {
    const tabChild = createChild(this);
    return (
      <div
        onMouseDown={this.handleMouseDown}
        onMouseLeave={this.handleMouseLeave}
        onMouseEnter={this.handleMouseEnter}
      >{tabChild}</div>
    );
  }
}

export default Tab;
