import React, { Component, PropTypes } from 'react';
import { mergeStyles } from '../helpers/utils/stylePropable';
import composeContextPure from '../helpers/composedComponents/contextPure';
import DefaultRawTheme from '../helpers/styles/rawThemes/lightRawTheme';
import ThemeManager from '../helpers/styles/themeManager';
import { getColorCode, getProductInfo } from '../Product/productService';
import Image from '../core/Image';
import Chip from '../Chip';
import ChipChild from '../Chip/ChipChild';

const { string, object, func } = PropTypes;
const noop = () => null;
const prepareStyle = ({ context }) => {
  const CompTheme = context.CompTheme || ThemeManager.getCompTheme(DefaultRawTheme);
  const pickerTheme = CompTheme && CompTheme.colorPicker || {};

  const styles = {
    root: {
      borderTopWidth: 1,
      borderTopStyle: 'solid',
      borderTopColor: pickerTheme.borderColor,
      display: 'inline-block',
      background: pickerTheme.backgroundColor,
      zIndex: '100',
      width: '99%',
      marginLeft: 1,
      boxSizing: 'border-box',
      boxShadow: '0px 2px 2px 2px rgba(0,0,0,0.15)',
    },
    itemImage: {
      width: 'auto',
      height: 'auto',
      position: 'relative',
    },
    toolTipStyle: {
      display: 'none',
    },
    chipStyle: {
      paddingTop: 0,
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom: 0,
      width: '22',
      height: '22',
    },
    chipChildStyle: {
      height: '100%',
    },
    link: {
      color: pickerTheme.linkColor,
      textDecoration: 'none',
    },
    imageSmall: {
      cursor: 'pointer',
      textAlign: 'center',
      width: '100%',
      minHeight: 231,
      borderStyle: 'none',
      verticalAlign: 'middle',
    },
    imageLarge: {
      cursor: 'pointer',
      textAlign: 'center',
      width: '100%',
      minHeight: 310,
      borderStyle: 'none',
      verticalAlign: 'middle',
    },
    itemColor: {
      paddingRight: 20,
      paddingLeft: 15,
    },
    itemDescription: {
      overflow: 'hidden',
      float: 'right',
    },
    descriptionList: {
      listStyle: 'none',
      textAlign: 'right',
      display: 'block',
      overflow: 'hidden',
      margin: 0,
    },
    currentPrice: {
      display: 'inline-block',
      fontSize: 28,
      fontWeight: 'bold',
    },

  };

  return {
    styles,
  };
};

class ColorPicker extends Component {

  static propTypes = {
    alternateText: string,
    className: string,
    imageStyle: object,
    onMouseEnter: func,
    productInfo: object,
    productTileCallback: func,
    style: object,
    tileSize: string,
  };

  static defaultProps = {
    onMouseEnter: noop,
  };

  state = {
    currentPrice: '',
    selectedImage: '',
  };

  getChips = (data, chipStyle, chipChildStyle, toolTipStyle) => {
    const renderChipChild = data.images.swatch.urls.map((urlsrc, index) =>
      <ChipChild
        key ={index}
        chipStyle={chipStyle}
        toolTipStyle ={toolTipStyle}
        chipChildStyle = {chipChildStyle}
        chipHoverStyle ={chipStyle}
      >
        <Image source={urlsrc.url}/></ChipChild>
    );
    return renderChipChild;
  };

  passSelectedImage = (event) => {
    let selectedColor = null;
    let skuId = null;
    const hoverNode = event.target;
    const { productInfo, productTileCallback } = this.props;
    if (hoverNode.nodeName === 'LI') {
      selectedColor =
      getColorCode(productInfo, hoverNode.querySelector('img').getAttribute('src'));
    } else {
      selectedColor =
      getColorCode(productInfo, hoverNode.getAttribute('src'));
    }

    const productId = getProductInfo(selectedColor, productInfo);
    skuId = productId.id;
    productTileCallback(event, selectedColor, skuId);
  };

  displayPicker = (event) => {
    let hoveredColor = null;
    const hoverNode = event.target;
    const { productInfo } = this.props;
    if (hoverNode.nodeName === 'LI') {
      hoveredColor =
      getColorCode(productInfo, hoverNode.querySelector('img').getAttribute('src'));
    } else {
      hoveredColor =
      getColorCode(productInfo, hoverNode.getAttribute('src'));
    }

    const productDetail = getProductInfo(hoveredColor, productInfo);
    const selectedPrice = productDetail.currentPrice;
    const mainColors = productInfo.images.main.urls;
    let url = null;
    mainColors.forEach((color) => {
      if (color.colorCode === hoveredColor) {
        url = color.url;
      }
    });
    this.setState({
      selectedImage: url,
      currentPrice: selectedPrice,
    });
    this.props.onMouseEnter();
  };

  render() {
    const _this = this;
    const {
     tileSize,
     style,
     alternateText,
     productInfo,
     imageStyle,
   } = _this.props;

    const {
      styles,
    } = prepareStyle(_this);

    const {
           root,
           chipStyle,
           imageLarge,
           imageSmall,
           itemColor,
           itemDescription,
           descriptionList,
           currentPrice,
           chipChildStyle,
           toolTipStyle,
         } = styles;

    const renderChipChild = _this.getChips(productInfo, chipStyle,
      chipChildStyle, toolTipStyle);

    const styleImage = mergeStyles.apply(_this,
        [(tileSize === 'large' ? imageLarge : imageSmall), imageStyle]);

    return (
      <div style={ mergeStyles.apply(_this, [root, style])} className={tileSize}>
        <div style={styles.itemImage}>
          <a>
            <Image style={styleImage}
              source = {_this.state.selectedImage}
              alternateText={alternateText}
            />
          </a>
        </div>
        <div style={itemColor}>
          <Chip
            onMouseEnter ={_this.displayPicker}
            onMouseClick ={_this.passSelectedImage}
          >
          {renderChipChild}
        </Chip>
          <div style={itemDescription}>
            <ul style={descriptionList}>
              <li style={currentPrice}>
                {this.state.currentPrice}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default composeContextPure(ColorPicker);
