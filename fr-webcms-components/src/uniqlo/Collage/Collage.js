import React, { PropTypes } from 'react';
import { mergeStyles } from '../../helpers/utils/stylePropable';
import Swipable from '../../core/Swipable';
import Grid from '../../core/Grid';
import GridCell from '../../core/GridCell';

const {
  object,
  number,
  node,
} = PropTypes;

const Collage = props => {
  const {
    children,
    style,
    cellPadding,
    cellHeight,
    cellWidth,
  } = props;

  let count = 1;
  const colmunLength = children.length;
  const renderChildren = React.Children.map(children, (child, index) => {
    if (count === 0) {
      count += 1;
    } else if (count === 1) {
      count += 1;
      return (<GridCell colSpan={2} rowSpan={2}> {child}</GridCell>);
    } else if (count === 2) {
      count = 0;
      return (<GridCell rowSpan={2} >
        <Grid maxCols={1} cellHeight={cellHeight} cellPadding={cellPadding} >
          <GridCell >{child}</GridCell>
          <GridCell >{children[index + 1]}</GridCell>
        </Grid>
      </GridCell>);
    }
  });

  const rootStyle = mergeStyles(style, { width: cellWidth * colmunLength });
  return (
      <Swipable pan >
        <Grid
          style={rootStyle}
          maxCols={colmunLength}
          cellPadding={cellPadding}
          cellHeight={cellHeight}
        >{renderChildren}
        </Grid>
      </Swipable>
  );
};

Collage.propTypes = {
  children: node.isRequired,
  cellPadding: number,
  cellHeight: number,
  cellWidth: number,
  style: object,
};

Collage.defaultProps = {
  cellPadding: 1,
};

export default Collage;
