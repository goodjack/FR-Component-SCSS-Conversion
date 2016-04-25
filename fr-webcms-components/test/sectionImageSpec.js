import React from 'react';
import SectionImage from 'uniqlo/SectionImage';
import injectTheme from './fixtures/injectTheme';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { spy } from 'sinon';

describe('SectionImage', () => {
  let ThemedSectionImage;

  beforeEach(() => {
    ThemedSectionImage = injectTheme(SectionImage);
  });

  it('should check the image source', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedSectionImage
        imageSrc="https://facebook.github.io/react/img/logo_og.png"
        link="https://facebook.github.io/react"
        targetwindow="_blank"
        alternateText="ImagePic"
      />
    );
    const SectionImageDomNode = ReactDOM.findDOMNode(render);
    expect(SectionImageDomNode.childNodes[0].childNodes[0].getAttribute('src'))
    .to.equal('https://facebook.github.io/react/img/logo_og.png');
  });

  it('should check the link attribute of the image', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedSectionImage
        source="https://facebook.github.io/react/img/logo_og.png"
        link="https://facebook.github.io/react"
        targetwindow="_blank"
        alternateText="AltImage"
      />
  );
    const SectionImageDomNode = ReactDOM.findDOMNode(render);
    expect(SectionImageDomNode.childNodes[0].getAttribute('href')).to.equal('https://facebook.github.io/react');
  });

  it('should check the target window of the image', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedSectionImage
        source="https://facebook.github.io/react/img/logo_og.png"
        link="https://facebook.github.io/react"
        targetwindow="_blank"
        alternateText="AltImage"
      />
    );
    const SectionImageDomNode = ReactDOM.findDOMNode(render);
    expect(SectionImageDomNode.childNodes[0].getAttribute('target')).to.equal('_blank');
  });

  it('should display the alternate text if the image is not rendered', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedSectionImage
        source="https://facebook.github.io/react/img/logo_og.png"
        link="https://facebook.github.io/react"
        targetwindow="_blank"
        alternateText="AltImage"
      />
    );
    const image = TestUtils.findRenderedDOMComponentWithTag(render, 'img');
    expect(image.alt).to.equal('AltImage');
  });

  it('should check onload function', () => {
    const loadSpy = spy();
    const render = TestUtils.renderIntoDocument(
      <ThemedSectionImage onLoad={loadSpy}
        source="https://facebook.github.io/react/img/logo_og.png"
        link="https://facebook.github.io/react"
        targetwindow="_blank"
        alternateText="AltImage"
      />
    );
    const image = TestUtils.findRenderedDOMComponentWithTag(render, 'img');
    TestUtils.Simulate.load(image);
    expect(loadSpy.called).to.equal(true);
  });

  it('should capture and apply style props correctly to override default styles', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedSectionImage
        source="https://facebook.github.io/react/img/logo_og.png"
        link="https://facebook.github.io/react"
        targetwindow="_blank"
        alternateText="AltImage"
        style={{ borderColor: '#000', borderWidth: 3 }}
        imageStyle={{ width: 100, height: 100 }}
      />
    );
    const rootDiv = TestUtils.findRenderedDOMComponentWithTag(render, 'div');
    const image = TestUtils.findRenderedDOMComponentWithTag(render, 'img');
    expect(rootDiv.style.borderColor).to.equal('rgb(0, 0, 0)');
    expect(rootDiv.style.borderWidth).to.equal('3px');
    expect(image.style.width).to.equal('100px');
    expect(image.style.height).to.equal('100px');
  });
});
