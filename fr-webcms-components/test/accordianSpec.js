import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import injectTheme from './fixtures/injectTheme';
import Accordion from 'Accordion';
import AccordionItem from 'Accordion/AccordionItem';
import Heading from 'Heading';
import Text from 'Text';

/* global expect */

describe('Accordion', () => {

  let ThemedAccordian;

  const PLUS = 'M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z';
  const MINUS = 'M19,13H5V11H19V13Z';

  const calbkfunc = (ref) => {
    console.log(ref);
  };

  beforeEach(() => {
    ThemedAccordian = injectTheme(Accordion);
  });

  it('check the number of children for Accordion component', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedAccordian expandMultipleTab>
        <AccordionItem
          showIcon="ActionMinus"
          hideIcon="ActionPlus"
        >
          <Heading type="h3" headingText="section1" />
          <Text>Content 1</Text>
        </AccordionItem>
        <AccordionItem
          expandTab
          showIcon="ActionMinus"
          hideIcon="ActionPlus"
        >
          <Heading type="h3" headingText="section2" />
          <Text>Content 2</Text>
        </AccordionItem>
      </ThemedAccordian>);
    const accordionChild = TestUtils.scryRenderedComponentsWithType(render, AccordionItem);
    expect(accordionChild.length).to.equal(2);
  });

  it('should check if the content is displaying', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedAccordian expandMultipleTab>
        <AccordionItem
          expandTab
          showIcon="ActionMinus"
          hideIcon="ActionPlus"
        >
          <Heading type="h3" headingText="section2" />
          <Text>Content 2</Text>
        </AccordionItem>
      </ThemedAccordian>);

    // let headingComponent = TestUtils.scryRenderedComponentsWithType(Accordion, Heading);
    const headingDom = ReactDOM.findDOMNode(render);
    const content = ReactDOM.findDOMNode(headingDom.children[0].children[1]);

    expect(content.style.height).to.equal('auto');
  });

  it('check if the content display is prevented', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedAccordian>
        <AccordionItem
          showIcon="ActionMinus"
          hideIcon="ActionPlus"
        >
          <Heading type="h3" headingText="section2" />
          <Text>Content 2</Text>
        </AccordionItem>
      </ThemedAccordian>);

    // let headingComponent = TestUtils.scryRenderedComponentsWithType(Accordion, Heading);
    const headingDom = ReactDOM.findDOMNode(render);
    const content = ReactDOM.findDOMNode(headingDom.children[0].children[1]);

    expect(content.style.height).to.equal('0px');
  });

  it('check check the id', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedAccordian id="accord">
        <AccordionItem
          showIcon="ActionMinus"
          hideIcon="ActionPlus"
        >
          <Heading type="h3" headingText="section2" />
          <Text>Content 2</Text>
        </AccordionItem>
      </ThemedAccordian>);

    const accordion = ReactDOM.findDOMNode(render);
    expect(accordion.id).to.equal('accord');
  });

  it('check the itemReferenceId', () => {
    const render = TestUtils.renderIntoDocument(
        <AccordionItem
          itemReferenceId={1}
          showIcon="ActionMinus"
          hideIcon="ActionPlus"
        >
          <Heading type="h3" headingText="section2" />
          <Text>Content 2</Text>
        </AccordionItem>);

    const accordion = ReactDOM.findDOMNode(render);
    expect(accordion.id).to.equal('1');
  });

  it('should check the svg icon based on expandTab property', () => {
    const render = TestUtils.renderIntoDocument(
      <AccordionItem
        expandTab
        showIcon="ActionMinus"
        hideIcon="ActionPlus"
      >
        <Heading type="h3" headingText="section2" />
        <Text>Content 2</Text>
      </AccordionItem>
      );
    expect(render.props.expandTab).to.equal(true);

    const renderedButton = TestUtils.findRenderedDOMComponentWithTag(render, 'svg');
    const svgDocument = ReactDOM.findDOMNode(renderedButton);
    expect(svgDocument.firstChild.getAttribute('d')).to.equal(MINUS);
  });

  it('should check the default SVG to render', () => {
    const render = TestUtils.renderIntoDocument(
      <AccordionItem
        showIcon="ActionMinus"
        hideIcon="ActionPlus"
      >
        <Heading type="h3" headingText="section2" />
        <Text>Content 2</Text>
      </AccordionItem>
      );

    const renderedButton = TestUtils.findRenderedDOMComponentWithTag(render, 'svg');
    const svgDocument = ReactDOM.findDOMNode(renderedButton);
    expect(svgDocument.firstChild.getAttribute('d')).to.equal(PLUS);
  });

  it('check the callback function', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedAccordian>
        <AccordionItem
          itemReferenceId={1}
          accordionCallback={calbkfunc}
          showIcon="ActionMinus"
          hideIcon="ActionPlus"
        >
          <Heading type="h3" headingText="section1" />
          <Text>Content 1</Text>
        </AccordionItem>
        <AccordionItem
          expandTab
          itemReferenceId={1}
          accordionCallback={calbkfunc}
          showIcon="ActionMinus"
          hideIcon="ActionPlus"
        >
          <Heading type="h3" headingText="section2" />
          <Text>Content 2</Text>
        </AccordionItem>
      </ThemedAccordian>);
    const accordion = TestUtils.scryRenderedComponentsWithType(render, AccordionItem);

    const dom1 = ReactDOM.findDOMNode(accordion[0]);
    expect(dom1.children[1].style.height).to.equal('0px');
    expect(dom1.children[1].style.opacity).to.equal('0');

    const dom2 = dom1.firstChild;
    TestUtils.Simulate.click(dom2);

    expect(render.props.expandMultipleTab).to.equal(undefined);
    expect(dom1.children[1].style.height).to.equal('auto');
    expect(dom1.children[1].style.opacity).to.equal('1');
  });

  it('check the callback function mutiple tab condition', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedAccordian expandMultipleTab>
        <AccordionItem
          showIcon="ActionMinus"
          hideIcon="ActionPlus"
        >
          <Heading type="h3" headingText="section1" />
          <Text>Content 1</Text>
        </AccordionItem>
        <AccordionItem
          expandTab={false}
          showIcon="ActionMinus"
          hideIcon="ActionPlus"
        >
          <Heading type="h3" headingText="section2" />
          <Text>Content 2</Text>
        </AccordionItem>
      </ThemedAccordian>);
    const accordion = TestUtils.scryRenderedComponentsWithType(render, AccordionItem);

    const dom1 = ReactDOM.findDOMNode(accordion[0]);
    expect(dom1.children[1].style.height).to.equal('0px');
    expect(dom1.children[1].style.opacity).to.equal('0');

    const dom2 = dom1.firstChild;
    TestUtils.Simulate.click(dom2);

    expect(render.props.expandMultipleTab).to.equal(true);
    expect(dom1.children[1].style.height).to.equal('auto');
  });

  it('check the callback function expandMultipleTab with expandTab condition', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedAccordian expandMultipleTab>
        <AccordionItem
          expandTab
          showIcon="ActionMinus"
          hideIcon="ActionPlus"
        >
          <Heading type="h3" headingText="section1" />
          <Text>Content 1</Text>
        </AccordionItem>
        <AccordionItem
          expandTab
          showIcon="ActionMinus"
          hideIcon="ActionPlus"
        >
          <Heading type="h3" headingText="section2" />
          <Text>Content 2</Text>
        </AccordionItem>
      </ThemedAccordian>);
    const accordion = TestUtils.scryRenderedComponentsWithType(render, AccordionItem);

    const dom1 = ReactDOM.findDOMNode(accordion[0]);

    const dom2 = dom1.firstChild;
    TestUtils.Simulate.click(dom2);

    expect(render.props.expandMultipleTab).to.equal(true);
    expect(dom1.children[1].style.height).to.equal('0px');
  });

});
