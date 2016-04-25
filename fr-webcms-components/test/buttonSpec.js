import React from 'react';
import TestUtils from 'react-addons-test-utils';
import injectTheme from './fixtures/injectTheme';
import { spy } from 'sinon';
import ReactDOM from 'react-dom';
import Button from 'Button';

/* global expect */

describe('Button', () => {
  // injectTapEventPlugin();
  let ThemedButton;

  beforeEach(() => {
    ThemedButton = injectTheme(Button);
  });

  it('checks the button text that is passed through label property', () => {
    const render = TestUtils.renderIntoDocument(<ThemedButton label="Login" />);
    const button = TestUtils.findRenderedDOMComponentWithTag(render, 'button');
    expect(button.textContent).to.equal('Login');
  });

  it('should trigger the MouseEnter event handled by the button', () => {
    const mouseEnterSpy = spy();
    const render = TestUtils.renderIntoDocument(
      <ThemedButton onMouseEnter={mouseEnterSpy}/>);
    const button = TestUtils.findRenderedDOMComponentWithTag(render, 'button');
    TestUtils.Simulate.mouseEnter(button);
    expect(mouseEnterSpy.called).to.be.ok; // eslint-disable-line no-unused-expressions
  });

  it('should trigger the TouchTap event handled by the button', () => {
    const touchTapSpy = spy();
    const node = TestUtils.renderIntoDocument(<Button onTouchTap={touchTapSpy} />);
    const button = ReactDOM.findDOMNode(node);
    TestUtils.Simulate.click(button);
    expect(touchTapSpy.called).to.be.ok; // eslint-disable-line no-unused-expressions
  });

  it('should trigger the MouseLeave event handled by the button', () => {
    const mouseLeaveSpy = spy();
    const render = TestUtils.renderIntoDocument(
      <ThemedButton label="admin" onMouseLeave={mouseLeaveSpy} />);
    const button = TestUtils.findRenderedDOMComponentWithTag(render, 'button');
    TestUtils.Simulate.mouseLeave(button);
    expect(mouseLeaveSpy.called).to.be.ok; // eslint-disable-line no-unused-expressions
  });

  it('verifies the disable property of a button component', () => {
    const render = TestUtils.renderIntoDocument(<ThemedButton disabled={false}/>);
    const button = TestUtils.findRenderedDOMComponentWithTag(render, 'button');
    expect(button.disabled).to.equal(false);
  });

  it('verifies the styles of the button', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedButton style={{ fontWeight: '500' }} />);
    const button = TestUtils.findRenderedDOMComponentWithTag(render, 'button');
    expect(button.style.fontWeight).to.equal('500');
  });
});
