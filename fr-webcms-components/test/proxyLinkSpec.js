import React from 'react';
import ProxyLink from 'core/ProxyLink';
import Image from 'core/Image';
import injectTheme from './fixtures/injectTheme';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import { spy } from 'sinon';
import { expect } from 'chai';

describe('ProxyLink', () => {
  let ThemedProxyLink;

  beforeEach(() => {
    ThemedProxyLink = injectTheme(ProxyLink);
  });

  it('should capture passed props', () => {
    const mockCallback = spy();
    const render = TestUtils.renderIntoDocument(<ThemedProxyLink
      linkUrl="testLinkUrl"
      linkText="Click on this link"
      textColor="black"
      fontWeight="bold"
      fontSize="1em"
      textDecoration="underline"
      onClickEvent={mockCallback}
    />);
    expect(render.props.linkUrl).to.equal('testLinkUrl');
    expect(render.props.linkText).to.equal('Click on this link');
    expect(render.props.textColor).to.equal('black');
    expect(render.props.fontWeight).to.equal('bold');
    expect(render.props.fontSize).to.equal('1em');
    expect(render.props.textDecoration).to.equal('underline');
  });

  it('should set the href value to the linkUrl value passed as props', () => {
    const render = TestUtils.renderIntoDocument(<ThemedProxyLink
      linkUrl="testLinkUrl"
      linkText="Click on this link"
    />);
    const renderedNode = ReactDOM.findDOMNode(render);
    expect(renderedNode.getAttribute('href')).to.equal('testLinkUrl');
    expect(renderedNode.textContent).to.equal('Click on this link');
  });

  it('should set call the callback function passed in props on click', () => {
    const mockCallback = spy();
    const render = TestUtils.renderIntoDocument(<ThemedProxyLink
      linkUrl="testLinkUrl"
      linkText="Click on this link"
      onClickEvent={mockCallback}
    />);
    const renderedNode = ReactDOM.findDOMNode(render);
    TestUtils.Simulate.click(renderedNode);
    expect(mockCallback.called).to.equal(true);
  });

  it('should set anchor text styles to values passed in props', () => {
    const render = TestUtils.renderIntoDocument(<ThemedProxyLink
      linkText="Click on this link"
      textColor="blue"
      fontWeight="normal"
      fontSize="0.5em"
      textDecoration="none"
    />);
    const renderedNode = ReactDOM.findDOMNode(render);
    expect(renderedNode.style.color).to.equal('blue');
    expect(renderedNode.style['font-weight']).to.equal('normal');
    expect(renderedNode.style['font-size']).to.equal('0.5em');
    expect(renderedNode.style['text-decoration']).to.equal('none');
  });

  it('should render the child element', () => {
    const render = TestUtils.renderIntoDocument(<ThemedProxyLink linkUrl="testLinkUrl">
      <Image source="https://facebook.github.io/react/img/logo_og.png" />
    </ThemedProxyLink>);
    const renderedNode = ReactDOM.findDOMNode(render);
    expect(renderedNode.querySelector('img').getAttribute('src')).to.equal(
      'https://facebook.github.io/react/img/logo_og.png');
  });

});
