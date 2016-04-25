'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Tabs = require('../uniqlo/Tabs');

var _Tabs2 = _interopRequireDefault(_Tabs);

var _contextPure = require('../helpers/composedComponents/contextPure');

var _contextPure2 = _interopRequireDefault(_contextPure);

var _SortList = require('./SortList');

var _SortList2 = _interopRequireDefault(_SortList);

var _ColorGrid = require('./ColorGrid');

var _ColorGrid2 = _interopRequireDefault(_ColorGrid);

var _LengthGrid = require('./LengthGrid');

var _LengthGrid2 = _interopRequireDefault(_LengthGrid);

var _SizeGrid = require('./SizeGrid');

var _SizeGrid2 = _interopRequireDefault(_SizeGrid);

var _FeatureGrid = require('./FeatureGrid');

var _FeatureGrid2 = _interopRequireDefault(_FeatureGrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var string = _react.PropTypes.string;


var styles = {
  imageStyle: {
    width: '100%',
    height: '57'
  }
};

var Filters = function (_Component) {
  _inherits(Filters, _Component);

  function Filters() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Filters);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Filters)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      sortListindex: null,
      colorIndex: null,
      lengthIndex: null,
      sizeIndex: null,
      featureIndex: null
    }, _this.setIndex = function (index, child) {

      if (child === 'List') {
        _this.setState({ sortListindex: index });
      } else if (child === 'Color') {
        _this.setState({ colorIndex: index });
      } else if (child === 'Length') {
        _this.setState({ lengthIndex: index });
      } else if (child === 'Size') {
        _this.setState({ sizeIndex: index });
      } else if (child === 'Feature') {
        _this.setState({ featureIndex: index });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Filters, [{
    key: 'render',
    value: function render() {
      var imageStyle = styles.imageStyle;
      var _state = this.state;
      var sortListindex = _state.sortListindex;
      var colorIndex = _state.colorIndex;
      var lengthIndex = _state.lengthIndex;
      var sizeIndex = _state.sizeIndex;
      var featureIndex = _state.featureIndex;
      var _props = this.props;
      var sortData = _props.sortData;
      var colorData = _props.colorData;
      var lengthData = _props.lengthData;
      var featureData = _props.featureData;
      var sizeData = _props.sizeData;
      var sortImage = _props.sortImage;
      var sortClickImg = _props.sortClickImg;
      var colorImage = _props.colorImage;
      var colorClickImg = _props.colorClickImg;
      var lengthImage = _props.lengthImage;
      var lengthClickImg = _props.lengthClickImg;
      var priceImage = _props.priceImage;
      var priceClickImg = _props.priceClickImg;
      var featureImage = _props.featureImage;
      var featureClickImg = _props.featureClickImg;
      var sizeImage = _props.sizeImage;
      var sizeClickImg = _props.sizeClickImg;
      var waterMarkImage = _props.waterMarkImage;
      var plusSign = _props.plusSign;
      var tickSign = _props.tickSign;


      return _react2.default.createElement(
        _Tabs2.default,
        { cols: 6, padding: 0 },
        _react2.default.createElement(
          _Tabs.Tab,
          {
            imageStyle: imageStyle,
            defaultImage: sortImage,
            hoverImage: sortClickImg
          },
          _react2.default.createElement(_SortList2.default, {
            sortData: sortData,
            passIndex: sortListindex,
            setIndex: this.setIndex,
            tickSign: tickSign
          })
        ),
        _react2.default.createElement(
          _Tabs.Tab,
          {
            imageStyle: imageStyle,
            defaultImage: colorImage,
            hoverImage: colorClickImg
          },
          _react2.default.createElement(_ColorGrid2.default, {
            colorData: colorData,
            passIndex: colorIndex,
            waterMarkImage: waterMarkImage,
            setColorState: this.setIndex
          })
        ),
        _react2.default.createElement(
          _Tabs.Tab,
          {
            imageStyle: imageStyle,
            defaultImage: lengthImage,
            hoverImage: lengthClickImg
          },
          _react2.default.createElement(_LengthGrid2.default, {
            lengthData: lengthData,
            passIndex: lengthIndex,
            setLengthState: this.setIndex
          })
        ),
        _react2.default.createElement(_Tabs.Tab, {
          imageStyle: imageStyle,
          defaultImage: priceImage,
          hoverImage: priceClickImg
        }),
        _react2.default.createElement(
          _Tabs.Tab,
          {
            imageStyle: imageStyle,
            defaultImage: featureImage,
            hoverImage: featureClickImg
          },
          _react2.default.createElement(_FeatureGrid2.default, {
            featureData: featureData,
            passIndex: featureIndex,
            plusSign: plusSign,
            tickSign: tickSign,
            setSizeState: this.setIndex
          })
        ),
        _react2.default.createElement(
          _Tabs.Tab,
          {
            imageStyle: imageStyle,
            defaultImage: sizeImage,
            hoverImage: sizeClickImg
          },
          _react2.default.createElement(_SizeGrid2.default, {
            sizeData: sizeData,
            passIndex: sizeIndex,
            setSizeState: this.setIndex
          })
        )
      );
    }
  }]);

  return Filters;
}(_react.Component);

Filters.propTypes = {
  sizeData: string,
  sortData: string,
  colorData: string,
  lengthData: string,
  featureData: string,
  sortImage: string,
  sortClickImg: string,
  colorImage: string,
  colorClickImg: string,
  lengthImage: string,
  lengthClickImg: string,
  priceImage: string,
  priceClickImg: string,
  featureImage: string,
  featureClickImg: string,
  sizeImage: string,
  sizeClickImg: string,
  waterMarkImage: string,
  plusSign: string,
  tickSign: string
};
exports.default = (0, _contextPure2.default)(Filters);