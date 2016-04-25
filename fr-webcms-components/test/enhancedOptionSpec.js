import React from 'react';
import EnhancedSelect from 'EnhancedSelect';
import EnhancedOption from 'EnhancedOption';
import injectTheme from './fixtures/injectTheme';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';

describe('EnhancedOption', () => {
  let ThemedEnhancedSelect;
  let ThemedEnhancedOption;

  beforeEach(() => {
    ThemedEnhancedSelect = injectTheme(EnhancedSelect);
    ThemedEnhancedOption = injectTheme(EnhancedOption);
  });

  it('should disable the option when the disabled props is passed', () => {
    const render = TestUtils.renderIntoDocument(<ThemedEnhancedOption value="1" disabled />);
    const option = TestUtils.findRenderedDOMComponentWithTag(render, 'option');
    expect(option.disabled).to.equal(true);
  });

  it('should capture and apply style props when they\'re passed', () => {
    const render = TestUtils.renderIntoDocument(<ThemedEnhancedSelect style={{ backgroundColor: '#666' }}>
      <ThemedEnhancedOption name="Morning" value="1"/>
      <ThemedEnhancedOption name="Evening" value="2"/>
    </ThemedEnhancedSelect>);
    const select = TestUtils.findRenderedDOMComponentWithTag(render, 'select');
    expect(select.style.backgroundColor).to.equal('rgb(102, 102, 102)');
  });

  it('should render the number of selectable options same as the number of children props passed to ThemedEnhancedSelect', () => {
    const render = TestUtils.renderIntoDocument(<ThemedEnhancedSelect>
      <ThemedEnhancedOption name="Morning" value="1"/>
      <ThemedEnhancedOption name="Evening" value="2"/>
    </ThemedEnhancedSelect>);
    const options = TestUtils.scryRenderedDOMComponentsWithTag(render, 'option');
    expect(options.length).to.equal(2);
  });

});
