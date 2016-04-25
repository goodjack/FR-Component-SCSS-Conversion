'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _uniqueId = require('../helpers/utils/uniqueId');

var _uniqueId2 = _interopRequireDefault(_uniqueId);

var _stylePropable = require('../helpers/utils/stylePropable');

var _contextPure = require('../helpers/composedComponents/contextPure');

var _contextPure2 = _interopRequireDefault(_contextPure);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var string = _react.PropTypes.string;
var object = _react.PropTypes.object;
var array = _react.PropTypes.array;
var bool = _react.PropTypes.bool;
var oneOfType = _react.PropTypes.oneOfType;

var styles = {
  container: {
    width: '100%'
  }
};

var Accordion = function (_Component) {
  _inherits(Accordion, _Component);

  function Accordion() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Accordion);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Accordion)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      id: null
    }, _this.handleClick = function (itemReferenceId) {
      _this.setState({ id: itemReferenceId });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Accordion, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._uniqueId = _uniqueId2.default.generate();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var className = _props.className;
      var id = _props.id;
      var children = _props.children;
      var expandMultipleTab = _props.expandMultipleTab;
      var style = _props.style;


      var inputId = id || this._uniqueId;
      var mutipleActive = true;
      var tileId = this.state.id;

      var renderChildren = _react2.default.Children.map(children, function (child, index) {
        var tileActiveBlock = false;
        if (tileId === index) {
          tileActiveBlock = true;
        }

        var childExpandTab = child.props.expandTab;
        if (expandMultipleTab) {
          if (childExpandTab === true && tileId === null) {
            tileActiveBlock = true;
          }
        } else {
          if (childExpandTab === true && tileId === null && mutipleActive) {
            mutipleActive = false;
            tileActiveBlock = true;
          }
        }

        return _react2.default.cloneElement(child, {
          showIcon: child.props.showIcon,
          hideIcon: child.props.hideIcon,
          accordionCallback: _this2.handleClick,
          expandTab: tileActiveBlock,
          itemReferenceId: index,
          expandMultipleTabs: expandMultipleTab
        });
      });

      return _react2.default.createElement(
        'div',
        {
          id: inputId,
          className: className,
          style: _stylePropable.mergeStyles.apply(this, [styles.container, style])
        },
        renderChildren
      );
    }
  }]);

  return Accordion;
}(_react.Component);

Accordion.propTypes = {
  children: oneOfType([array, object]),
  className: string,
  id: string,
  expandMultipleTab: bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _react2.default.PropTypes.object
};
exports.default = (0, _contextPure2.default)(Accordion);