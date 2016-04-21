import React, { Component, PropTypes } from 'react';
import UniqueId from '../helpers/utils/uniqueId';
import { mergeStyles } from '../helpers/utils/stylePropable';
import composeContextPure from '../helpers/composedComponents/contextPure';

const { string, object, array, bool, oneOfType } = PropTypes;
const styles = {
  container: {
    width: '100%',
  },
};

class Accordion extends Component {

  static propTypes = {
    children: oneOfType([array, object]),
    className: string,
    id: string,
    expandMultipleTab: bool,
    /**
     * Override the inline-styles of the root element.
     */
    style: React.PropTypes.object,
  };

  state = {
    id: null,
  };

  componentDidMount() {
    this._uniqueId = UniqueId.generate();
  }

  handleClick = (itemReferenceId) => {
    this.setState({ id: itemReferenceId });
  };

  render() {
    const {
      className,
      id,
      children,
      expandMultipleTab,
      style,
    } = this.props;

    const inputId = id || this._uniqueId;
    let mutipleActive = true;
    const tileId = this.state.id;

    const renderChildren = React.Children.map(children, (child, index) => {
      let tileActiveBlock = false;
      if (tileId === index) {
        tileActiveBlock = true;
      }

      const childExpandTab = child.props.expandTab;
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

      return React.cloneElement(child, {
        showIcon: child.props.showIcon,
        hideIcon: child.props.hideIcon,
        accordionCallback: this.handleClick,
        expandTab: tileActiveBlock,
        itemReferenceId: index,
        expandMultipleTabs: expandMultipleTab,
      });
    });

    return (
      <div
        id={inputId}
        className={className}
        style={mergeStyles.apply(this, [styles.container, style])}
      >
        {renderChildren}
      </div>
    );
  }
}

export default composeContextPure(Accordion);
