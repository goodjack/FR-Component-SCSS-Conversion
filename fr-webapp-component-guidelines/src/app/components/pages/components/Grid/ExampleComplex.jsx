import React from 'react';
import Grid from 'uniqlo-ui/core/Grid';
import GridCell from 'uniqlo-ui/core/GridCell';

const boxStyle = {
  background: '#ccc',
  lineHeight: '60px',
  color: '#333',
  fontSize: '1em',
  textAlign: 'center',
  border:'1px solid #888',
};

const GridExampleComplex = () => (
  <div>
    <Grid cellHeight={64}>
      <GridCell colSpan={1} rowSpan={2} style={boxStyle}>1 x 2</GridCell>
      <GridCell colSpan={3} rowSpan={1} style={boxStyle}>3 x 1</GridCell>
      <GridCell colSpan={2} rowSpan={3} style={boxStyle}>2 x 3</GridCell>
      <GridCell colSpan={5} rowSpan={2} style={boxStyle}>5 x 2</GridCell>
      <GridCell colSpan={1} rowSpan={3} style={boxStyle}>1 x 3</GridCell>
    </Grid>
  </div>
);

export default GridExampleComplex;
