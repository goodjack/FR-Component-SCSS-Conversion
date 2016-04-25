import React, { Component, PropTypes } from 'react';
import { mergeStyles } from '../../helpers/utils/stylePropable';
import Grid from '../../core/Grid';

const { string, number, any } = PropTypes;

const styles = {
  root: {
    paddingLeft: '4%',
    paddingTop: '4%',
  },
};

const wrapWithGrid = (columnElements) => (
  <Grid
    maxCols={1}
    horizontalSpacing={0}
    verticalSpacing={15}
  >
    {columnElements}
  </Grid>
);

const getIrregularChildren = (children, columns, variation) => {

  const allChildren = React.Children.map(children, (child) => (
    React.cloneElement(child, { variation })
  ));

  const firstColumn = [];
  const secondColumn = [];

  let index = 0;

  while (index < allChildren.length) {
    if ((index + 2) % 2 === 0) {
      firstColumn.push(allChildren[index]);
    } else {
      secondColumn.push(allChildren[index]);
    }

    index++;
  }

  const irregularChildren = [wrapWithGrid(firstColumn), wrapWithGrid(secondColumn)];
  return irregularChildren;
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
    verticalSpacing: number,
    horizontalSpacing: number,
  };

  render() {
    const {
      cellHeight,
      cellWidth,
      columns,
      children,
      horizontalSpacing,
      style,
      variation,
      verticalSpacing,
    } = this.props;

    let renderChildren;
    if (variation === 'irregular') {
      renderChildren = getIrregularChildren(children, columns, variation);
    } else {
      renderChildren = React.Children.map(children, (child) => (
        React.cloneElement(child, { variation })
      ));
    }

    return (
      <Grid
        maxCols={columns}
        cellHeight={cellHeight}
        verticalSpacing={verticalSpacing}
        horizontalSpacing={horizontalSpacing}
        cellWidth={cellWidth}
        style={mergeStyles(styles.root, style)}
      >
        {renderChildren}
      </Grid>
    );
  }
}

export default TapableGrid;
