import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import SectionTitle from 'SectionTitle';
import injectTheme from './fixtures/injectTheme';

/* global expect */

describe('SectionTitle', () => {
  let ThemedSectionTitle;

  beforeEach(() => {
    ThemedSectionTitle = injectTheme(SectionTitle);
  });

  it('should check the sectionTitle rendered with subtitle', () => {

    const render = TestUtils.renderIntoDocument(
    <ThemedSectionTitle title ="カーディガン" subtitle = "CARDIGANS" viewType="Regular with subhead" />);
    const SectionTitleDOMNode = ReactDOM.findDOMNode(render);
    expect(SectionTitleDOMNode.textContent).to.equal('カーディガンCARDIGANS');
  });

  it('should check the SectionTitle rendered without subtitle', () => {

    const render = TestUtils.renderIntoDocument(
    <ThemedSectionTitle title ="ストールカーディガン"
      subtitle = "Cardigans" viewType="Regular without subhead"
    />);
    const SectionTitleDOMNode = ReactDOM.findDOMNode(render);
    expect(SectionTitleDOMNode.textContent).to.equal('ストールカーディガン');
  });

  it('should check the subtitle style passed', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedSectionTitle title="カーディガン"
        subtitle="CARDIGANS"
        viewType="Regular with subhead" style={{ color: 'red' }}
      />);
    const SectionTitleDOMNode = ReactDOM.findDOMNode(render);
    expect(SectionTitleDOMNode.style.color).to.equal('red');
  });
  it('should check the className passed to the root element', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedSectionTitle title="カーディガン"
        subtitle="CARDIGANS"
        className="sectionClass"
      />);
    const SectionTitleDOMNode = ReactDOM.findDOMNode(render);
    expect(SectionTitleDOMNode.className).to.equal('sectionClass');
  });
});
