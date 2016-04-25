'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

var _FavoriteButton = require('../FavoriteButton');

var _FavoriteButton2 = _interopRequireDefault(_FavoriteButton);

var _Chip = require('../Chip');

var _Chip2 = _interopRequireDefault(_Chip);

var _ChipChild = require('../Chip/ChipChild');

var _ChipChild2 = _interopRequireDefault(_ChipChild);

var _ColorPicker = require('../ColorPicker');

var _ColorPicker2 = _interopRequireDefault(_ColorPicker);

var _DesktopStyle = require('./DesktopStyle');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var string = _react.PropTypes.string;
var object = _react.PropTypes.object;
var number = _react.PropTypes.number;
var func = _react.PropTypes.func;
var oneOfType = _react.PropTypes.oneOfType;

var DesktopCard = function (_Component) {
  _inherits(DesktopCard, _Component);

  function DesktopCard() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, DesktopCard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(DesktopCard)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      displayPicker: 'none'
    }, _this.getChipChild = function (data, chipStyle, chipsBodyStyle, chipChildStyle, toolTipStyle) {
      var renderChipChild = data.images.swatch.urls.map(function (urlsrc, index) {
        return _react2.default.createElement(
          _ChipChild2.default,
          {
            key: index,
            chipStyle: chipStyle,
            toolTipStyle: toolTipStyle,
            chipChildStyle: chipChildStyle,
            chipHoverStyle: chipStyle
          },
          _react2.default.createElement(_Image2.default, { source: urlsrc.url })
        );
      });
      return _react2.default.createElement(
        _Chip2.default,
        {
          onMouseEnter: _this.displayPicker,
          chipsBodyStyle: chipsBodyStyle
        },
        renderChipChild
      );
    }, _this.blockPickerDisplay = function () {
      _this.setState({
        displayPicker: 'none'
      });
    }, _this.displayPicker = function (displaying) {
      if (displaying) {
        _this.setState({
          displayPicker: 'block'
        });
      }
    }, _this.pickSelectedImage = function (event, colorcode, skuId) {
      _this.props.getSelectedImage(event, colorcode, skuId);
    }, _this.boxHead = function () {
      var _this$cardStyle = _this.cardStyle;
      var boxRowHead = _this$cardStyle.boxRowHead;
      var productSizeRootStyle = _this$cardStyle.productSizeRootStyle;
      var testiomonialLink = _this$cardStyle.testiomonialLink;
      var link = _this$cardStyle.link;
      var _this$props = _this.props;
      var productSize = _this$props.productSize;
      var ratingLinkUrl = _this$props.ratingLinkUrl;
      var testimonialText = _this$props.testimonialText;
      var testimonialLinkText = _this$props.testimonialLinkText;

      return _react2.default.createElement(
        'div',
        { style: boxRowHead },
        _react2.default.createElement(
          _Text2.default,
          { style: productSizeRootStyle, id: 'size' },
          productSize
        ),
        _react2.default.createElement(
          _Text2.default,
          { style: testiomonialLink },
          _react2.default.createElement(
            'a',
            { style: link, href: ratingLinkUrl },
            '`$',
            testimonialText,
            '(',
            testimonialLinkText,
            ')`'
          )
        )
      );
    }, _this.boxFoot = function () {
      var _this$cardStyle2 = _this.cardStyle;
      var boxRowFoot = _this$cardStyle2.boxRowFoot;
      var primaryColor = _this$cardStyle2.primaryColor;
      var offerStyle = _this$cardStyle2.offerStyle;
      var priceBox = _this$cardStyle2.priceBox;
      var pricelist = _this$cardStyle2.pricelist;
      var priceStyleText = _this$cardStyle2.priceStyleText;
      var priceListStyle = _this$cardStyle2.priceListStyle;
      var consumptionTax = _this$cardStyle2.consumptionTax;
      var discountClass = _this$cardStyle2.discountClass;
      var notes = _this$cardStyle2.notes;
      var _this$props2 = _this.props;
      var date = _this$props2.date;
      var currencySymbol = _this$props2.currencySymbol;
      var price = _this$props2.price;
      var cutprice = _this$props2.cutprice;
      var offerText = _this$props2.offerText;
      var notesText = _this$props2.notesText;


      return _react2.default.createElement(
        'div',
        { style: boxRowFoot },
        _react2.default.createElement(
          _Text2.default,
          { style: primaryColor },
          date
        ),
        _react2.default.createElement(
          _Text2.default,
          { style: offerStyle },
          offerText
        ),
        _react2.default.createElement(
          'div',
          { style: priceBox },
          _react2.default.createElement(
            'ul',
            { style: pricelist },
            _react2.default.createElement(
              'li',
              { style: priceStyleText },
              _react2.default.createElement(
                _Text2.default,
                { style: priceListStyle },
                currencySymbol,
                (0, _productService.format)(price)
              )
            ),
            _react2.default.createElement(
              'li',
              { style: consumptionTax },
              _react2.default.createElement(
                _Text2.default,
                { style: discountClass },
                cutprice ? currencySymbol + (0, _productService.format)(cutprice) : ''
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                _Text2.default,
                { style: notes },
                notesText
              )
            )
          )
        )
      );
    }, _this.pickerContainer = function () {
      var _this$props3 = _this.props;
      var productData = _this$props3.productData;
      var tileSize = _this$props3.tileSize;
      var _this$cardStyle3 = _this.cardStyle;
      var card = _this$cardStyle3.card;
      var pickerContainer = _this$cardStyle3.pickerContainer;


      var pickerStyle = _stylePropable.mergeStyles.apply(_this, [card, pickerContainer, { display: _this.state.displayPicker }]);

      return _react2.default.createElement(
        'div',
        { style: pickerStyle, onMouseLeave: _this.blockPickerDisplay },
        _react2.default.createElement(_ColorPicker2.default, {
          tileSize: tileSize,
          productInfo: productData,
          productTileCallback: _this.pickSelectedImage
        })
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DesktopCard, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var CompTheme = this.context.CompTheme || _themeManager2.default.getCompTheme(_lightRawTheme2.default);
      var tileTheme = CompTheme && CompTheme.productCard || {};
      this.cardStyle = (0, _DesktopStyle.getStyles)(this.props, tileTheme);
    }
  }, {
    key: 'render',
    value: function render() {
      var _cardStyle = this.cardStyle;
      var rootStyle = _cardStyle.rootStyle;
      var productImage = _cardStyle.productImage;
      var ProductDescription = _cardStyle.ProductDescription;
      var gender = _cardStyle.gender;
      var productName = _cardStyle.productName;
      var productNameStyle = _cardStyle.productNameStyle;
      var favoriteIcon = _cardStyle.favoriteIcon;
      var chipStyle = _cardStyle.chipStyle;
      var chipsBodyStyle = _cardStyle.chipsBodyStyle;
      var chipChildStyle = _cardStyle.chipChildStyle;
      var toolTipStyle = _cardStyle.toolTipStyle;
      var _props = this.props;
      var defaultImage = _props.defaultImage;
      var genderText = _props.genderText;
      var productNameText = _props.productNameText;
      var productData = _props.productData;
      var tileSize = _props.tileSize;
      var ratingLinkUrl = _props.ratingLinkUrl; // get Defined Properties

      var renderChip = this.getChipChild(productData, chipStyle, chipsBodyStyle, chipChildStyle, toolTipStyle);

      return _react2.default.createElement(
        'div',
        { style: rootStyle, className: tileSize },
        _react2.default.createElement(_FavoriteButton2.default, { style: favoriteIcon }),
        _react2.default.createElement(_Image2.default, { source: defaultImage, style: productImage }),
        _react2.default.createElement(
          'div',
          { style: ProductDescription },
          renderChip,
          this.boxHead(),
          _react2.default.createElement(
            _Text2.default,
            { style: gender },
            genderText
          ),
          _react2.default.createElement(
            _Text2.default,
            { style: productName },
            _react2.default.createElement(
              'a',
              { href: ratingLinkUrl,
                style: productNameStyle
              },
              productNameText
            )
          ),
          this.boxFoot()
        ),
        this.pickerContainer()
      );
    }
  }]);

  return DesktopCard;
}(_react.Component);

DesktopCard.propTypes = {
  currencySymbol: string,
  className: string,
  colorPrice: oneOfType([string, object]),
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
  ratingLinkUrl: string
};
exports.default = (0, _contextPure2.default)(DesktopCard);