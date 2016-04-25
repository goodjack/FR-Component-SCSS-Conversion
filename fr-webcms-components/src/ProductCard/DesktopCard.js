import React, { Component, PropTypes } from 'react';
import { mergeStyles } from '../helpers/utils/stylePropable';
import DefaultRawTheme from '../helpers/styles/rawThemes/lightRawTheme';
import ThemeManager from '../helpers/styles/themeManager';
import composeContextPure from '../helpers/composedComponents/contextPure';
import { format } from '../Product/productService';
import Image from '../core/Image';
import Text from '../Text';
import Favorite from '../FavoriteButton';
import Chip from '../Chip';
import ChipChild from '../Chip/ChipChild';
import ColorPicker from '../ColorPicker';
import { getStyles } from './DesktopStyle';

const { string, object, number, func, oneOfType } = PropTypes;
class DesktopCard extends Component {

 static propTypes = {
   currencySymbol: string,
   className: string,
   colorPrice: oneOfType([
     string,
     object,
   ]),
   cutPriceStyle: object,
   cutprice: number,
   date: string,
   dateStyle: object,
   defaultImage: string,
   genderText: string,
   genderTextStyle: object,
   getSelectedImage: func,
   id: string,
   imageStyle: object,
   notesStyle: object,
   notesText: string,
   offerActive: object,
   limitedOfferStyle: object,
   offerText: string,
   price: number,
   priceStyle: object,
   productNameText: string,
   productData: object,
   productSizeStyle: object,
   productTitleStyle: object,
   productSize: string,
   style: object,
   testimonialLinkStyle: object,
   testimonialLinkText: number,
   testimonialText: string,
   tileSize: string,
   ratingLinkUrl: string,
 };

  state = {
    displayPicker: 'none',
  };

  componentWillMount() {
    const CompTheme = this.context.CompTheme || ThemeManager.getCompTheme(DefaultRawTheme);
    const tileTheme = CompTheme && CompTheme.productCard || {};
    this.cardStyle = getStyles(this.props, tileTheme);
  }

  getChipChild =(data, chipStyle, chipsBodyStyle, chipChildStyle, toolTipStyle) => {
    const renderChipChild = data.images.swatch.urls.map((urlsrc, index) =>
      <ChipChild
        key = {index}
        chipStyle={chipStyle}
        toolTipStyle = {toolTipStyle}
        chipChildStyle ={chipChildStyle}
        chipHoverStyle ={chipStyle}
      >
        <Image source= {urlsrc.url}/>
      </ChipChild>
  );
    return (<Chip
      onMouseEnter ={this.displayPicker}
      chipsBodyStyle ={chipsBodyStyle}
    >
    {renderChipChild}
  </Chip>);
  };

  blockPickerDisplay = () => {
    this.setState({
      displayPicker: 'none',
    });
  };

  displayPicker = (displaying) => {
    if (displaying) {
      this.setState({
        displayPicker: 'block',
      });
    }
  };

  pickSelectedImage = (event, colorcode, skuId) => {
    this.props.getSelectedImage(event, colorcode, skuId);
  };

  boxHead = () => {
    const {
      boxRowHead,
      productSizeRootStyle,
      testiomonialLink,
      link,
    } = this.cardStyle;
    const {
      productSize,
      ratingLinkUrl,
      testimonialText,
      testimonialLinkText,
    } = this.props;
    return (
      <div style={boxRowHead}>
        <Text style={productSizeRootStyle} id="size">{productSize}</Text>
          <Text style={testiomonialLink}>
            <a style ={link} href={ratingLinkUrl}>
            `${testimonialText}({testimonialLinkText})`
            </a>
        </Text>
      </div>
    );
  };

   boxFoot = () => {
     const {
       boxRowFoot,
       primaryColor,
       offerStyle,
       priceBox,
       pricelist,
       priceStyleText,
       priceListStyle,
       consumptionTax,
       discountClass,
       notes,
     } = this.cardStyle;

     const {
       date,
       currencySymbol,
       price,
       cutprice,
       offerText,
       notesText,
     } = this.props;

     return (
          <div style={boxRowFoot}>
              <Text style={primaryColor}>{date}</Text>
              <Text style={offerStyle}>{offerText}</Text>
                <div style={priceBox} >
                    <ul style={pricelist}>
                        <li style={priceStyleText}>
                        <Text style={priceListStyle}>{currencySymbol}
                            {format(price)}</Text></li>
                        <li style={consumptionTax}>
                        <Text style={discountClass}>{cutprice ?
                            currencySymbol + format(cutprice) : ''}</Text>
                          <br/>
                        <Text style={notes}>{notesText}</Text>
                        </li>
                    </ul>
                  </div>
           </div>
        );
   };

   pickerContainer = () => {
     const {
       productData,
       tileSize,
     } = this.props;

     const {
       card,
       pickerContainer,
     } = this.cardStyle;

     const pickerStyle =
     mergeStyles.apply(this, [card, pickerContainer, { display: this.state.displayPicker }]);

     return (
       <div style={pickerStyle} onMouseLeave={this.blockPickerDisplay}>
         <ColorPicker
           tileSize ={tileSize}
           productInfo={productData}
           productTileCallback={this.pickSelectedImage}
         />
     </div>);
   };

  render() {
    const {
           rootStyle,
           productImage,
           ProductDescription,
           gender,
           productName,
           productNameStyle,
           favoriteIcon,
           chipStyle,
           chipsBodyStyle,
           chipChildStyle,
           toolTipStyle,
         } = this.cardStyle;

    const {
      defaultImage,
      genderText,
      productNameText,
      productData,
      tileSize,
      ratingLinkUrl,
    } = this.props; // get Defined Properties

    const renderChip = this.getChipChild(productData, chipStyle, chipsBodyStyle,
      chipChildStyle, toolTipStyle);

    return (
      <div style={rootStyle} className={tileSize}>
        <Favorite style={favoriteIcon}/>
        <Image source={defaultImage} style={productImage}/>
        <div style={ProductDescription}>
          {renderChip}
          {this.boxHead()}
          <Text style={gender}>{genderText}</Text>
          <Text style={productName}><a href={ratingLinkUrl}
            style={productNameStyle}
          >{productNameText}</a></Text>
          {this.boxFoot()}
        </div>
        {this.pickerContainer()}
      </div>
    );
  }

}

export default composeContextPure(DesktopCard);
