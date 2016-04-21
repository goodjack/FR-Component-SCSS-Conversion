'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _stylePropable = require('../../helpers/utils/stylePropable');

var _GridCell = require('core/GridCell');

var _GridCell2 = _interopRequireDefault(_GridCell);

var _Text = require('Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var string = _react.PropTypes.string;
var number = _react.PropTypes.number;
var any = _react.PropTypes.any;
var object = _react.PropTypes.object;


var styles = {
  root: {
    boxSizing: 'border-box',
    border: '1px solid #B1B1B1',
    display: 'block'
  },
  heading: {
    padding: 10,
    paddingTop: 30,
    textAlign: 'center',
    display: 'block',
    fontWeight: 'bolder'
  },
  description: {
    display: 'block',
    fontSize: 10,
    lineHeight: '12px',
    textAlign: 'center',
    padding: 10,
    paddingBottom: 30
  },
  normal: {
    heading: {
      fontSize: 13,
      lineHeight: '15px',
      paddingBottom: 10
    },
    description: {
      paddingTop: 0
    },
    cellStyle: {}
  },
  spaced: {
    root: {
      boxShadow: '0 1px 5px #7D7D7D'
    },
    heading: {
      fontSize: 10,
      lineHeight: '12px',
      paddingTop: 30,
      paddingBottom: 0
    },
    description: {
      paddingTop: 10
    },
    cellStyle: {
      margin: 3,
      height: 118,
      border: '1px solid #7D7D7D'
    }
  },
  divider: {
    display: 'block',
    textAlign: 'center',
    lineHeight: '10px'
  }
};

var TapableItem = function TapableItem(props) {
  var heading = props.heading;
  var headStyle = props.headStyle;
  var description = props.description;
  var descStyle = props.descStyle;
  var dividerStyle = props.dividerStyle;
  var style = props.style;
  var variation = props.variation;


  var dividerContent = '.......';
  var rootStyles = (0, _stylePropable.mergeStyles)(styles.root, styles[variation].root, style);
  var headingStyles = (0, _stylePropable.mergeStyles)(styles.heading, styles[variation].heading, headStyle);
  var descriptionStyles = (0, _stylePropable.mergeStyles)(styles.description, styles[variation].description, descStyle);

  return _react2.default.createElement(
    _GridCell2.default,
    { style: rootStyles },
    _react2.default.createElement(
      'div',
      { style: styles[variation].cellStyle },
      _react2.default.createElement(_Text2.default, { content: heading, style: headingStyles }),
      variation === 'spaced' && _react2.default.createElement(_Text2.default, { content: dividerContent, style: (0, _stylePropable.mergeStyles)(styles.divider, dividerStyle) }),
      _react2.default.createElement(_Text2.default, { content: description, style: descriptionStyles })
    )
  );
};

TapableItem.propTypes = {
  children: any,
  rowSpan: number,
  accentColor: string,
  heading: string,
  headStyle: object,
  description: string,
  descStyle: object,
  imageSrc: string,
  style: string,
  dividerStyle: string,
  divider: string,
  variation: string
};

TapableItem.defaultProps = {
  variation: 'normal'
};

exports.default = TapableItem;