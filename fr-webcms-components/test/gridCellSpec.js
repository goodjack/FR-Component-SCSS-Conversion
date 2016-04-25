import React from 'react';
import ReactDOM from 'react-dom';
import Grid from 'core/Grid';
import GridCell from 'core/GridCell';
import injectTheme from './fixtures/injectTheme';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';

describe('GridCell', () => {
  let ThemedGrid;
  beforeEach(() => {
    ThemedGrid = injectTheme(Grid);
  });

  it('should display grid cells children when render the GridCell', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedGrid>
        <GridCell>
          <div>TestData1</div>
          <div>TestData2</div>
        </GridCell>
        <GridCell>
          <div>TestData2</div>
        </GridCell>
      </ThemedGrid>
    );
    const renNode = TestUtils.scryRenderedComponentsWithType(render, GridCell);
    const cell = ReactDOM.findDOMNode(renNode[0]);
    expect(cell.childNodes.length).to.equal(2);
  });

  it('should span to width provided according to number of columns', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedGrid maxCols={2}>
        <GridCell colSpan={1}>
          <p>TestData2</p>
        </GridCell>
      </ThemedGrid>
    );
    const renNode = TestUtils.scryRenderedComponentsWithType(render, Grid);
    const cellWrapper = TestUtils.scryRenderedDOMComponentsWithTag(renNode[0], 'div');
    const cell = ReactDOM.findDOMNode(cellWrapper[0]);
    expect(cell.childNodes[0].style.width).to.equal('50%');

    // width: (100 / maxCols * colSpan); ie, (100/2*1)
  });

  it('should have tag name for the tile root element of the tile when rootClass prop passed', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedGrid maxCols={2}>
        <GridCell colSpan={1} rootClass="section">
          <p>TestData2</p>
        </GridCell>
      </ThemedGrid>
    );
    const renNode = TestUtils.findRenderedComponentWithType(render, Grid);
    const cellWrapper = TestUtils.scryRenderedDOMComponentsWithTag(renNode, 'section');
    expect(cellWrapper.length).to.equal(1);
  });
});
