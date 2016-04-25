import React from 'react';
import ReactDOM from 'react-dom';
import TextInput from 'TextInput';
import injectTheme from './fixtures/injectTheme';
import TestUtils from 'react-addons-test-utils';
import { spy } from 'sinon';

/* global expect */

describe('TextInput', () => {
  let ThemedTextInput;

  beforeEach(() => {
    ThemedTextInput = injectTheme(TextInput);
  });

  it('should display text value when the value props is passed', () => {
    const render = TestUtils.renderIntoDocument(<ThemedTextInput value="Hello TextInput" />);
    const input = TestUtils.findRenderedDOMComponentWithTag(render, 'input');
    expect(input.value).to.equal('Hello TextInput');
  });

  it('should display hint text when the hint text props is passed', () => {
    const render = TestUtils.renderIntoDocument(<ThemedTextInput hintText="Enter your name" />);
    const input = TestUtils.findRenderedDOMComponentWithTag(render, 'input');
    expect(input.getAttribute('placeholder')).to.equal('Enter your name');
  });

  it('should trigger the mouse leave event', () => {
    const mockMouseLeave = spy();
    const render = TestUtils.renderIntoDocument(<ThemedTextInput onMouseLeave={mockMouseLeave}/>);
    const input = TestUtils.findRenderedDOMComponentWithTag(render, 'input');
    TestUtils.Simulate.mouseLeave(input);
    expect(mockMouseLeave.called).to.be.ok; // eslint-disable-line no-unused-expressions
  });

  it('checks the styles passed to button styles of button', () => {
    const render = TestUtils.renderIntoDocument(<ThemedTextInput style={{ color: 'red', fontSize: 12 }}/>);
    const input = TestUtils.findRenderedDOMComponentWithTag(render, 'input');
    expect(input.style.color).to.equal('red');
    expect(input.style.fontSize).to.equal('12px');
  });

  it('should trigger the mouse enter event', () => {
    const mockMouseEnter = spy();
    const render = TestUtils.renderIntoDocument(<ThemedTextInput onMouseEnter={mockMouseEnter}/>);
    const input = TestUtils.findRenderedDOMComponentWithTag(render, 'input');
    TestUtils.Simulate.mouseEnter(input);
    expect(mockMouseEnter.called).to.be.ok; // eslint-disable-line no-unused-expressions
  });

  it('should verify if the input  is disabled', () => {
    const render = TestUtils.renderIntoDocument(<ThemedTextInput disabled/>);
    const input = TestUtils.findRenderedDOMComponentWithTag(render, 'input');
    expect(input.disabled).to.equal(true);
  });

  it('should trigger Callback when input is focussed', () => {
    const mockFocus = spy();
    const render = TestUtils.renderIntoDocument(<ThemedTextInput onFocus={mockFocus}/>);
    const input = TestUtils.findRenderedDOMComponentWithTag(render, 'input');
    TestUtils.Simulate.focus(input);
    expect(mockFocus.called).to.be.ok; // eslint-disable-line no-unused-expressions
  });

  it('should not trigger Callback when input is disabled', () => {
    const mockFocus = spy();
    const render = TestUtils.renderIntoDocument(<ThemedTextInput onFocus={mockFocus} disabled disabledTextColor="red" textColor="blue"/>);
    const input = TestUtils.findRenderedDOMComponentWithTag(render, 'input');
    TestUtils.Simulate.focus(input);
    expect(mockFocus.called).to.equal(false); // eslint-disable-line no-unused-expressions
  });

  it('should triggered Callback when input is blurred', () => {
    const mockBlur = spy();
    const render = TestUtils.renderIntoDocument(<ThemedTextInput onBlur={mockBlur}/>);
    const input = TestUtils.findRenderedDOMComponentWithTag(render, 'input');
    TestUtils.Simulate.blur(input);
    expect(mockBlur.called).to.be.ok; // eslint-disable-line no-unused-expressions
  });

  it('should check the input type property', () => {
    const render = TestUtils.renderIntoDocument(<ThemedTextInput type="text"/>);
    const input = TestUtils.findRenderedDOMComponentWithTag(render, 'input');
    expect(input.type).to.equal('text');
  });

  it('should call the change callback function when change event triggered', () => {
    const mockChange = spy();
    const render = TestUtils.renderIntoDocument(<ThemedTextInput onChange={mockChange}/>);
    const input = TestUtils.findRenderedDOMComponentWithTag(render, 'input');
    TestUtils.Simulate.change(input);
    expect(mockChange.called).to.be.ok; // eslint-disable-line no-unused-expressions
  });

  it('should call the keyDown callback function when keyDown event triggered', () => {
    const mockKeyDown = spy();
    const render = TestUtils.renderIntoDocument(<ThemedTextInput onKeyDown={mockKeyDown}/>);
    const input = TestUtils.findRenderedDOMComponentWithTag(render, 'input');
    TestUtils.Simulate.keyDown(input);
    expect(mockKeyDown).to.be.called; // eslint-disable-line no-unused-expressions
  });

  it('should call the EnterKeyDown callback function when keyDown event triggered', () => {
    const mockKeyDown = spy();
    const render = TestUtils.renderIntoDocument(<ThemedTextInput onEnterKeyDown={mockKeyDown}/>);
    const input = TestUtils.findRenderedDOMComponentWithTag(render, 'input');
    TestUtils.Simulate.keyDown(input, { keyCode: 13 });
    expect(mockKeyDown).to.be.called; // eslint-disable-line no-unused-expressions
  });

  it('should check the class of the input element', () => {
    const render = TestUtils.renderIntoDocument(<ThemedTextInput className="TextInput"/>);
    const input = TestUtils.findRenderedDOMComponentWithTag(render, 'input');
    expect(input.className).to.equal('TextInput');
  });

  it('should check the id of the input element', () => {
    const render = TestUtils.renderIntoDocument(<ThemedTextInput id="TestId"/>);
    const input = TestUtils.findRenderedDOMComponentWithTag(render, 'input');
    expect(input.id).to.equal('TestId');
  });

  it('should reflect changes done to component props', () => {
    const parentNode = document.createElement('div');
    let component = ReactDOM.render(<ThemedTextInput value="Old Value" />, parentNode);
    component = ReactDOM.render(<ThemedTextInput value="New Value" />, parentNode);
    const input = TestUtils.findRenderedDOMComponentWithTag(component, 'input');
    expect(input.value).to.equal('New Value');
  });

});
