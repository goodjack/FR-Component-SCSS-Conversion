import React from 'react';
import FilmStrip from 'FilmStrip';
import FilmStripItem from 'FilmStrip/FilmStripItem';
import injectTheme from './fixtures/injectTheme';
import TestUtils from 'react-addons-test-utils';
import Image from 'core/Image';
import ReactDOM from 'react-dom';
import Swipable from 'core/Swipable';

/* global expect */

describe('FilmStrip', () => {
  let ThemedFilmStrip;

  beforeEach(() => {
    ThemedFilmStrip = injectTheme(FilmStrip);
  });

  it('should check the number of FilmStripItem', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedFilmStrip>
        <FilmStripItem
          imageSource="http://uniqlo.scene7.com/is/image/UNIQLO/usgoods_00_168542001"
        />
        <FilmStripItem
          imageSource="http://uniqlo.scene7.com/is/image/UNIQLO/usgoods_09_168542002"
        />
        <FilmStripItem
          imageSource="http://uniqlo.scene7.com/is/image/UNIQLO/usgoods_07_168542003"
        />
      </ThemedFilmStrip>
    );
    const FilmStripDomNode = TestUtils
      .scryRenderedComponentsWithType(render, FilmStripItem);
    expect(FilmStripDomNode.length).to.equal(3);
  });

  it('should check the Image is rendered', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedFilmStrip>
        <FilmStripItem
          imageSource="http://uniqlo.scene7.com/is/image/UNIQLO/usgoods_07_168542003"
          link="http://www.uniqlo.com/jp/stylingbook/pc/style/7746"
        />
        <FilmStripItem
          imageSource="http://uniqlo.scene7.com/is/image/UNIQLO/usgoods_07_168542003"
          link="http://www.uniqlo.com/jp/stylingbook/pc/style/7746"
        />
      </ThemedFilmStrip>
    );
    const FilmStripDomNode = TestUtils.scryRenderedComponentsWithType(render, Image);
    expect(FilmStripDomNode.length).to.equal(2);
  });

  it('should override the styles of the root element when style  props is passed', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedFilmStrip style={{ backgroundColor: 'red' }}>
        <FilmStripItem
          imageSource="http://uniqlo.scene7.com/is/image/UNIQLO/usgoods_07_168542003"
          link="http://www.uniqlo.com/jp/stylingbook/pc/style/7746"
        />
        <FilmStripItem
          imageSource="http://uniqlo.scene7.com/is/image/UNIQLO/usgoods_07_168542003"
          link="http://www.uniqlo.com/jp/stylingbook/pc/style/7746"
        />
      </ThemedFilmStrip>
    );
    const SectionAnchorBarDomNode = ReactDOM.findDOMNode(render);
    expect(SectionAnchorBarDomNode.style.backgroundColor).to.equal('red');
  });

  it('should check the Swipable is rendered', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedFilmStrip>
        <FilmStripItem
          imageSource="http://uniqlo.scene7.com/is/image/UNIQLO/usgoods_07_168542003"
          link="http://www.uniqlo.com/jp/stylingbook/pc/style/7746"
        />
        <FilmStripItem
          imageSource="http://uniqlo.scene7.com/is/image/UNIQLO/usgoods_07_168542003"
          link="http://www.uniqlo.com/jp/stylingbook/pc/style/7746"
        />
      </ThemedFilmStrip>
    );
    const FilmStripDomNode = TestUtils.scryRenderedComponentsWithType(render, Swipable);
    expect(FilmStripDomNode.length).to.equal(1);
  });
});
