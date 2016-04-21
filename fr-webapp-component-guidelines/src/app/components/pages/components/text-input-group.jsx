import React from 'react';
import {ClearFix, Paper} from 'material-ui';
import TextInputGroup from 'uniqlo-ui/TextInputGroup';
import ComponentDoc from '../../component-doc';
import Code from 'text-input-group-code';
import CodeExample from '../../CodeExample';
import CodeBlock from '../../CodeExample/CodeBlock';

const TextInputGroupDocsPage = React.createClass({

  getInitialState() {
    return {
    };
  },

  _getTextValue(e, value) {
    alert(value);
  },

  render() {
    let desc = `This component extends the current input element and button in the Text Input Group
    will support all of its props and events. It supports valueLink and can be controlled or uncontrolled.`;

    let componentInfo = [
      {
        name: 'Props',
        infoArray: [
          {
            name: 'buttonDisabled',
            type: 'bool',
            header: 'optional',
            desc: 'Disables the button field if set to true.',
          },
          {
            name: 'inputDisabled',
            type: 'bool',
            header: 'optional',
            desc: 'Disables the input field if set to true.',
          },
          {
            name: 'buttonStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the button\'s root element.',
          },
          {
            name: 'inputStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the input\'s root element.',
          },
          {
            name: 'style',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the TextInputGroup\'s root element.',
          },
          {
            name: 'hintText',
            type: 'node',
            header: 'optional',
            desc: 'The hint content to display over the input field.',
          },
          {
            name: 'label',
            type: 'string',
            header: 'optional',
            desc: 'Display the text over button.',
          },
          {
            name: 'labelStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the label style of button.',
          },
          {
            name: 'type',
            type: 'string',
            header: 'optional',
            desc: 'Specifies the type of input to display such as "password" or "text".',
          },
        ],
      },
      {
        name: 'Methods',
        infoArray: [
          {
            name: 'blur',
            header: 'TextField.blur()',
            desc: 'Removes focus on the input element.',
          },
        ],
      },
      {
        name: 'Events',
        infoArray: [
          {
            name: 'onTouchTap',
            header: 'function(event)',
            desc: 'Callback function that is fired when the button clicked',
          },
          {
            name: 'onChange',
            header: 'function(event)',
            desc: 'Callback function that is fired when the textfield\'s value ' +
                  'changes.',
          },
        ],
      },
    ];

    return (
      <ComponentDoc
        name="Text Input Group"
        desc={desc}
        componentInfo={componentInfo}>

        <Paper style = {{marginBottom: '22px'}}>
          <CodeBlock>
          {
            '//Import statement:\nimport {TextInputGroup} from \'uniqlo-ui\';\n\n' +
            '//See uniqlo-ui/lib/index.js for more\n'
          }
          </CodeBlock>
        </Paper>

        <CodeExample code={Code}>
          <ClearFix>
            <div>
              <TextInputGroup buttonStyle={{padding: '9px'}} onTouchTap={this._getTextValue}
                label="Click me" labelStyle={{display: 'block'}} hintText=" Enter your name" />
            </div>
          </ClearFix>
        </CodeExample>
      </ComponentDoc>
    );
  },

});

export default TextInputGroupDocsPage;
