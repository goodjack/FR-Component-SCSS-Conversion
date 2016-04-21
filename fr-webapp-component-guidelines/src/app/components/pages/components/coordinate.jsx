import React from 'react';
import {ClearFix, Paper} from 'material-ui';
import Coordinate from 'uniqlo-ui/Coordinate';
import ComponentDoc from '../../component-doc';
import Code from 'coordinate-code';
import CodeExample from '../../CodeExample';
import CodeBlock from '../../CodeExample/CodeBlock';

const TextDocsPage = React.createClass({

  getInitialState() {
    return {
    };
  },

  onPressTitle(text) {
    alert(text);
  },

  render() {
    let desc = `This component renders the Coordinate inline by default. style can be override for customisation`;

    let componentInfo = [
      {
        name: 'Props',
        infoArray: [
          {
            name: 'style',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the Coordinate\'s root element.',
          },
          {
            name: 'buttonStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the Button.',
          },
          {
            name: 'buttonHoverStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the Button Hover Style.',
          },
          {
            name: 'headingStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the Heading.',
          },
          {
            name: 'imageStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the Image.',
          },
          {
            name: 'mainCopy',
            type: 'string',
            header: 'optional',
            desc: 'Main Heading of the coordinate component.',
          },
          {
            name: 'subCopy',
            type: 'string',
            header: 'optional',
            desc: 'Sub Heading of the coordinate component.',
          },
          {
            name: 'mainCopyStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the MainCopy Style.',
          },
          {
            name: 'subCopyStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the SubCopy Style.',
          },
          {
            name: 'styleId',
            type: 'string',
            header: 'required',
            desc: 'Style id for make an API call.',
          },
          {
            name: 'lang',
            type: 'string',
            header: 'required',
            desc: 'sets the lang for the URL which makes api call.',
          },
          {
            name: 'limit',
            type: 'string',
            header: 'required',
            desc: 'sets the limit for the URL which makes api call.',
          },
          {
            name: 'locale',
            type: 'string',
            header: 'required',
            desc: 'sets the locale for the URL which makes api call.',
          },
        ],
      },
    ];

    return (
      <ComponentDoc
        name="Coordinate"
        desc={desc}
        componentInfo={componentInfo}>
        <Paper style = {{ marginBottom: '22px' }}>
          <CodeBlock>
          {
            '//Import statement:\nimport {Coordinate} from \'uniqlo-ui\';\n\n' +
            '//See uniqlo-ui/lib/index.js for more\n'
          }
          </CodeBlock>
        </Paper>

        <CodeExample code={Code}>
          <ClearFix>
            <div>
              <Coordinate lang="ja" limit="4" locale="jp" styleId="7790,7746"
                mainCopy="オンラインショップにて、ピンクを購入し"
                subCopy="オンラインショップにて、ピンクを購入しました。身長も体重もない自分には今ま" />
            </div>
          </ClearFix>
        </CodeExample>
      </ComponentDoc>
    );
  },

});

export default TextDocsPage;
