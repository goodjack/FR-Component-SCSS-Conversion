import React from 'react';
import {ClearFix, Paper} from 'material-ui';
import {ColorPicker} from 'uniqlo-ui';
import ComponentDoc from '../../component-doc';
import Code from 'color-strip-code';
import CodeExample from '../../CodeExample';
import CodeBlock from '../../CodeExample/CodeBlock';
const ColorPickerDocsPage = React.createClass({

  getInitialState() {
    return {
      productInfo: [{
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
          'currentPrice': 390,
          'limitedOffer': false,
          'multiBuy': false,
          'onlineRealStock': 0,
          'sizeCode': '003',
          'onlineStock': 0,
          'size': 'S',
          'discount': true,
          'id': '079620-69-003-000',
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
          'currentPrice': 490,
          'limitedOffer': false,
          'multiBuy': false,
          'onlineRealStock': 0,
          'sizeCode': '003',
          'onlineStock': 0,
          'size': 'S',
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
          'currentPrice': 770,
          'limitedOffer': false,
          'multiBuy': false,
          'onlineRealStock': 0,
          'sizeCode': '003',
          'onlineStock': 0,
          'size': 'S',
          'discount': true,
          'id': '079620-69-009-000',
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
          'currentPrice': 600,
          'limitedOffer': false,
          'multiBuy': false,
          'onlineRealStock': 0,
          'sizeCode': '003',
          'onlineStock': 0,
          'size': 'S',
          'discount': true,
          'id': '079620-69-065-000',
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
          'currentPrice': 120,
          'limitedOffer': false,
          'multiBuy': false,
          'onlineRealStock': 0,
          'sizeCode': '003',
          'onlineStock': 0,
          'size': 'S',
          'discount': true,
          'id': '079620-69-066-000',
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
          'currentPrice': 290,
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
          'currentPrice': 640,
          'limitedOffer': false,
          'multiBuy': false,
          'onlineRealStock': 0,
          'sizeCode': '003',
          'onlineStock': 0,
          'size': 'S',
          'discount': true,
          'id': '079620-69-053-000',
          'PLUs': ['2000045071025'],
          'onlineLowStock': false,
          'maxLength': 0,
          'color': 'RED',
          'length': '',
          'active': true,
          'colorCode': '53',
        }, {
          'onlineSalesStatus': 2,
          'salesStart': '1376845200000',
          'lengthCode': '000',
          'onlineOnly': true,
          'currentPrice': 1000,
          'limitedOffer': false,
          'multiBuy': false,
          'onlineRealStock': 0,
          'sizeCode': '003',
          'onlineStock': 0,
          'size': 'S',
          'discount': true,
          'id': '079620-69-042-000',
          'PLUs': ['2000045071025'],
          'onlineLowStock': false,
          'maxLength': 0,
          'color': 'RED',
          'length': '',
          'active': true,
          'colorCode': '42',
        }, {
          'onlineSalesStatus': 2,
          'salesStart': '1376845200000',
          'lengthCode': '000',
          'onlineOnly': true,
          'currentPrice': 300000,
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
          'colorCode': '12',
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
            		'urls': {
              '01': 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/01_079620_popup.jpg',
              '03': 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/03_079620_popup.jpg',
              '09': 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/09_079620_popup.jpg',
              '08': 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/08_079620_popup.jpg',
              '17': 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/17_079620_popup.jpg',
              '66': 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/66_079620_popup.jpg',
              '69': 'http://im.uniqlo.com/images/jp/pc/goods/079620/item/69_079620_popup.jpg',
            			},
            			'width': 570,
          },
        },
        'review': {
          'count': 1,
          'average': 5,
        },
      }],
    };
  },

  handleTouchTap(e, image) {
    alert('Selected on Touch' + image);
  },
  render() {
    let desc = `This component displays the products to choose using strip`;

    let componentInfo = [
      {
        name: 'Props',
        infoArray: [
          {
            name: 'style',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the Color Picker\'s root element.',
          },
          {
            name: 'imageStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the Image used in Picker.',
          },
          {
            name: 'productInfo',
            type: 'object',
            header: 'required',
            desc: 'Source for the strip images.',
          },
          {
            name: 'tileSize',
            type: 'string',
            header: 'required',
            desc: 'determines the number of colors to be dispalyed on color strip.',
          },
        ],
      },
      {
        name: 'Methods',
        infoArray: [
          {
            name: 'productTileCallback',
            header: 'function(event)',
            desc: 'Callback function that is fired when the colorStrip is' +
                  'unhovered.',
          },
        ],
      },
      {
        name: 'Events',
        infoArray: [
          {
            name: 'onTouchTap',
            header: 'function(event)',
            desc: 'Callback function that is fired when the colorStrip is' +
                  'clicked.',
          },
        ],
      },
    ];

    return (
      <ComponentDoc
        name="Button"
        desc={desc}
        componentInfo={componentInfo}>

        <Paper style = {{marginBottom: '22px'}}>
          <CodeBlock>
          {
            '//Import statement:\nimport ColorPicker from \'uniqlo-ui/lib/ColorPicker\';\n\n' +
            '//See uniqlo-ui/lib/index.js for more\n'
          }
          </CodeBlock>
        </Paper>

        <CodeExample code={Code}>
          <ClearFix>
            <div style={{display: 'block', width: '40%'}}>
              <ColorPicker productInfo={this.state.productInfo} tileSize="large" onTouchTap={this.handleTouchTap}/>
            </div>
          </ClearFix>
        </CodeExample>
      </ComponentDoc>
    );
  },

});

export default ColorPickerDocsPage;
