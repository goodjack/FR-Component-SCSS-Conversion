import React from 'react';
import TestUtils from 'react-addons-test-utils';
import injectTheme from './fixtures/injectTheme';

import { getImageUrl } from 'Product/productService';

import ReactDOM from 'react-dom';
import FavoriteButton from 'FavoriteButton';
import DesktopCard from 'ProductCard/DesktopCard';
import TwoColumnCard from 'ProductCard/TwoColumnCard';
import SingleSmallCard from 'ProductCard/SingleSmallCard';
import SingleLargeCard from 'ProductCard/SingleLargeCard';
import data from './mockApiResponse';
import ProductCard from 'ProductCard';

/* global expect */
describe('DesktopCard', () => {
  let ThemedDesktopCard;
  beforeEach(() => {
    ThemedDesktopCard = injectTheme(ProductCard);
  });

  it('checks the variationType props on productCard is rendered properly', () => {
    const render = TestUtils.
    renderIntoDocument(<ThemedDesktopCard productData={data} variationType="Multi-Large"/>);
    const ProductCardNode = ReactDOM.findDOMNode(render);
    expect(ProductCardNode.getAttribute('class')).to.equal('large');
  });

  it('checks the variationType props on productCard is rendered properly', () => {
    const render = TestUtils.
    renderIntoDocument(<ThemedDesktopCard productData={data} variationType="Multi-Small"/>);
    const ProductCardNode = ReactDOM.findDOMNode(render);
    expect(ProductCardNode.getAttribute('class')).to.equal('small');
  });
  it('checks the default image is rendered properly', () => {
    const render = TestUtils.
    renderIntoDocument(<ThemedDesktopCard productData={data} variationType="Multi-Small"/>);
    const ProductCardNode = ReactDOM.findDOMNode(render);
    const renderedimgsrc = ProductCardNode.querySelector('img').getAttribute('src');
    expect(renderedimgsrc).to.equal(getImageUrl(data.images.main.urls, data.defaultColor));
  });
  it('checks the favorite button is set ', () => {
    const render = TestUtils.renderIntoDocument(<ThemedDesktopCard productData={data} variationType="Multi-Small"/>);
    const favorite = TestUtils.scryRenderedComponentsWithType(render, FavoriteButton);
    expect(favorite).to.not.be.undefined; // eslint-disable-line no-unused-expressions
  });
  it('checks the offerText Property is rendered properly', () => {
    const render = TestUtils.renderIntoDocument(<ThemedDesktopCard productData={data} offerText="limitedOffer"
      variationType="Multi-Small"
    />);
    expect(render.props.offerText).to.equal('limitedOffer');
  });
  it('checks the notesText Property is rendered properly', () => {
    const render = TestUtils.renderIntoDocument(<ThemedDesktopCard
      productData={data}
      notesText="Notes"
      variationType="Multi-Small"
    />);
    expect(render.props.notesText).to.equal('Notes');
  });
  it('checks the testimonialText Property is rendered properly', () => {
    const render = TestUtils.renderIntoDocument(<ThemedDesktopCard
      productData={data}
      testimonialText="Testimonials"
      variationType="Multi-Small"
    />);
    expect(render.props.testimonialText).to.equal('Testimonials');
  });
  it('checks the Desktop card is rendered properly', () => {
    const render = TestUtils.renderIntoDocument(<ThemedDesktopCard
      productData={data}
      testimonialText="Testimonials"
      variationType="Multi-Small"
    />);
    const CardNode = TestUtils.scryRenderedComponentsWithType(render, DesktopCard);
    expect(CardNode).to.not.be.undefined; // eslint-disable-line no-unused-expressions
  });
  it('checks the TwoColumnCard  is rendered properly', () => {
    const render = TestUtils.renderIntoDocument(<ThemedDesktopCard
      productData={data}
      testimonialText="Testimonials"
      variationType="Two-Column"
    />);
    const PCTwoColumns = TestUtils.scryRenderedComponentsWithType(render, TwoColumnCard);
    expect(PCTwoColumns).to.not.be.undefined; // eslint-disable-line no-unused-expressions
  });
  it('checks the SingleSmallCard card is rendered properly', () => {
    const render = TestUtils.renderIntoDocument(<ThemedDesktopCard
      productData={data}
      testimonialText="Testimonials"
      variationType="Single-Small"
    />);
    const PCMultiSmalls = TestUtils.scryRenderedComponentsWithType(render, SingleSmallCard);
    expect(PCMultiSmalls).to.not.be.undefined; // eslint-disable-line no-unused-expressions
  });
  it('checks the SingleLargeCard card is rendered properly', () => {
    const render = TestUtils.renderIntoDocument(<ThemedDesktopCard
      productData={data}
      testimonialText="Testimonials"
      variationType="Single-Large"
    />);
    const PCMultiSmalls = TestUtils.scryRenderedComponentsWithType(render, SingleLargeCard);
    expect(PCMultiSmalls).to.not.be.undefined; // eslint-disable-line no-unused-expressions
  });
});
