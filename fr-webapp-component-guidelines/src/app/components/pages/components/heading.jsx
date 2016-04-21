import React from 'react';
import {ClearFix, Paper} from 'material-ui';
import Heading from 'uniqlo-ui/Heading';
import ComponentDoc from '../../component-doc';
import Code from 'heading-code';
import CodeExample from '../../CodeExample';
import CodeBlock from '../../CodeExample/CodeBlock';

const HeadingDocsPage = React.createClass({

  getInitialState() {
    return {
    };
  },

  render() {
    let desc = 'This component display the heading based on type.';

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
            name: 'type',
            type: 'string',
            header: 'optional',
            desc: 'Changes the input tag of the Heading\'s root element.',
          },
        ],
      },
      {
        name: 'Events',
        infoArray: [
          {
            name: 'onPress',
            header: 'function(event)',
            desc: 'Called when a touch tap event occurs on the Heading.',
          },
        ],
      },
    ];

    return (
      <ComponentDoc
        name="Heading"
        desc={desc}
        componentInfo={componentInfo}>

        <Paper style = {{ marginBottom: 22 }}>
          <CodeBlock>
          {
            '//Import statement:\nimport {Heading} from \'uniqlo-ui\';\n\n' +
            '//See uniqlo-ui/lib/index.js for more\n'
          }
          </CodeBlock>
        </Paper>

        <CodeExample code={Code}>
          <ClearFix>
            <div>
              <Heading type="h1" headingText="Hello World" />
              <br/>
              <Heading type="h2" headingText="Hello World" style={{ color: 'red' }} />
              <br/>
              <Heading type="h3" headingText="Hello World" />
              <br/>
              <Heading type="h4" headingText="Hello World" />
              <br/>
              <Heading type="h5" headingText="Hello World" />
              <br/>
              <Heading type="h6" headingText="Hello World" />
            </div>
          </ClearFix>
        </CodeExample>
      </ComponentDoc>
    );
  },

});

export default HeadingDocsPage;
