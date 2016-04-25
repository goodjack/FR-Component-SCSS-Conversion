import React from 'react';
import TestUtils from 'react-addons-test-utils';
import injectTheme from './fixtures/injectTheme';
import ReactDOM from 'react-dom';
import FavoriteButton from 'FavoriteButton';
import data from './mockApiResponse';
import Chip from 'Chip';
import Rating from 'Rating';
import ProductCard from 'ProductCard';

/* global expect */
describe('TwoColumn', () => {
  let ThemedTwoColumn;
  beforeEach(() => {
    ThemedTwoColumn = injectTheme(ProductCard);
  });

  it('checks the variationType props on producttile is renedred properly', () => {
    const render = TestUtils.
    renderIntoDocument(<ThemedTwoColumn productData={data} variationType="Two-Column"/>);
    const MobileCardNode = ReactDOM.findDOMNode(render);
    expect(MobileCardNode.getAttribute('class')).to.equal('Two-Column');
  });
  it('checks the favorite button is set ', () => {
    const render = TestUtils.renderIntoDocument(<ThemedTwoColumn productData={data} variationType="Two-Column"/>);
    const favorite = TestUtils.scryRenderedComponentsWithType(render, FavoriteButton);
    expect(favorite).to.not.be.undefined; // eslint-disable-line no-unused-expressions
  });
  it('checks the color chip is set ', () => {
    const render = TestUtils.renderIntoDocument(<ThemedTwoColumn productData={data} variationType="Two-Column"/>);
    const chip = TestUtils.scryRenderedComponentsWithType(render, Chip);
    expect(chip).to.not.be.undefined; // eslint-disable-line no-unused-expressions
  });
  it('checks the rating component is set ', () => {
    const render = TestUtils.renderIntoDocument(<ThemedTwoColumn productData={data} variationType="Two-Column"/>);
    const rating = TestUtils.scryRenderedComponentsWithType(render, Rating);
    expect(rating).to.not.be.undefined; // eslint-disable-line no-unused-expressions
  });
});
