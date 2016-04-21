import React from 'react';
import {ClearFix, Paper} from 'material-ui';
import Picker, {PickerOption} from 'uniqlo-ui/core/Picker';
import ComponentDoc from '../../component-doc';
import Code from 'picker-code';
import CodeExample from '../../CodeExample';
import CodeBlock from '../../CodeExample/CodeBlock';

const PickerDocsPage = React.createClass({

  getInitialState() {
    return {
    };
  },
  _getSelectedIndex() {
    alert('Selected option');
  },

  render() {
    let desc = `This component extends the current select and options to show the dropdown menu`;

    let componentInfo = [
      {
        name: 'PickerOption Props',
        infoArray: [
          {
            name: 'disabled',
            type: 'bool',
            header: 'optional',
            desc: 'Disables the picker if set to true.',
          },
          {
            name: 'style',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the Picker\'s root element.',
          },
          {
            name: 'name',
            type: 'string',
            header: 'optional',
            desc: 'The name of the select input.',
          },
          {
            name: 'value',
            type: 'string',
            header: 'optional',
            desc: 'The value that is currently selected.',
          },
        ],
      },
      {
        name: 'Picker Events',
        infoArray: [
          {
            name: 'onChange',
            header: 'function(event)',
            desc: 'Fired when a menu item is clicked that is not the one currently selected.',
          },
        ],
      },
    ];

    return (
      <ComponentDoc
        name="Picker"
        desc={desc}
        componentInfo={componentInfo}>

        <Paper style = {{marginBottom: '22px'}}>
          <CodeBlock>
          {
            '//Import statement:\nimport {Picker, PickerOption} from \'uniqlo-ui\';\n\n' +
            '//See uniqlo-ui/lib/index.js for more\n'
          }
          </CodeBlock>
        </Paper>

        <CodeExample code={Code}>
          <ClearFix>
            <div>
              <Picker onChange={this._getSelectedIndex}>
                <PickerOption name="Morning" value="1"/>
                <PickerOption name="Afternoon" value="2"/>
                <PickerOption name="Evening" value="3"/>
                <PickerOption name="Night" value="4"/>
              </Picker>
            </div>
          </ClearFix>
        </CodeExample>
      </ComponentDoc>
    );
  },

});

export default PickerDocsPage;
