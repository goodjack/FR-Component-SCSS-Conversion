'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _stylePropable = require('../../helpers/utils/stylePropable');

var _GridCell = require('../../core/GridCell');

var _GridCell2 = _interopRequireDefault(_GridCell);

var _Text = require('../../Text');

var _Text2 = _interopRequireDefault(_Text);

var _Image = require('../../core/Image');

var _Image2 = _interopRequireDefault(_Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var string = _react.PropTypes.string;
var number = _react.PropTypes.number;
var any = _react.PropTypes.any;
var object = _react.PropTypes.object;


var styles = {
  root: {
    boxSizing: 'border-box',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#B1B1B1',
    display: 'block',
    textDecoration: 'none'
  },
  heading: {
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: 'bolder',
    color: '#1B1B1B',
    textAlign: 'center',
    display: 'block'
  },
  subheading: {
    color: '#1B1B1B',
    display: 'block',
    fontSize: 10,
    lineHeight: '12px',
    textAlign: 'center',
    padding: 10,
    paddingBottom: 30
  },
  regular: {
    root: {},
    heading: {
      fontSize: 13,
      lineHeight: '15px',
      paddingTop: 30,
      paddingBottom: 10
    },
    subheading: {
      paddingTop: 0
    }
  },
  spaced: {
    root: {
      boxShadow: '0 1px 5px #7D7D7D',
      paddingRight: 0
    },
    heading: {
      fontSize: 10,
      lineHeight: '12px',
      paddingTop: 30,
      paddingBottom: 0
    },
    subheading: {
      paddingTop: 10
    },
    cellStyle: {
      margin: 3,
      height: 105,
      border: '1px solid #7D7D7D'
    }
  },
  irregular: {
    root: {
      boxShadow: '0 1px 5px #7D7D7D'
    },
    heading: {
      textTransform: 'none',
      fontWeight: 'lighter',
      fontSize: 14,
      lineHeight: '12px',
      paddingTop: 10
    },
    subheading: {
      textTransform: 'uppercase',
      fontSize: 14,
      fontWeight: 'bolder',
      paddingBottom: 15
    },
    cellStyle: {
      margin: 3,
      height: 'auto',
      display: 'block',
      verticalAlign: 'middle',
      border: '1px solid #7D7D7D'
    }
  },
  image: {
    display: 'block',
    padding: 10,
    paddingBottom: 0,
    width: 'calc(100% - 20px)'
  },
  divider: {
    display: 'block',
    textAlign: 'center',
    lineHeight: '10px'
  }
};

var TapableItem = function TapableItem(props) {
  var divider = props.divider;
  var dividerStyle = props.dividerStyle;
  var heading = props.heading;
  var headStyle = props.headStyle;
  var imageSrc = props.imageSrc;
  var imageStyle = props.imageStyle;
  var link = props.link;
  var style = props.style;
  var subheading = props.subheading;
  var subheadStyle = props.subheadStyle;
  var variation = props.variation;


  var rootStyles = (0, _stylePropable.mergeStyles)(styles.root, styles[variation].root, style);
  var headingStyles = (0, _stylePropable.mergeStyles)(styles.heading, styles[variation].heading, headStyle);
  if (variation === 'irregular' && !imageSrc) {
    headingStyles = (0, _stylePropable.mergeStyles)(headingStyles, { paddingTop: 20 });
  }

  var subheadingStyles = (0, _stylePropable.mergeStyles)(styles.subheading, styles[variation].subheading, subheadStyle);

  return _react2.default.createElement(
    _GridCell2.default,
    {
      rootClass: 'a',
      href: link,
      target: '_blank',
      style: rootStyles
    },
    _react2.default.createElement(
      'div',
      { style: styles[variation].cellStyle },
      imageSrc && _react2.default.createElement(_Image2.default, {
        source: imageSrc,
        style: (0, _stylePropable.mergeStyles)(styles.image, imageStyle)
      }),
      _react2.default.createElement(_Text2.default, { content: heading, style: headingStyles }),
      variation === 'spaced' && _react2.default.createElement(_Text2.default, {
        content: divider,
        style: (0, _stylePropable.mergeStyles)(styles.divider, dividerStyle)
      }),
      _react2.default.createElement(_Text2.default, { content: subheading, style: subheadingStyles })
    )
  );
};

TapableItem.propTypes = {
  accentColor: string,
  children: any,
  divider: string,
  dividerStyle: string,
  heading: string,
  headStyle: object,
  imageSrc: string,
  imageStyle: object,
  link: string,
  rowSpan: number,
  style: string,
  subheading: string,
  subheadStyle: object,
  variation: string.isRequired
};

TapableItem.defaultProps = {
  divider: '.......',
  variation: 'regular'
};

exports.default = TapableItem;