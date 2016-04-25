import React from 'react';
import EnhancedSelect from 'EnhancedSelect';
import EnhancedOption from 'EnhancedOption';
import injectTheme from './fixtures/injectTheme';
import TestUtils from 'react-addons-test-utils';
import { spy } from 'sinon';
import { expect } from 'chai';

describe('EnhancedSelect', () => {
  let ThemedEnhancedSelect;

  beforeEach(() => {
    ThemedEnhancedSelect = injectTheme(EnhancedSelect);
  });

  it('should disable select menu when the disabled props is passed', () => {
    const render = TestUtils.renderIntoDocument(<ThemedEnhancedSelect disabled>
      <EnhancedOption name="Morning" value="1"/>
      <EnhancedOption name="Evening" value="2"/>
    </ThemedEnhancedSelect>);
    const select = TestUtils.findRenderedDOMComponentWithTag(render, 'select');
    expect(select.disabled).to.equal(true);
  });

  it('should capture and apply style props when they\'re passed', () => {
    const render = TestUtils.renderIntoDocument(<ThemedEnhancedSelect style={{ boxShadow: '10px 10px 5px red' }}>
      <EnhancedOption name="Morning" value="1"/>
      <EnhancedOption name="Evening" value="2"/>
    </ThemedEnhancedSelect>);
    const select = TestUtils.findRenderedDOMComponentWithTag(render, 'select');
    expect(select.style.boxShadow).to.equal('red 10px 10px 5px');
  });

  it('should set name when name props is passed', () => {
    const render = TestUtils.renderIntoDocument(<ThemedEnhancedSelect name={'Selct menu name'}>
      <EnhancedOption name="Morning" value="1"/>
      <EnhancedOption name="Evening" value="2"/>
    </ThemedEnhancedSelect>);
    const select = TestUtils.findRenderedDOMComponentWithTag(render, 'select');
    expect(select.name).to.equal('Selct menu name');
  });

  it('should set id when id props is passed', () => {
    const render = TestUtils.renderIntoDocument(<ThemedEnhancedSelect id={'select-menu'}>
      <EnhancedOption name="Morning" value="1"/>
      <EnhancedOption name="Evening" value="2"/>
    </ThemedEnhancedSelect>);
    const select = TestUtils.findRenderedDOMComponentWithTag(render, 'select');
    expect(select.id).to.equal('select-menu');
  });

  it('should trigger the onChange event handled by the select', () => {
    const onChangeSpy = spy();
    const render = TestUtils.renderIntoDocument(<ThemedEnhancedSelect onChange={onChangeSpy}>
      <EnhancedOption name="Morning" value="1"/>
      <EnhancedOption name="Evening" value="2"/>
    </ThemedEnhancedSelect>);
    const select = TestUtils.findRenderedDOMComponentWithTag(render, 'select');
    TestUtils.Simulate.change(select);
    expect(onChangeSpy.called).to.be.ok; // eslint-disable-line no-unused-expressions
  });

  it('should check the number of selectable options', () => {
    const render = TestUtils.renderIntoDocument(<ThemedEnhancedSelect>
      <EnhancedOption name="Morning" value="1"/>
      <EnhancedOption name="Evening" value="2"/>
    </ThemedEnhancedSelect>);
    const options = TestUtils.scryRenderedDOMComponentsWithTag(render, 'option');
    expect(options.length).to.equal(2);
  });

});
