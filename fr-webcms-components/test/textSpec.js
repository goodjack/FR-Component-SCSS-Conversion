import React from 'react';
import Text from 'Text';
import injectTheme from './fixtures/injectTheme';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import { spy } from 'sinon';
import Star from 'SvgIcons/action/Star';

/* global expect */

describe('Text', () => {
  let ThemedText;

  beforeEach(() => {
    ThemedText = injectTheme(Text);
  });

  // TODO: cover all the scenarios for the test cases
  // TODO: cover test cases based on configuration as well
  it('should display text value when the child props is passed', () => {
    const render = TestUtils.renderIntoDocument(<ThemedText content="Hello World" />);
    const TextDomNode = ReactDOM.findDOMNode(render);
    expect(TextDomNode.textContent).to.equal('Hello World');
  });

  it('should display the text with specified style when style props is passed', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedText
        style={{ color: 'red', display: 'block' }}
        content="Hello World"
      />
    );
    const TextDomNode = ReactDOM.findDOMNode(render);
    expect(TextDomNode.style.color).to.equal('red');
  });

  it('should trigger the onPress event', () => {
    const opPressSpy = spy();
    const render = TestUtils.renderIntoDocument(
      <ThemedText
        onPress={opPressSpy}
        content="Hello World"
      />
    );
    const TextDomNode = ReactDOM.findDOMNode(render);
    TestUtils.Simulate.click(TextDomNode);
    expect(opPressSpy.called).to.be.ok; // eslint-disable-line no-unused-expressions
  });

  it('should render IconButton element when icon prop element passed', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedText
        iconButton="Star"
        content="Hello World"
      />
    );
    const TextDomNode = TestUtils.scryRenderedComponentsWithType(render, Star);
    expect(TextDomNode).to.not.be.undefined; // eslint-disable-line no-unused-expressions
  });

});
