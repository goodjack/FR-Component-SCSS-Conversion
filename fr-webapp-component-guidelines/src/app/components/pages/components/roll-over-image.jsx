import React from 'react';
import {ClearFix, Paper} from 'material-ui';
import RollOverImage from 'uniqlo-ui/lib/RollOverImage';
import ComponentDoc from '../../component-doc';
import Code from 'roll-over-image-code';
import CodeExample from '../../CodeExample';
import CodeBlock from '../../CodeExample/CodeBlock';
const RollOverImageDocsPage = React.createClass({

  getInitialState() {
    return {
    };
  },


  callBackTest() {
  },
  render() {
    let desc = `This component display the colors available for product`;
    let componentInfo = [
      {
        name: 'Props',
        infoArray: [
          {
            name: 'style',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the chip\'s root element.',
          },
          {
            name: 'id',
            type: 'string',
            header: 'mandatory',
            desc: 'Set the id of rolloverimage component',
          },
          {
            name: 'className',
            type: 'string',
            header: 'mandatory',
            desc: 'Set the class of rolloverimage component',
          },
          {
            name: 'imgSrc',
            type: 'string',
            header: 'mandatory',
            desc: 'Set the source of main image',
          },
          {
            name: 'link',
            type: 'string',
            header: 'optional',
            desc: 'Set the link to the page.',
          },
          {
            name: 'rollImgSrc',
            type: 'string',
            header: 'optional',
            desc: 'Set the source of rollover image.',
          },
          {
            name: 'imageStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the image.',
          },
        ],
      },
      {
        name: 'Methods',
        infoArray: [
          {
            name: 'onMouseLeave',
            header: 'function(event)',
            desc: 'Callback function that is fired when the colorStrip is' +
                  'unhovered.',
          },
          {
            name: 'onMouseEnter',
            header: 'function(event)',
            desc: 'Callback function that is fired when the colorStrip is' +
                  'hovered.',
          },
          {
            name: 'onClick',
            header: 'function(event)',
            desc: 'Callback function that is fired when the colorStrip is' +
                  'clicked.',
          },
        ],
      },
    ];

    return (
      <ComponentDoc
        name="RollOverImage"
        desc={desc}
        componentInfo={componentInfo}>

        <Paper style = {{marginBottom: '22px'}}>
          <CodeBlock>
          {
            '//Import statement:\nimport RollOverImage from \'uniqlo-ui/lib/RollOverImage\';\n\n' +
            '//See uniqlo-ui/lib/index.js for more\n'
          }
          </CodeBlock>
        </Paper>

        <CodeExample code={Code}>
          <ClearFix>
            <div>
              <RollOverImage imgSrc =
              "https://uniqlo.scene7.com/is/image/UNIQLO/goods_65_173742?wid=360&hei=360"
                rollImgSrc =
              "https://uniqlo.scene7.com/is/image/UNIQLO/goods_16_169367?wid=360&hei=360"
              link ="www.google.com"
                onMouseClick ={this.callBackTest}/>
            </div>
          </ClearFix>
        </CodeExample>
      </ComponentDoc>
    );
  },

});

export default RollOverImageDocsPage;
