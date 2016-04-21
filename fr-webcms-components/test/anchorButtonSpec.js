import React from 'react';
import AnchorButton from 'AnchorButton';
import injectTheme from './fixtures/injectTheme';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { spy } from 'sinon';

describe('AnchorButton', () => {
  let ThemedAnchorButton;
  let render;
  beforeEach(() => {
    ThemedAnchorButton = injectTheme(AnchorButton);
    render = TestUtils.renderIntoDocument(
      <ThemedAnchorButton
        defaultImage="http://test036.members-dev.com/feature/uq/airism/women/160209-anchor-05.jpg"
        rollOverImage="http://test036.members-dev.com/feature/uq/airism/women/160209-anchor-05_o.jpg"
        sectionLink="section_1"
        style={{ width: 120, height: 120 }}
      />
    );
  });

  it('props should be captured succesfully', () => {
    const imageNode = TestUtils.findRenderedDOMComponentWithTag(render, 'img');
    const linkNode = TestUtils.findRenderedDOMComponentWithTag(render, 'a');
    expect(imageNode.getAttribute('src')).to.equal('http://test036.members-dev.com/feature/uq/airism/women/160209-anchor-05.jpg');
    expect(linkNode.getAttribute('href')).to.equal('section_1');
    expect(linkNode.style.width).to.equal('120px');
    expect(linkNode.style.height).to.equal('120px');
  });

  it('should switch between rollOverImage and defaultImage on mouseEnter and mouseLeave respectively', () => {
    const linkNode = TestUtils.findRenderedDOMComponentWithTag(render, 'a');
    const imageNode = TestUtils.findRenderedDOMComponentWithTag(render, 'img');

    TestUtils.Simulate.mouseOver(linkNode);
    expect(imageNode.getAttribute('src')).to.equal('http://test036.members-dev.com/feature/uq/airism/women/160209-anchor-05_o.jpg');

    TestUtils.Simulate.mouseLeave(linkNode);
    expect(imageNode.getAttribute('src')).to.equal('http://test036.members-dev.com/feature/uq/airism/women/160209-anchor-05.jpg');
  });

  it('should invoke the function supplied in onClick ', () => {
    const onClickSpy = spy();
    const renderedComponent = TestUtils.renderIntoDocument(
      <ThemedAnchorButton
        defaultImage="http://test036.members-dev.com/feature/uq/airism/women/160209-anchor-05.jpg"
        rollOverImage="http://test036.members-dev.com/feature/uq/airism/women/160209-anchor-05_o.jpg"
        sectionLink="section_1"
        onClick={onClickSpy}
      />
    );

    const linkNode = TestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'a');
    TestUtils.Simulate.click(linkNode);
    expect(onClickSpy.called).to.equal(true);
  });
});
