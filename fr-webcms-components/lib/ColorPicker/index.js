'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _stylePropable = require('../helpers/utils/stylePropable');

var _contextPure = require('../helpers/composedComponents/contextPure');

var _contextPure2 = _interopRequireDefault(_contextPure);

var _lightRawTheme = require('../helpers/styles/rawThemes/lightRawTheme');

var _lightRawTheme2 = _interopRequireDefault(_lightRawTheme);

var _themeManager = require('../helpers/styles/themeManager');

var _themeManager2 = _interopRequireDefault(_themeManager);

var _productService = require('../Product/productService');

var _Image = require('../core/Image');

var _Image2 = _interopRequireDefault(_Image);

var _Chip = require('../Chip');

var _Chip2 = _interopRequireDefault(_Chip);

var _ChipChild = require('../Chip/ChipChild');

var _ChipChild2 = _interopRequireDefault(_ChipChild);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var string = _react.PropTypes.string;
var object = _react.PropTypes.object;
var func = _react.PropTypes.func;

var noop = function noop() {
  return null;
};
var prepareStyle = function prepareStyle(_ref) {
  var context = _ref.context;

  var CompTheme = context.CompTheme || _themeManager2.default.getCompTheme(_lightRawTheme2.default);
  var pickerTheme = CompTheme && CompTheme.colorPicker || {};

  var styles = {
    root: {
      borderTopWidth: 1,
      borderTopStyle: 'solid',
      borderTopColor: pickerTheme.borderColor,
      display: 'inline-block',
      background: pickerTheme.backgroundColor,
      zIndex: '100',
      width: '99%',
      marginLeft: 1,
      boxSizing: 'border-box',
      boxShadow: '0px 2px 2px 2px rgba(0,0,0,0.15)'
    },
    itemImage: {
      width: 'auto',
      height: 'auto',
      position: 'relative'
    },
    toolTipStyle: {
      display: 'none'
    },
    chipStyle: {
      paddingTop: 0,
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom: 0,
      width: '22',
      height: '22'
    },
    chipChildStyle: {
      height: '100%'
    },
    link: {
      color: pickerTheme.linkColor,
      textDecoration: 'none'
    },
    imageSmall: {
      cursor: 'pointer',
      textAlign: 'center',
      width: '100%',
      minHeight: 231,
      borderStyle: 'none',
      verticalAlign: 'middle'
    },
    imageLarge: {
      cursor: 'pointer',
      textAlign: 'center',
      width: '100%',
      minHeight: 310,
      borderStyle: 'none',
      verticalAlign: 'middle'
    },
    itemColor: {
      paddingRight: 20,
      paddingLeft: 15
    },
    itemDescription: {
      overflow: 'hidden',
      float: 'right'
    },
    descriptionList: {
      listStyle: 'none',
      textAlign: 'right',
      display: 'block',
      overflow: 'hidden',
      margin: 0
    },
    currentPrice: {
      display: 'inline-block',
      fontSize: 28,
      fontWeight: 'bold'
    }

  };

  return {
    styles: styles
  };
};

var ColorPicker = function (_Component) {
  _inherits(ColorPicker, _Component);

  function ColorPicker() {
    var _Object$getPrototypeO;

    var _temp, _this2, _ret;

    _classCallCheck(this, ColorPicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ColorPicker)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this2), _this2.state = {
      currentPrice: '',
      selectedImage: ''
    }, _this2.getChips = function (data, chipStyle, chipChildStyle, toolTipStyle) {
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
      return renderChipChild;
    }, _this2.passSelectedImage = function (event) {
      var selectedColor = null;
      var skuId = null;
      var hoverNode = event.target;
      var _this2$props = _this2.props;
      var productInfo = _this2$props.productInfo;
      var productTileCallback = _this2$props.productTileCallback;

      if (hoverNode.nodeName === 'LI') {
        selectedColor = (0, _productService.getColorCode)(productInfo, hoverNode.querySelector('img').getAttribute('src'));
      } else {
        selectedColor = (0, _productService.getColorCode)(productInfo, hoverNode.getAttribute('src'));
      }

      var productId = (0, _productService.getProductInfo)(selectedColor, productInfo);
      skuId = productId.id;
      productTileCallback(event, selectedColor, skuId);
    }, _this2.displayPicker = function (event) {
      var hoveredColor = null;
      var hoverNode = event.target;
      var productInfo = _this2.props.productInfo;

      if (hoverNode.nodeName === 'LI') {
        hoveredColor = (0, _productService.getColorCode)(productInfo, hoverNode.querySelector('img').getAttribute('src'));
      } else {
        hoveredColor = (0, _productService.getColorCode)(productInfo, hoverNode.getAttribute('src'));
      }

      var productDetail = (0, _productService.getProductInfo)(hoveredColor, productInfo);
      var selectedPrice = productDetail.currentPrice;
      var mainColors = productInfo.images.main.urls;
      var url = null;
      mainColors.forEach(function (color) {
        if (color.colorCode === hoveredColor) {
          url = color.url;
        }
      });
      _this2.setState({
        selectedImage: url,
        currentPrice: selectedPrice
      });
      _this2.props.onMouseEnter();
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(ColorPicker, [{
    key: 'render',
    value: function render() {
      var _this = this;
      var _this$props = _this.props;
      var tileSize = _this$props.tileSize;
      var style = _this$props.style;
      var alternateText = _this$props.alternateText;
      var productInfo = _this$props.productInfo;
      var imageStyle = _this$props.imageStyle;

      var _prepareStyle = prepareStyle(_this);

      var styles = _prepareStyle.styles;
      var root = styles.root;
      var chipStyle = styles.chipStyle;
      var imageLarge = styles.imageLarge;
      var imageSmall = styles.imageSmall;
      var itemColor = styles.itemColor;
      var itemDescription = styles.itemDescription;
      var descriptionList = styles.descriptionList;
      var currentPrice = styles.currentPrice;
      var chipChildStyle = styles.chipChildStyle;
      var toolTipStyle = styles.toolTipStyle;


      var renderChipChild = _this.getChips(productInfo, chipStyle, chipChildStyle, toolTipStyle);

      var styleImage = _stylePropable.mergeStyles.apply(_this, [tileSize === 'large' ? imageLarge : imageSmall, imageStyle]);

      return _react2.default.createElement(
        'div',
        { style: _stylePropable.mergeStyles.apply(_this, [root, style]), className: tileSize },
        _react2.default.createElement(
          'div',
          { style: styles.itemImage },
          _react2.default.createElement(
            'a',
            null,
            _react2.default.createElement(_Image2.default, { style: styleImage,
              source: _this.state.selectedImage,
              alternateText: alternateText
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { style: itemColor },
          _react2.default.createElement(
            _Chip2.default,
            {
              onMouseEnter: _this.displayPicker,
              onMouseClick: _this.passSelectedImage
            },
            renderChipChild
          ),
          _react2.default.createElement(
            'div',
            { style: itemDescription },
            _react2.default.createElement(
              'ul',
              { style: descriptionList },
              _react2.default.createElement(
                'li',
                { style: currentPrice },
                this.state.currentPrice
              )
            )
          )
        )
      );
    }
  }]);

  return ColorPicker;
}(_react.Component);

ColorPicker.propTypes = {
  alternateText: string,
  className: string,
  imageStyle: object,
  onMouseEnter: func,
  productInfo: object,
  productTileCallback: func,
  style: object,
  tileSize: string
};
ColorPicker.defaultProps = {
  onMouseEnter: noop
};
exports.default = (0, _contextPure2.default)(ColorPicker);