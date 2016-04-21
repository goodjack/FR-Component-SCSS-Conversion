import React from 'react';
import {ClearFix, Paper} from 'material-ui';
import {ProductTile} from 'uniqlo-ui';
import ComponentDoc from '../../component-doc';
import Code from 'product-tile-code';
import CodeExample from '../../CodeExample';
import CodeBlock from '../../CodeExample/CodeBlock';
const ProductTileDocsPage = React.createClass({



  render() {
    let desc = `This component will render the Product Tile. It will display the product image and product description`;
    let data = {
      'alteration': {
        'increment': '1',
        'unit': 'cm',
        'minLength': '50',
        'type': '0',
        'doubleWidth': '6',
      },
      'desc': '<b>【オンライン限定取扱い】</b><br>インすっきりと着こなせるのが特徴。着回し自在で使いやすく、多彩なカラーからお気に入りを選べます。',
      'onlinePriority': 100,
      'salesStart': '1376845200000',
      	'onlineClassification': '/femobile/menpickup/largestoreitem02',
      	'defaultSKU': '079620-69-005-000',
      	'defaultColor': '69',
      	'onlineDisplayLinks': '',
      	'onlineID': '079620',
      	'productID': '079620',
      	'onlineStock': 0,
      	'onlineDeliveryDate': null,
      	'onlineCategory': '006002021',
      	'category': '341',
      	'title': 'ＭＥＮ　ドライカラーリブタンクトップ＋Ｅ',
      	'originalPrice': 477,
      	'SKUs': [{
        		'onlineSalesStatus': 2,
        		'salesStart': '1376845200000',
        		'lengthCode': '000',
        		'onlineOnly': true,
        		'currentPrice': 290,
        		'limitedOffer': false,
        		'multiBuy': false,
        		'onlineRealStock': 0,
        		'sizeCode': '005',
        		'onlineStock': 0,
        		'size': 'XL',
        		'discount': true,
        		'id': '079620-69-005-000',
        		'PLUs': ['2000045071025'],
        		'onlineLowStock': false,
        		'maxLength': 0,
        		'color': 'RED',
        		'length': '',
        		'active': true,
        		'colorCode': '17',
      	}, {
        'onlineSalesStatus': 2,
        'salesStart': '1376845200000',
        'lengthCode': '000',
        'onlineOnly': true,
        'currentPrice': 390,
        'limitedOffer': false,
        'multiBuy': false,
        'onlineRealStock': 0,
        'sizeCode': '003',
        'onlineStock': 0,
        'size': 'S',
        'discount': true,
        'id': '079620-17-003-000',
        'PLUs': ['2000045071025'],
        'onlineLowStock': false,
        'maxLength': 0,
        'color': 'RED',
        'length': '',
        'active': true,
        'colorCode': '17',
      	}, {
        'onlineSalesStatus': 2,
        'salesStart': '1376845200000',
        'lengthCode': '000',
        'onlineOnly': true,
        'currentPrice': 555,
        'limitedOffer': false,
        'multiBuy': false,
        'onlineRealStock': 0,
        'sizeCode': '003',
        'onlineStock': 0,
        'size': 'S',
        'discount': true,
        'id': '079620-69-001-000',
        'PLUs': ['2000045071025'],
        'onlineLowStock': false,
        'maxLength': 0,
        'color': 'RED',
        'length': '',
        'active': true,
        'colorCode': '17',
      	}, {
        'onlineSalesStatus': 2,
        'salesStart': '1376845200000',
        'lengthCode': '000',
        'onlineOnly': true,
        'currentPrice': 400,
        'limitedOffer': false,
        'multiBuy': false,
        'onlineRealStock': 0,
        'sizeCode': '004',
        'onlineStock': 0,
        'size': 'M',
        'discount': true,
        'id': '079620-69-004-000',
        'PLUs': ['2000045071025'],
        'onlineLowStock': false,
        'maxLength': 0,
        'color': 'RED',
        'length': '',
        'active': true,
        'colorCode': '17',
      	}, {
        'onlineSalesStatus': 2,
        'salesStart': '1376845200000',
        'lengthCode': '000',
        'onlineOnly': true,
        'currentPrice': 300,
        'limitedOffer': false,
        'multiBuy': false,
        'onlineRealStock': 0,
        'sizeCode': '003',
        'onlineStock': 0,
        'size': 'S',
        'discount': true,
        'id': '079620-69-012-000',
        'PLUs': ['2000045071025'],
        'onlineLowStock': false,
        'maxLength': 0,
        'color': 'RED',
        'length': '',
        'active': true,
        'colorCode': '17',
      	}, {
        'onlineSalesStatus': 2,
        'salesStart': '1376845200000',
        'lengthCode': '000',
        'onlineOnly': true,
        'currentPrice': 100,
        'limitedOffer': false,
        'multiBuy': false,
        'onlineRealStock': 0,
        'sizeCode': '003',
        'onlineStock': 0,
        'size': 'S',
        'discount': true,
        'id': '079620-69-069-000',
        'PLUs': ['2000045071025'],
        'onlineLowStock': false,
        'maxLength': 0,
        'color': 'RED',
        'length': '',
        'active': true,
        'colorCode': '17',
      	}, {
        'onlineSalesStatus': 2,
        'salesStart': '1376845200000',
        'lengthCode': '000',
        'onlineOnly': true,
        'currentPrice': 380,
        'limitedOffer': false,
        'multiBuy': false,
        'onlineRealStock': 0,
        'sizeCode': '003',
        'onlineStock': 0,
        'size': 'S',
        'discount': true,
        'id': '079620-17-003-000',
        'PLUs': ['2000045071025'],
        'onlineLowStock': false,
        'maxLength': 0,
        'color': 'RED',
        'length': '',
        'active': true,
        'colorCode': '17',
      	}, {
        'onlineSalesStatus': 2,
        'salesStart': '1376845200000',
        'lengthCode': '000',
        'onlineOnly': true,
        'currentPrice': 2,
        'limitedOffer': false,
        'multiBuy': false,
        'onlineRealStock': 0,
        'sizeCode': '003',
        'onlineStock': 0,
        'size': 'S',
        'discount': true,
        'id': '079620-17-003-000',
        'PLUs': ['2000045071025'],
        'onlineLowStock': false,
        'maxLength': 0,
        'color': 'RED',
        'length': '',
        'active': true,
        'colorCode': '17',
      }],
      	'onlineProductClass': 0,
      	'images': {
        'familyProduct': {
          			'height': 228,
          			'urls': {
            				'17': 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/17_079620_popup.jpg',
            				'24': 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/24_079620_popup.jpg',
            				'34': 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/34_079620_popup.jpg',
            				'38': 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/38_079620_popup.jpg',
            				'54': 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/54_079620_popup.jpg',
            				'57': 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/57_079620_popup.jpg',
            				'66': 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/66_079620_popup.jpg',
            				'69': 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/69_079620_popup.jpg',
          			},
          			'width': 228,
        },
        'family': {
          			'height': 228,
          		'urls': {
            '17': 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/17_079620_popup.jpg',
            				'24': 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/24_079620_popup.jpg',
            				'34': 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/34_079620_popup.jpg',
            				'38': 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/38_079620_popup.jpg',
            				'54': 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/54_079620_popup.jpg',
            				'57': 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/57_079620_popup.jpg',
            				'66': 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/66_079620_popup.jpg',
            				'69': 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/69_079620_popup.jpg',
          			},
          			'width': 228,
        },
        'zoom': {
          			'height': 1000,
          		'urls': {
            '17': 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/17_079620_popup.jpg',
            				'24': 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/24_079620_popup.jpg',
            				'34': 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/34_079620_popup.jpg',
            				'38': 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/38_079620_popup.jpg',
            				'54': 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/54_079620_popup.jpg',
            				'57': 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/57_079620_popup.jpg',
            				'66': 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/66_079620_popup.jpg',
            				'69': 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/69_079620_popup.jpg',
          			},
          			'width': 1000,
        },
        'small': {
          			'height': 90,
          			'urls': {
            '17': 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/17_079620_popup.jpg',
            '24': 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/24_079620_popup.jpg',
            '34': 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/34_079620_popup.jpg',
            '38': 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/38_079620_popup.jpg',
            '54': 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/54_079620_popup.jpg',
            '57': 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/57_079620_popup.jpg',
            '66': 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/66_079620_popup.jpg',
            '69': 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/69_079620_popup.jpg',
          			},
          			'width': 90,
        },
        'swatch': {
          			'height': 34,
          			'urls': {
            '53': 'http://im.uniqlo.com/images/jp/pc/goods/164200/chip/53_164200.gif',
            '66': 'http://im.uniqlo.com/images/jp/pc/goods/164200/chip/66_164200.gif',
            '69': 'http://im.uniqlo.com/images/jp/pc/goods/164200/chip/69_164200.gif',
            '03': 'http://im.uniqlo.com/images/jp/pc/goods/164200/chip/03_164200.gif',
            '09': 'http://im.uniqlo.com/images/jp/pc/goods/164200/chip/09_164200.gif',
            '42': 'http://im.uniqlo.com/images/jp/pc/goods/164200/chip/42_164200.gif',
            '65': 'http://im.uniqlo.com/images/jp/pc/goods/164200/chip/65_164200.gif',
            '01': 'http://im.uniqlo.com/images/jp/pc/goods/164200/chip/01_164200.gif',
            '04': 'http://im.uniqlo.com/images/jp/pc/goods/164200/chip/04_164200.gif',
            '10': 'http://im.uniqlo.com/images/jp/pc/goods/164200/chip/10_164200.gif',
            '12': 'http://im.uniqlo.com/images/jp/pc/goods/164200/chip/12_164200.gif',
          			},
          			'width': 34,
        },
        'main': {
          			'height': 570,
          		'urls': [
            {'colorCode': '17',
            'url': 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/17_079620_popup.jpg'},
            				{'colorCode': '01',
                      'url': 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/01_079620_popup.jpg'},
            				{'colorCode': '03',
                    'url': 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/03_079620_popup.jpg'},
            				{'colorCode': '08',
                    'url': 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/08_079620_popup.jpg'},
            				{'colorCode': '09',
                    'url': 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/09_079620_popup.jpg'},
            				{'colorCode': '17',
                    'url': 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/17_079620_popup.jpg'},
            				{'colorCode': '66',
                    'url': 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/66_079620_popup.jpg'},
            				{'colorCode': '69',
                    'url': 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/69_079620_popup.jpg'},
          			],
          			'width': 570,
        },
      },
      'review': {
        'count': 1,
        'average': 5,
      },
    };

    let componentInfo = [
      {
        name: 'Props',
        infoArray: [
          {
            name: 'style',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the ProductTile\'s component.',
          },
          {
            name: 'tileSize',
            type: 'string',
            header: 'optional',
            desc: 'Set  the size of ProductTile\'s component.',
          },
          {
            name: 'productObj',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of subtitle of the ProductTile\'s component.',
          },
          {
            name: 'genderTextstyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of genderHeading of the ProductTile\'s component.',
          },
          {
            name: 'dateStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of dateHeading of the ProductTile\'s component.',
          },
          {
            name: 'productTitleStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of ProductTitleHeading of the ProductTile\'s component.',
          },
          {
            name: 'testiomonialLinkStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of testiomoniallinkHeading of the ProductTile\'s component.',
          },
          {
            name: 'offerStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of offerHeading of the ProductTile\'s component.',
          },
          {
            name: 'productSizeStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of productsizeHeading of the ProductTile\'s component.',
          },
          {
            name: 'priceStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of priceHeading of the ProductTile\'s component.',
          },
          {
            name: 'cutPriceStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of cutpriceHeading of the ProductTile\'s component.',
          },
          {
            name: 'notesStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of NotesHeading of the ProductTile\'s component.',
          },
          {
            name: 'imageStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of ImageStyleHeading of the ProductTile\'s component.',
          },
        ],

      },
      {
        name: 'Events',
        infoArray: [
          {
            name: 'onMouseLeave',
            header: 'function(event)',
            desc: 'Callback function that is fired when the colorPicker is' +
                  'unhovered.',
          },
          {
            name: 'onMouseEnter',
            header: 'function(event)',
            desc: 'Callback function that is fired when the colorPicker is' +
                  'hovered.',
          },
          {
            name: 'onTouchTap',
            header: 'function(event)',
            desc: 'Callback function that is fired when the colorPicker is' +
                  'clicked.',
          },
        ],
      },
    ];

    return (
      <ComponentDoc
        name="ProductTile"
        desc={desc}
        componentInfo={componentInfo}>

        <Paper style = {{marginBottom: 22}}>
          <CodeBlock>
          {
            '//Import statement:\nimport ProductTile from \'uniqlo-ui/lib/ProductTile\';\n\n' +
            '//See uniqlo-ui/lib/index.js for more\n'
          }
          </CodeBlock>
        </Paper>

        <CodeExample code={Code}>
          <ClearFix>
            <div>
              <ProductTile
                productObj={data} tileSize="large"
              />
            </div>
          </ClearFix>
        </CodeExample>
      </ComponentDoc>
    );
  },

});

export default ProductTileDocsPage;
