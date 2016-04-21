import React from 'react';
import Heading from 'Heading';
import injectTheme from './fixtures/injectTheme';
import TestUtils from 'react-addons-test-utils';
import { spy } from 'sinon';
/* global expect */

describe('Heading', () => {
  let ThemedHeading;

  beforeEach(() => {
    ThemedHeading = injectTheme(Heading);
  });

  // TODO: cover all the scenarios for the test cases
  // TODO: cover test cases based on configuration as well
  it('should display heading when the headingText props is passed', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedHeading headingText="Hello World" type="h1" />);
    const title = TestUtils.findRenderedDOMComponentWithTag(render, 'h1');
    expect(title.textContent).to.equal('Hello World');
  });
  it('should display heading with the specified styles when the style props is passed', () => {
    const render = TestUtils.renderIntoDocument(<ThemedHeading headingText="Hello World" type="h1"
      style={{ color: 'red', fontWeight: 'bold' }}
    />
  );
    const title = TestUtils.findRenderedDOMComponentWithTag(render, 'h1');
    expect(title.style.color).to.equal('red');
    expect(title.style.fontWeight).to.equal('bold');
  });
  it('should use specified class when the className prop is passed', () => {
    const component = TestUtils.renderIntoDocument(
      <Heading headingText="Hello World" type="h2" className="testClass" />
    );
    const heading = TestUtils.scryRenderedDOMComponentsWithClass(component, 'testClass');
    expect(heading).to.be.ok; // eslint-disable-line no-unused-expressions
  });
  it('should display specified tag when the type props is passed', () => {
    const component = TestUtils.renderIntoDocument(<Heading headingText="Hello World" type="h1" />);
    const heading = TestUtils.findRenderedDOMComponentWithTag(component, 'h1');
    expect(heading.textContent).to.equal('Hello World');
  });
  it('should trigger the onPress event', () => {
    const onPressSpy = spy();
    const render = TestUtils.renderIntoDocument(<ThemedHeading onPress={onPressSpy}
      headingText="Hello World" type="h1"
    />);
    const title = TestUtils.findRenderedDOMComponentWithTag(render, 'h1');
    TestUtils.Simulate.click(title);
    expect(onPressSpy.called).to.be.ok; // eslint-disable-line no-unused-expressions
  });
});
