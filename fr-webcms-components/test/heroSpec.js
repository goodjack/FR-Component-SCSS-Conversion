import React from 'react';
import ReactDOM from 'react-dom';
import Hero from 'uniqlo/Hero';
import injectTheme from './fixtures/injectTheme';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';

describe('Hero', () => {
  let ThemedHero;

  beforeEach(() => {
    ThemedHero = injectTheme(Hero);
  });

  it('should render all the props passed', () => {
    const heroProps = {
      variation: 'textOnImage',
      imageSrc: 'https://goo.gl/IWxflD',
      className: 'className',
      title: 'titleText',
      id: 'id',
      subtitle: 'subtitle',
      text: 'textContent',
      imageStyle: { width: 50 },
      icon: 'Instagram',
      iconText: '2 days ago',
      textOverlayMaxWidth: '50%',
      textareaBgColor: 'blue',
      linkText: 'shop this link',
      linkUrl: 'http://www.google.com',
      linkFontWeight: 'bold',
      linkFontSize: '1em',
      linkTextDecoration: 'underline',
      navToOverlayComp: true,
    };
    const HeroTitle = TestUtils.renderIntoDocument(<ThemedHero { ...heroProps } />);
    const htProps = HeroTitle.props;
    expect(htProps.variation).to.equal('textOnImage');
    expect(htProps.imageSrc).to.equal('https://goo.gl/IWxflD');
    expect(htProps.className).to.equal('className');
    expect(htProps.title).to.equal('titleText');
    expect(htProps.id).to.equal('id');
    expect(htProps.subtitle).to.equal('subtitle');
    expect(htProps.text).to.equal('textContent');
    expect(htProps.icon).to.equal('Instagram');
    expect(htProps.iconText).to.equal('2 days ago');
    expect(htProps.textOverlayMaxWidth).to.equal('50%');
    expect(htProps.textareaBgColor).to.equal('blue');
    expect(htProps.linkText).to.equal('shop this link');
    expect(htProps.linkUrl).to.equal('http://www.google.com');
    expect(htProps.linkFontWeight).to.equal('bold');
    expect(htProps.linkFontSize).to.equal('1em');
    expect(htProps.linkTextDecoration).to.equal('underline');
    expect(htProps.navToOverlayComp).to.equal(true);
  });

  it('should display the title of Hero component', () => {
    const HeroTitle = TestUtils.renderIntoDocument(<ThemedHero variation="imageRight"
      imageSrc="https://goo.gl/IWxflD" title="セーター・ カーディガン"
    />);
    const HeroTitleNode = ReactDOM.findDOMNode(HeroTitle);
    expect(HeroTitleNode.textContent).to.equal('セーター・ カーディガン');
  });

  it('should display the subtitle of Hero component', () => {
    const Herosubtitle = TestUtils.renderIntoDocument(<ThemedHero variation="imageRight"
      imageSrc="https://goo.gl/IWxflD" subtitle="SWEATERS & CARDIGANS"
    />);
    const HerosubtitleNode = ReactDOM.findDOMNode(Herosubtitle);
    expect(HerosubtitleNode.textContent).to.equal('SWEATERS & CARDIGANS');
  });

  it('should display the text of Hero component', () => {
    const HeroText = TestUtils.renderIntoDocument(<ThemedHero variation="imageRight"
      imageSrc="https://goo.gl/IWxflD" text="sample Text" rightSideWidth="50%"
    />);
    const HeroTextNode = ReactDOM.findDOMNode(HeroText);
    expect(HeroTextNode.textContent).to.equal('sample Text');
  });

  it('should render image of Hero component', () => {
    const HeroImageAltText = TestUtils.renderIntoDocument(<ThemedHero variation="imageLeft"
      imageTitle="Image alt text" imageSrc="https://goo.gl/IWxflD"
    />);
    const HeroImageAltTextNode = ReactDOM.findDOMNode(HeroImageAltText);
    expect(HeroImageAltTextNode.querySelectorAll('div')[1].style[`background-image`])
      .to.equal('url(https://goo.gl/IWxflD)');
  });

  it('should set screenRatio as expected', () => {
    const HeroImageAltText = TestUtils.renderIntoDocument(<ThemedHero variation="imageLeft"
      imageTitle="Image alt text" imageSrc="https://goo.gl/IWxflD" screenRatio="60:40"
    />);
    const HeroImageAltTextNode = ReactDOM.findDOMNode(HeroImageAltText);
    expect(HeroImageAltTextNode.querySelectorAll('div')[0].style.width).to.equal('60%');
    expect(HeroImageAltTextNode.querySelectorAll('div')[2].style.width).to.equal('40%');
  });

  it('should render icon and icon text passed to Hero component in overlay variation', () => {
    const render = TestUtils.renderIntoDocument(<ThemedHero
      variation="overlay"
      imageTitle="Image alt text"
      imageSrc="https://goo.gl/IWxflD"
      icon="ActionPlus"
      iconText="This is icon"
      rightSideWidth="50%"
    />);
    const renderedNode = ReactDOM.findDOMNode(render);
    expect(renderedNode.querySelector('svg')).to.not.equal(null);
    expect(renderedNode.textContent).to.equal('This is icon');
  });

  it('should render icon and icon text passed to Hero component in imageLeft variation', () => {
    const render = TestUtils.renderIntoDocument(<ThemedHero
      variation="imageLeft"
      imageTitle="Image alt text"
      imageSrc="https://goo.gl/IWxflD"
      icon="ActionPlus"
      iconText="This is icon"
      rightSideWidth="50%"
    />);
    const renderedNode = ReactDOM.findDOMNode(render);
    expect(renderedNode.querySelector('svg')).to.not.equal(null);
    expect(renderedNode.textContent).to.equal('This is icon');
  });

  it('should render proxy link component when linkText is passed to Hero component', () => {
    const render = TestUtils.renderIntoDocument(<ThemedHero
      variation="overlay"
      imageTitle="Image alt text"
      imageSrc="https://goo.gl/IWxflD"
      linkText="This is a link"
      linkFontSize="1em"
      linkFontWeight="bold"
      textDecoration="underline"
    />);
    const renderedNode = ReactDOM.findDOMNode(render);
    expect(renderedNode.textContent).to.equal('This is a link');
  });

  it('should not hide text area on clicking link if navToOverlayComp value is false', () => {
    const render = TestUtils.renderIntoDocument(<ThemedHero
      variation="overlay"
      title="titleText"
      subtitle="subtitleText"
      text="sampleText"
      imageTitle="Image alt text"
      imageSrc="https://goo.gl/IWxflD"
      linkText="This is a link"
      linkFontSize="1em"
      linkFontWeight="bold"
      textDecoration="underline"
      navToOverlayComp={false}
    />);
    let renderedNode = TestUtils.scryRenderedDOMComponentsWithTag(render, 'a');
    const anchorElem = ReactDOM.findDOMNode(renderedNode[0]);
    TestUtils.Simulate.click(anchorElem);
    renderedNode = ReactDOM.findDOMNode(render);
    expect(renderedNode.querySelector('a')).to.not.equal(null);
  });

  it('should hide text area on clicking link if navToOverlayComp value is true', () => {
    const render = TestUtils.renderIntoDocument(<ThemedHero
      variation="overlay"
      title="titleText"
      subtitle="subtitleText"
      text="sampleText"
      imageTitle="Image alt text"
      imageSrc="https://goo.gl/IWxflD"
      linkText="This is a link"
      linkFontSize="1em"
      linkFontWeight="bold"
      textDecoration="underline"
      navToOverlayComp
    />);
    let renderedNode = TestUtils.scryRenderedDOMComponentsWithTag(render, 'a');
    const anchorElem = ReactDOM.findDOMNode(renderedNode[0]);
    TestUtils.Simulate.click(anchorElem);
    renderedNode = ReactDOM.findDOMNode(render);
    expect(renderedNode.querySelector('a')).to.equal(null);
  });

  it('should display the title of Hero component in textOnImage variation as expected', () => {
    const HeroTitle = TestUtils.renderIntoDocument(<ThemedHero variation="textOnImage"
      imageSrc="https://goo.gl/IWxflD" title="セーター・ カーディガン"
    />);
    const HeroTitleNode = ReactDOM.findDOMNode(HeroTitle);
    expect(HeroTitleNode.querySelectorAll('div')[1].getAttribute('style'))
      .to.contains('top:40%;left:35%;');
  });

  it('should not display the Button over image in textOnImage when linkText is not passed', () => {
    const HeroTitle = TestUtils.renderIntoDocument(<ThemedHero variation="textOnImage"
      imageSrc="https://goo.gl/IWxflD" title="セーター・ カーディガン"
    />);
    const HeroTitleNode = TestUtils.scryRenderedDOMComponentsWithTag(HeroTitle, 'button');
    expect(HeroTitleNode[0]).to.equal(undefined);
  });

  it('should display the Button over image in textOnImage when linkText is passed', () => {
    const HeroTitle = TestUtils.renderIntoDocument(<ThemedHero variation="textOnImage"
      imageSrc="https://goo.gl/IWxflD" title="セーター・ カーディガン" linkText="link"
    />);
    const HeroTitleNode = TestUtils.scryRenderedDOMComponentsWithTag(HeroTitle, 'button');
    expect(HeroTitleNode[0].querySelector('span').textContent).to.equal('link');
  });
});
