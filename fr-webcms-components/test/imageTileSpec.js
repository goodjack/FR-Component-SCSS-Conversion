import React from 'react';
import ImageTile from 'ImageTile';
import injectTheme from './fixtures/injectTheme';
import TestUtils from 'react-addons-test-utils';
import { spy } from 'sinon';
import { expect } from 'chai';

const imageTileProps = {
  imageSrc: 'https://facebook.github.io/react/img/logo_og.png',
  alternateText: 'react',
  link: 'https://facebook.github.io/react/',
  targetwindow: '_blank',
  id: 'id',
  className: 'classname',
};

describe('ImageTile', () => {
  let ThemedImageTile;
  let renderedNode;

  beforeEach(() => {
    ThemedImageTile = injectTheme(ImageTile);
    renderedNode = TestUtils.renderIntoDocument(<ThemedImageTile {...imageTileProps} />);
  });

  it('should successfully pass imageSrc and alternateText props to Image component', () => {
    const imageNode = TestUtils.findRenderedDOMComponentWithTag(renderedNode, 'img');
    expect(imageNode.src).to.equal('https://facebook.github.io/react/img/logo_og.png');
    expect(imageNode.alt).to.equal('react');
  });

  it('should successfully pass link href and target window props', () => {
    const linkNode = TestUtils.findRenderedDOMComponentWithTag(renderedNode, 'a');
    expect(linkNode.href).to.equal('https://facebook.github.io/react/');
    expect(linkNode.target).to.equal('_blank');
  });

  it('should render the id and className', () => {
    const rootDiv = TestUtils.findRenderedDOMComponentWithTag(renderedNode, 'div');
    expect(rootDiv.id).to.equal('id');
    expect(rootDiv.className).to.equal('classname');
  });

  it('should trigger the on load method', () => {
    const loadSpy = spy();
    const render = TestUtils.renderIntoDocument(
      <ThemedImageTile
        onLoad={loadSpy}
        {...imageTileProps}
      />
    );
    const imageTile = TestUtils.findRenderedDOMComponentWithTag(render, 'div');
    TestUtils.Simulate.load(imageTile);
    expect(loadSpy.called).to.equal(true);
  });

  it('should trigger the mouse enter and mouse leave events', () => {
    const mockMouseEnter = spy();
    const mockMouseLeave = spy();
    const render = TestUtils.renderIntoDocument(
      <ThemedImageTile
        onMouseEnter={mockMouseEnter}
        onMouseLeave={mockMouseLeave}
        {...imageTileProps}
      />
    );
    const imageTile = TestUtils.findRenderedDOMComponentWithTag(render, 'div');
    const imageComponent = TestUtils.findRenderedDOMComponentWithTag(render, 'img');

    // simulating and testing mouseEnter
    TestUtils.Simulate.mouseEnter(imageTile);
    expect(mockMouseEnter.called).to.equal(true);
    expect(imageComponent.style.borderStyle).to.equal('solid');

    // simulating and testing mouseLeave
    TestUtils.Simulate.mouseLeave(imageTile);
    expect(mockMouseLeave.called).to.equal(true);
    expect(imageComponent.style.borderStyle).to.equal('none');
  });

  it('should render small tile when tileSize is small.', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedImageTile
        tileSize="small"
        {...imageTileProps}
      />
    );
    const imageTile = TestUtils.findRenderedDOMComponentWithTag(render, 'img');
    expect(imageTile.style.minHeight).to.equal('391px');
    expect(imageTile.style.width).to.equal('100%');
  });

  it('should render large tile when tileSize is large.', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedImageTile
        tileSize="large"
        {...imageTileProps}
      />
    );
    const imageTile = TestUtils.findRenderedDOMComponentWithTag(render, 'img');
    expect(imageTile.style.minHeight).to.equal('473px');
    expect(imageTile.style.width).to.equal('100%');
  });

  it('should check the divStyle property', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedImageTile
        style={{ width: '90%', display: 'inline' }}
        {...imageTileProps}
      />
    );
    const imageTile = TestUtils.findRenderedDOMComponentWithTag(render, 'div');
    expect(imageTile.style.width).to.equal('90%');
    expect(imageTile.style.display).to.equal('inline');
  });
});
