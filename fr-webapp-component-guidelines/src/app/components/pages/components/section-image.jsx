import React from 'react';
import {ClearFix, Paper} from 'material-ui';
import SectionImage from 'uniqlo-ui/uniqlo/SectionImage';
import ComponentDoc from '../../component-doc';
import Code from 'section-image-code';
import CodeExample from '../../CodeExample';
import CodeBlock from '../../CodeExample/CodeBlock';

const SectionImageDocsPage = React.createClass({

  getInitialState() {
    return {
    };
  },

  render() {
    let desc = `This component renders the text inline by default. style can be override for customisation`;

    let componentInfo = [
      {
        name: 'Props',
        infoArray: [
          {
            name: 'style',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the Text\'s root element.',
          },
          {
            name: 'imageSrc',
            type: 'string',
            header: 'optional',
            desc: "Source of the Image's root element.",
          },
          {
            name: 'alternateText',
            type: 'string',
            header: 'optional',
            desc: ' Alternate text if the Image is not displayed.',
          },
          {
            name: 'id',
            type: 'string',
            header: 'optional',
            desc: 'Id of the Image\'s root element.',
          },
          {
            name: 'className',
            type: 'string',
            header: 'optional',
            desc: 'className for the Image\'s root element.',
          },
          {
            name: 'targetwindow',
            type: 'string',
            header: 'optional',
            desc: 'targetwindow for the Image\'s root element.',
          },
          {
            name: 'imageStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the Image\'s component.',
          },
          {
            name: 'link',
            type: 'string',
            header: 'optional',
            desc: 'Target page to open when click the Image\'s component.',
          },
        ],
      },
      {
        name: 'Events',
        infoArray: [
          {
            name: 'onLoad',
            header: 'function(event)',
            desc: 'Invoked when load completes successfully.',
          },
        ],
      },
    ];

    return (
      <ComponentDoc
        name="Section Image"
        desc={desc}
        componentInfo={componentInfo}>
        <Paper style = {{marginBottom: '22px'}}>
          <CodeBlock>
          {
            '//Import statement:\nimport {SectionImage} from \'uniqlo-ui\';\n\n' +
            '//See uniqlo-ui/lib/index.js for more\n'
          }
          </CodeBlock>
        </Paper>

        <CodeExample code={Code}>
          <ClearFix>
            <div>
              <SectionImage imageSrc="http://image2.groupbuya.com/images/promo/46455/46455_a.jpg"
                link="https://facebook.github.io/react" targetwindow="_blank" alternateText="AltImage"/>
            </div>
          </ClearFix>
        </CodeExample>
      </ComponentDoc>
    );
  },

});

export default SectionImageDocsPage;
