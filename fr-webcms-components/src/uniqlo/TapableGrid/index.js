import React, { Component, PropTypes } from 'react';
import { mergeStyles } from '../../helpers/utils/stylePropable';
import Grid from 'core/Grid';

const { string, number, any } = PropTypes;

const styles = {
  root: {
    paddingTop: 15,
  },
};

class TapableGrid extends Component {

  static propTypes = {
    children: any,
    variation: string.isRequired,
    columns: number,
    cellHeight: number,
    cellWidth: number,
    cellPadding: number,
    style: string,
  };

  render() {
    const {
      cellHeight,
      cellWidth,
      cellPadding,
      columns,
      children,
      style,
      variation,
    } = this.props;

    const renderChildren = React.Children.map(children, (child) => (
      React.cloneElement(child, { variation })
    ));

    return (
      <Grid
        maxCols={columns}
        cellHeight={cellHeight}
        cellPadding={cellPadding}
        cellWidth={cellWidth}
        style={mergeStyles(styles.root, style)}
      >
        {renderChildren}
      </Grid>
    );
  }
}

export default TapableGrid;
