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
    rootSingleLarge: {
      position: 'relative',
      width: '100%',
      height: 'auto',
      boxSizing: 'border-box',
      padding: '16',
      borderBottomWidth: '1',
      borderBottomStyle: 'solid',
      borderBottomColor: tileTheme.borderColor,
    },
    toolTipStyle: {
      display: 'none',
    },
    imageSingleLarge: {
      width: '100%',
      position: 'absolute',
    },
    productImageShellSingleLarge: {
      position: 'relative',
      paddingBottom: '100%',
      marginBottom: '10',
    },
    SingleLargeOfferStyle: {
      background: tileTheme.priceColor,
      color: tileTheme.offerTextColor,
      lineHeight: '1',
      display: 'inline-block',
      paddingTop: '3',
      paddingRight: '6',
      paddingLeft: '6',
      paddingBottom: '3',
      marginBottom: '9',
      marginTop: '5',
      marginLeft: '0',
      fontSize: '12',
      float: 'left',
      fontWeight: '700',
    },
    chipChildStyle: {
      height: '100%',
    },
    chipStyleSingleLarge: {
      paddingTop: 0,
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom: 0,
      width: '22',
      height: '22',
      marginRight: '3',
      marginBottom: '0',
    },
    favoriteButtonStyleSingleLarge: {
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

    productDescriptionSingleLarge: {
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '0',
      paddingRight: '6',
      paddingLeft: '15',
      paddingBottom: '0',
      zindex: '1',
      width: '91%',
    },
    productNameSingleLarge: {
      fontFamily: tileTheme.themeFontFamily,
      display: 'block',
      lineHeight: '18px',
      fontSize: '11',
      float: 'left',
      width: '100%',
      marginTop: '7',
      marginBottom: '6',
    },
    priceListSingleLarge: {
      fontSize: '18',
      float: 'right',
      fontWeight: 'bold',
      fontFamily: tileTheme.themeFontFamily,
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
    discountClassSingleLarge: {
      fontSize: '14',
      fontFamily: tileTheme.themeFontFamily,
      textDecoration: 'line-through',
      color: tileTheme.textColor,
      display: 'block',
      marginLeft: '2',
      lineHeight: '1.0',
      marginTop: '2',
      float: 'right',
      clear: 'both',
    },
    ratingStyleSingleLarge: {
      float: 'left',
      padding: 0,
      marginTop: 0,
      marginBottom: '7',
    },
    ratingTextStyleSingleLarge: {
      color: tileTheme.textColor,
    },
    ratingLinkStyleSingleLarge: {
      clear: 'both',
      float: 'left',
    },
    ratingFullStarSingleLarge: {
      fill: tileTheme.ratingColor,
    },
    chipsBodyStyle: {
      margin: '0',
      width: 'auto',
      padding: '0',
    },
  };

  const ratingFullStar = styles.ratingFullStarSingleLarge;
  const ratingTextStyle = styles.ratingTextStyleSingleLarge;
  const chipStyle = mergeStyles.apply(_this, [styles.chipStyle, styles.chipStyleSingleLarge]);
  const chipsBodyStyle = styles.chipsBodyStyle;
  const rootStyle = mergeStyles.apply(_this, [styles.rootSingleLarge, props.style]);
  const productImageShell = styles.productImageShellSingleLarge;
  const productImage = mergeStyles.apply(_this, [styles.imageSingleLarge, props.imageStyle]);
  const productDescription = styles.productDescriptionSingleLarge;
  const favoriteIcon = styles.favoriteButtonStyleSingleLarge;
  const productName = mergeStyles.apply(_this,
    [styles.productNameSingleLarge, props.productTitleStyle]);
  const mobileofferStyle = mergeStyles.apply(_this,
    [styles.SingleLargeOfferStyle, props.offerActive, props.limitedOfferStyle]);
  const priceListStyle = mergeStyles.apply(_this,
    [styles.priceListSingleLarge, props.priceStyle, props.colorPrice]);
  const discountClass = props.cutprice ?
  mergeStyles.apply(_this, [styles.discountClassSingleLarge, props.cutPriceStyle]) :
  styles.none;
  const ratingStyle = props.reviewCount ? styles.ratingStyleSingleLarge : styles.none;
  const ratingLinkStyle = props.reviewCount ? styles.ratingLinkStyleSingleLarge : styles.none;
  const chipChildStyle = styles.chipChildStyle;
  const toolTipStyle = styles.toolTipStyle;
  return { ratingFullStar,
            ratingTextStyle,
            toolTipStyle,
            chipChildStyle,
            chipStyle,
            chipsBodyStyle,
            rootStyle,
            productImageShell,
            productImage,
            productName,
            productDescription,
            favoriteIcon,
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
      chipStyle={chipStyle}
      chipChildStyle = {chipChildStyle}
      chipHoverStyle ={chipStyle}
      toolTipStyle ={toolTipStyle}
    >
      <Image source= {urlsrc.url}/>
    </ChipChild>
);
  return renderChipChild;
};

const SingleLargeCard = (props, context) => {
  const {
    defaultImage,
    productNameText,
    currencySymbol,
    price,
    cutprice,
    productData,
    variationType,
    reviewCount,
    offerText,
    ratingLinkUrl,
    ratingLinkText,
} = props;

  const { ratingFullStar,
         ratingTextStyle,
         chipStyle,
         chipsBodyStyle,
         rootStyle,
         productImageShell,
         productImage,
         productDescription,
         favoriteIcon,
         mobileofferStyle,
         priceListStyle,
         discountClass,
         ratingStyle,
         ratingLinkStyle,
         productName,
         chipChildStyle,
         toolTipStyle,
      } = prepareStyle(props, context);

  const renderChip = getChipChild(productData, chipStyle, chipChildStyle, toolTipStyle);
  return (
    <div style={rootStyle} className={variationType}>
      <div style={productImageShell}>
        <Favorite style={favoriteIcon}/>
        <Image source={defaultImage} style={productImage}/>
      </div>
      <div style={productDescription}>
        <Text style={mobileofferStyle}>{offerText}</Text>
        <Chip chipsBodyStyle ={chipsBodyStyle}>
          {renderChip}
        </Chip>
        <Text style={productName}>{productNameText}</Text>
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
        <Text style={discountClass}>
          {currencySymbol}{format(cutprice)}</Text>
        <Text style={priceListStyle}>
          {currencySymbol}{format(price)}</Text>
      </div>
    </div>
    );

};

SingleLargeCard.propTypes = {
  currencySymbol: string,
  colorPrice: oneOfType([
    string,
    object,
  ]),
  cutPriceStyle: object,
  cutprice: number,
  defaultImage: string,
  offerActive: object,
  imageStyle: object,
  limitedOfferStyle: object,
  offerText: string,
  price: number,
  priceStyle: string,
  productNameText: string,
  productData: object,
  productTitleStyle: object,
  ratingLinkText: string,
  ratingLinkUrl: string,
  reviewCount: number,
  style: object,
  variationType: string,
  dateStyle: object,
};

SingleLargeCard.contextTypes = {
  compTheme: object,
};

export default composeContextPure(SingleLargeCard);
