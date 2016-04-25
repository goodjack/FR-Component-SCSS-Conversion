import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ActionStar from 'SvgIcons/action/Star';
import HalfStar from 'SvgIcons/action/HalfStar';
import ReactDOM from 'react-dom';

// import { spy } from 'sinon';
// import Chip from 'Chip';
// import Image from 'Image';
// import Text from 'Text';
import Rating from 'Rating';
import injectTheme from './fixtures/injectTheme';
/* global expect */
describe('Rating', () => {
  let ThemedRating;

  beforeEach(() => {
    ThemedRating = injectTheme(Rating);
  });

  it('should check the no. of total stars renedred as a children', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedRating maxCount ={5} ratingCount = {2}/>
    );
    const DomNode = TestUtils.findRenderedDOMComponentWithTag(render, 'ul');
    expect(DomNode.childNodes.length).to.equal(render.props.maxCount);
  });
  it('should check the no. of full stars renedred as a children', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedRating maxCount ={5} ratingCount = {2}/>
    );
    const DomNode = TestUtils.scryRenderedComponentsWithType(render, ActionStar);
    let count = 0;
    DomNode.map(star => {
      if (ReactDOM.findDOMNode(star).style.fill === '#f44336') count++;
    });
    expect(count).to.equal(render.props.ratingCount);
  });
  it('verifies the styles of the RatingComponent', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedRating style={{ backgroundColor: 'yellow' }} ratingCount = {2} />);
    const ulNode = TestUtils.findRenderedDOMComponentWithTag(render, 'ul');
    expect(ulNode.style.backgroundColor).to.equal('yellow');
  });
  it('verifies the className of the RatingComponent', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedRating className = "Rating" ratingCount = {2}/>);
    const ulNode = TestUtils.findRenderedDOMComponentWithTag(render, 'ul');
    expect(ulNode.getAttribute('class')).to.equal('Rating');
  });
  it('verifies the id of the RatingComponent', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedRating id = "Rating" ratingCount = {2}/>);
    const ulNode = TestUtils.findRenderedDOMComponentWithTag(render, 'ul');
    expect(ulNode.getAttribute('id')).to.equal('Rating');
  });
  it('decimal number is handled by RatingComponent', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedRating maxCount ={5} ratingCount = {2.5}/>);
    const DomNode = TestUtils.scryRenderedComponentsWithType(render, ActionStar);
    const halfDomeNode = TestUtils.scryRenderedComponentsWithType(render, HalfStar);
    let count = 0 + halfDomeNode.length;
    DomNode.map(star => {
      if (ReactDOM.findDOMNode(star).style.fill === '#f44336') count++;
    });
    expect(count).to.equal(3);
  });
});
