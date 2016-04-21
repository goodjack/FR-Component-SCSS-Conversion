import React from 'react';
import {ClearFix, Paper} from 'material-ui';
import {CheckBox} from 'uniqlo-ui';
import ComponentDoc from '../../component-doc';
import Code from 'checkbox-code';
import CodeExample from '../../CodeExample';
import CodeBlock from '../../CodeExample/CodeBlock';

const CheckBoxDocsPage = React.createClass({

  getInitialState() {
    return {
    };
  },
  handleCheck(event, check) {
    if (check) {
      alert('It is checked');
    }
    else {
      alert('It is unchecked');
    }
  },
  render() {
    let desc = `This component extends the current switch element and displays the label along with checkbox`;

    let componentInfo = [
      {
        name: 'Props',
        infoArray: [
          {
            name: 'defaultChecked',
            type: 'bool',
            header: 'default:false',
            desc: 'The default state of our checkbox component.',
          },
          {
            name: 'label',
            type: 'string',
            header: 'optional',
            desc: 'The text that is displayed beside the checkbox.',
          },
          {
            name: 'labelStyle',
            type: 'object',
            header: 'optional',
            desc: 'Overrides the inline-styles of the Checkbox element label.',
          },
          {
            name: 'labelPosition',
            type: 'oneOf ["left", "right"]',
            header: 'default:"right"',
            desc: 'Where the label will be placed next to the checkbox. Options include ' +
                '"left" and "right" (case-sensitive). Default option is "right".',
          },
          {
            name: 'style',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the Checkbox\'s root element.',
          },
        ],
      },
      {
        name: 'Events',
        infoArray: [
          {
            name: 'onCheck',
            type: 'function(event, checked)',
            header: 'optional',
            desc: 'Callback function that is fired when the checkbox is checked.',
          },
        ],
      },
    ];

    return (
      <ComponentDoc
        name="CheckBox"
        desc={desc}
        componentInfo={componentInfo}>

        <Paper style = {{marginBottom: 22}}>
          <CodeBlock>
          {

            '//Import statement:\nimport CheckBox from \'uniqlo-ui/lib/checkbox\';\n\n' +
            '//See uniqlo-ui/lib/index.js for more\n'
          }
          </CodeBlock>
        </Paper>

        <CodeExample code={Code}>
          <ClearFix>
            <div>
              <CheckBox
                name="checkboxName1"
                value="checkboxValue1"
                label="went for a run today"/>

              <CheckBox
                name="checkboxName2"
                value="checkboxValue2"
                label="fed the dog"
                defaultChecked={true}/>

              <CheckBox
                name="checkboxName3"
                value="checkboxValue3"
                label="built a house on the moon"
                disabled={true}/>

              <CheckBox
                label="label1"
                onCheck={this.handleCheck}
                labelStyle={{color: 'red'}}
                value="checkboxValue1"
                labelPosition="left"
                name="name" />
            </div>
          </ClearFix>
        </CodeExample>
      </ComponentDoc>
    );
  },

});

export default CheckBoxDocsPage;
