import React from 'react';
import TestUtils from 'react-addons-test-utils';
import injectTheme from './fixtures/injectTheme';
import ReactDOM from 'react-dom';
import FavoriteButton from 'FavoriteButton';
import Chip from 'Chip';
import data from './mockApiResponse';
import Rating from 'Rating';
import ProductCard from 'ProductCard';

/* global expect */
describe('SingleSmallCard', () => {
  let ThemedSingleSmallCard;
  beforeEach(() => {
    ThemedSingleSmallCard = injectTheme(ProductCard);
  });

  it('checks the variationType props on productCard is renedred properly', () => {
    const render = TestUtils.
    renderIntoDocument(<ThemedSingleSmallCard productData={data} variationType="Single-Small"/>);
    const singleSmallCardNode = ReactDOM.findDOMNode(render);
    expect(singleSmallCardNode.getAttribute('class')).to.equal('Single-Small');
  });
  it('checks the favorite button is set ', () => {
    const render = TestUtils.renderIntoDocument(<ThemedSingleSmallCard productData={data} variationType="Single-Small"/>);
    const favorite = TestUtils.scryRenderedComponentsWithType(render, FavoriteButton);
    expect(favorite).to.not.be.undefined; // eslint-disable-line no-unused-expressions
  });
  it('checks the color chip is set ', () => {
    const render = TestUtils.renderIntoDocument(<ThemedSingleSmallCard productData={data} variationType="Single-Small"/>);
    const chip = TestUtils.scryRenderedComponentsWithType(render, Chip);
    expect(chip).to.not.be.undefined; // eslint-disable-line no-unused-expressions
  });
  it('checks the rating component is set ', () => {
    const render = TestUtils.renderIntoDocument(<ThemedSingleSmallCard productData={data} variationType="Single-Small"/>);
    const rating = TestUtils.scryRenderedComponentsWithType(render, Rating);
    expect(rating).to.not.be.undefined; // eslint-disable-line no-unused-expressions
  });

});
