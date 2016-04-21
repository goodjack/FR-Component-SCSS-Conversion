import React from 'react';
import {ClearFix, Paper} from 'material-ui';
import {Text, UpdatedText} from 'uniqlo-ui';
import ComponentDoc from '../../component-doc';
import Code from 'updated-text-code';
import CodeExample from '../../CodeExample';
import CodeBlock from '../../CodeExample/CodeBlock';

const updatedTextDocsPage = React.createClass({

  getInitialState() {
    return {
    };
  },

  onPressTitle(text) {
    alert(text);
  },

  render() {
    let desc = `This component is basically a duplicate of the text component.`;

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
        ],
      },
      {
        name: 'Events',
        infoArray: [
          {
            name: 'onPress',
            header: 'function(event)',
            desc: 'Callback function that is fired when the text clicked',
          },
        ],
      },
    ];

    return (
      <ComponentDoc
        name="UpdatedText"
        desc={desc}
        componentInfo={componentInfo}>
        <Paper style = {{ marginBottom: '22px' }}>
          <CodeBlock>
          {
            '//Import statement:\nimport {UpdatedText} from \'uniqlo-ui\';\n\n' +
            '//See uniqlo-ui/lib/index.js for more\n'
          }
          </CodeBlock>
        </Paper>

        <CodeExample code={Code}>
          <ClearFix>
            <div>
              <UpdatedText>Hello World</UpdatedText>
              <UpdatedText id="TextComponent" style={{ color: 'red', display: 'block' }} onPress={this.onPressTitle.bind(this, 'You Pressed.')}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum </UpdatedText>
              <UpdatedText style={{ color: 'blue', display: 'block'}} >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </UpdatedText>
            </div>
          </ClearFix>
        </CodeExample>
      </ComponentDoc>
    );
  },

});

export default updatedTextDocsPage;
