import React from 'react';
import {ClearFix, Paper} from 'material-ui';
import Chip from 'uniqlo-ui/lib/Chip';
import ChipChild from 'uniqlo-ui/lib/Chip/ChipChild';
import { Text } from 'uniqlo-ui';
import Image from 'uniqlo-ui/core/Image';
import ComponentDoc from '../../component-doc';
import Code from 'chip-code';
import CodeExample from '../../CodeExample';
import CodeBlock from '../../CodeExample/CodeBlock';
const ChipDocsPage = React.createClass({

  getInitialState() {
    return {
    };
  },


  callBackTest() {
    console.log('event');
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
            name: 'enable',
            type: 'object',
            header: 'boolean',
            desc: 'Make the chip enable or disable.',
          },
          {
            name: 'chipHoverStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the chip\'s on hover',
          },
          {
            name: 'chipsBodyStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the chip child element.',
          },
          {
            name: 'chipsStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the chip body element.',
          },
          {
            name: 'chipsChildStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the chip  element.',
          },
          {
            name: 'headingTextStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the chip heading text.',
          },
          {
            name: 'colorSrc',
            type: 'array',
            header: 'optional',
            desc: 'Source for the color chips.',
          },
          {
            name: 'dataSrc',
            type: 'object',
            header: 'required',
            desc: 'Source for the strip images.',
          },
          {
            name: 'headingText',
            type: 'string',
            header: 'required',
            desc: 'Pass the heading text to chip.',
          },
          {
            name: 'headingContent',
            type: 'string',
            header: 'required',
            desc: 'Pass the heading content to chip.',
          },
          {
            name: 'toolTipData',
            type: 'string',
            header: 'required',
            desc: 'Pass the tool tip content to chip.',
          },
          {
            name: 'toolTipStyle',
            type: 'string',
            header: 'required',
            desc: 'Pass the tool tip style to chip.',
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
            name: 'onMouseClick',
            header: 'function(event)',
            desc: 'Callback function that is fired when the colorStrip is' +
                  'clicked.',
          },
        ],
      },
    ];

    return (
      <ComponentDoc
        name="Chip"
        desc={desc}
        componentInfo={componentInfo}>

        <Paper style = {{marginBottom: '22px'}}>
          <CodeBlock>
          {
            '//Import statement:\nimport Chip from \'uniqlo-ui/lib/Chip\';\n\n' +
            '//See uniqlo-ui/lib/index.js for more\n'
          }
          </CodeBlock>
        </Paper>

        <CodeExample code={Code}>
          <ClearFix>
            <div>
              <Chip headingText = "ColorCode : " onMouseClick ={this.callBackTest}
                >
                <ChipChild enable = {false} headingContent = "42 Blue" toolTipData = "Blue">
                  <Image source="http://img.tradeindia.com/fp/0/229/935.jpg" />
                </ChipChild>
                <ChipChild  headingContent = "15 Red" toolTipData = "Red">
                  <Image source="http://www.homedepot.com/catalog/productImages/300/8f/8f0307a6-e6b0-43c4-b3d7-19fb9ad59378_300.jpg" />
                </ChipChild>
                <ChipChild headingContent = "16 Brown" toolTipData = "Brown">
                  <Image source="http://www.goldenship.com.au/website/images/thumbnails/1/280/278/CT-66AN05.600X600MM,800X800MM.jpg" />
                </ChipChild>
              </Chip>
            </div>
          </ClearFix>
          <ClearFix>
            <div>
              <Chip headingText = "head :" onMouseClick ={this.callBackTest}
                >
                <ChipChild  headingContent = "X" toolTipData = "X">
                  <Text>X</Text>
                </ChipChild>
                <ChipChild headingContent = "XL" toolTipData = "XL">
                  <Text>XL</Text>
                </ChipChild>
                <ChipChild  headingContent = "L" toolTipData = "L">
                  <Text>L</Text>
                </ChipChild>
              </Chip>
            </div>
          </ClearFix>
        </CodeExample>
      </ComponentDoc>
    );
  },

});

export default ChipDocsPage;
