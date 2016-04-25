import React, { PropTypes, Component } from 'react';

const { oneOf, node, object } = PropTypes;

export default class TabbedCarousel extends Component {

  static propTypes = {

    // Childrens supplied to Carousel
    children: node,

    // position of the tab to be placed
    position: oneOf(['bottom', 'top']),

    // Style object
    style: object,
  };

  static defaultProps = {
    position: 'top',
  };

  state = {
    currentTab: 0,
  };

  onTabChange = (newIndex) => {
    if (newIndex >= 0) {
      this.setState({
        currentTab: newIndex,
      });
    }
  };

  renderChild() {
    const { children, position } = this.props;
    const { currentTab } = this.state;
    const carouselOverrides = {
      display: 1,
      tabHead: false,
      navHead: false,
      scroll: 1,
      current: currentTab,
      style: {
        display: 'block',
      },
      onSlide: this.onTabChange,
    };
    let carousel;
    let tabset;
    let content;
    content = [];
    React.Children.map(children, (child, index) => {
      const childName = child.type.name;
      if (childName === 'Carousel' && !carousel) {
        carouselOverrides.key = index;
        carousel = React.cloneElement(child, carouselOverrides);
      } else if (childName === 'Tabs' && !tabset) {
        tabset = React.cloneElement(child, {
          onTabChange: this.onTabChange,
          defaultTabIndex: currentTab,
          key: index,
        });
      } else {
        // Seems like there is more than one tabset and carousel.
        // Just Ignore them.
        return;
      }

    });
    if (position === 'top') {
      content.push(tabset);
      content.push(carousel);
    } else {
      content.push(carousel);
      content.push(tabset);
    }

    return content;
  }

  render() {
    return (
      <div>
        {this.renderChild()}
      </div>
    );
  }
}
