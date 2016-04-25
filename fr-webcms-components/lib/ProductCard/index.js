'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lightRawTheme = require('../helpers/styles/rawThemes/lightRawTheme');

var _lightRawTheme2 = _interopRequireDefault(_lightRawTheme);

var _themeManager = require('../helpers/styles/themeManager');

var _themeManager2 = _interopRequireDefault(_themeManager);

var _contextPure = require('../helpers/composedComponents/contextPure');

var _contextPure2 = _interopRequireDefault(_contextPure);

var _TwoColumnCard = require('./TwoColumnCard');

var _TwoColumnCard2 = _interopRequireDefault(_TwoColumnCard);

var _DesktopCard = require('./DesktopCard');

var _DesktopCard2 = _interopRequireDefault(_DesktopCard);

var _SingleSmallCard = require('./SingleSmallCard');

var _SingleSmallCard2 = _interopRequireDefault(_SingleSmallCard);

var _SingleLargeCard = require('./SingleLargeCard');

var _SingleLargeCard2 = _interopRequireDefault(_SingleLargeCard);

var _productService = require('../Product/productService');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var string = _react.PropTypes.string;
var object = _react.PropTypes.object;

var ProductCard = function (_Component) {
  _inherits(ProductCard, _Component);

  function ProductCard() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, ProductCard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ProductCard)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      productColor: '',
      currentPrice: '',
      displayPicker: 'none',
      SKUid: ''
    }, _this.componentWillMount = function () {
      var data = _this.props.productData;
      var MuiTheme = _this.context.MuiTheme || _themeManager2.default.getMuiTheme(_lightRawTheme2.default);
      var tileTheme = MuiTheme.producTile;
      var applyColor = {
        color: tileTheme.priceColor
      };
      var productSize = (0, _productService.getProductSize)(data, data.productID + '-' + data.defaultColor);
      var testimonialLinkText = data.review ? data.review.count : 0;
      var genderText = _this.getCategory(data);
      var productNameText = data.title;
      var dateInt = parseInt(data.salesStart, 10);
      var date = new Date(dateInt).toLocaleDateString();
      var reviewCount = data.review ? data.review.average : null;
      _this.constVal = { productSize: productSize,
        testimonialLinkText: testimonialLinkText,
        genderText: genderText,
        productNameText: productNameText,
        applyColor: applyColor,
        date: date,
        reviewCount: reviewCount
      };
      if (data) {
        _this.setState({
          productColor: data.defaultColor,
          SKUid: data.defaultSKU
        });
      }
    }, _this.getCategory = function (PRODUCT) {
      var gender = void 0;
      var genderID = PRODUCT.category.split('');
      var firstVal = genderID[0];
      var secondVal = genderID[1];
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
    }, _this.offerDisplay = function (sku) {
      var display = 'none';
      if (sku && sku.limitedOffer === true) {
        display = 'block';
      }

      return display;
    }, _this.pickSelectedImage = function (event, colorcode, skuId) {
      _this.setState({
        productColor: colorcode,
        SKUid: skuId
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ProductCard, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var productData = _props.productData;
      var variationType = _props.variationType;
      var offerText = _props.offerText;
      var testimonialText = _props.testimonialText;
      var notesText = _props.notesText;
      var ratingLinkUrl = _props.ratingLinkUrl;
      var ratingLinkText = _props.ratingLinkText;
      var alternateText = _props.alternateText;
      var cutPriceStyle = _props.cutPriceStyle;
      var dateStyle = _props.dateStyle;
      var genderTextStyle = _props.genderTextStyle;
      var imageStyle = _props.imageStyle;
      var notesStyle = _props.notesStyle;
      var limitedOfferStyle = _props.limitedOfferStyle;
      var priceStyle = _props.priceStyle;
      var productSizeStyle = _props.productSizeStyle;
      var productTitleStyle = _props.productTitleStyle;
      var currencySymbol = _props.currencySymbol;
      var images = productData.images;
      var originalPrice = productData.originalPrice;
      var _constVal = this.constVal;
      var productSize = _constVal.productSize;
      var testimonialLinkText = _constVal.testimonialLinkText;
      var genderText = _constVal.genderText;
      var productNameText = _constVal.productNameText;
      var applyColor = _constVal.applyColor;
      var date = _constVal.date;
      var reviewCount = _constVal.reviewCount; // getting calculated data once from component will mount

      var defaultImage = (0, _productService.getImageUrl)(images.main.urls, this.state.productColor);
      var sku = (0, _productService.getSKUInfo)(productData, this.state.SKUid);
      var offerActive = {
        display: this.offerDisplay(sku)
      };
      var colorPrice = sku.discount === true ? applyColor : '';
      var price = void 0;
      var cutprice = void 0;
      if (sku.discount === true) {
        price = sku.currentPrice;
        cutprice = originalPrice;
      } else {
        price = originalPrice;
      }

      var productRenderData = {
        alternateText: alternateText,
        offerText: offerText,
        testimonialText: testimonialText,
        notesText: notesText,
        reviewCount: reviewCount,
        defaultImage: defaultImage,
        productSize: productSize,
        testimonialLinkText: testimonialLinkText,
        genderText: genderText,
        productNameText: productNameText,
        date: date,
        sku: sku,
        offerActive: offerActive,
        colorPrice: colorPrice,
        currencySymbol: currencySymbol,
        price: price,
        cutprice: cutprice,
        ratingLinkUrl: ratingLinkUrl,
        ratingLinkText: ratingLinkText,
        variationType: variationType,
        cutPriceStyle: cutPriceStyle,
        dateStyle: dateStyle,
        genderTextStyle: genderTextStyle,
        imageStyle: imageStyle,
        notesStyle: notesStyle,
        limitedOfferStyle: limitedOfferStyle,
        priceStyle: priceStyle,
        productSizeStyle: productSizeStyle,
        productTitleStyle: productTitleStyle,
        productData: productData
      };

      // the below code will be used when all the PR related to Product DesktopCard Get shipped.

      if (variationType === 'Two-Column') {
        return _react2.default.createElement(_TwoColumnCard2.default, productRenderData);
      } else if (variationType === 'Single-Small') {
        return _react2.default.createElement(_SingleSmallCard2.default, productRenderData);
      } else if (variationType === 'Multi-Small') {
        return _react2.default.createElement(_DesktopCard2.default, _extends({
          getSelectedImage: this.pickSelectedImage,
          tileSize: 'small'
        }, productRenderData));
      } else if (variationType === 'Multi-Large') {
        return _react2.default.createElement(_DesktopCard2.default, _extends({
          getSelectedImage: this.pickSelectedImage,
          tileSize: 'large'
        }, productRenderData));
      } else if (variationType === 'Single-Large') {
        return _react2.default.createElement(_SingleLargeCard2.default, productRenderData);
      }
    }
  }]);

  return ProductCard;
}(_react.Component);

ProductCard.propTypes = {
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
  variationType: string
};
ProductCard.contextTypes = {
  muiTheme: object
};
ProductCard.defaultProps = {
  variationType: 5
};
exports.default = (0, _contextPure2.default)(ProductCard);