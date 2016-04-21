import React, { Component, PropTypes } from 'react';
import Grid from '../../core/Grid';
import GridCell from '../../core/GridCell';

const {
  object,
  number,
  func,
  node,
} = PropTypes;

const renderChildren = (me) => {
  const {
    activeIndex,
    columns,
  } = me.state;
  const updateTabSet = me.updateTabSet;
  let content;
  const children = React.Children.map(me.props.children, (child, index) => {
    const tabContent = child.props.children;
    if (child.type.name === 'Tab') {
      if (activeIndex === index && tabContent) {
        content = (
          <GridCell
            colSpan={columns}
            key={index}
          >
            {tabContent}
          </GridCell>
        );
      }

      return (
        <GridCell key={index}>
          {
            React.cloneElement(child, {
              index,
              updateTabSet,
              active: activeIndex === index ? true : false,
            })
          }
        </GridCell>
      );
    }
  });
  if (content) {
    children.push(content);
  }

  return children;
};

class Tabs extends Component {

  static propTypes = {
    children: node.isRequired,
    cols: number,
    defaultTabIndex: number,
    onTabChange: func,
    padding: number,
    style: object,
  };

  static defaultProps = {
    onTabChange: () => null,
    cols: 0,
    padding: 0,
  };

  componentWillMount = () => {
    const {
      cols,
      defaultTabIndex,
      children,
    } = this.props;
    let columns = cols;
    let isTab = false;
    let defaultIndex = defaultTabIndex;
    React.Children.forEach(children, (child) => {
      if (child.props.children) {
        isTab = true;
      }

      if (child.type.name === 'Tab' && cols === 0) {
        columns++;
      }
    });
    if (!defaultIndex && isTab) {
      defaultIndex = 0;
    }

    this.setState({
      activeIndex: defaultIndex,
      columns,
    });
  };

  componentWillReceiveProps = (nextProps) => {
    if (this.props.defaultTabIndex !== nextProps.defaultTabIndex && nextProps.defaultTabIndex) {
      this.setState({
        activeIndex: nextProps.defaultTabIndex,
      });
    }
  };

  updateTabSet = (index) => {
    this.setState({ activeIndex: index });
    this.props.onTabChange(index);
  };

  render() {
    const _this = this;
    const {
      padding,
      style,
      ...other,
    } = _this.props;
    const { columns } = _this.state;
    const gridContent = renderChildren(_this);
    return (
      <Grid maxCols={columns} cellPadding={padding} style={style}>
        {gridContent}
      </Grid>
    );
  }
}

export default Tabs;
