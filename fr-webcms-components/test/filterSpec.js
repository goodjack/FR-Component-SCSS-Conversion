import React from 'react';

// import ReactDOM from 'react-dom';
import injectTheme from './fixtures/injectTheme';
import Tabs, { Tab } from 'uniqlo/Tabs';
import Grid from 'core/Grid';
import GridCell from 'core/GridCell';
import { ListItem } from 'core/List';
import Filter from 'Filter';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';

// import { spy } from 'sinon';
const sizeData = '32,34,36,38,40';
const colorData = 'RED,BLUE,BROWN,GREY,GREEN';
const featureData = 'LONG SLEEVE,3/4 SLEEVE,SHORT SLEEVE,SUPIMA COTTON,STRAIGHT BOAT NECK,' +
'HEATTECH,MODAL LINEN,SUPIMA MODEL';
const lengthData = 'XS,S,M,L,XL,XXl';
const sortData = 'Featured,New Arrival First,Price: Low To High,' +
'Price: High To Low,Customer Rating';

describe('Filter', () => {
  let ThemedFilter;

  beforeEach(() => {
    ThemedFilter = injectTheme(Filter);
  });

  it('should render Tab components as children.', () => {
    const render = TestUtils.renderIntoDocument(
    <ThemedFilter sizeData = {sizeData}
      sortData ={sortData}
      colorData ={colorData}
      lengthData ={lengthData}
      featureData ={featureData}
    />);

    const tabNodes = TestUtils.scryRenderedComponentsWithType(render, Tab);
    expect(tabNodes.length).to.equal(6);

  });
  it('should render List components as Tabs children.', () => {
    const render = TestUtils.renderIntoDocument(
    <ThemedFilter sizeData = {sizeData}
      sortData ={sortData}
      colorData ={colorData}
      lengthData ={lengthData}
      featureData ={featureData}
    />);

    const tabNodes = TestUtils.scryRenderedComponentsWithType(render, Tabs);
    const listNode = TestUtils.scryRenderedComponentsWithType(tabNodes[0], ListItem);
    expect(listNode.length).to.equal(sortData.split(',').length);

  });
  it('should render ColorGrid components as Tabs children.', () => {
    const render = TestUtils.renderIntoDocument(
    <ThemedFilter sizeData = {sizeData}
      sortData ={sortData}
      colorData ={colorData}
      lengthData ={lengthData}
      featureData ={featureData}
    />);

    const tabsNodes = TestUtils.scryRenderedComponentsWithType(render, Tabs);
    const tabNode = TestUtils.scryRenderedComponentsWithType(render, Tab);
    const rootDiv = TestUtils.scryRenderedDOMComponentsWithTag(tabNode[1], 'div');
    TestUtils.Simulate.mouseDown(rootDiv[0]);
    const gridNode = TestUtils.scryRenderedComponentsWithType(tabsNodes[0], Grid);
    const gridCellNode = TestUtils.scryRenderedComponentsWithType(gridNode[1], GridCell);
    expect(gridCellNode.length).to.equal(12);

  });
  it('should render LengthGrid components as Tabs children.', () => {
    const render = TestUtils.renderIntoDocument(
    <ThemedFilter sizeData = {sizeData}
      sortData ={sortData}
      colorData ={colorData}
      lengthData ={lengthData}
      featureData ={featureData}
    />);

    const tabsNodes = TestUtils.scryRenderedComponentsWithType(render, Tabs);
    const tabNode = TestUtils.scryRenderedComponentsWithType(render, Tab);
    const rootDiv = TestUtils.scryRenderedDOMComponentsWithTag(tabNode[2], 'div');
    TestUtils.Simulate.mouseDown(rootDiv[0]);
    const gridNode = TestUtils.scryRenderedComponentsWithType(tabsNodes[0], Grid);
    const gridCellNode = TestUtils.scryRenderedComponentsWithType(gridNode[1], GridCell);
    expect(gridCellNode.length).to.equal(lengthData.split(',').length);

  });
  it('should render FeatureGrid components as Tabs children.', () => {
    const render = TestUtils.renderIntoDocument(
    <ThemedFilter sizeData = {sizeData}
      sortData ={sortData}
      colorData ={colorData}
      lengthData ={lengthData}
      featureData ={featureData}
    />);

    const tabsNodes = TestUtils.scryRenderedComponentsWithType(render, Tabs);
    const tabNode = TestUtils.scryRenderedComponentsWithType(render, Tab);
    const rootDiv = TestUtils.scryRenderedDOMComponentsWithTag(tabNode[4], 'div');
    TestUtils.Simulate.mouseDown(rootDiv[0]);
    const gridNode = TestUtils.scryRenderedComponentsWithType(tabsNodes[0], Grid);
    const gridCellNode = TestUtils.scryRenderedComponentsWithType(gridNode[1], GridCell);
    expect(gridCellNode.length).to.equal(featureData.split(',').length);

  });
  it('should render SizeGrid components as Tabs children.', () => {
    const render = TestUtils.renderIntoDocument(
    <ThemedFilter sizeData = {sizeData}
      sortData ={sortData}
      colorData ={colorData}
      lengthData ={lengthData}
      featureData ={featureData}
    />);

    const tabsNodes = TestUtils.scryRenderedComponentsWithType(render, Tabs);
    const tabNode = TestUtils.scryRenderedComponentsWithType(render, Tab);
    const rootDiv = TestUtils.scryRenderedDOMComponentsWithTag(tabNode[5], 'div');
    TestUtils.Simulate.mouseDown(rootDiv[0]);
    const gridNode = TestUtils.scryRenderedComponentsWithType(tabsNodes[0], Grid);
    const gridCellNode = TestUtils.scryRenderedComponentsWithType(gridNode[1], GridCell);
    expect(gridCellNode.length).to.equal(sizeData.split(',').length);

  });

});
