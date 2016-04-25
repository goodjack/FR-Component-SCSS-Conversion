import React from 'react';
import ReactDOM from 'react-dom';
import Image from 'core/Image';
import injectTheme from './fixtures/injectTheme';
import TestUtils from 'react-addons-test-utils';
import { spy } from 'sinon';

/* global expect */

describe('Image', () => {
  let ThemedImage;

  beforeEach(() => {
    ThemedImage = injectTheme(Image);
  });

  it('should display image url/source', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedImage source="https://facebook.github.io/react/img/logo_og.png" />);
    const image = TestUtils.findRenderedDOMComponentWithTag(render, 'img');
    expect(image.src).to.equal('https://facebook.github.io/react/img/logo_og.png');
  });

  it('should display the image with the specified width and height', () => {
    const render = TestUtils.renderIntoDocument(<ThemedImage style={{ width: 50, height: 50 }} />);
    const image = TestUtils.findRenderedDOMComponentWithTag(render, 'img');
    expect(image.style.width).to.equal('50px');
    expect(image.style.height).to.equal('50px');
  });

  it('should display the alternate text if the image is not rendered', () => {
    const render = TestUtils.renderIntoDocument(<ThemedImage alternateText= "New" />);
    const image = TestUtils.findRenderedDOMComponentWithTag(render, 'img');
    expect(image.alt).to.equal('New');
  });

  it('should apply the properties of the class to the image when the image is rendered', () => {
    const render = TestUtils.renderIntoDocument(<ThemedImage className= "testClass" />);
    const image = TestUtils.findRenderedDOMComponentWithTag(render, 'img');
    expect(image.className).to.equal('testClass');
  });

  it('should change the alternate text of the image when the image renders after loading', () => {
    const loadSpy = spy();
    const render = TestUtils.renderIntoDocument(
      <ThemedImage onLoad={loadSpy}
        source="https://facebook.github.io/react/img/logo_og.png"
      />);
    const image = TestUtils.findRenderedDOMComponentWithTag(render, 'img');
    TestUtils.Simulate.load(image);
    expect(loadSpy.called).to.be.ok; // eslint-disable-line no-unused-expressions
  });

  it('should set image as background if useImgTag is set to false', () => {
    const render = TestUtils.renderIntoDocument(<ThemedImage
      source="https://facebook.github.io/react/img/logo_og.png"
      useImgTag={false}
    />);
    const image = ReactDOM.findDOMNode(render);
    expect(image.querySelector('img')).to.equal(null);
    expect(image.style[`background-image`])
      .to.equal('url(https://facebook.github.io/react/img/logo_og.png)');
  });

  it('should render an <img> when no height', () => {
    const render = TestUtils.renderIntoDocument(<ThemedImage style={{ width: 50 }} />);
    const image = TestUtils.findRenderedDOMComponentWithTag(render, 'img');
    expect(image.style.width).to.equal('50px');
  });

  it('should render an <img> when no width', () => {
    const render = TestUtils.renderIntoDocument(<ThemedImage style={{ height: 50 }} />);
    const image = TestUtils.findRenderedDOMComponentWithTag(render, 'img');
    expect(image.style.height).to.equal('50px');
  });

  it('should fire the onClick function', () => {
    const onClickMock = spy();
    const render = TestUtils.renderIntoDocument(<ThemedImage
      onClick={onClickMock}
      source="https://facebook.github.io/react/img/logo_og.png"
    />);
    const image = ReactDOM.findDOMNode(render);
    TestUtils.Simulate.click(image);
    expect(onClickMock.called).to.equal(true);
  });
});
