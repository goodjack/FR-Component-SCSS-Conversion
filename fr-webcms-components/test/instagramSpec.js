import React from 'react';
import Instagram from 'core/Instagram';
import injectTheme from './fixtures/injectTheme';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import { expect } from 'chai';

describe('Instagram', () => {
  let ThemedInstagram;
  let sandbox;

  beforeEach(() => {
    ThemedInstagram = injectTheme(Instagram);
  });

  before(() => {
    sandbox = sinon.sandbox.create();
  });

  after(() => {
    sandbox.restore();
  });

  it('should capture the props passed', () => {
    const render = TestUtils.renderIntoDocument(<ThemedInstagram
      rootClass="testClass"
      instagramId="instaId"
      variation="imageWithCaption"
      hideCaption={false}
      textareaBgColor="white"
      mode="dynamic"
      imageSrc="https://facebook.github.io/react/img/logo_og.png"
      imageTitle="image alt text"
      title="test title"
      imageCaption="caption for image"
    />);
    const rProps = render.props;
    expect(rProps.rootClass).to.equal('testClass');
    expect(rProps.instagramId).to.equal('instaId');
    expect(rProps.variation).to.equal('imageWithCaption');
    expect(rProps.hideCaption).to.equal(false);
    expect(rProps.textareaBgColor).to.equal('white');
    expect(rProps.mode).to.equal('dynamic');
    expect(rProps.imageSrc).to.equal('https://facebook.github.io/react/img/logo_og.png');
    expect(rProps.imageTitle).to.equal('image alt text');
    expect(rProps.title).to.equal('test title');
    expect(rProps.imageCaption).to.equal('caption for image');
  });

  it('should set the image in static mode when variation is imageLeft', () => {

    const component = TestUtils.renderIntoDocument(<Instagram
      imageSrc="https://facebook.github.io/react/img/logo_og.png"
      variation="imageLeft"
      mode="static"
    />);
    const renderedNode = ReactDOM.findDOMNode(component);
    expect(renderedNode.querySelectorAll('div')[2].style[`background-image`])
      .to.equal('url(https://facebook.github.io/react/img/logo_og.png)');
  });

  it('should set the image in static mode when variation is overlay', () => {

    const component = TestUtils.renderIntoDocument(<Instagram
      imageSrc="https://facebook.github.io/react/img/logo_og.png"
      variation="overlay"
      mode="static"
    />);
    const renderedNode = ReactDOM.findDOMNode(component);
    expect(renderedNode.querySelectorAll('div')[1].style[`background-image`])
      .to.equal('url(https://facebook.github.io/react/img/logo_og.png)');
  });

  it('should set the image in static mode when variation is imageWithCaption', () => {

    const component = TestUtils.renderIntoDocument(<Instagram
      imageSrc="https://facebook.github.io/react/img/logo_og.png"
      variation="imageWithCaption"
      mode="static"
    />);
    const renderedNode = ReactDOM.findDOMNode(component);
    expect(renderedNode.querySelector('img').getAttribute('src')).to.equal(
      'https://facebook.github.io/react/img/logo_og.png');
  });

  it('should render image caption and title that are passed', () => {

    const component = TestUtils.renderIntoDocument(<Instagram
      imageSrc="https://facebook.github.io/react/img/logo_og.png"
      variation="overlay"
      mode="static"
      imageCaption="caption of image"
      title="post title"
    />);
    const renderedNode = ReactDOM.findDOMNode(component);
    expect(renderedNode.querySelectorAll('span')[0].textContent).to.equal('post title');
    expect(renderedNode.querySelectorAll('span')[1].textContent).to.equal('caption of image');
  });

  it('should render the Instagram icon', () => {

    const component = TestUtils.renderIntoDocument(<Instagram
      imageSrc="https://facebook.github.io/react/img/logo_og.png"
      variation="overlay"
      mode="static"
    />);
    const renderedNode = ReactDOM.findDOMNode(component);
    expect(renderedNode.querySelector('svg')).to.not.equal(null);
  });

  it('should render based on state param values', () => {

    const stub = sandbox.stub(Instagram.prototype, 'componentWillMount').returns();
    const component = TestUtils.renderIntoDocument(<Instagram
      instagramId="fA9uwTtkSN"
      variation="overlay"
      mode="dynamic"
    />);
    component.setState({
      variationProps: {
        imageSrc: 'https://facebook.github.io/react/img/logo_og.png',
        variation: 'overlay',
      },
    });
    const renderedNode = ReactDOM.findDOMNode(component);

    expect(renderedNode.querySelectorAll('div')[1].style[`background-image`])
      .to.equal('url(https://facebook.github.io/react/img/logo_og.png)');
    stub.restore();
  });
});
