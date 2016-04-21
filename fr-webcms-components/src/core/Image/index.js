import React, { Component, PropTypes } from 'react';
import UniqueId from '../../helpers/utils/uniqueId';
import { mergeStyles } from '../../helpers/utils/stylePropable';

const { string, func, object } = PropTypes;

const styles = {
  imageStyle: {
    border: 'none',
  },
};

class Image extends Component {

  static propTypes = {
    alternateText: string,
    className: string,
    id: string,
    onLoad: func,
    source: string,
    style: object,
  };

  static defaultProps = {
    source: '',
    onLoad: () => null,
  };

  componentDidMount() {
    this._uniqueId = UniqueId.generate();
  }

  handleOnLoad = event => {
    if (this.props.onLoad) this.props.onLoad(event);
  };

  render() {
    const {
      alternateText,
      className,
      id,
      source,
      style,
    } = this.props;

    const inputId = id || this._uniqueId;

    return (
      <img
        className={className}
        id={inputId}
        src={source}
        style={mergeStyles(styles.imageStyle, style)}
        alt={alternateText}
        onLoad={this.handleOnLoad}
      />
    );
  }
}

export default Image;
