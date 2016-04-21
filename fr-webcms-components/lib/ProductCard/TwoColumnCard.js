'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _stylePropable = require('../helpers/utils/stylePropable');

var _lightRawTheme = require('../helpers/styles/rawThemes/lightRawTheme');

var _lightRawTheme2 = _interopRequireDefault(_lightRawTheme);

var _themeManager = require('../helpers/styles/themeManager');

var _themeManager2 = _interopRequireDefault(_themeManager);

var _contextPure = require('../helpers/composedComponents/contextPure');

var _contextPure2 = _interopRequireDefault(_contextPure);

var _productService = require('../Product/productService');

var _Image = require('../core/Image');

var _Image2 = _interopRequireDefault(_Image);

var _Text = require('../Text');

var _Text2 = _interopRequireDefault(_Text);

var _Chip = require('../Chip');

var _Chip2 = _interopRequireDefault(_Chip);

var _ChipChild = require('../Chip/ChipChild');

var _ChipChild2 = _interopRequireDefault(_ChipChild);

var _FavoriteButton = require('../FavoriteButton');

var _FavoriteButton2 = _interopRequireDefault(_FavoriteButton);

var _Rating = require('../Rating');

var _Rating2 = _interopRequireDefault(_Rating);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var string = _react.PropTypes.string;
var object = _react.PropTypes.object;
var number = _react.PropTypes.number;
var oneOfType = _react.PropTypes.oneOfType;


var prepareStyle = function prepareStyle(props, context) {
  var CompTheme = context.CompTheme || _themeManager2.default.getCompTheme(_lightRawTheme2.default);
  var tileTheme = CompTheme && CompTheme.productCard || {};

  var styles = {
    rootTwoColumn: {
      position: 'relative',
      width: '100%',
      height: 'auto',
      boxSizing: 'border-box',
      paddingTop: 0,
      paddingRight: '9',
      paddingBottom: '11',
      paddingLeft: '9'
    },
    toolTipStyle: {
      display: 'none'
    },
    imageTwoColumn: {
      width: '82%',
      position: 'absolute',
      padding: '15'
    },
    chipChildStyle: {
      height: '100%'
    },
    productImageShellTwoColumn: {
      position: 'relative',
      paddingBottom: '100%'
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
      fontWeight: '700'
    },

    chipStyleTwoColumn: {
      paddingTop: 0,
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom: 0,
      width: '22',
      height: '22',
      marginRight: '3',
      marginBottom: '0'
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
      zIndex: '100'
    },
    none: {
      display: 'none'
    },
    twoColumnProductDescription: {
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '0',
      paddingRight: '6',
      paddingLeft: '15',
      paddingBottom: '0',
      zindex: '1',
      width: '91%'
    },
    twoColumnProductName: {
      fontFamily: tileTheme.fontFamily,
      display: 'block',
      lineHeight: '18px',
      fontSize: '11',
      float: 'left',
      width: '100%',
      marginTop: '7',
      marginBottom: '6'
    },
    twoColumnPriceList: {
      fontSize: '18',
      float: 'left',
      fontWeight: 'bold',
      fontFamily: tileTheme.fontFamily,
      clear: 'both'
    },
    chipStyle: {
      paddingTop: 0,
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom: 0,
      width: '22',
      height: '22'
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
      clear: 'both'
    },
    ratingStyle: {
      float: 'left',
      padding: 0,
      marginTop: 0,
      marginBottom: '7'
    },
    ratingTextStyle: {
      color: tileTheme.textColor
    },
    ratingLinkStyle: {
      clear: 'both',
      float: 'left'
    },
    ratingFullStar: {
      fill: tileTheme.ratingColor
    },
    chipsBodyStyle: {
      margin: '0',
      width: 'auto',
      padding: '0'
    }

  };

  var ratingFullStar = styles.ratingFullStar;
  var ratingTextStyle = styles.ratingTextStyle;
  var chipStyle = _stylePropable.mergeStyles.apply(undefined, [styles.chipStyle, styles.chipStyleTwoColumn]);
  var chipsBodyStyle = styles.chipsBodyStyle;
  var rootStyle = _stylePropable.mergeStyles.apply(undefined, [styles.rootTwoColumn, props.style]);
  var productImageShell = styles.productImageShellTwoColumn;
  var productImage = _stylePropable.mergeStyles.apply(undefined, [styles.imageTwoColumn, props.imageStyle]);
  var ProductDescription = styles.twoColumnProductDescription;
  var favoriteIcon = styles.FavoriteButton;
  var productName = _stylePropable.mergeStyles.apply(undefined, [styles.twoColumnProductName, props.productTitleStyle]);
  var mobileofferStyle = _stylePropable.mergeStyles.apply(undefined, [styles.twoColumnOfferStyle, props.offerActive]);
  var priceListStyle = _stylePropable.mergeStyles.apply(undefined, [styles.twoColumnPriceList, props.priceStyle, props.colorPrice]);
  var ratingStyle = props.reviewCount ? styles.ratingStyle : styles.none;
  var discountClass = props.cutprice ? _stylePropable.mergeStyles.apply(undefined, [styles.twoColumnDiscountClass, props.cutPriceStyle]) : styles.none;
  var ratingLinkStyle = props.reviewCount ? styles.ratingLinkStyle : styles.none;
  var chipChildStyle = styles.chipChildStyle;
  var toolTipStyle = styles.toolTipStyle;
  return {
    chipStyle: chipStyle,
    chipsBodyStyle: chipsBodyStyle,
    rootStyle: rootStyle,
    productImageShell: productImageShell,
    toolTipStyle: toolTipStyle,
    productImage: productImage,
    chipChildStyle: chipChildStyle,
    ProductDescription: ProductDescription,
    favoriteIcon: favoriteIcon,
    productName: productName,
    mobileofferStyle: mobileofferStyle,
    priceListStyle: priceListStyle,
    ratingStyle: ratingStyle,
    discountClass: discountClass,
    ratingLinkStyle: ratingLinkStyle,
    ratingFullStar: ratingFullStar,
    ratingTextStyle: ratingTextStyle
  };
};

var getChipChild = function getChipChild(data, chipStyle, chipChildStyle, toolTipStyle) {
  var renderChipChild = data.images.swatch.urls.map(function (urlsrc, index) {
    return _react2.default.createElement(
      _ChipChild2.default,
      {
        key: index,
        chipStyle: chipStyle,
        chipChildStyle: chipChildStyle,
        toolTipStyle: toolTipStyle,
        chipHoverStyle: chipStyle
      },
      _react2.default.createElement(_Image2.default, { source: urlsrc.url })
    );
  });
  return renderChipChild;
};

var TwoColumnCard = function TwoColumnCard(props, context) {
  var defaultImage = props.defaultImage;
  var productNameText = props.productNameText;
  var currencySymbol = props.currencySymbol;
  var price = props.price;
  var cutprice = props.cutprice;
  var variationType = props.variationType;
  var offerText = props.offerText;
  var reviewCount = props.reviewCount;
  var ratingLinkUrl = props.ratingLinkUrl;
  var productData = props.productData;
  var ratingLinkText = props.ratingLinkText;

  var _prepareStyle = prepareStyle(props, context);

  var chipStyle = _prepareStyle.chipStyle;
  var chipsBodyStyle = _prepareStyle.chipsBodyStyle;
  var rootStyle = _prepareStyle.rootStyle;
  var productImageShell = _prepareStyle.productImageShell;
  var productImage = _prepareStyle.productImage;
  var ProductDescription = _prepareStyle.ProductDescription;
  var favoriteIcon = _prepareStyle.favoriteIcon;
  var productName = _prepareStyle.productName;
  var mobileofferStyle = _prepareStyle.mobileofferStyle;
  var priceListStyle = _prepareStyle.priceListStyle;
  var ratingStyle = _prepareStyle.ratingStyle;
  var discountClass = _prepareStyle.discountClass;
  var ratingLinkStyle = _prepareStyle.ratingLinkStyle;
  var ratingFullStar = _prepareStyle.ratingFullStar;
  var ratingTextStyle = _prepareStyle.ratingTextStyle;
  var chipChildStyle = _prepareStyle.chipChildStyle;
  var toolTipStyle = _prepareStyle.toolTipStyle;


  var renderChip = getChipChild(productData, chipStyle, chipChildStyle, toolTipStyle);
  return _react2.default.createElement(
    'div',
    { style: rootStyle, className: variationType },
    _react2.default.createElement(
      'div',
      { style: productImageShell },
      _react2.default.createElement(_FavoriteButton2.default, { style: favoriteIcon }),
      _react2.default.createElement(_Image2.default, {
        source: defaultImage,
        style: productImage
      })
    ),
    _react2.default.createElement(
      'div',
      { style: ProductDescription },
      _react2.default.createElement(
        _Chip2.default,
        {
          chipsBodyStyle: chipsBodyStyle
        },
        renderChip
      ),
      _react2.default.createElement(
        _Text2.default,
        { style: mobileofferStyle },
        offerText
      ),
      _react2.default.createElement(
        _Text2.default,
        { style: productName },
        productNameText
      ),
      _react2.default.createElement(_Rating2.default, {
        style: ratingStyle,
        fullStyle: ratingFullStar,
        ratingCount: reviewCount,
        maxCount: 5,
        size: 'Small'
      }),
      _react2.default.createElement(
        _Text2.default,
        { style: ratingLinkStyle },
        _react2.default.createElement(
          'a',
          {
            style: ratingTextStyle,
            href: ratingLinkUrl
          },
          ratingLinkText
        )
      ),
      _react2.default.createElement(
        _Text2.default,
        { style: discountClass },
        currencySymbol,
        (0, _productService.format)(cutprice)
      ),
      _react2.default.createElement(
        _Text2.default,
        { style: priceListStyle },
        currencySymbol,
        (0, _productService.format)(price)
      )
    )
  );
};

TwoColumnCard.propTypes = {
  currencySymbol: string,
  colorPrice: oneOfType([string, object]),
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
  productTitleStyle: object
};

TwoColumnCard.contextTypes = {
  compTheme: object
};

exports.default = (0, _contextPure2.default)(TwoColumnCard);