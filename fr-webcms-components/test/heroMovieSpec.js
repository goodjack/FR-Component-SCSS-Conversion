import React from 'react';
import ReactDOM from 'react-dom';
import HeroMovie from 'uniqlo/HeroMovie';
import injectTheme from './fixtures/injectTheme';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';

describe('HeroMovie', () => {
  let ThemedHeroMovie;

  beforeEach(() => {
    ThemedHeroMovie = injectTheme(HeroMovie);
  });

  it('should capture all the props passed to HeroMovie component', () => {
    const HeroMovieElement = TestUtils.renderIntoDocument(<ThemedHeroMovie
      imageSrc="https://goo.gl/IWxflD"
      imageTitle="imageAltText"
      videoId="youtubeVideoId"
      text="iconText"
      iconSrc="https://goo.gl/IWxflD"
      style={{ width: '50px' }}
    />);
    expect(HeroMovieElement.props.imageSrc).to.equal('https://goo.gl/IWxflD');
    expect(HeroMovieElement.props.imageTitle).to.equal('imageAltText');
    expect(HeroMovieElement.props.videoId).to.equal('youtubeVideoId');
    expect(HeroMovieElement.props.text).to.equal('iconText');
    expect(HeroMovieElement.props.iconSrc).to.equal('https://goo.gl/IWxflD');
    expect(HeroMovieElement.props.style.width).to.equal('50px');
  });

  it('should set the image as cover image', () => {
    const HeroMovieElement = TestUtils.renderIntoDocument(<ThemedHeroMovie
      imageSrc="https://goo.gl/IWxflD"
      imageTitle="imageAltText"
      videoId="youtubeVideoId"
    />);
    const HeroMovieNode = ReactDOM.findDOMNode(HeroMovieElement);
    expect(HeroMovieNode.style.width).to.equal('960px');
    expect(HeroMovieNode.style.height).to.equal('500px');
  });

  it('should set the image size according to style passed', () => {
    const HeroMovieElement = TestUtils.renderIntoDocument(<ThemedHeroMovie
      imageSrc="https://goo.gl/IWxflD"
      imageTitle="imageAltText"
      videoId="youtubeVideoId"
      style={{ width: 100, height: 100 }}
    />);
    const HeroMovieNode = ReactDOM.findDOMNode(HeroMovieElement);
    expect(HeroMovieNode.style.width).to.equal('100px');
    expect(HeroMovieNode.style.height).to.equal('100px');
  });

  it('should open youtube video upon imageClick event', () => {
    const HeroMovieElement = TestUtils.renderIntoDocument(<ThemedHeroMovie
      imageSrc="https://goo.gl/IWxflD"
      imageTitle="imageAltText"
      videoId="youtubeVideoId"
    />);
    const HeroMovieNode = ReactDOM.findDOMNode(HeroMovieElement);
    TestUtils.Simulate.click(HeroMovieNode);
    expect(HeroMovieNode.querySelector('iframe').getAttribute('src')).to.contain('youtubeVideoId');
  });
});
