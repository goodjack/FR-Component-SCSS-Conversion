import React from 'react';
import RollOverImage from 'RollOverImage';
import injectTheme from './fixtures/injectTheme';
import TestUtils from 'react-addons-test-utils';
import { spy } from 'sinon';
/* global expect */
describe('RollOverImage', () => {
  let ThemedRollOverImage;

  beforeEach(() => {
    ThemedRollOverImage = injectTheme(RollOverImage);
  });

  it('props should be captured succesfully', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedRollOverImage imgSrc =
      "http://test036.members-dev.com/feature/uq/longshirts/women/160211-bnr-standcollar.jpg"
      />
    );
    const DomNode = TestUtils.findRenderedDOMComponentWithTag(render, 'img');
    expect(DomNode.getAttribute('src'))
     .to
     .equal(
    'http://test036.members-dev.com/feature/uq/longshirts/women/160211-bnr-standcollar.jpg');
  });

  it('should trigger the MouseClick event handled by the Image', () => {
    const MouseClickSpy = spy();
    const render = TestUtils.renderIntoDocument(
      <ThemedRollOverImage imgSrc =
    "http://test036.members-dev.com/feature/uq/longshirts/women/160211-bnr-standcollar.jpg"
        onMouseClick={MouseClickSpy}
      />);
    const DomNode = TestUtils.findRenderedDOMComponentWithTag(render, 'a');
    TestUtils.Simulate.click(DomNode);
    expect(MouseClickSpy.called).to.be.ok; // eslint-disable-line no-unused-expressions
  });

  it('should trigger the Mouseover event handled by the Image', () => {
    const render = TestUtils.renderIntoDocument(<ThemedRollOverImage imgSrc =
    "http://test036.members-dev.com/feature/uq/longshirts/women/160211-bnr-standcollar.jpg"
      rollImgSrc =
    "http://test036.members-dev.com/feature/uq/longshirts/women/160211-bnr-standcollar_o.jpg"
    />);
    const DomNode = TestUtils.findRenderedDOMComponentWithTag(render, 'a');
    TestUtils.Simulate.mouseOver(DomNode);
    const ImageNode = TestUtils.findRenderedDOMComponentWithTag(render, 'img');
    expect(ImageNode.getAttribute('src'))
     .to.equal(
      'http://test036.members-dev.com/feature/uq/longshirts/women/160211-bnr-standcollar_o.jpg');
  });

  it('should trigger the Mouseleave event handled by the Image', () => {
    const render = TestUtils.renderIntoDocument(<ThemedRollOverImage imgSrc =
    "http://test036.members-dev.com/feature/uq/longshirts/women/160211-bnr-standcollar.jpg"
      rollImgSrc =
    "http://test036.members-dev.com/feature/uq/longshirts/women/160211-bnr-standcollar_o.jpg"
    />);
    const DomNode = TestUtils.findRenderedDOMComponentWithTag(render, 'a');
    TestUtils.Simulate.mouseLeave(DomNode);
    const ImageNode = TestUtils.findRenderedDOMComponentWithTag(render, 'img');
    expect(ImageNode.getAttribute('src'))
     .to.equal(
      'http://test036.members-dev.com/feature/uq/longshirts/women/160211-bnr-standcollar.jpg');
  });

  it('should check the imagestyle passed', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedRollOverImage imgSrc =
      "http://test036.members-dev.com/feature/uq/longshirts/women/160211-bnr-standcollar.jpg"
        rollImgSrc =
      "http://test036.members-dev.com/feature/uq/longshirts/women/160211-bnr-standcollar_o.jpg"
        style={{ color: 'red' }}
      />);
    const DOMNode = TestUtils.findRenderedDOMComponentWithTag(render, 'a');
    expect(DOMNode.style.color).to.equal('red');
  });
  it('should check the className', () => {
    const render = TestUtils.renderIntoDocument(<ThemedRollOverImage
      imgSrc =
      "http://test036.members-dev.com/feature/uq/longshirts/women/160211-bnr-standcollar.jpg"
      className="image"
    />);
    const image = TestUtils.findRenderedDOMComponentWithTag(render, 'a');
    expect(image.getAttribute('class')).to.equal('image');
  });
  it('should check the id', () => {
    const render = TestUtils.renderIntoDocument(<ThemedRollOverImage imgSrc =
    "http://test036.members-dev.com/feature/uq/longshirts/women/160211-bnr-standcollar.jpg"
      id="image"
    />);
    const image = TestUtils.findRenderedDOMComponentWithTag(render, 'a');
    expect(image.getAttribute('id')).to.equal('image');
  });
  it('verifies the styles of the button', () => {
    const render = TestUtils.
    renderIntoDocument(<ThemedRollOverImage imgSrc =
    "http://test036.members-dev.com/feature/uq/longshirts/women/160211-bnr-standcollar.jpg"
      style={{ fontWeight: '500' }}
    />);
    const image = TestUtils.findRenderedDOMComponentWithTag(render, 'a');
    expect(image.style.fontWeight).to.equal('500');
  });
});
