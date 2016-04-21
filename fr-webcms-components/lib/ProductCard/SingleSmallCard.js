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
  var _this = undefined;
  var styles = {
    rootSingleSmall: {
      width: '100%',
      float: 'left',
      boxSizing: 'border-box',
      padding: '16',
      position: 'relative',
      borderWidth: '1',
      borderStyle: 'solid',
      borderColor: tileTheme.borderColor
    },
    toolTipStyle: {
      display: 'none'
    },
    chipChildStyle: {
      height: '100%'
    },
    imageSingleSmall: {
      width: '45%',
      height: 'auto',
      float: 'left'
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
      whiteSpace: 'nowrap'
    },
    chipStyleMobileVar1: {
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
      right: '0',
      width: '36',
      height: '36',
      backgroundSize: '100% auto',
      cursor: 'pointer',
      display: 'block',
      zindex: '1'
    },
    none: {
      display: 'none'
    },
    SingleSmallProductDescription: {
      float: 'left',
      width: '50%',
      marginLeft: '12'
    },
    SingleSmallProductName: {
      fontSize: '14',
      lineHeight: '18px',
      color: tileTheme.textColor,
      fontFamily: tileTheme.fontFamily,
      display: 'block',
      marginBottom: '16',
      paddingRight: '32'
    },
    SingleSmallPriceList: {
      fontSize: '18',
      fontWeight: 'bold',
      fontFamily: tileTheme.fontFamily,
      display: 'block',
      clear: 'both',
      lineHeight: '17px',
      marginBottom: '7'
    },
    chipStyle: {
      paddingTop: 0,
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom: 0,
      width: '22',
      height: '22'
    },
    SingleSmallDiscountClass: {
      fontSize: '14',
      fontFamily: tileTheme.fontFamily,
      textDecoration: 'line-through',
      color: tileTheme.textColor
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
    }
  };

  var ratingFullStar = styles.ratingFullStar;
  var ratingTextStyle = styles.ratingTextStyle;
  var chipStyle = _stylePropable.mergeStyles.apply(_this, [styles.chipStyle, styles.chipStyleMobileVar1]);
  var chipsBodyStyle = styles.chipsBodyStyle;
  var rootStyle = _stylePropable.mergeStyles.apply(_this, [styles.Small, styles.rootSingleSmall, props.style]);
  var productImage = _stylePropable.mergeStyles.apply(_this, [styles.imageSingleSmall, props.imageStyle]);
  var ProductDescription = styles.SingleSmallProductDescription;
  var favoriteIcon = styles.FavoriteButton;
  var productName = _stylePropable.mergeStyles.apply(_this, [styles.SingleSmallProductName, props.productTitleStyle]);
  var mobileofferStyle = _stylePropable.mergeStyles.apply(_this, [styles.mobileofferStyleSingleSmall, props.offerActive, props.limitedOfferStyle]);
  var priceListStyle = _stylePropable.mergeStyles.apply(_this, [styles.SingleSmallPriceList, props.priceStyle, props.colorPrice]);
  var discountClass = props.cutprice ? _stylePropable.mergeStyles.apply(_this, [styles.SingleSmallDiscountClass, props.cutPriceStyle]) : styles.none;
  var ratingStyle = props.reviewCount ? styles.ratingStyle : styles.none;
  var ratingLinkStyle = props.reviewCount ? styles.ratingLinkStyle : styles.none;
  var chipChildStyle = styles.chipChildStyle;
  var toolTipStyle = styles.toolTipStyle;
  return {
    ratingFullStar: ratingFullStar,
    toolTipStyle: toolTipStyle,
    chipChildStyle: chipChildStyle,
    ratingTextStyle: ratingTextStyle,
    chipStyle: chipStyle,
    chipsBodyStyle: chipsBodyStyle,
    rootStyle: rootStyle,
    productImage: productImage,
    ProductDescription: ProductDescription,
    favoriteIcon: favoriteIcon,
    productName: productName,
    mobileofferStyle: mobileofferStyle,
    priceListStyle: priceListStyle,
    discountClass: discountClass,
    ratingStyle: ratingStyle,
    ratingLinkStyle: ratingLinkStyle
  };
};

var getChipChild = function getChipChild(data, chipStyle, chipChildStyle, toolTipStyle) {
  var renderChipChild = data.images.swatch.urls.map(function (urlsrc, index) {
    return _react2.default.createElement(
      _ChipChild2.default,
      {
        key: index,
        chipChildStyle: chipChildStyle,
        chipStyle: chipStyle,
        toolTipStyle: toolTipStyle,
        chipHoverStyle: chipStyle
      },
      _react2.default.createElement(_Image2.default, { source: urlsrc.url })
    );
  });
  return renderChipChild;
};

var SingleSmallCard = function SingleSmallCard(props, context) {
  var defaultImage = props.defaultImage;
  var productNameText = props.productNameText;
  var reviewCount = props.reviewCount;
  var currencySymbol = props.currencySymbol;
  var price = props.price;
  var offerText = props.offerText;
  var cutprice = props.cutprice;
  var productData = props.productData;
  var variationType = props.variationType;
  var ratingLinkUrl = props.ratingLinkUrl;
  var ratingLinkText = props.ratingLinkText;

  var _prepareStyle = prepareStyle(props, context);

  var ratingFullStar = _prepareStyle.ratingFullStar;
  var ratingTextStyle = _prepareStyle.ratingTextStyle;
  var chipStyle = _prepareStyle.chipStyle;
  var chipsBodyStyle = _prepareStyle.chipsBodyStyle;
  var rootStyle = _prepareStyle.rootStyle;
  var productImage = _prepareStyle.productImage;
  var chipChildStyle = _prepareStyle.chipChildStyle;
  var ProductDescription = _prepareStyle.ProductDescription;
  var favoriteIcon = _prepareStyle.favoriteIcon;
  var productName = _prepareStyle.productName;
  var mobileofferStyle = _prepareStyle.mobileofferStyle;
  var priceListStyle = _prepareStyle.priceListStyle;
  var discountClass = _prepareStyle.discountClass;
  var ratingStyle = _prepareStyle.ratingStyle;
  var ratingLinkStyle = _prepareStyle.ratingLinkStyle;
  var toolTipStyle = _prepareStyle.toolTipStyle;


  var renderChip = getChipChild(productData, chipStyle, chipChildStyle, toolTipStyle);
  return _react2.default.createElement(
    'div',
    { style: rootStyle, className: variationType },
    _react2.default.createElement(
      'div',
      { style: { float: 'left' } },
      _react2.default.createElement(_FavoriteButton2.default, { style: favoriteIcon }),
      _react2.default.createElement(_Image2.default, { source: defaultImage, style: productImage }),
      _react2.default.createElement(
        'div',
        { style: ProductDescription },
        _react2.default.createElement(
          _Text2.default,
          { style: productName },
          productNameText
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
        ),
        _react2.default.createElement(
          _Text2.default,
          { style: mobileofferStyle },
          offerText
        ),
        _react2.default.createElement(_Rating2.default, {
          style: ratingStyle,
          fullStyle: ratingFullStar,
          ratingCount: reviewCount,
          maxCount: 5
        }),
        _react2.default.createElement(
          _Text2.default,
          { style: ratingLinkStyle },
          _react2.default.createElement(
            'a',
            { style: ratingTextStyle, href: ratingLinkUrl },
            ratingLinkText
          )
        ),
        _react2.default.createElement(
          _Chip2.default,
          { chipsBodyStyle: chipsBodyStyle },
          renderChip
        )
      )
    )
  );
};

SingleSmallCard.propTypes = {
  currencySymbol: string,
  className: string,
  colorPrice: oneOfType([string, object]),
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
  productTitleStyle: object
};

SingleSmallCard.contextTypes = {
  compTheme: object
};

exports.default = (0, _contextPure2.default)(SingleSmallCard);