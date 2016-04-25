'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _stylePropable = require('../../helpers/utils/stylePropable');

var _Swipable = require('../../core/Swipable');

var _Swipable2 = _interopRequireDefault(_Swipable);

var _Grid = require('../../core/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _GridCell = require('../../core/GridCell');

var _GridCell2 = _interopRequireDefault(_GridCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var object = _react.PropTypes.object;
var number = _react.PropTypes.number;
var node = _react.PropTypes.node;


var Collage = function Collage(props) {
  var children = props.children;
  var style = props.style;
  var cellPadding = props.cellPadding;
  var cellHeight = props.cellHeight;
  var cellWidth = props.cellWidth;


  var count = 1;
  var colmunLength = children.length;
  var renderChildren = _react2.default.Children.map(children, function (child, index) {
    if (count === 0) {
      count += 1;
    } else if (count === 1) {
      count += 1;
      return _react2.default.createElement(
        _GridCell2.default,
        { colSpan: 2, rowSpan: 2 },
        ' ',
        child
      );
    } else if (count === 2) {
      count = 0;
      return _react2.default.createElement(
        _GridCell2.default,
        { rowSpan: 2 },
        _react2.default.createElement(
          _Grid2.default,
          { maxCols: 1, cellHeight: cellHeight, cellPadding: cellPadding },
          _react2.default.createElement(
            _GridCell2.default,
            null,
            child
          ),
          _react2.default.createElement(
            _GridCell2.default,
            null,
            children[index + 1]
          )
        )
      );
    }
  });

  var rootStyle = (0, _stylePropable.mergeStyles)(style, { width: cellWidth * colmunLength });
  return _react2.default.createElement(
    _Swipable2.default,
    { pan: true },
    _react2.default.createElement(
      _Grid2.default,
      {
        style: rootStyle,
        maxCols: colmunLength,
        cellPadding: cellPadding,
        cellHeight: cellHeight
      },
      renderChildren
    )
  );
};

Collage.propTypes = {
  children: node.isRequired,
  cellPadding: number,
  cellHeight: number,
  cellWidth: number,
  style: object
};

Collage.defaultProps = {
  cellPadding: 1
};

exports.default = Collage;