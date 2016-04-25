'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _stylePropable = require('../helpers/utils/stylePropable');

var _contextPure = require('../helpers/composedComponents/contextPure');

var _contextPure2 = _interopRequireDefault(_contextPure);

var _languageConfiguration = require('../helpers/configuration/languageConfiguration');

var _languageConfiguration2 = _interopRequireDefault(_languageConfiguration);

var _Grid = require('../core/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _GridCell = require('../core/GridCell');

var _GridCell2 = _interopRequireDefault(_GridCell);

var _ProductCard = require('../ProductCard');

var _ProductCard2 = _interopRequireDefault(_ProductCard);

var _http = require('../helpers/utils/http');

var _query = require('./query');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var string = _react.PropTypes.string;
var object = _react.PropTypes.object;
var node = _react.PropTypes.node;

var styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start'
  }
};

var ProductGrid = function (_Component) {
  _inherits(ProductGrid, _Component);

  function ProductGrid() {
    var _Object$getPrototypeO;

    var _temp, _this2, _ret;

    _classCallCheck(this, ProductGrid);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ProductGrid)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this2), _this2.state = {
      productDetail: ''
    }, _this2.componentWillMount = function () {
      _this2.loadProduct();
    }, _this2.getFillerCount = function (tileType, Products) {
      var productCount = 0;
      var tileCountSmall = 4;
      var tileCountLarge = 3;
      /* Calculating the number of fillers for Large and Small */
      if (tileType === 'Multi-Small') {
        if (Products % tileCountSmall !== 0) {
          productCount = tileCountSmall - Products % tileCountSmall;
        }
      } else if (tileType === 'Multi-Large') {
        if (Products % tileCountLarge !== 0) {
          productCount = tileCountLarge - Products % tileCountLarge;
        }
      }

      return productCount;
    }, _this2.successCall = function (parsedData) {
      _this2.setState({ productDetail: parsedData.data });
    }, _this2.loadProduct = function () {
      var _this2$props = _this2.props;
      var catelogPath = _this2$props.catelogPath;
      var pageNo = _this2$props.pageNo;
      var products = _this2$props.products;
      var catelogUrl = _this2$props.catelogUrl;
      var userName = _this2$props.userName;
      var password = _this2$props.password;
      var content = _this2$props.content;

      var categoryId = catelogPath || '';
      var pages = pageNo || 0;
      var productIds = products || '';
      var productUrl = catelogUrl;
      var queryParameter = (0, _query.query)(categoryId, productIds, pages);
      var queryData = {
        queryParameter: queryParameter,
        userName: userName,
        password: password,
        content: content,
        productUrl: productUrl
      };
      (0, _http.getApiDetail)(queryData, _this2.successCall, _this2.errorCall);
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(ProductGrid, [{
    key: 'getFillersChildren',
    value: function getFillersChildren(child) {
      var fill = _react2.default.Children.map(child, function (cellChild, index) {
        return _react2.default.createElement(
          _GridCell2.default,
          { key: index },
          cellChild
        );
      });
      return fill;
    }
  }, {
    key: 'getFillers',
    value: function getFillers(tileSize) {
      var _this3 = this;

      var fillersSize = tileSize === 'Multi-Large' ? 'large' : 'small';
      var fillers = [];
      var getFillerCount = this.getFillerCount;
      var productDetail = this.state.productDetail;
      var items = productDetail && productDetail.search && productDetail.search.items || {};
      _react2.default.Children.forEach(this.props.children, function (child) {
        var fillersChild = _react2.default.Children.map(child.props.children, function (FillerChild) {
          return _react2.default.cloneElement(FillerChild, {
            fillersSize: fillersSize
          });
        });
        if (child.props.display === 'Cover') {
          var fillerChild = fillersChild.slice(0, getFillerCount(tileSize, items.length));
          fillers = _this3.getFillersChildren(fillerChild);
        } else {
          fillers = _this3.getFillersChildren(fillersChild);
        }
      });
      return fillers;
    }
  }, {
    key: 'getCols',
    value: function getCols(type) {
      switch (type) {
        case 'Single-Large':
          return 1;
        case 'Single-Small':
          return 1;
        case 'Two-Column':
          return 2;
        case 'Multi-Small':
          return 4;
        case 'Multi-Large':
          return 3;
        default:
          return 4;
      }
    }
  }, {
    key: 'errorCall',
    value: function errorCall(error) {
      console.log(error);
    }
  }, {
    key: 'renderProductChildren',
    value: function renderProductChildren() {
      var data = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
      var language = arguments[1];
      var objString = arguments[2];

      var ProductCards = [];
      var itemData = data[objString];
      var _props = this.props;
      var variationType = _props.variationType;
      var ratingLinkUrl = _props.ratingLinkUrl;

      var items = itemData && itemData.items || [];
      if (itemData && itemData.items) {
        ProductCards = items.map(function (pItem, index) {
          var cardProps = Object.assign({}, language, {
            variationType: variationType,
            ratingLinkUrl: ratingLinkUrl
          });
          return _react2.default.createElement(
            _GridCell2.default,
            { key: index },
            _react2.default.createElement(_ProductCard2.default, _extends({}, cardProps, { productData: pItem }))
          );
        });
      }

      return ProductCards;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;
      var _this$props = _this.props;
      var padding = _this$props.padding;
      var cellHeight = _this$props.cellHeight;
      var children = _this$props.children;
      var style = _this$props.style;
      var variationType = _this$props.variationType;
      var products = _this$props.products;

      var other = _objectWithoutProperties(_this$props, ['padding', 'cellHeight', 'children', 'style', 'variationType', 'products']);

      var language = _this.context.language || _languageConfiguration2.default.productCard;
      var cols = _this.getCols(variationType);
      var productDetail = _this.state.productDetail;
      var gridStyle = _stylePropable.mergeStyles.apply(_this, [styles.root, style]);
      var searchString = products ? 'list' : 'search';
      return _react2.default.createElement(
        _Grid2.default,
        {
          maxCols: cols,
          cellPadding: parseInt(padding, 10),
          style: gridStyle,
          cellHeight: parseInt(cellHeight, 10)
        },
        this.renderProductChildren(productDetail, language, searchString),
        this.getFillers(variationType)
      );
    }
  }]);

  return ProductGrid;
}(_react.Component);

ProductGrid.propTypes = {
  alternateText: string,
  catelogPath: string,
  catelogUrl: string.isRequired,
  cellHeight: string,
  children: node,
  content: string,
  dePrioritized: string,
  padding: string,
  pageNo: string,
  password: string,
  prioritized: string,
  products: string,
  ratingLinkUrl: string,
  style: object,
  userName: string,
  variationType: string
};
ProductGrid.contextTypes = {
  muiTheme: object,
  translation: object
};
ProductGrid.defaultProps = {
  padding: '5',
  tileSize: 'large'
};
exports.default = (0, _contextPure2.default)(ProductGrid);