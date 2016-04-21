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

const GridExampleBasic = () => (
  <div>
    <Grid cellHeight={64}>
      <GridCell style={boxStyle}>1</GridCell>
      <GridCell style={boxStyle}>1</GridCell>
      <GridCell style={boxStyle}>1</GridCell>
      <GridCell style={boxStyle}>1</GridCell>
      <GridCell style={boxStyle}>1</GridCell>
      <GridCell style={boxStyle}>1</GridCell>
      <GridCell style={boxStyle}>1</GridCell>
      <GridCell style={boxStyle}>1</GridCell>
      <GridCell style={boxStyle}>1</GridCell>
      <GridCell style={boxStyle}>1</GridCell>
      <GridCell style={boxStyle}>1</GridCell>
      <GridCell style={boxStyle}>1</GridCell>
    </Grid>
  </div>
);

export default GridExampleBasic;
