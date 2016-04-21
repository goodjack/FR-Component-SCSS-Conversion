import React from 'react';
import {ClearFix, Mixins, Styles, Paper} from 'material-ui';
import {TextInput} from 'uniqlo-ui';
import ComponentDoc from '../../component-doc';
const {Colors} = Styles;
const {StyleResizable} = Mixins;
import Code from 'text-input-code';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
import CodeExample from '../../CodeExample';
import CodeBlock from '../../CodeExample/CodeBlock';

const TextInputPage = React.createClass({

  mixins: [StyleResizable, LinkedStateMixin],

  getInitialState() {
    return {
      errorText: 'This field is required.',
      error2Text: 'This field must be numeric.',
      floatingErrorText: 'This field is required.',
      floatingError2Text: 'This field must be numeric.',
      propValue: 'Prop Value',
      floatingPropValue: 'Prop Value',
      valueLinkValue: 'Value Link',
      floatingValueLinkValue: 'Value Link',
    };
  },

  _handleErrorInputChange(e) {
    this.setState({
      errorText: e.target.value ? '' : 'This field is required.',
    });
  },

  _handleError2InputChange(e) {
    let value = e.target.value;
    let isNumeric = !isNaN(parseFloat(value)) && isFinite(value);
    this.setState({
      error2Text: isNumeric ? '' : 'This field must be numeric.',
    });
  },

  _handleFloatingErrorInputChange(e) {
    this.setState({
      floatingErrorText: e.target.value ? '' : 'This field is required.',
    });
  },

  _handleFloating2ErrorInputChange(e) {
    let value = e.target.value;
    let isNumeric = !isNaN(parseFloat(value)) && isFinite(value);
    this.setState({
      floatingError2Text: isNumeric ? '' : 'This field must be numeric.',
    });
  },

  _handleInputChange(e) {
    this.setState({
      propValue: e.target.value,
    });
  },

  _handleFloatingInputChange(e) {
    this.setState({
      floatingPropValue: e.target.value,
    });
  },

  getStyles() {
    let styles = {
      group: {
        width: '100%',
        float: 'left',
        padding: 10,
        marginBottom: 32,
      },
      textfield: {
        marginTop: 24,
      },
    };

    if (this.isDeviceSize(StyleResizable.statics.Sizes.LARGE)) {
      styles.group.width = '50%';
    }

    return styles;
  },

  render() {
    let desc = `This component extends the current input element and will support all of its props and events.
It supports valueLink and can be controlled or uncontrolled.`;

    let componentInfo = [
      {
        name: 'Props',
        infoArray: [
          {
            name: 'disabled',
            type: 'bool',
            header: 'optional',
            desc: 'Disables the text field if set to true.',
          },
          {
            name: 'defaultValue',
            type: 'string',
            header: 'optional',
            desc: 'The text string to use for the default value.',
          },
          {
            name: 'hintText',
            type: 'node',
            header: 'optional',
            desc: 'The hint content to display.',
          },
          {
            name: 'onEnterKeyDown',
            type: 'function',
            header: 'optional',
            desc: 'The function to call when the user presses the Enter key.',
          },
          {
            name: 'style',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the TextField\'s input element.',
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
          {
            name: 'clearValue',
            header: 'TextField.clearValue()',
            desc: 'Clears the value on the input element.',
          },
          {
            name: 'focus',
            header: 'TextField.focus()',
            desc: 'Sets the focus on the input element.',
          },
          {
            name: 'getValue',
            header: 'TextField.getValue()',
            desc: 'Returns the value of the input.',
          },
        ],
      },
      {
        name: 'Events',
        infoArray: [
          {
            name: 'onBlur',
            header: 'function(event)',
            desc: 'Callback function that is fired when the textfield loses' +
                  'focus.',
          },
          {
            name: 'onChange',
            header: 'function(event)',
            desc: 'Callback function that is fired when the textfield\'s value ' +
                  'changes.',
          },
          {
            name: 'onFocus',
            header: 'function(event)',
            desc: 'Callback function that is fired when the textfield gains ' +
                  'focus.',
          },
        ],
      },
    ];

    let styles = this.getStyles();

    return (
      <ComponentDoc
        name="Text Input"
        desc={desc}
        componentInfo={componentInfo}>

        <Paper style = {{marginBottom: '22px'}}>
          <CodeBlock>
          {
            '//Import statement:\nimport {TextInput} from \'uniqlo-ui\';\n\n' +
            '//See uniqlo-ui/lib/index.js for more\n'
          }
          </CodeBlock>
        </Paper>

        <CodeExample code={Code}>
          <ClearFix>
            <div style={styles.group}>
              <TextInput
                style={styles.textfield}
                hintText=" Enter your name" /><br/>
              <TextInput
                style={styles.textfield}
                hintText=" It has default value"
                defaultValue="Default Value" /><br/>
              <br/>
              <TextInput
                style={{height: 50}}
                hintText="Large text box"
                 /><br/><br/>
              <TextInput
                style={{width: 30}}
                hintText="$"
                  /><br/>
              <TextInput
                style={styles.textfield}
                hintText="Hint Text"
                valueLink={this.linkState('valueLinkValue')} /><br/>
              <TextInput
                style={styles.textfield}
                hintText="Hint Text"
                value={'Updated : ' + this.state.valueLinkValue} /><br/>
            </div>
            <div style={styles.group}>
              <TextInput
                hintText="Password Field"
                floatingLabelText="Password"
                type="password" /><br/>
              <TextInput
                style={styles.textfield}
                hintText="Disabled Text Input"
                disabled={true} /><br/>
              <TextInput
                style={styles.textfield}
                hintText="Disabled Text Input with value"
                disabled={true}
                defaultValue="Disabled With Value" />
            </div>
          </ClearFix>
        </CodeExample>
      </ComponentDoc>
    );
  },

});

export default TextInputPage;
