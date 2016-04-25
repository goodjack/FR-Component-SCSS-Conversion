'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _stylePropable = require('../../helpers/utils/stylePropable');

var _Grid = require('../../core/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var string = _react.PropTypes.string;
var number = _react.PropTypes.number;
var any = _react.PropTypes.any;


var styles = {
  root: {
    paddingLeft: '4%',
    paddingTop: '4%'
  }
};

var wrapWithGrid = function wrapWithGrid(columnElements) {
  return _react2.default.createElement(
    _Grid2.default,
    {
      maxCols: 1,
      horizontalSpacing: 0,
      verticalSpacing: 15
    },
    columnElements
  );
};

var getIrregularChildren = function getIrregularChildren(children, columns, variation) {

  var allChildren = _react2.default.Children.map(children, function (child) {
    return _react2.default.cloneElement(child, { variation: variation });
  });

  var firstColumn = [];
  var secondColumn = [];

  var index = 0;

  while (index < allChildren.length) {
    if ((index + 2) % 2 === 0) {
      firstColumn.push(allChildren[index]);
    } else {
      secondColumn.push(allChildren[index]);
    }

    index++;
  }

  var irregularChildren = [wrapWithGrid(firstColumn), wrapWithGrid(secondColumn)];
  return irregularChildren;
};

var TapableGrid = function (_Component) {
  _inherits(TapableGrid, _Component);

  function TapableGrid() {
    _classCallCheck(this, TapableGrid);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TapableGrid).apply(this, arguments));
  }

  _createClass(TapableGrid, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var cellHeight = _props.cellHeight;
      var cellWidth = _props.cellWidth;
      var columns = _props.columns;
      var children = _props.children;
      var horizontalSpacing = _props.horizontalSpacing;
      var style = _props.style;
      var variation = _props.variation;
      var verticalSpacing = _props.verticalSpacing;


      var renderChildren = void 0;
      if (variation === 'irregular') {
        renderChildren = getIrregularChildren(children, columns, variation);
      } else {
        renderChildren = _react2.default.Children.map(children, function (child) {
          return _react2.default.cloneElement(child, { variation: variation });
        });
      }

      return _react2.default.createElement(
        _Grid2.default,
        {
          maxCols: columns,
          cellHeight: cellHeight,
          verticalSpacing: verticalSpacing,
          horizontalSpacing: horizontalSpacing,
          cellWidth: cellWidth,
          style: (0, _stylePropable.mergeStyles)(styles.root, style)
        },
        renderChildren
      );
    }
  }]);

  return TapableGrid;
}(_react.Component);

TapableGrid.propTypes = {
  children: any,
  variation: string.isRequired,
  columns: number,
  cellHeight: number,
  cellWidth: number,
  cellPadding: number,
  style: string,
  verticalSpacing: number,
  horizontalSpacing: number
};
exports.default = TapableGrid;