import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

// import Chip from 'Chip';
import ChipChild from 'Chip/ChipChild';
import injectTheme from './fixtures/injectTheme';
import ColorPicker from 'ColorPicker';
import { spy } from 'sinon';
/* global expect */
describe('ColorPicker', () => {
  let ThemedColorPicker;
  beforeEach(() => {
    ThemedColorPicker = injectTheme(ColorPicker);
  });
  const data = {
    alteration: {
      increment: '1',
      unit: 'cm',
      minLength: '50',
      type: '0',
      doubleWidth: '6',
    },
    desc: '<b>【オンライン限定取扱い】</b><br>インすっきりと着こなせるのが特徴。着回し自在で使いやすく、多彩なカラーからお気に入りを選べます。',
    onlinePriority: 100,
    salesStart: '1376845200000',
    onlineClassification: '/femobile/menpickup/largestoreitem02',
    defaultSKU: '079620-69-005-000',
    defaultColor: '69',
    onlineDisplayLinks: '',
    onlineID: '079620',
    productID: '079620',
    onlineStock: 0,
    onlineDeliveryDate: null,
    onlineCategory: '006002021',
    category: '341',
    title: 'ＭＥＮ　ドライカラーリブタンクトップ＋Ｅ',
    originalPrice: 477,
    SKUs: [{
      onlineSalesStatus: 2,
      salesStart: '1376845200000',
      lengthCode: '000',
      onlineOnly: true,
      currentPrice: 290,
      limitedOffer: false,
      multiBuy: false,
      onlineRealStock: 0,
      sizeCode: '005',
      onlineStock: 0,
      size: 'XL',
      discount: true,
      id: '079620-69-005-000',
      PLUs: ['2000045071025'],
      onlineLowStock: false,
      maxLength: 0,
      color: 'RED',
      length: '',
      active: true,
      colorCode: '17',
    }, {
      onlineSalesStatus: 2,
      salesStart: '1376845200000',
      lengthCode: '000',
      onlineOnly: true,
      currentPrice: 390,
      limitedOffer: false,
      multiBuy: false,
      onlineRealStock: 0,
      sizeCode: '003',
      onlineStock: 0,
      size: 'S',
      discount: true,
      id: '079620-17-003-000',
      PLUs: ['2000045071025'],
      onlineLowStock: false,
      maxLength: 0,
      color: 'RED',
      length: '',
      active: true,
      colorCode: '17',
    }, {
      onlineSalesStatus: 2,
      salesStart: '1376845200000',
      lengthCode: '000',
      onlineOnly: true,
      currentPrice: 555,
      limitedOffer: false,
      multiBuy: false,
      onlineRealStock: 0,
      sizeCode: '003',
      onlineStock: 0,
      size: 'S',
      discount: true,
      id: '079620-69-001-000',
      PLUs: ['2000045071025'],
      onlineLowStock: false,
      maxLength: 0,
      color: 'RED',
      length: '',
      active: true,
      colorCode: '17',
    }, {
      onlineSalesStatus: 2,
      salesStart: '1376845200000',
      lengthCode: '000',
      onlineOnly: true,
      currentPrice: 400,
      limitedOffer: false,
      multiBuy: false,
      onlineRealStock: 0,
      sizeCode: '004',
      onlineStock: 0,
      size: 'M',
      discount: true,
      id: '079620-69-004-000',
      PLUs: ['2000045071025'],
      onlineLowStock: false,
      maxLength: 0,
      color: 'RED',
      length: '',
      active: true,
      colorCode: '17',
    }, {
      onlineSalesStatus: 2,
      salesStart: '1376845200000',
      lengthCode: '000',
      onlineOnly: true,
      currentPrice: 300,
      limitedOffer: false,
      multiBuy: false,
      onlineRealStock: 0,
      sizeCode: '003',
      onlineStock: 0,
      size: 'S',
      discount: true,
      id: '079620-69-012-000',
      PLUs: ['2000045071025'],
      onlineLowStock: false,
      maxLength: 0,
      color: 'RED',
      length: '',
      active: true,
      colorCode: '17',
    }, {
      onlineSalesStatus: 2,
      salesStart: '1376845200000',
      lengthCode: '000',
      onlineOnly: true,
      currentPrice: 100,
      limitedOffer: false,
      multiBuy: false,
      onlineRealStock: 0,
      sizeCode: '003',
      onlineStock: 0,
      size: 'S',
      discount: true,
      id: '079620-69-069-000',
      PLUs: ['2000045071025'],
      onlineLowStock: false,
      maxLength: 0,
      color: 'RED',
      length: '',
      active: true,
      colorCode: '17',
    }, {
      onlineSalesStatus: 2,
      salesStart: '1376845200000',
      lengthCode: '000',
      onlineOnly: true,
      currentPrice: 380,
      limitedOffer: false,
      multiBuy: false,
      onlineRealStock: 0,
      sizeCode: '003',
      onlineStock: 0,
      size: 'S',
      discount: true,
      id: '079620-17-003-000',
      PLUs: ['2000045071025'],
      onlineLowStock: false,
      maxLength: 0,
      color: 'RED',
      length: '',
      active: true,
      colorCode: '17',
    }, {
      onlineSalesStatus: 2,
      salesStart: '1376845200000',
      lengthCode: '000',
      onlineOnly: true,
      currentPrice: 2,
      limitedOffer: false,
      multiBuy: false,
      onlineRealStock: 0,
      sizeCode: '003',
      onlineStock: 0,
      size: 'S',
      discount: true,
      id: '079620-17-003-000',
      PLUs: ['2000045071025'],
      onlineLowStock: false,
      maxLength: 0,
      color: 'RED',
      length: '',
      active: true,
      colorCode: '17',
    },
  ],
    onlineProductClass: 0,
    images: {
      familyProduct: {
        height: 228,
        urls: {
          17: 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/17_079620_popup.jpg',
          24: 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/24_079620_popup.jpg',
          34: 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/34_079620_popup.jpg',
          38: 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/38_079620_popup.jpg',
          54: 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/54_079620_popup.jpg',
          57: 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/57_079620_popup.jpg',
          66: 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/66_079620_popup.jpg',
          69: 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/69_079620_popup.jpg',
        },
        width: 228,
      },
      family: {
        height: 228,
        urls: {
          17: 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/17_079620_popup.jpg',
          24: 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/24_079620_popup.jpg',
          34: 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/34_079620_popup.jpg',
          38: 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/38_079620_popup.jpg',
          54: 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/54_079620_popup.jpg',
          57: 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/57_079620_popup.jpg',
          66: 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/66_079620_popup.jpg',
          69: 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/69_079620_popup.jpg',
        },
        width: 228,
      },
      zoom: {
        height: 1000,
        urls: {
          17: 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/17_079620_popup.jpg',
          24: 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/24_079620_popup.jpg',
          34: 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/34_079620_popup.jpg',
          38: 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/38_079620_popup.jpg',
          54: 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/54_079620_popup.jpg',
          57: 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/57_079620_popup.jpg',
          66: 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/66_079620_popup.jpg',
          69: 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/69_079620_popup.jpg',
        },
        width: 1000,
      },
      small: {
        height: 90,
        urls: {
          17: 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/17_079620_popup.jpg',
          24: 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/24_079620_popup.jpg',
          34: 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/34_079620_popup.jpg',
          38: 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/38_079620_popup.jpg',
          54: 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/54_079620_popup.jpg',
          57: 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/57_079620_popup.jpg',
          66: 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/66_079620_popup.jpg',
          69: 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/69_079620_popup.jpg',
        },
        width: 90,
      },
      swatch: {
        height: 34,
        urls: [
         { colorCode: '53',
         url: 'http://im.uniqlo.com/images/jp/pc/goods/164200/chip/53_164200.gif',
       },
                 { colorCode: '66',
                  url: 'http://im.uniqlo.com/images/jp/pc/goods/164200/chip/66_164200.gif',
                 },
                 { colorCode: '69',
                 url: 'http://im.uniqlo.com/images/jp/pc/goods/164200/chip/69_164200.gif',
               },
                 { colorCode: '03',
                 url: 'http://im.uniqlo.com/images/jp/pc/goods/164200/chip/03_164200.gif',
               },
                 { colorCode: '09',
                 url: 'http://im.uniqlo.com/images/jp/pc/goods/164200/chip/09_164200.gif',
               },
                 { colorCode: '42',
                 url: 'http://im.uniqlo.com/images/jp/pc/goods/164200/chip/42_164200.gif',
               },
                 { colorCode: '65',
                 url: 'http://im.uniqlo.com/images/jp/pc/goods/164200/chip/65_164200.gif',
               },
                 { colorCode: '01',
                 url: 'http://im.uniqlo.com/images/jp/pc/goods/164200/chip/01_164200.gif',
               },
        ],
        width: 34,
      },
      main: {
        height: 570,
        urls: [
      { colorCode: '17',
      url: 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/17_079620_popup.jpg',
    },
              { colorCode: '01',
                url: 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/01_079620_popup.jpg',
              },
              { colorCode: '03',
              url: 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/03_079620_popup.jpg',
            },
              { colorCode: '08',
              url: 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/08_079620_popup.jpg',
            },
              { colorCode: '09',
              url: 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/09_079620_popup.jpg',
            },
              { colorCode: '17',
              url: 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/17_079620_popup.jpg',
            },
              { colorCode: '66',
              url: 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/66_079620_popup.jpg',
            },
              { colorCode: '69',
              url: 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/69_079620_popup.jpg',
            },
        ],
        width: 570,
      },
    },
    review: {
      count: 1,
      average: 5,
    },
  };
  it('verifies the style of the root element', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedColorPicker tileSize ="large" productInfo={data} style={{ background: 'red' }}/>);
    const ColorPickerDOMNode = ReactDOM.findDOMNode(render);
    expect(ColorPickerDOMNode.style.background).to.equal('red');
  });

  it('should display the image with the specified width and height', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedColorPicker tileSize ="large" productInfo={data}
        imageStyle={{ width: 500, height: 500 }}
      />);
    const imageBody = TestUtils.findRenderedDOMComponentWithTag(render, 'a');
    expect(imageBody.querySelector('img').style.width).to.equal('500px');
    expect(imageBody.querySelector('img').style.height).to.equal('500px');
  });

  it('checks the size of tile rendering properly based on size passed', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedColorPicker tileSize ="large" productInfo={data}/>);
    const ColorPickerDOMNode = ReactDOM.findDOMNode(render);
    expect(ColorPickerDOMNode.getAttribute('class')).to.equal('large');
  });

  it('checks the size of tile rendering properly based on size passed', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedColorPicker tileSize ="small" productInfo={data}/>);
    const ColorPickerDOMNode = ReactDOM.findDOMNode(render);
    expect(ColorPickerDOMNode.getAttribute('class')).to.equal('small');
  });
  it('checks the mouseEnter event is getting called', () => {
    const onClickSpy = spy();
    const render = TestUtils.renderIntoDocument(
      <ThemedColorPicker tileSize ="small" productInfo={data} onMouseEnter={onClickSpy}/>);
    const DomNode = TestUtils.scryRenderedComponentsWithType(render, ChipChild);
    TestUtils.Simulate.mouseEnter(ReactDOM.findDOMNode(DomNode[0]));
    expect(onClickSpy.called).to.be.ok; // eslint-disable-line no-unused-expressions
  });
  it('checks the mouseClick event is getting called', () => {
    const onClickSpy = spy();
    const render = TestUtils.renderIntoDocument(
      <ThemedColorPicker tileSize ="small" productInfo={data} productTileCallback={onClickSpy}/>);
    const DomNode = TestUtils.scryRenderedComponentsWithType(render, ChipChild);
    TestUtils.Simulate.click(ReactDOM.findDOMNode(DomNode[0]));
    expect(onClickSpy.called).to.be.ok; // eslint-disable-line no-unused-expressions
  });
  it('checks the no. of chips rendered', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedColorPicker tileSize ="small" productInfo={data} />);
    const DomNode = TestUtils.scryRenderedComponentsWithType(render, ChipChild);
    expect(DomNode.length).to.equal(data.images.swatch.urls.length);
  });

});
