'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Uniqlo UI


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _uniqueId = require('../helpers/utils/uniqueId');

var _uniqueId2 = _interopRequireDefault(_uniqueId);

var _Carousel = require('../Carousel');

var _Carousel2 = _interopRequireDefault(_Carousel);

var _Image = require('../core/Image');

var _Image2 = _interopRequireDefault(_Image);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _Heading = require('../Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _lightRawTheme = require('../helpers/styles/rawThemes/lightRawTheme');

var _lightRawTheme2 = _interopRequireDefault(_lightRawTheme);

var _themeManager = require('../helpers/styles/themeManager');

var _themeManager2 = _interopRequireDefault(_themeManager);

var _stylePropable = require('../helpers/utils/stylePropable');

var _contextPure = require('../helpers/composedComponents/contextPure');

var _contextPure2 = _interopRequireDefault(_contextPure);

var _urlGenerator = require('../helpers/utils/urlGenerator');

var _http = require('../helpers/utils/http');

var _configurationManager = require('../helpers/configuration/configurationManager');

var _configurationManager2 = _interopRequireDefault(_configurationManager);

var _baseConfig = require('../helpers/configuration/baseConfig');

var _baseConfig2 = _interopRequireDefault(_baseConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var string = _react.PropTypes.string;
var object = _react.PropTypes.object;

var getRelevantContextKeys = function getRelevantContextKeys(config) {
  var coordinateConfig = config && config.coordinate || {};

  return {
    coordinateContext: _extends({}, coordinateConfig)
  };
};

var styles = {
  root: {
    height: 525
  },
  headingStyle: {
    width: '100%',
    textAlign: 'center',
    padding: 5
  },
  buttonStyle: {
    marginRight: 15,
    marginBottom: 10,
    padding: 2,
    width: 115,
    height: 22,
    position: 'absolute',
    border: '1px solid #000',
    bottom: 0,
    right: 0,
    backgroundColor: '#C3CAD0',
    opacity: 0.5,
    zIndex: 1
  },
  mainCopyStyle: {
    width: '100%',
    fontWeight: 'normal'
  },
  subCopyStyle: {
    width: '100%',
    fontWeight: 'normal'
  },
  buttonHoverStyle: {
    backgroundColor: '#fff',
    opacity: 1
  },
  imageStyle: {
    height: 400,
    width: 275
  }
};

var Coordinate = function (_Component) {
  _inherits(Coordinate, _Component);

  function Coordinate() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Coordinate);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Coordinate)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      styleDetail: null
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Coordinate, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var styleIdArray = this.props.styleId.split(',');

      // array of promises that is passed to promise.all
      // populate the promises list
      var styleDetailPromises = styleIdArray.map(function (rawStyleId) {
        return new Promise(function (resolve, reject) {
          _this2.fetchStyleDetails(rawStyleId, resolve, reject);
        });
      });

      // call promise.all to wait for completion of all API calls
      Promise.all(styleDetailPromises).then(function (styleDetails) {
        _this2.setState({
          styleDetail: styleDetails
        });
      }, function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._uniqueId = _uniqueId2.default.generate();
    }
  }, {
    key: 'getCarouselTiles',
    value: function getCarouselTiles(coordinateItems, productLink, key) {
      var _props = this.props;
      var imageStyle = _props.imageStyle;
      var buttonHoverStyle = _props.buttonHoverStyle;
      var buttonStyle = _props.buttonStyle;


      var imageMergeStyle = _stylePropable.mergeStyles.apply(this, [styles.imageStyle, imageStyle]);
      var hoverMergeStyle = _stylePropable.mergeStyles.apply(this, [styles.buttonHoverStyle, buttonHoverStyle]);
      var buttonMergeStyle = _stylePropable.mergeStyles.apply(this, [styles.buttonStyle, buttonStyle]);

      // disabling JSCS rule for not triggering errors on style API fields
      // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
      return coordinateItems.map(function (item, index) {
        return _react2.default.createElement(
          _Carousel.CarouselTile,
          { key: key },
          _react2.default.createElement(
            'a',
            { href: productLink, target: '_blank', style: { position: 'relative' } },
            _react2.default.createElement(_Image2.default, { key: index,
              style: imageMergeStyle,
              source: item.img_url_pc
            }),
            _react2.default.createElement(_Button2.default, { label: 'Preview',
              hoverStyle: hoverMergeStyle,
              style: buttonMergeStyle
            })
          )
        );
      });
    }
  }, {
    key: 'getCarousel',
    value: function getCarousel(productLink) {
      var _this3 = this;

      var styleDetail = this.state.styleDetail;

      if (styleDetail) {
        var carouselTileImages = styleDetail.map(function (styleDetailItem, key) {
          if (styleDetailItem) {
            var coordinateItems = styleDetailItem.result.coordinates[0].items;
            var productLinkUrl = productLink;
            productLinkUrl += styleDetailItem.result.photo.styleId;
            return _this3.getCarouselTiles(coordinateItems, productLinkUrl, key);
          }
        });

        return _react2.default.createElement(
          _Carousel2.default,
          { height: 400, autoScroll: false, animation: 'scroll', display: 3, navHead: true },
          carouselTileImages
        );
      }
    }
  }, {
    key: 'fetchStyleDetails',
    value: function fetchStyleDetails(rawStyleId, successCallback, failiureCallback) {
      var compContextConfig = this.context.compConfig;

      var compConfig = compContextConfig || _configurationManager2.default.getCompConfig(_baseConfig2.default);

      var _getRelevantContextKe = getRelevantContextKeys(compConfig);

      var coordinateContext = _getRelevantContextKe.coordinateContext;


      var styleIds = rawStyleId.trim();
      var urlObj = {
        lang: this.props.lang,
        locale: this.props.locale,
        limit: this.props.limit,
        styleId: styleIds
      };
      var productUrl = (0, _urlGenerator.generateUrl)(coordinateContext.styleUrl, urlObj);
      var queryData = { productUrl: productUrl };
      (0, _http.getApiDetail)(queryData, successCallback, failiureCallback);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var className = _props2.className;
      var id = _props2.id;
      var style = _props2.style;
      var mainContainerStyle = _props2.mainContainerStyle;
      var mainCopy = _props2.mainCopy;
      var mainCopyStyle = _props2.mainCopyStyle;
      var subContainerStyle = _props2.subContainerStyle;
      var subCopy = _props2.subCopy;
      var subCopyStyle = _props2.subCopyStyle;
      var compContextConfig = this.context.compConfig;

      var compConfig = compContextConfig || _configurationManager2.default.getCompConfig(_baseConfig2.default);

      var _getRelevantContextKe2 = getRelevantContextKeys(compConfig);

      var coordinateContext = _getRelevantContextKe2.coordinateContext;

      var productLink = coordinateContext.productLink;

      var getTheme = this.context.compTheme || _themeManager2.default.getCompTheme(_lightRawTheme2.default);
      var theme = getTheme && getTheme.coordinate;
      var textThemeColor = { color: theme.textColor };
      var inputId = id || this._uniqueId;

      var mergeStyle = _stylePropable.mergeStyles.apply(this, [styles.root, style]);
      var mainMergeStyle = _stylePropable.mergeStyles.apply(this, [styles.headingStyle, mainContainerStyle]);
      var mainCopyMergeStyle = _stylePropable.mergeStyles.apply(this, [styles.mainCopyStyle, textThemeColor, mainCopyStyle]);
      var subMergeStyle = _stylePropable.mergeStyles.apply(this, [styles.headingStyle, subContainerStyle]);
      var subCopyMergeStyle = _stylePropable.mergeStyles.apply(this, [styles.subCopyStyle, textThemeColor, subCopyStyle]);

      return _react2.default.createElement(
        'div',
        {
          id: inputId,
          className: className,
          style: mergeStyle
        },
        _react2.default.createElement(
          'div',
          { style: mainMergeStyle },
          _react2.default.createElement(_Heading2.default, {
            type: 'h2',
            headingText: mainCopy,
            style: mainCopyMergeStyle
          })
        ),
        _react2.default.createElement(
          'div',
          { style: subMergeStyle },
          _react2.default.createElement(_Heading2.default, {
            type: 'h3',
            headingText: subCopy,
            style: subCopyMergeStyle
          })
        ),
        this.getCarousel(productLink)
      );
    }
  }]);

  return Coordinate;
}(_react.Component);

Coordinate.propTypes = {
  buttonHoverStyle: object,
  buttonStyle: object,
  className: string,
  headingStyle: object,
  id: string,
  imageStyle: object,
  lang: string,
  limit: string,
  locale: string,
  mainCopy: string,
  mainContainerStyle: object,
  mainCopyStyle: object,
  /**
   * Override the inline-styles of the root element.
   */
  style: object,
  styleId: string,
  subCopy: string,
  subContainerStyle: object,
  subCopyStyle: object
};
Coordinate.contextTypes = {
  compTheme: object,
  compConfig: object
};
exports.default = (0, _contextPure2.default)(Coordinate);