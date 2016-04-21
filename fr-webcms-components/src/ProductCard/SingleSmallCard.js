import React, { PropTypes } from 'react';
import { mergeStyles } from '../helpers/utils/stylePropable';
import DefaultRawTheme from '../helpers/styles/rawThemes/lightRawTheme';
import ThemeManager from '../helpers/styles/themeManager';
import composeContextPure from '../helpers/composedComponents/contextPure';
import { format } from '../Product/productService';
import Image from '../core/Image';
import Text from '../Text';
import Chip from '../Chip';
import ChipChild from '../Chip/ChipChild';
import Favorite from '../FavoriteButton';
import Rating from '../Rating';

const { string, object, number, oneOfType } = PropTypes;

const prepareStyle = (props, context) => {
  const CompTheme = context.CompTheme || ThemeManager.getCompTheme(DefaultRawTheme);
  const tileTheme = CompTheme && CompTheme.productCard || {};
  const _this = this;
  const styles = {
    rootSingleSmall: {
      width: '100%',
      float: 'left',
      boxSizing: 'border-box',
      padding: '16',
      position: 'relative',
      borderWidth: '1',
      borderStyle: 'solid',
      borderColor: tileTheme.borderColor,
    },
    toolTipStyle: {
      display: 'none',
    },
    chipChildStyle: {
      height: '100%',
    },
    imageSingleSmall: {
      width: '45%',
      height: 'auto',
      float: 'left',
    },
    mobileofferStyleSingleSmall: {
      background: tileTheme.priceColor,
      color: tileTheme.offerTextColor,
      lineHeight: '1',
      display: 'inline-block',
      paddingTop: '3',
      paddingRight: '6',
      paddingLeft: '6',
      paddingBottom: '3',
      marginBottom: '7',
      marginTop: '7',
      marginLeft: '0',
      fontSize: '12',
      float: 'left',
      fontWeight: '700',
      whiteSpace: 'nowrap',
    },
    chipStyleMobileVar1: {
      paddingTop: 0,
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom: 0,
      width: '22',
      height: '22',
      marginRight: '3',
      marginBottom: '0',
    },
    FavoriteButton: {
      position: 'absolute',
      top: '0',
      right: '0',
      width: '36',
      height: '36',
      backgroundSize: '100% auto',
      cursor: 'pointer',
      display: 'block',
      zindex: '1',
    },
    none: {
      display: 'none',
    },
    SingleSmallProductDescription: {
      float: 'left',
      width: '50%',
      marginLeft: '12',
    },
    SingleSmallProductName: {
      fontSize: '14',
      lineHeight: '18px',
      color: tileTheme.textColor,
      fontFamily: tileTheme.fontFamily,
      display: 'block',
      marginBottom: '16',
      paddingRight: '32',
    },
    SingleSmallPriceList: {
      fontSize: '18',
      fontWeight: 'bold',
      fontFamily: tileTheme.fontFamily,
      display: 'block',
      clear: 'both',
      lineHeight: '17px',
      marginBottom: '7',
    },
    chipStyle: {
      paddingTop: 0,
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom: 0,
      width: '22',
      height: '22',
    },
    SingleSmallDiscountClass: {
      fontSize: '14',
      fontFamily: tileTheme.fontFamily,
      textDecoration: 'line-through',
      color: tileTheme.textColor,
    },
    ratingStyle: {
      float: 'left',
      padding: 0,
      marginTop: 0,
      marginBottom: '7',
    },
    ratingTextStyle: {
      color: tileTheme.textColor,
    },
    ratingLinkStyle: {
      clear: 'both',
      float: 'left',
    },
    ratingFullStar: {
      fill: tileTheme.ratingColor,
    },
  };

  const ratingFullStar = styles.ratingFullStar;
  const ratingTextStyle = styles.ratingTextStyle;
  const chipStyle = mergeStyles.apply(_this, [styles.chipStyle, styles.chipStyleMobileVar1]);
  const chipsBodyStyle = styles.chipsBodyStyle;
  const rootStyle = mergeStyles.apply(_this,
    [styles.Small, styles.rootSingleSmall, props.style]);
  const productImage = mergeStyles.apply(_this,
    [styles.imageSingleSmall, props.imageStyle]);
  const ProductDescription = styles.SingleSmallProductDescription;
  const favoriteIcon = styles.FavoriteButton;
  const productName = mergeStyles.apply(_this,
    [styles.SingleSmallProductName, props.productTitleStyle]);
  const mobileofferStyle = mergeStyles.apply(_this,
    [styles.mobileofferStyleSingleSmall, props.offerActive, props.limitedOfferStyle]);
  const priceListStyle = mergeStyles.apply(_this,
    [styles.SingleSmallPriceList, props.priceStyle, props.colorPrice]);
  const discountClass = props.cutprice ?
  mergeStyles.apply(_this, [styles.SingleSmallDiscountClass, props.cutPriceStyle]) :
  styles.none;
  const ratingStyle = props.reviewCount ? styles.ratingStyle : styles.none;
  const ratingLinkStyle = props.reviewCount ? styles.ratingLinkStyle : styles.none;
  const chipChildStyle = styles.chipChildStyle;
  const toolTipStyle = styles.toolTipStyle;
  return {
    ratingFullStar,
    toolTipStyle,
    chipChildStyle,
    ratingTextStyle,
    chipStyle,
    chipsBodyStyle,
    rootStyle,
    productImage,
    ProductDescription,
    favoriteIcon,
    productName,
    mobileofferStyle,
    priceListStyle,
    discountClass,
    ratingStyle,
    ratingLinkStyle,
  };
};

const getChipChild = (data, chipStyle, chipChildStyle, toolTipStyle) => {
  const renderChipChild = data.images.swatch.urls.map((urlsrc, index) =>
    <ChipChild
      key = {index}
      chipChildStyle = {chipChildStyle}
      chipStyle={chipStyle}
      toolTipStyle={toolTipStyle}
      chipHoverStyle ={chipStyle}
    >
      <Image source= {urlsrc.url}/>
    </ChipChild>
);
  return renderChipChild;
};

const SingleSmallCard = (props, context) => {
  const {
  defaultImage,
  productNameText,
  reviewCount,
  currencySymbol,
  price,
  offerText,
  cutprice,
  productData,
  variationType,
  ratingLinkUrl,
  ratingLinkText,
} = props;

  const {
        ratingFullStar,
        ratingTextStyle,
        chipStyle,
        chipsBodyStyle,
        rootStyle,
        productImage,
        chipChildStyle,
        ProductDescription,
        favoriteIcon,
        productName,
        mobileofferStyle,
        priceListStyle,
        discountClass,
        ratingStyle,
        ratingLinkStyle,
        toolTipStyle,
      } = prepareStyle(props, context);

  const renderChip = getChipChild(productData, chipStyle, chipChildStyle, toolTipStyle);
  return (
        <div style={rootStyle} className ={variationType}>
          <div style={{ float: 'left' }}>
            <Favorite style={favoriteIcon}/>
            <Image source = {defaultImage} style={productImage}/>
            <div style={ProductDescription}>
              <Text style={productName}>{productNameText}</Text>
              <Text style={discountClass}>
                {currencySymbol}{format(cutprice)}</Text>
              <Text style={priceListStyle} >
                {currencySymbol}{format(price)}</Text>
              <Text style={mobileofferStyle}>{offerText}</Text>
              <Rating
                style ={ratingStyle}
                fullStyle = {ratingFullStar}
                ratingCount={reviewCount}
                maxCount ={5}
              />
              <Text style = {ratingLinkStyle}>
                <a style ={ratingTextStyle} href={ratingLinkUrl}>
                    {ratingLinkText}
                </a>
              </Text>
              <Chip chipsBodyStyle ={chipsBodyStyle}>
                      { renderChip}
              </Chip>
            </div>
          </div>
        </div>
    );

};

SingleSmallCard.propTypes = {
  currencySymbol: string,
  className: string,
  colorPrice: oneOfType([
    string,
    object,
  ]),
  cutPriceStyle: object,
  cutprice: number,
  defaultImage: string,
  offerActive: object,
  limitedOfferStyle: object,
  imageStyle: object,
  offerText: string,
  price: number,
  priceStyle: object,
  productNameText: string,
  productData: object,
  ratingLinkText: string,
  ratingLinkUrl: string,
  reviewCount: number,
  style: object,
  variationType: string,
  productTitleStyle: object,
};

SingleSmallCard.contextTypes = {
  compTheme: object,
};

export default composeContextPure(SingleSmallCard);
