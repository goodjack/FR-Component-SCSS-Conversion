import React from 'react';
import TextInputGroup from 'TextInputGroup';
import injectTheme from './fixtures/injectTheme';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { spy } from 'sinon';import injectTapEventPlugin from 'react-tap-event-plugin';

describe('TextInputGroup', () => {
  injectTapEventPlugin();
  let ThemedTextInputGroup;

  beforeEach(() => {
    ThemedTextInputGroup = injectTheme(TextInputGroup);
  });

  it('should display button label when label props is passed', () => {
    const render = TestUtils.renderIntoDocument(<ThemedTextInputGroup label="Click me" />);
    const button = TestUtils.findRenderedDOMComponentWithTag(render, 'button');
    expect(button.textContent).to.equal('Click me');
  });

  it('should verify if the input is disabled', () => {
    const render = TestUtils.renderIntoDocument(<ThemedTextInputGroup inputDisabled/>);
    const input = TestUtils.findRenderedDOMComponentWithTag(render, 'input');
    expect(input.disabled).to.equal(true);
  });

  it('should verify if the button is disabled', () => {
    const render = TestUtils.renderIntoDocument(<ThemedTextInputGroup buttonDisabled/>);
    const button = TestUtils.findRenderedDOMComponentWithTag(render, 'button');
    expect(button.disabled).to.equal(true);
  });

  it('should triggered Callback when input is blurred', () => {
    const mockBlur = spy();
    const render = TestUtils.renderIntoDocument(<ThemedTextInputGroup onBlur={mockBlur}/>);
    const input = TestUtils.findRenderedDOMComponentWithTag(render, 'input');
    TestUtils.Simulate.blur(input);
    expect(mockBlur.called).to.equal(true);
  });

  it('should trigger the onTouchTap event on button press', () => {
    const onTouchTapSpy = spy();
    const render = TestUtils.renderIntoDocument(
      <ThemedTextInputGroup
        onTouchTap={onTouchTapSpy}
        label="Click me"
      />
    );
    const button = TestUtils.findRenderedDOMComponentWithTag(render, 'button');
    TestUtils.Simulate.click(button);
    expect(onTouchTapSpy.called).to.equal(true);
  });

  it('input field text color and button color should be darker when it is not disabled', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedTextInputGroup label="Click me"/>
    );
    const input = TestUtils.findRenderedDOMComponentWithTag(render, 'input');
    expect(input.style.color).to.equal('rgba(0, 0, 0, 0.867188)');
  });

  it('input field text color should be faint when it is disabled', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedTextInputGroup label="Click me" inputDisabled/>
    );
    const input = TestUtils.findRenderedDOMComponentWithTag(render, 'input');
    expect(input.style.color).to.equal('rgba(0, 0, 0, 0.296875)');
  });
});
