import React, { PropTypes, Component } from 'react';
import { mergeStyles, prepareStyles } from '../helpers/utils/stylePropable';
import { Colors } from '../helpers/styles';

const { node, object, number, func } = PropTypes;

const styles = {
  root: {
    display: 'block',
    textAlign: 'center',
  },
  wrapper: {
    display: 'inline-block',
    minWidth: 8,
    minHeight: 8,
    maxHeight: 75,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    cursor: 'pointer',
  },
  emptyChild: {
    marginLeft: 2,
    marginRight: 2,
    borderRadius: 5,
    backgroundColor: Colors.grey500,
  },
  highlight: {
    basic: {
      border: '1px outset',
    },
    emptyChild: {
      backgroundColor: Colors.grey800,
    },
  },
};

export default class CarouselHead extends Component {

  static propTypes = {
    // Childen nodes
    children: node,

    // Styfuncrent selected head
    current: number,

    // Style property to be applied to the carousel head content
    contentStyle: object,

    // Total heads available
    headCount: number,

    // Style to be applied to wrapper of the selected tab
    highlightStyle: object,

    // Event to be triggered on selecting the tab head
    onTouchTap: func,

    // Style property to be applied to the carousel head
    style: object,
  };

  state = {
    highlight: 0,
  };

  // to update theme inside state whenever a new theme is passed down
  // from the parent / owner using context
  componentWillReceiveProps(nextprops) {
    const { current } = this.props;
    if (nextprops.current !== undefined && nextprops.current !== current) {
      this.setState({ highlight: nextprops.current });
    }
  }

  handleClick(item) {
    try {
      const newitem = parseInt(item, 10);
      this.props.onTouchTap(newitem);
    } catch (err) {
      // Any error handling
    }
  }

  render() {
    const {
      children,
      style,
      headCount,
      current,
      highlightStyle,
      contentStyle,
      ...other,
    } = this.props;
    const { highlight } = this.state;
    let wrapperStyles = mergeStyles(styles.wrapper, style);

    let itemStyle;
    const mergedRootStyles = mergeStyles(styles.root, style);
    const availHead = React.Children.count(children);
    let renderedChildren;
    if (availHead) {
      const headWidth = (100 / availHead) - 0.3;
      wrapperStyles = mergeStyles(wrapperStyles, {
        width: `${headWidth}%`,
      });
      renderedChildren = React.Children.map(children, (child, index) => {
        const handleChildClick = this.handleClick.bind(this, index);
        itemStyle = wrapperStyles;
        let wrappedChild = React.cloneElement(child, {
          style: mergeStyles(child.props.style, {
            width: '100%',
            height: '100%',
          }),
        });
        if (highlight === index) {
          itemStyle = mergeStyles(itemStyle, styles.highlight.basic, highlightStyle);
          wrappedChild = React.cloneElement(child, {
            style: mergeStyles(child.props.style, {
              width: '100%',
              height: '100%',
            }, contentStyle),
          });
        }

        return (
          <div key={index}
            style={itemStyle}
            onClick={handleChildClick}
          >
            {wrappedChild}
          </div>
        );
      });
    } else if (headCount && headCount > 0) {
      renderedChildren = [];
      for (let count = 0; count < headCount; count++) {
        itemStyle = mergeStyles(wrapperStyles, styles.emptyChild);
        const handleEmptyClick = this.handleClick.bind(this, count);
        if (highlight === count) {
          itemStyle = mergeStyles(itemStyle, styles.highlight.emptyChild, highlightStyle);
        }

        renderedChildren.push(
          <div
            style={itemStyle}
            key={count}
            onClick={handleEmptyClick}
          >
          </div>
        );
      }
    }

    return (
      <div style={prepareStyles.apply(this, [mergedRootStyles])} {...other}>
        {renderedChildren}
      </div>
    );
  }
}
