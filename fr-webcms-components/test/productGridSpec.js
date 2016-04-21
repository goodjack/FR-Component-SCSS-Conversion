import React from 'react';
import ProductGrid, { Fillers } from 'ProductGrid';
import GridCell from 'core/GridCell';
import ImageTile from 'ImageTile';
import ButtonTile from 'ButtonTile';
import TileButton from 'ButtonTile/TileButton';
import injectTheme from './fixtures/injectTheme';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import sinon from 'sinon';

describe('ProductGrid', () => {
  let ThemedProductGrid;
  let server = null;
  const productData = {
    data: {
      products: {
        items: [
          {
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
            productID: '079621',
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
          },
          {
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
          },
        ],
      },
    },
  };

  beforeEach(() => {
    ThemedProductGrid = injectTheme(ProductGrid);
    server = sinon.fakeServer.create();
    sinon.xhr.supportsCORS = true;
  });
  afterEach(() => {
    server.restore();
  });

  it('should display all product grid cells when render the component', () => {
    server.respondWith('POST', '/catalog', [200, { 'Content-Type': 'text/html' }, JSON.stringify(productData)]);
    const render = TestUtils.renderIntoDocument(
      <ThemedProductGrid
        variationType="Single-Small"
        catelogUrl="/catalog"
        products="079911,159700,159699"
        cellHeight="56"
        catelogPath="341"
        style={{ color: '#CCC' }}
      />
    );
    server.respond();
    const renNode = TestUtils.scryRenderedComponentsWithType(render, GridCell);
    expect(renNode.length).to.equal(0);
  });
  it('should display all fillers when filler children passed', () => {
    server.respondWith('POST', '/graphql/catalog', [200, { 'Content-Type': 'text/html' }, JSON.stringify(productData)]);
    const render = TestUtils.renderIntoDocument(
      <ThemedProductGrid
        variationType="Single-Small"
        catelogUrl="/graphql/catalog"
        products="079911,159700,159699"
      >
        <Fillers >
          <ImageTile source="https://goo.gl/Rs8Swl" link="#" target="_blank" alternateText="txt" />
          <ButtonTile imageSrc="https://goo.gl/OiNmpt">
            <TileButton title="women" link="#" color="#ff0" target="_blank"/>
            <TileButton title="men" link="#" color="#cf0" target="_blank" />
            <TileButton title="kids" link="#" color="#fc0" target="_blank"/>
            <TileButton title="baby" link="#" color="#cc0" target="_blank"/>
          </ButtonTile>
          <ImageTile source="https://goo.gl/Rs8Swl" link="#" target="_blank" alternateText="txt" />
        </Fillers>
      </ThemedProductGrid>
    );
    server.respond();
    let renNode = TestUtils.scryRenderedComponentsWithType(render, ImageTile);
    expect(renNode.length).to.equal(2);
    renNode = TestUtils.scryRenderedComponentsWithType(render, ButtonTile);
    expect(renNode.length).to.equal(1);
    renNode = TestUtils.scryRenderedComponentsWithType(render, TileButton);
    expect(renNode.length).to.equal(4);
  });

  it('should fill the fillers components only the remaining columns when filler prop Cover is passed', () => {
    server.respondWith('POST', '/catalog', [200, { 'Content-Type': 'text/html' }, JSON.stringify(productData)]);
    const render = TestUtils.renderIntoDocument(
      <ThemedProductGrid
        variationType="Multi-Small"
        catelogUrl="/catalog"
        products="079911,159700,159699"
      >
        <Fillers display="Cover">
          <ImageTile source="https://goo.gl/Rs8Swl" link="#" target="_blank" alternateText="txt" />
          <ButtonTile imageSrc="https://goo.gl/OiNmpt">
            <TileButton title="women" link="#" color="#ff0" target="_blank"/>
            <TileButton title="men" link="#" color="#cf0" target="_blank" />
            <TileButton title="kids" link="#" color="#fc0" target="_blank"/>
            <TileButton title="baby" link="#" color="#cc0" target="_blank"/>
          </ButtonTile>
          <ImageTile source="https://goo.gl/Rs8Swl" link="#" target="_blank" alternateText="txt"/>
        </Fillers>
      </ThemedProductGrid>
    );
    server.respond();
    let renNode = TestUtils.scryRenderedComponentsWithType(render, ImageTile);
    expect(renNode.length).to.equal(0);
    renNode = TestUtils.scryRenderedComponentsWithType(render, ButtonTile);
    expect(renNode.length).to.equal(0);
  });

  it('Should handle 404 errors gracefully', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedProductGrid
        tileSize="small"
        catelogUrl="/graphql/cat"
        products="079911,159700,159699"
      />);
    server.respond();
    const renNode = TestUtils.scryRenderedComponentsWithType(render, GridCell);
    expect(renNode.length).to.equal(0);
  });

  it('Should handle other errors gracefully', () => {
    const errorResponse = {
      name: 'An Internal Error Has Occurred.',
      message: 'An Internal Error Has Occurred.',
      url: '/graphql/cat',
    };
    server.respondWith(
      'POST',
      '/graphql/cat',
      [500, { 'Content-Type': 'application/json' }, JSON.stringify(errorResponse)]
    );
    const render = TestUtils.renderIntoDocument(
      <ThemedProductGrid
        tileSize="small"
        catelogUrl="/graphql/cat"
        products="079911,159700,159699"
      />);
    server.respond();
    const renNode = TestUtils.scryRenderedComponentsWithType(render, GridCell);
    expect(renNode.length).to.equal(0);
  });
});
