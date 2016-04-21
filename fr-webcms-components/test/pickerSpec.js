import React from 'react';
import injectTheme from './fixtures/injectTheme';
import TestUtils from 'react-addons-test-utils';
import Picker, { PickerOption } from 'core/Picker';
import { spy } from 'sinon';
import { expect } from 'chai';

describe('Picker', () => {

  const pickerSpy = spy();
  let ThemedPicker;
  let renderedNode;

  beforeEach(() => {
    ThemedPicker = injectTheme(Picker);
    renderedNode = TestUtils.renderIntoDocument(
      <ThemedPicker onChange={pickerSpy}>
        <PickerOption name="Morning" value="1"/>
        <PickerOption name="Evening" value="2"/>
      </ThemedPicker>
    );
  });

  it('should trigger the callback function on change.', () => {
    const picker = TestUtils.findRenderedDOMComponentWithTag(renderedNode, 'select');
    TestUtils.Simulate.change(picker);
    expect(pickerSpy.called).to.equal(true);
  });

  it('should check the number of picker options', () => {
    const picker = TestUtils.scryRenderedDOMComponentsWithTag(renderedNode, 'select');
    const pickerOptions = TestUtils.scryRenderedDOMComponentsWithTag(renderedNode, 'option');
    expect(picker.length).to.equal(1);
    expect(pickerOptions.length).to.equal(2);
  });
});
