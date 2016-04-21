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

const GridExampleUnpadded = () => (
  <div>
    <Grid cellHeight={64} cellPadding={0}>
      <GridCell colSpan={1} style={boxStyle}>1</GridCell>
      <GridCell colSpan={3} style={boxStyle}>3</GridCell>
      <GridCell colSpan={2} style={boxStyle}>2</GridCell>
      <GridCell colSpan={1} style={boxStyle}>1</GridCell>
      <GridCell colSpan={4} style={boxStyle}>4</GridCell>
      <GridCell colSpan={1} style={boxStyle}>1</GridCell>
      <GridCell colSpan={4} style={boxStyle}>4</GridCell>
      <GridCell colSpan={6} style={boxStyle}>6</GridCell>
      <GridCell colSpan={2} style={boxStyle}>2</GridCell>
    </Grid>
  </div>
);

export default GridExampleUnpadded;
