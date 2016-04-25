import React from 'react';
import IconHead from 'core/IconHead';
import Image from 'core/Image';
import injectTheme from './fixtures/injectTheme';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import { expect } from 'chai';

describe('IconHead', () => {
  let ThemedIconHead;
  beforeEach(() => {
    ThemedIconHead = injectTheme(IconHead);
  });

  it('should render IconHead component with all the props passed.', () => {
    const renNode = TestUtils.renderIntoDocument(
      <ThemedIconHead
        rootClass="test"
        imageSrc="images/twitter.png"
        titleText="twitter"
        style={{ width: 50 }}
        imageStyle={{ width: 50 }}
        textStyle={{ width: 50 }}
      />
    );
    expect(renNode.props.rootClass).to.equal('test');
    expect(renNode.props.imageSrc).to.equal('images/twitter.png');
    expect(renNode.props.titleText).to.equal('twitter');
    expect(renNode.props.style.width).to.equal(50);
    expect(renNode.props.imageStyle.width).to.equal(50);
    expect(renNode.props.textStyle.width).to.equal(50);
  });

  it('should render IconHead component with Image and text.', () => {
    const renNode = TestUtils.renderIntoDocument(
      <ThemedIconHead
        rootClass="test"
        imageSrc="images/twitter.png"
        titleText="twitter"
      />
    );
    const imageNodes = TestUtils.scryRenderedComponentsWithType(renNode, Image);
    expect(imageNodes.length).to.equal(1);
    const renDomNode = ReactDOM.findDOMNode(renNode);
    expect(renDomNode.querySelector('h4').textContent).to.equal('twitter');
  });
});
