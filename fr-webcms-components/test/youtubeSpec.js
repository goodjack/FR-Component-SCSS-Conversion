import React from 'react';
import { expect } from 'chai';
import Youtube from 'core/Youtube';
import injectTheme from './fixtures/injectTheme';
import TestUtils from 'react-addons-test-utils';

describe('Youtube', () => {
  let ThemedVideo;

  beforeEach(() => {
    ThemedVideo = injectTheme(Youtube);
  });

  it('props should be captured succesfully', () => {
    const trueValue = true;
    const falseValue = false;
    const mockStyle = {
      width: '50px',
      height: '50px',
    };
    const videoSettings = {
      id: 'testId',
      className: 'testClass',
      source: 'gHcfGU0zim8',
      style: mockStyle,
      allowAutoplay: trueValue,
      showControls: falseValue,
      allowLooping: trueValue,
      showRelatedVideos: trueValue,
      youtubeEmbedUrlPrefix: 'testUrl',
      allowFullScreen: trueValue,
    };
    const render = TestUtils.renderIntoDocument(
      <ThemedVideo {...videoSettings} />
    );
    expect(render.props.id).to.equal('testId');
    expect(render.props.className).to.equal('testClass');
    expect(render.props.source).to.equal('gHcfGU0zim8');
    expect(render.props.style).to.equal(mockStyle);
    expect(render.props.allowAutoplay).to.equal(true);
    expect(render.props.showControls).to.equal(false);
    expect(render.props.allowLooping).to.equal(true);
    expect(render.props.showRelatedVideos).to.equal(true);
    expect(render.props.allowFullScreen).to.equal(true);
    expect(render.props.youtubeEmbedUrlPrefix).to.equal('testUrl');
  });

  it('should display youtube url/source when only source src is passed', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedVideo source="gHcfGU0zim8" />
    );
    const youtubeVideo = TestUtils.findRenderedDOMComponentWithTag(render, 'iframe');
    expect(youtubeVideo.src).to.contain(
      'https://www.youtube.com/embed/gHcfGU0zim8?rel=0&autoplay=0&fs=1');
  });

  it('should set rel param in youtube url/source based on showRelatedVideos passed', () => {
    const trueValue = true;
    const render = TestUtils.renderIntoDocument(
      <ThemedVideo source="gHcfGU0zim8" showRelatedVideos={trueValue} />
    );
    const youtubeVideo = TestUtils.findRenderedDOMComponentWithTag(render, 'iframe');
    expect(youtubeVideo.src).to.contain('rel=1');
  });

  it('should set fullscreen param in to 1 in youtube url/source allowFullScreen is true', () => {
    const trueValue = true;
    const render = TestUtils.renderIntoDocument(
      <ThemedVideo source="gHcfGU0zim8" allowFullScreen={trueValue} />
    );
    const youtubeVideo = TestUtils.findRenderedDOMComponentWithTag(render, 'iframe');
    expect(youtubeVideo.src).to.contain('fs=1');
  });

  it('should set fullscreen param to 0 in youtube url/source allowFullScreen is false', () => {
    const falseValue = false;
    const render = TestUtils.renderIntoDocument(
      <ThemedVideo source="gHcfGU0zim8" allowFullScreen={falseValue} />
    );
    const youtubeVideo = TestUtils.findRenderedDOMComponentWithTag(render, 'iframe');
    expect(youtubeVideo.src).to.contain('fs=0');
  });

  it('should set autoplay param in youtube url/source based on allowAutoplay passed', () => {
    const trueValue = true;
    const render = TestUtils.renderIntoDocument(
      <ThemedVideo source="gHcfGU0zim8" allowAutoplay={trueValue} />
    );
    const youtubeVideo = TestUtils.findRenderedDOMComponentWithTag(render, 'iframe');
    expect(youtubeVideo.src).to.contain('autoplay=1');
  });

  it('should set controls param in youtube url/source based on showControls passed', () => {
    const falseValue = false;
    const render = TestUtils.renderIntoDocument(
      <ThemedVideo source="gHcfGU0zim8" showControls={falseValue} />
    );
    const youtubeVideo = TestUtils.findRenderedDOMComponentWithTag(render, 'iframe');
    expect(youtubeVideo.src).to.contain('controls=0');
  });

  it('should set loop param in youtube url/source based on allowLooping passed', () => {
    const trueValue = true;
    const render = TestUtils.renderIntoDocument(
      <ThemedVideo source="gHcfGU0zim8" allowLooping={trueValue} />
    );
    const youtubeVideo = TestUtils.findRenderedDOMComponentWithTag(render, 'iframe');
    expect(youtubeVideo.src).to.contain('loop=1&playlist=gHcfGU0zim8');
  });

  it('should set origin param in youtube url/source based on origin passed', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedVideo source="gHcfGU0zim8" origin="testOrigin" />
    );
    const youtubeVideo = TestUtils.findRenderedDOMComponentWithTag(render, 'iframe');
    expect(youtubeVideo.src).to.contain('origin=testOrigin');
  });

  it('should display the video with the specified width and height', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedVideo source="gHcfGU0zim8" style={{ width: 50, height: 50 }} />
    );
    const youtubeVideo = TestUtils.findRenderedDOMComponentWithTag(render, 'iframe');
    expect(youtubeVideo.style.width).to.equal('50px');
    expect(youtubeVideo.style.height).to.equal('50px');
  });

  it('should apply the added class to the youtube component once rendered', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedVideo source="gHcfGU0zim8" className= "testClass" />
    );
    const youtubeVideo = TestUtils.findRenderedDOMComponentWithTag(render, 'iframe');
    expect(youtubeVideo.className).to.equal('testClass');
  });

  it('should apply the added id to the youtube component once rendered', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedVideo source="gHcfGU0zim8" id= "testId" />
    );
    const youtubeVideo = TestUtils.findRenderedDOMComponentWithTag(render, 'iframe');
    expect(youtubeVideo.id).to.equal('testId');
  });
});
