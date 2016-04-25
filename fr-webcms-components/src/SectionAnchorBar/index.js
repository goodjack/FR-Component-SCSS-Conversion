import React, { Component, PropTypes } from 'react';
import UniqueId from '../helpers/utils/uniqueId';
import { mergeStyles } from '../helpers/utils/stylePropable';
import composeContextPure from '../helpers/composedComponents/contextPure';

const { string, object, array } = PropTypes;
const styles = {
  container: {
    width: '100%',
    height: '100%',
  },
  list: {
    margin: 0,
    padding: 0,
    textAlign: 'center',
    listStyle: 'none',
    display: 'flex',
    overflow: 'hidden',
  },
};

class SectionAnchorBar extends Component {

  static propTypes = {
    children: array,
    className: string,
    id: string,
    listStyle: object,
    /**
     * Override the inline-styles of the root element.
     */
    style: object,
  };

  componentDidMount() {
    this._uniqueId = UniqueId.generate();
  }

  render() {
    const {
      className,
      id,
      style,
      listStyle,
    } = this.props;

    const inputId = id || this._uniqueId;

    return (
      <div
        id={inputId}
        className={className}
        style={mergeStyles.apply(this, [styles.container, style])}
      >
        <ul style={mergeStyles.apply(this, [styles.list, listStyle])}>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

export default composeContextPure(SectionAnchorBar);
