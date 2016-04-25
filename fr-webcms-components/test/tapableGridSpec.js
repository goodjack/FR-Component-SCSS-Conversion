import React from 'react';
import TapableGrid from 'uniqlo/TapableGrid';
import TapableItem from 'uniqlo/TapableGrid/TapableItem';
import GridCell from 'core/GridCell';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import { expect } from 'chai';

describe('TapableGrid', () => {

  it('should capture props is passed', () => {
    const render = TestUtils.renderIntoDocument(
      <TapableGrid horizontalSpacing={0} columns={2} cellHeight={100} cellWidth={200} variation="regular">
        <TapableItem />
        <TapableItem />
      </TapableGrid>
    );
    expect(render.props.variation).to.equal('regular');
    expect(render.props.horizontalSpacing).to.equal(0);
    expect(render.props.columns).to.equal(2);
    expect(render.props.cellHeight).to.equal(100);
    expect(render.props.cellWidth).to.equal(200);
  });

  it('should render children TapableItems as GridCells', () => {
    const render = TestUtils.renderIntoDocument(
      <TapableGrid variation="spaced">
        <TapableItem />
        <TapableItem />
      </TapableGrid>
    );
    const renNode = TestUtils.scryRenderedComponentsWithType(render, GridCell);
    expect(renNode.length).to.equal(2);
  });

  it('should check if the styles are being applied correctly for spaced variation', () => {
    const render = TestUtils.renderIntoDocument(
      <TapableGrid variation="spaced">
        <TapableItem />
      </TapableGrid>
    );
    const renNode = TestUtils.findRenderedComponentWithType(render, GridCell);
    const element = ReactDOM.findDOMNode(renNode);
    expect(element.style['box-shadow']).to.equal('rgb(125, 125, 125) 0px 1px 5px');
  });

});
