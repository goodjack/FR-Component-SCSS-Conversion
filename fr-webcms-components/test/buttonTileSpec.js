import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ButtonTile from 'ButtonTile';
import TileButton from 'ButtonTile/TileButton';
import injectTheme from './fixtures/injectTheme';
import ReactDOM from 'react-dom';

/* global expect */

describe('ButtonTile', () => {
  let ThemedButtonTile;
  const IMAGE_PATH = 'https://facebook.github.io/react/img/logo_og.png';
  beforeEach(() => {
    ThemedButtonTile = injectTheme(ButtonTile);
  });

  it('should display text value when the value props is passed', () => {
    const render = TestUtils.renderIntoDocument(<ThemedButtonTile tileSize="large">
      <TileButton /></ThemedButtonTile>);
    const imageButton = TestUtils.findRenderedDOMComponentWithTag(render, 'img');
    expect(imageButton.style.minHeight).to.equal('419px');
  });
  it('should check the style of rendered image for tileSize small', () => {
    const render = TestUtils.renderIntoDocument((<ThemedButtonTile tileSize="small">
      <TileButton />
    </ThemedButtonTile>));
    const imageButton = TestUtils.findRenderedDOMComponentWithTag(render, 'img');
    expect(imageButton.style.minHeight).to.equal('332px');
  });
  it('should check number of TileButton component supplied', () => {
    const render = TestUtils.renderIntoDocument((<ThemedButtonTile tileSize="small">
      <TileButton />
      <TileButton />
      <TileButton />
    </ThemedButtonTile>));
    const buttonTile = TestUtils.findRenderedDOMComponentWithTag(render, 'ul');
    expect(buttonTile.children.length).to.equal(3);
  });

  it('should check the buttonTile rendered tag', () => {
    const render = TestUtils.renderIntoDocument((<ThemedButtonTile tileSize="small">
      <TileButton />
    </ThemedButtonTile>));
    const buttonTile = ReactDOM.findDOMNode(render);
    expect(buttonTile.tagName.toLowerCase()).to.equal('div');
  });

  it('should check the imageSrc', () => {
    const render = TestUtils.renderIntoDocument(<ThemedButtonTile imageSrc={IMAGE_PATH}/>);
    const buttonTile = TestUtils.findRenderedDOMComponentWithTag(render, 'img');
    expect(buttonTile.getAttribute('src')).to.equal(IMAGE_PATH);
  });

  it('should check the target window of link', () => {
    const render = TestUtils.renderIntoDocument(<ThemedButtonTile>
      <TileButton link="/MEN" targetwindow="_blank"/></ThemedButtonTile>);
    const buttonTile = TestUtils.findRenderedDOMComponentWithTag(render, 'a');
    expect(buttonTile.getAttribute('href')).to.equal('/MEN');
    expect(buttonTile.getAttribute('target')).to.equal('_blank');
  });

  it('should check the id and className of the button tile root element', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedButtonTile id="buttonTileId" className="buttonTileClass">
      <TileButton />
      <TileButton />
      </ThemedButtonTile>);
    const buttonTile = ReactDOM.findDOMNode(render);
    expect(buttonTile.id).to.equal('buttonTileId');
    expect(buttonTile.className).to.equal('buttonTileClass');
  });

  it('should check the style of the root element', () => {
    const render = TestUtils.renderIntoDocument(<ThemedButtonTile id="buttonTileId">
      <TileButton link="/MEN" targetwindow="_blank"/></ThemedButtonTile>);
    const buttonTile = ReactDOM.findDOMNode(render);
    expect(buttonTile.style.minHeight).to.equal('391px');
  });

  it('should check the target window of link', () => {
    const render = TestUtils.renderIntoDocument(<ThemedButtonTile>
      <TileButton link="/MEN" targetwindow="_blank" color="red" /></ThemedButtonTile>);
    const buttonTile = TestUtils.findRenderedDOMComponentWithTag(render, 'button');
    expect(buttonTile.style.backgroundColor).to.equal('red');
  });

});
