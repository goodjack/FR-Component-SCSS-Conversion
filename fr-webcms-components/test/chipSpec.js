import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import { spy } from 'sinon';
import Chip from 'Chip';
import Image from 'core/Image';
import Text from 'Text';
import ChipChild from 'Chip/ChipChild';
import injectTheme from './fixtures/injectTheme';
/* global expect */
describe('Chip', () => {
  let ThemedChip;

  beforeEach(() => {
    ThemedChip = injectTheme(Chip);
  });

  it('should check the no. of chips passed as a children', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedChip headingText = "head">
        <ChipChild headingContent = "data1" toolTipData = "tool1">
          <Image source="https://facebook.github.io/react/img/logo_og.png" />
        </ChipChild>
        <ChipChild headingContent = "data2" toolTipData = "tool2">
          <Image source="https://facebook.github.io/react/img/logo_og.png" />
        </ChipChild>
        <ChipChild headingContent = "data3" toolTipData = "tool3">
          <Image source="https://facebook.github.io/react/img/logo_og.png" />
        </ChipChild>
      </ThemedChip>
    );
    const DomNode = TestUtils.scryRenderedComponentsWithType(render, ChipChild);
    expect(DomNode.length).to.equal(3);
  });

  it('should validate Image chip rendered correctly', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedChip headingText = "head">
        <ChipChild headingContent = "data1" toolTipData = "tool1">
          <Image source="https://facebook.github.io/react/img/logo_og.png" />
        </ChipChild>
      </ThemedChip>
    );
    const DomNode = TestUtils.findRenderedDOMComponentWithTag(render, 'img');
    expect(DomNode.getAttribute('src'))
      .to.equal('https://facebook.github.io/react/img/logo_og.png');
  });

  it('should validate Text chip rendered correctly', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedChip headingText = "head">
        <ChipChild headingContent = "data1" toolTipData = "Hello World">
          <Text>Hello World</Text>
        </ChipChild>
      </ThemedChip>
    );
    const DomNode = TestUtils.scryRenderedComponentsWithType(render, ChipChild);
    expect(DomNode[0].props.toolTipData).to.equal('Hello World');
  });
  it('should trigger the onMouseEnter event', () => {
    const onClickSpy = spy();
    const render = TestUtils.renderIntoDocument(
      <ThemedChip headingText = "head" onMouseEnter={onClickSpy}>
        <ChipChild headingContent = "data1" toolTipData = "tool1">
          <Text>Hello World</Text>
        </ChipChild>
      </ThemedChip>
    );
    const DomNode = TestUtils.scryRenderedComponentsWithType(render, ChipChild);
    TestUtils.Simulate.mouseEnter(ReactDOM.findDOMNode(DomNode[0]));
    expect(onClickSpy.called).to.be.ok; // eslint-disable-line no-unused-expressions
  });
  it('should trigger the onMouseClick event', () => {
    const onClickSpy = spy();
    const render = TestUtils.renderIntoDocument(
      <ThemedChip headingText = "head" onMouseClick={onClickSpy}>
        <ChipChild headingContent = "data1" toolTipData = "tool1">
          <Text>Hello World</Text>
        </ChipChild>
      </ThemedChip>
    );
    const DomNode = TestUtils.scryRenderedComponentsWithType(render, ChipChild);
    TestUtils.Simulate.click(ReactDOM.findDOMNode(DomNode[0]));
    expect(onClickSpy.called).to.be.ok; // eslint-disable-line no-unused-expressions
  });
  it('should trigger the onTouchTap event', () => {
    const onClickSpy = spy();
    const render = TestUtils.renderIntoDocument(
      <ThemedChip headingText = "head" onTouchTap={onClickSpy}>
        <ChipChild headingContent = "data1" toolTipData = "tool1">
          <Text>Hello World</Text>
        </ChipChild>
      </ThemedChip>
    );
    const DomNode = TestUtils.scryRenderedComponentsWithType(render, ChipChild);
    TestUtils.Simulate.click(ReactDOM.findDOMNode(DomNode[0]));
    expect(onClickSpy.called).to.be.ok; // eslint-disable-line no-unused-expressions
  });
  it('should trigger the onMouseLeave event', () => {
    const onClickSpy = spy();
    const render = TestUtils.renderIntoDocument(
      <ThemedChip headingText = "head" onMouseLeave={onClickSpy}>
        <ChipChild headingContent = "data1" toolTipData = "tool1">
          <Text>Hello World</Text>
        </ChipChild>
      </ThemedChip>
    );
    const DomNode = TestUtils.scryRenderedComponentsWithType(render, ChipChild);
    TestUtils.Simulate.mouseLeave(ReactDOM.findDOMNode(DomNode[0]));
    expect(onClickSpy.called).to.be.ok; // eslint-disable-line no-unused-expressions
  });
});
