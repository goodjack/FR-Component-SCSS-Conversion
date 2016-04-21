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
    rootSingleLarge: {
      position: 'relative',
      width: '100%',
      height: 'auto',
      boxSizing: 'border-box',
      padding: '16',
      borderBottomWidth: '1',
      borderBottomStyle: 'solid',
      borderBottomColor: tileTheme.borderColor
    },
    toolTipStyle: {
      display: 'none'
    },
    imageSingleLarge: {
      width: '100%',
      position: 'absolute'
    },
    productImageShellSingleLarge: {
      position: 'relative',
      paddingBottom: '100%',
      marginBottom: '10'
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
      fontWeight: '700'
    },
    chipChildStyle: {
      height: '100%'
    },
    chipStyleSingleLarge: {
      paddingTop: 0,
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom: 0,
      width: '22',
      height: '22',
      marginRight: '3',
      marginBottom: '0'
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
      zindex: '1'
    },
    none: {
      display: 'none'
    },

    productDescriptionSingleLarge: {
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '0',
      paddingRight: '6',
      paddingLeft: '15',
      paddingBottom: '0',
      zindex: '1',
      width: '91%'
    },
    productNameSingleLarge: {
      fontFamily: tileTheme.themeFontFamily,
      display: 'block',
      lineHeight: '18px',
      fontSize: '11',
      float: 'left',
      width: '100%',
      marginTop: '7',
      marginBottom: '6'
    },
    priceListSingleLarge: {
      fontSize: '18',
      float: 'right',
      fontWeight: 'bold',
      fontFamily: tileTheme.themeFontFamily,
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
      clear: 'both'
    },
    ratingStyleSingleLarge: {
      float: 'left',
      padding: 0,
      marginTop: 0,
      marginBottom: '7'
    },
    ratingTextStyleSingleLarge: {
      color: tileTheme.textColor
    },
    ratingLinkStyleSingleLarge: {
      clear: 'both',
      float: 'left'
    },
    ratingFullStarSingleLarge: {
      fill: tileTheme.ratingColor
    },
    chipsBodyStyle: {
      margin: '0',
      width: 'auto',
      padding: '0'
    }
  };

  var ratingFullStar = styles.ratingFullStarSingleLarge;
  var ratingTextStyle = styles.ratingTextStyleSingleLarge;
  var chipStyle = _stylePropable.mergeStyles.apply(_this, [styles.chipStyle, styles.chipStyleSingleLarge]);
  var chipsBodyStyle = styles.chipsBodyStyle;
  var rootStyle = _stylePropable.mergeStyles.apply(_this, [styles.rootSingleLarge, props.style]);
  var productImageShell = styles.productImageShellSingleLarge;
  var productImage = _stylePropable.mergeStyles.apply(_this, [styles.imageSingleLarge, props.imageStyle]);
  var productDescription = styles.productDescriptionSingleLarge;
  var favoriteIcon = styles.favoriteButtonStyleSingleLarge;
  var productName = _stylePropable.mergeStyles.apply(_this, [styles.productNameSingleLarge, props.productTitleStyle]);
  var mobileofferStyle = _stylePropable.mergeStyles.apply(_this, [styles.SingleLargeOfferStyle, props.offerActive, props.limitedOfferStyle]);
  var priceListStyle = _stylePropable.mergeStyles.apply(_this, [styles.priceListSingleLarge, props.priceStyle, props.colorPrice]);
  var discountClass = props.cutprice ? _stylePropable.mergeStyles.apply(_this, [styles.discountClassSingleLarge, props.cutPriceStyle]) : styles.none;
  var ratingStyle = props.reviewCount ? styles.ratingStyleSingleLarge : styles.none;
  var ratingLinkStyle = props.reviewCount ? styles.ratingLinkStyleSingleLarge : styles.none;
  var chipChildStyle = styles.chipChildStyle;
  var toolTipStyle = styles.toolTipStyle;
  return { ratingFullStar: ratingFullStar,
    ratingTextStyle: ratingTextStyle,
    toolTipStyle: toolTipStyle,
    chipChildStyle: chipChildStyle,
    chipStyle: chipStyle,
    chipsBodyStyle: chipsBodyStyle,
    rootStyle: rootStyle,
    productImageShell: productImageShell,
    productImage: productImage,
    productName: productName,
    productDescription: productDescription,
    favoriteIcon: favoriteIcon,
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
        chipStyle: chipStyle,
        chipChildStyle: chipChildStyle,
        chipHoverStyle: chipStyle,
        toolTipStyle: toolTipStyle
      },
      _react2.default.createElement(_Image2.default, { source: urlsrc.url })
    );
  });
  return renderChipChild;
};

var SingleLargeCard = function SingleLargeCard(props, context) {
  var defaultImage = props.defaultImage;
  var productNameText = props.productNameText;
  var currencySymbol = props.currencySymbol;
  var price = props.price;
  var cutprice = props.cutprice;
  var productData = props.productData;
  var variationType = props.variationType;
  var reviewCount = props.reviewCount;
  var offerText = props.offerText;
  var ratingLinkUrl = props.ratingLinkUrl;
  var ratingLinkText = props.ratingLinkText;

  var _prepareStyle = prepareStyle(props, context);

  var ratingFullStar = _prepareStyle.ratingFullStar;
  var ratingTextStyle = _prepareStyle.ratingTextStyle;
  var chipStyle = _prepareStyle.chipStyle;
  var chipsBodyStyle = _prepareStyle.chipsBodyStyle;
  var rootStyle = _prepareStyle.rootStyle;
  var productImageShell = _prepareStyle.productImageShell;
  var productImage = _prepareStyle.productImage;
  var productDescription = _prepareStyle.productDescription;
  var favoriteIcon = _prepareStyle.favoriteIcon;
  var mobileofferStyle = _prepareStyle.mobileofferStyle;
  var priceListStyle = _prepareStyle.priceListStyle;
  var discountClass = _prepareStyle.discountClass;
  var ratingStyle = _prepareStyle.ratingStyle;
  var ratingLinkStyle = _prepareStyle.ratingLinkStyle;
  var productName = _prepareStyle.productName;
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
      _react2.default.createElement(_Image2.default, { source: defaultImage, style: productImage })
    ),
    _react2.default.createElement(
      'div',
      { style: productDescription },
      _react2.default.createElement(
        _Text2.default,
        { style: mobileofferStyle },
        offerText
      ),
      _react2.default.createElement(
        _Chip2.default,
        { chipsBodyStyle: chipsBodyStyle },
        renderChip
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

SingleLargeCard.propTypes = {
  currencySymbol: string,
  colorPrice: oneOfType([string, object]),
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
  dateStyle: object
};

SingleLargeCard.contextTypes = {
  compTheme: object
};

exports.default = (0, _contextPure2.default)(SingleLargeCard);