import React from 'react';
import ReactDOM from 'react-dom';
import RadioButtonGroup from 'core/RadioButtonGroup';
import RadioButton from 'core/RadioButtonGroup/RadioButton';
import injectTheme from './fixtures/injectTheme';
import TestUtils from 'react-addons-test-utils';
import { spy } from 'sinon';
import { expect } from 'chai';

describe('RadioButtonGroup', () => {
  let ThemedRadioButtonGroup;
  beforeEach(() => {
    ThemedRadioButtonGroup = injectTheme(RadioButtonGroup);
  });

  it('should display all radio buttons when render the component ', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedRadioButtonGroup name="shipSpeed">
        <RadioButton
          value="light"
          label="prepare for light speed"
        />
        <RadioButton
          value="not_light"
          label="light speed too slow"
        />
        <RadioButton
          value="ludicrous"
          label="go to ludicrous speed"
          disabled
        />
      </ThemedRadioButtonGroup>
    );
    const renNode = TestUtils.scryRenderedComponentsWithType(render, RadioButton);
    expect(renNode.length).to.equal(3);
  });

  it('should set the name of all the radio input when name props is passed', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedRadioButtonGroup name="shipSpeed">
        <RadioButton
          value="light"
          label="prepare for light speed"
        />
        <RadioButton
          value="not_light"
          label="light speed too slow"
        />
      </ThemedRadioButtonGroup>
    );
    const renNode = TestUtils.scryRenderedComponentsWithType(render, RadioButton);
    for (let iter = 0; iter++; iter < renNode.length) {
      const input = TestUtils.findRenderedDOMComponentWithTag(renNode[iter], 'input');
      expect(input.getAttribute('name')).to.equal('shipSpeed');
    }
  });

  it('should override the inline-styles of the root element when style  props is passed', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedRadioButtonGroup name="shipSpeed" style={{ boxShadow: '10px 10px 5px red' }} >
        <RadioButton
          value="light"
          label="prepare for light speed"
        />
        <RadioButton
          value="not_light"
          label="light speed too slow"
        />
      </ThemedRadioButtonGroup>
    );
    const items = TestUtils.scryRenderedComponentsWithType(render, RadioButtonGroup);
    const renDomNode = ReactDOM.findDOMNode(items[0]);
    expect(renDomNode.style.boxShadow).to.equal('red 10px 10px 5px');
  });

  it('should select the value of the radio when valueSelected props is passed', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedRadioButtonGroup name="shipSpeed" valueSelected="not_light">
        <RadioButton
          value="light"
          label="prepare for light speed"
        />
        <RadioButton
          value="not_light"
          label="light speed too slow"
        />
      </ThemedRadioButtonGroup>
    );
    const renNode = TestUtils.scryRenderedComponentsWithType(render, RadioButton);
    const input = TestUtils.findRenderedDOMComponentWithTag(renNode[1], 'input');
    expect(input.checked).to.equal(true);
  });

  it('should call the onChange callback function when radio input value is changed', () => {
    const mockonChange = spy();
    const render = TestUtils.renderIntoDocument(
     <ThemedRadioButtonGroup name="shipSpeed" valueSelected="not_light" onChange={mockonChange} >
       <RadioButton
         value="light"
         label="prepare for light speed"
       />
       <RadioButton
         value="not_light"
         label="light speed too slow"
       />
     </ThemedRadioButtonGroup>
    );
    const renNode = TestUtils.scryRenderedComponentsWithType(render, RadioButton);
    const input = TestUtils.findRenderedDOMComponentWithTag(renNode[0], 'input');
    TestUtils.Simulate.change(input);
    expect(mockonChange).to.be.called; // eslint-disable-line no-unused-expressions
  });

});
