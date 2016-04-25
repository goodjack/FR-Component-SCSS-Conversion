import React, { Component, PropTypes } from 'react';
import { mergeStyles } from '../helpers/utils/stylePropable';
import composeContextPure from '../helpers/composedComponents/contextPure';
import Text from '../Text';
const { string, object, func, array } = PropTypes;

const styles = {
  listBody: {
    width: '100%',
    listStyle: 'none',
    float: 'left',
    padding: '0',
    margin: '0',
    position: 'relative',
  },
  root: {
    display: 'block',
    width: '100%',
    float: 'left',
  },
  headTextStyle: {
    display: 'block',
  },
};
const noop = () => null;
class Chip extends Component {

static propTypes = {
  children: React.PropTypes.oneOfType([
    array,
    object,
  ]).isRequired,
  className: string,
  chipsBodyStyle: object,
  headingText: string,
  headingTextStyle: object,
  onMouseClick: func,
  onMouseEnter: func,
  onMouseLeave: func,
  onTouchTap: func,
  style: object,
};

static defaultProps = {
  onMouseClick: noop,
  onMouseEnter: noop,
  onMouseLeave: noop,
  onTouchTap: noop,
};
 state = {
   colorName: null,
 };

  getHoveredData = (data, event) => {
    this.setState({ colorName: data });
    this.props.onMouseEnter(event);
  };

   getChildren = (children) => {
     let clicked = false;
     const renderChildren = React.Children.map(children,
       (child, index) => {
         clicked = false;
         if (this.state.id === index) clicked = true;
         return React.cloneElement(child, {
           clickCallBack: this.handleClick,
           hoverCallBack: this.getHoveredData,
           hoverOutCallBack: this.handleMouseOut,
           clicked,
           refId: index,
         });
       });
     return renderChildren;
   };

   handleClick = (getid, event) => {
     this.setState({ id: getid });
     this.props.onMouseClick(event);
     this.props.onTouchTap(event);
   };

   handleMouseOut = (event) => {
     this.props.onMouseLeave(event);
   };

  render() {
    const {
      headingText,
      headingTextStyle,
      children,
      chipsBodyStyle,
      className,
      style,
      ...other,
    } = this.props;

    const headingStyle = mergeStyles.apply(this, [styles.headTextStyle, headingTextStyle]);
    const ulStyle = mergeStyles.apply(this, [styles.listBody, chipsBodyStyle]);
    const renderChildren = this.getChildren(children);

    return (
      <div
        className= {className}
        style={mergeStyles.apply(this, [styles.root, style])}
      >
        <Text style ={headingStyle}>{headingText}{this.state.colorName}</Text>
        <ul style= {ulStyle}>
          {renderChildren}
        </ul>
      </div>
    );
  }

}

export default composeContextPure(Chip);
