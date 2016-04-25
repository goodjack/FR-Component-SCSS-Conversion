import React from 'react';
import ReactDOM from 'react-dom';
import HeroMovie from 'uniqlo/HeroMovie';
import Text from 'Text';
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

  describe('Variations :', () => {

    const componentProps = {
      imageSrc: 'images/heroMovie.jpg',
      description: 'Watch how HEATTECH keeps the city closest to Antartica warm.',
      videoId: 'e0SzgsoEh54',
      iconText: 'PlayIcon',
      iconSrc: 'http://test036.members-dev.com/feature/uq/airism/women/160209-anchor-05.jpg',
      imageTitle: 'imageAltText',
      iconPosition: 'left-bottom',
    };

    it('it should render full size thumbnail with textPosition = "top"', () => {
      const render = TestUtils.renderIntoDocument(
        <HeroMovie
          textPosition="top"
          {...componentProps}
        />
      );

      const text = TestUtils.scryRenderedComponentsWithType(render, Text);
      const textStyle = text[0].props.style;
      expect(textStyle.order).to.equal(1);
    });

    it('it should render full size thumbnail with textPosition = "bottom"', () => {
      const render = TestUtils.renderIntoDocument(
        <HeroMovie
          textPosition="bottom"
          {...componentProps}
        />
      );

      const text = TestUtils.scryRenderedComponentsWithType(render, Text);
      const textStyle = text[0].props.style;
      expect(textStyle.order).to.equal(2);
    });

    it('it should render splitView with thumbnail on the right side and description on the left', () => {
      const render = TestUtils.renderIntoDocument(
        <HeroMovie
          textPosition="left"
          splitView
          {...componentProps}
        />
      );

      const text = TestUtils.scryRenderedComponentsWithType(render, Text);
      const textStyle = text[0].props.style;
      expect(textStyle.order).to.equal(1);
      expect(textStyle.flex).to.equal(1.5);
    });

    it('it should render splitView with thumbnail on the left side and description on the right', () => {
      const render = TestUtils.renderIntoDocument(
        <HeroMovie
          textPosition="right"
          splitView
          {...componentProps}
        />
      );

      const text = TestUtils.scryRenderedComponentsWithType(render, Text);
      const textStyle = text[0].props.style;
      expect(textStyle.order).to.equal(2);
      expect(textStyle.flex).to.equal(1.5);
    });

  });
});
