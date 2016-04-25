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

  const styles = {
    rootTwoColumn: {
      position: 'relative',
      width: '100%',
      height: 'auto',
      boxSizing: 'border-box',
      paddingTop: 0,
      paddingRight: '9',
      paddingBottom: '11',
      paddingLeft: '9',
    },
    toolTipStyle: {
      display: 'none',
    },
    imageTwoColumn: {
      width: '82%',
      position: 'absolute',
      padding: '15',
    },
    chipChildStyle: {
      height: '100%',
    },
    productImageShellTwoColumn: {
      position: 'relative',
      paddingBottom: '100%',
    },
    twoColumnOfferStyle: {
      background: tileTheme.priceColor,
      color: tileTheme.offerTextColor,
      lineHeight: '1',
      display: 'inline-block',
      paddingTop: '3',
      paddingRight: '6',
      paddingLeft: '6',
      paddingBottom: '3',
      marginBottom: '0',
      marginTop: '5',
      marginLeft: '0',
      fontSize: '12',
      float: 'left',
      fontWeight: '700',
    },

    chipStyleTwoColumn: {
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
      right: '-13',
      width: '36',
      height: '36',
      backgroundSize: '100% auto',
      cursor: 'pointer',
      display: 'block',
      zIndex: '100',
    },
    none: {
      display: 'none',
    },
    twoColumnProductDescription: {
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '0',
      paddingRight: '6',
      paddingLeft: '15',
      paddingBottom: '0',
      zindex: '1',
      width: '91%',
    },
    twoColumnProductName: {
      fontFamily: tileTheme.fontFamily,
      display: 'block',
      lineHeight: '18px',
      fontSize: '11',
      float: 'left',
      width: '100%',
      marginTop: '7',
      marginBottom: '6',
    },
    twoColumnPriceList: {
      fontSize: '18',
      float: 'left',
      fontWeight: 'bold',
      fontFamily: tileTheme.fontFamily,
      clear: 'both',
    },
    chipStyle: {
      paddingTop: 0,
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom: 0,
      width: '22',
      height: '22',
    },
    twoColumnDiscountClass: {
      fontSize: '14',
      fontFamily: tileTheme.fontFamily,
      textDecoration: 'line-through',
      color: tileTheme.textColor,
      display: 'block',
      marginLeft: '2',
      lineHeight: '1.0',
      marginTop: '2',
      float: 'left',
      clear: 'both',
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
    chipsBodyStyle: {
      margin: '0',
      width: 'auto',
      padding: '0',
    },

  };

  const ratingFullStar = styles.ratingFullStar;
  const ratingTextStyle = styles.ratingTextStyle;
  const chipStyle = mergeStyles.apply(this, [styles.chipStyle, styles.chipStyleTwoColumn]);
  const chipsBodyStyle = styles.chipsBodyStyle;
  const rootStyle = mergeStyles.apply(this, [styles.rootTwoColumn, props.style]);
  const productImageShell = styles.productImageShellTwoColumn;
  const productImage = mergeStyles.apply(this, [styles.imageTwoColumn, props.imageStyle]);
  const ProductDescription = styles.twoColumnProductDescription;
  const favoriteIcon = styles.FavoriteButton;
  const productName =
  mergeStyles.apply(this, [styles.twoColumnProductName, props.productTitleStyle]);
  const mobileofferStyle = mergeStyles.apply(this, [styles.twoColumnOfferStyle, props.offerActive]);
  const priceListStyle =
  mergeStyles.apply(this, [styles.twoColumnPriceList, props.priceStyle, props.colorPrice]);
  const ratingStyle = props.reviewCount ? styles.ratingStyle : styles.none;
  const discountClass =
  props.cutprice ? mergeStyles.apply(this, [styles.twoColumnDiscountClass, props.cutPriceStyle]) :
   styles.none;
  const ratingLinkStyle = props.reviewCount ? styles.ratingLinkStyle : styles.none;
  const chipChildStyle = styles.chipChildStyle;
  const toolTipStyle = styles.toolTipStyle;
  return {
    chipStyle,
    chipsBodyStyle,
    rootStyle,
    productImageShell,
    toolTipStyle,
    productImage,
    chipChildStyle,
    ProductDescription,
    favoriteIcon,
    productName,
    mobileofferStyle,
    priceListStyle,
    ratingStyle,
    discountClass,
    ratingLinkStyle,
    ratingFullStar,
    ratingTextStyle,
  };
};

const getChipChild = (data, chipStyle, chipChildStyle, toolTipStyle) => {
  const renderChipChild = data.images.swatch.urls.map((urlsrc, index) =>
    <ChipChild
      key = {index}
      chipStyle={chipStyle}
      chipChildStyle={chipChildStyle}
      toolTipStyle ={toolTipStyle}
      chipHoverStyle ={chipStyle}
    >
      <Image source= {urlsrc.url}/>
    </ChipChild>
);
  return renderChipChild;
};

const TwoColumnCard = (props, context) => {
  const {
    defaultImage,
    productNameText,
    currencySymbol,
    price,
    cutprice,
    variationType,
    offerText,
    reviewCount,
    ratingLinkUrl,
    productData,
    ratingLinkText,
} = props;

  const {
           chipStyle,
           chipsBodyStyle,
           rootStyle,
           productImageShell,
           productImage,
           ProductDescription,
           favoriteIcon,
           productName,
           mobileofferStyle,
           priceListStyle,
           ratingStyle,
           discountClass,
           ratingLinkStyle,
           ratingFullStar,
           ratingTextStyle,
           chipChildStyle,
           toolTipStyle,
      } = prepareStyle(props, context);

  const renderChip = getChipChild(productData, chipStyle, chipChildStyle, toolTipStyle);
  return (
    <div style={rootStyle} className ={variationType}>
      <div style={productImageShell}>
        <Favorite style={favoriteIcon}/>
        <Image
          source={defaultImage}
          style={productImage}
        />
      </div>
      <div style={ProductDescription}>
      <Chip
        chipsBodyStyle ={chipsBodyStyle}
      >
       {renderChip}
      </Chip>
      <Text style={mobileofferStyle}>{offerText}</Text>
      <Text style={productName}>{productNameText}</Text>
      <Rating
        style ={ratingStyle}
        fullStyle = {ratingFullStar}
        ratingCount={reviewCount}
        maxCount ={5}
        size = "Small"
      />
      <Text style = {ratingLinkStyle}>
      <a
        style ={ratingTextStyle}
        href={ratingLinkUrl}
      >
      {ratingLinkText}
      </a>
      </Text>
      <Text style={discountClass}>
        {currencySymbol}{format(cutprice)}
      </Text>
      <Text style={priceListStyle} >
        {currencySymbol}{format(price)}
      </Text>
      </div>
    </div>
    );

};

TwoColumnCard.propTypes = {
  currencySymbol: string,
  colorPrice: oneOfType([
    string,
    object,
  ]),
  cutPriceStyle: object,
  cutprice: number,
  defaultImage: string,
  offerActive: object,
  offerStyle: string,
  offerText: string,
  imageStyle: object,
  price: number,
  priceStyle: object,
  productNameText: string,
  productData: object,
  ratingLinkText: string,
  ratingLinkUrl: string,
  reviewCount: number,
  sku: object,
  style: object,
  testiomonialLinkStyle: string,
  testiomonialLinktext: number,
  variationType: string,
  productTitleStyle: object,
};

TwoColumnCard.contextTypes = {
  compTheme: object,
};

export default composeContextPure(TwoColumnCard);
