import React, { Component, PropTypes } from 'react';
import DefaultRawTheme from '../helpers/styles/rawThemes/lightRawTheme';
import ThemeManager from '../helpers/styles/themeManager';
import composeContextPure from '../helpers/composedComponents/contextPure';
import TwoColumnCard from './TwoColumnCard';
import DesktopCard from './DesktopCard';
import SingleSmallCard from './SingleSmallCard';
import SingleLargeCard from './SingleLargeCard';
import { getProductSize,
         getImageUrl,
         getSKUInfo,
   } from '../Product/productService';
const { string, object } = PropTypes;

class ProductCard extends Component {
  static propTypes = {
    alternateText: string,
    className: string,
    currencySymbol: string,
    cutPriceStyle: object,
    dateStyle: object,
    genderTextStyle: object,
    id: string,
    imageStyle: object,
    notesStyle: object,
    notesText: string,
    limitedOfferStyle: object,
    offerText: string,
    priceStyle: object,
    productData: object,
    productSizeStyle: object,
    productTitleStyle: object,
    ratingLinkText: string,
    ratingLinkUrl: string,
    style: object,
    testimonialText: string,
    testiomonialLinkStyle: object,
    variationType: string,
  };

  static contextTypes = {
    muiTheme: object,
  };

  static defaultProps = {
    variationType: 5,
  };

  state = {
    productColor: '',
    currentPrice: '',
    displayPicker: 'none',
    SKUid: '',
  };

  componentWillMount = () => {
    const data = this.props.productData;
    const MuiTheme = this.context.MuiTheme || ThemeManager.getMuiTheme(DefaultRawTheme);
    const tileTheme = MuiTheme.producTile;
    const applyColor = {
      color: tileTheme.priceColor,
    };
    const productSize = getProductSize(data,
      `${data.productID}-${data.defaultColor}`);
    const testimonialLinkText = data.review ? data.review.count : 0;
    const genderText = this.getCategory(data);
    const productNameText = data.title;
    const dateInt = parseInt(data.salesStart, 10);
    const date = new Date(dateInt).toLocaleDateString();
    const reviewCount = data.review ? data.review.average : null;
    this.constVal = { productSize,
                 testimonialLinkText,
                 genderText,
                 productNameText,
                 applyColor,
                 date,
                 reviewCount,
       };
    if (data) {
      this.setState({
        productColor: data.defaultColor,
        SKUid: data.defaultSKU,
      });
    }
  };

  getCategory = (PRODUCT) => {
    let gender;
    const genderID = PRODUCT.category.split('');
    const firstVal = genderID[0];
    const secondVal = genderID[1];
    if (firstVal === '1') {
      if (secondVal === '1') {
        gender = 'KIDS';
      } else if (secondVal === '2') {
        gender = 'GIRLS';
      } else if (secondVal === '8') {
        gender = 'BABY';
      }
    } else if (firstVal === '2') {
      gender = 'WOMEN';
    } else if (firstVal === '3') {
      gender = 'MEN';
    }

    return gender;
  };

  offerDisplay = (sku) => {
    let display = 'none';
    if (sku && sku.limitedOffer === true) {
      display = 'block';
    }

    return display;
  };

  pickSelectedImage = (event, colorcode, skuId) => {
    this.setState({
      productColor: colorcode,
      SKUid: skuId,
    });
  };

  render() {
    const {
      productData,
      variationType,
      offerText,
      testimonialText,
      notesText,
      ratingLinkUrl,
      ratingLinkText,
      alternateText,
      cutPriceStyle,
      dateStyle,
      genderTextStyle,
      imageStyle,
      notesStyle,
      limitedOfferStyle,
      priceStyle,
      productSizeStyle,
      productTitleStyle,
      currencySymbol,
    } = this.props;

    const { images, originalPrice } = productData;

    const {
            productSize,
            testimonialLinkText,
            genderText,
            productNameText,
            applyColor,
            date,
            reviewCount,
        } = this.constVal; // getting calculated data once from component will mount
    const defaultImage =
    getImageUrl(images.main.urls, this.state.productColor);
    const sku = getSKUInfo(productData, this.state.SKUid);
    const offerActive = {
      display: this.offerDisplay(sku),
    };
    const colorPrice = (sku.discount === true) ? applyColor : '';
    let price;
    let cutprice;
    if (sku.discount === true) {
      price = sku.currentPrice;
      cutprice = originalPrice;
    } else {
      price = originalPrice;
    }

    const productRenderData = {
      alternateText,
      offerText,
      testimonialText,
      notesText,
      reviewCount,
      defaultImage,
      productSize,
      testimonialLinkText,
      genderText,
      productNameText,
      date,
      sku,
      offerActive,
      colorPrice,
      currencySymbol,
      price,
      cutprice,
      ratingLinkUrl,
      ratingLinkText,
      variationType,
      cutPriceStyle,
      dateStyle,
      genderTextStyle,
      imageStyle,
      notesStyle,
      limitedOfferStyle,
      priceStyle,
      productSizeStyle,
      productTitleStyle,
      productData,
    };

    // the below code will be used when all the PR related to Product DesktopCard Get shipped.

    if (variationType === 'Two-Column') {
      return <TwoColumnCard {...productRenderData}/>;
    } else if (variationType === 'Single-Small') {
      return <SingleSmallCard {...productRenderData}/>;
    } else if (variationType === 'Multi-Small') {
      return (<DesktopCard
        getSelectedImage = {this.pickSelectedImage}
        tileSize= "small"
        {...productRenderData}
      />);
    } else if (variationType === 'Multi-Large') {
      return (<DesktopCard
        getSelectedImage = {this.pickSelectedImage}
        tileSize= "large"
        {...productRenderData}
      />);
    } else if (variationType === 'Single-Large') {
      return (<SingleLargeCard
        {...productRenderData}
      />);
    }
  }

}

export default composeContextPure(ProductCard);
