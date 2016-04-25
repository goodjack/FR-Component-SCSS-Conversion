import React from 'react';
import Collage, { CollageItem } from 'uniqlo/Collage';
import Grid from 'core/Grid';
import injectTheme from './fixtures/injectTheme';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
console.log(Collage);
describe('Collage', () => {
  let ThemedCollage;
  beforeEach(() => {
    ThemedCollage = injectTheme(Collage);
  });

  it('should render Collage component and its children.', () => {
    const collageNode = TestUtils.renderIntoDocument(
      <ThemedCollage cellHeight={100} cellWidth={100}>
        <CollageItem imageSrc="http://uniqlo.scene7.com/is/image/UNIQLO/goods_31_170527" />
        <CollageItem imageSrc="http://uniqlo.scene7.com/is/image/UNIQLO/goods_75_157491" />
        <CollageItem imageSrc="http://uniqlo.scene7.com/is/image/UNIQLO/goods_31_170527" />
      </ThemedCollage>
    );
    const itemNodes = TestUtils.scryRenderedComponentsWithType(collageNode, Grid);
    expect(itemNodes.length).to.equal(2);
    const cell = ReactDOM.findDOMNode(itemNodes[0]);
    expect(cell.childNodes.length).to.equal(2);
  });

  it('should render Collage Grid with the props passed.', () => {
    const collageNode = TestUtils.renderIntoDocument(
      <ThemedCollage cellHeight={100} cellPadding={2}>
        <CollageItem imageSrc="http://uniqlo.scene7.com/is/image/UNIQLO/goods_31_170527" />
        <CollageItem imageSrc="http://uniqlo.scene7.com/is/image/UNIQLO/goods_75_157491" />
        <CollageItem imageSrc="http://uniqlo.scene7.com/is/image/UNIQLO/goods_31_170527" />
      </ThemedCollage>
    );
    const renNode = TestUtils.scryRenderedComponentsWithType(collageNode, Grid);
    expect(renNode[0].props.cellPadding).to.equal(2);
    expect(renNode[0].props.cellHeight).to.equal(100);
  });

  it('should render Collage Items with the proper width when cellWidth props passed.', () => {
    const cellWidth = 100;
    const collageNode = TestUtils.renderIntoDocument(
      <ThemedCollage cellHeight={100} cellWidth={cellWidth} cellPadding={2}>
        <CollageItem imageSrc="http://uniqlo.scene7.com/is/image/UNIQLO/goods_31_170527" />
        <CollageItem imageSrc="http://uniqlo.scene7.com/is/image/UNIQLO/goods_75_157491" />
        <CollageItem imageSrc="http://uniqlo.scene7.com/is/image/UNIQLO/goods_31_170527" />
      </ThemedCollage>
    );
    const renNode = TestUtils.scryRenderedComponentsWithType(collageNode, Grid);
    const grid = ReactDOM.findDOMNode(renNode[0]);
    expect(grid.style.width).to.equal(`${3 * cellWidth}px`);
  });

});
