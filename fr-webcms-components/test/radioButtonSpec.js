import React from 'react';
import ReactDOM from 'react-dom';
import RadioButton from 'core/RadioButtonGroup/RadioButton';
import injectTheme from './fixtures/injectTheme';
import TestUtils from 'react-addons-test-utils';
import { spy } from 'sinon';
import { expect } from 'chai';

describe('RadioButton', () => {
  let ThemedRadioButton;

  beforeEach(() => {
    ThemedRadioButton = injectTheme(RadioButton);
  });

  it('should display radio input when render the RadioButton component', () => {
    const render = TestUtils.renderIntoDocument(<ThemedRadioButton />);
    const input = TestUtils.findRenderedDOMComponentWithTag(render, 'input');
    expect(input.getAttribute('type')).to.equal('radio');
  });

  it('should display label  when the label props is passed', () => {
    const render = TestUtils.renderIntoDocument(<ThemedRadioButton label="Test label"/>);
    const renNode = ReactDOM.findDOMNode(render);
    expect(renNode.childNodes[1].textContent).to.equal('Test label');
  });

  it('should be disabled when the disabled props is passed', () => {
    const render = TestUtils.renderIntoDocument(<ThemedRadioButton disabled />);
    const input = TestUtils.findRenderedDOMComponentWithTag(render, 'input');
    expect(input.disabled).to.equal(true);
  });

  it('should set label position to left or right when prop passed respectively', () => {
    const render = TestUtils.renderIntoDocument(<ThemedRadioButton labelPosition={'left'} label="Test label" />);
    const renNode = ReactDOM.findDOMNode(render);
    expect(renNode.childNodes[0].textContent).to.equal('Test label');
  });

  it('should override label styles when labelStyle props is passed', () => {
    const render = TestUtils.renderIntoDocument(<ThemedRadioButton labelStyle={{ color: 'red' }} label="Test label" />);
    const renNode = ReactDOM.findDOMNode(render);
    expect(renNode.childNodes[1].style.color).to.equal('red');
  });

  it('should override styles when styles props is passed', () => {
    const render = TestUtils.renderIntoDocument(<ThemedRadioButton style={{ boxShadow: '10px 10px 5px red' }}/>);
    const input = TestUtils.findRenderedDOMComponentWithTag(render, 'input');
    expect(input.style.boxShadow).to.equal('red 10px 10px 5px');
  });

  it('should set value when value props is passed', () => {
    const render = TestUtils.renderIntoDocument(<ThemedRadioButton value={'test'}/>);
    const input = TestUtils.findRenderedDOMComponentWithTag(render, 'input');
    expect(input.value).to.equal('test');
  });

  it('should radio button trigger the onCheck event handled by the RadioButton', () => {
    const onSwitchSpy = spy();
    const render = TestUtils.renderIntoDocument(<ThemedRadioButton onCheck={onSwitchSpy} />);
    const input = TestUtils.findRenderedDOMComponentWithTag(render, 'input');
    TestUtils.Simulate.change(input);
    expect(onSwitchSpy.called).to.be.ok; // eslint-disable-line no-unused-expressions
  });

});
