import React from 'react';
import {ClearFix, Paper} from 'material-ui';
import SearchBox from 'uniqlo-ui/SearchBox';
import Text from 'uniqlo-ui/Text';
import ComponentDoc from '../../component-doc';
import Code from 'search-box-code';
import CodeExample from '../../CodeExample';
import CodeBlock from '../../CodeExample/CodeBlock';
import IconButton from 'uniqlo-ui/IconButton';
import Search from 'uniqlo-ui/SvgIcons/action/ActionSearch';

const searchBoxDocsPage = React.createClass({

  getInitialState() {
    return {
      response: null,
      searchResponse: null,
    };
  },

  getSearchValue(e, searchValue) {
    const _this = this;
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        _this.setState({ response: xhttp.responseText });
      }
    };

    xhttp.open('GET', '../data.json?q=' + searchValue, true);
    xhttp.send();
  },

  getTextResult(e, searchValue) {
    const xhttp = new XMLHttpRequest();
    const _this = this;
    xhttp.onreadystatechange = function () {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        _this.setState({ searchResponse: xhttp.responseText });
      }
    };

    xhttp.open('GET', '../data.json?q=' + searchValue, true);
    xhttp.send();
  },

  render() {
    let desc = `This component renders the SearchBox by default. style can be override for customisation`;

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
            name: 'id',
            type: 'string',
            header: 'optional',
            desc: 'Id of the SearchBox\'s root element.',
          },
          {
            name: 'className',
            type: 'string',
            header: 'optional',
            desc: 'ClassName for the SearchBox\'s root element.',
          },
          {
            name: 'hintText',
            type: 'node',
            header: 'optional',
            desc: 'The hint content to display.',
          },

          {
            name: 'expand',
            type: 'boolean',
            header: 'optional',
            desc: 'Expand behaviour to the input box',
          },
          {
            name: 'closeButtonStyles',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the Close button component.',
          },
          {
            name: 'searchButtonStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the Search button component.',
          },
          {
            name: 'searchIcon',
            type: 'string',
            header: 'optional',
            desc: 'searchIcon is to configure the icon',
          },
          {
            name: 'closeIcon',
            type: 'string',
            header: 'optional',
            desc: 'closeIcon is to configure the icon',
          },
          {
            name: 'searchIconStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the Search Icon container.',
          },
          {
            name: 'closeIconStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the close Icon container.',
          },
          {
            name: 'textInputStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the Text Input component.',
          },
          {
            name: 'textInputFocusStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the Text Input Focus.',
          },
          {
            name: 'wrapperFocusStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the Wrapper Focus.',
          },
          {
            name: 'buttonType',
            type: 'string',
            header: 'optional',
            desc: 'Which type of button to display like iconButton or button.',
          },
          {
            name: 'buttonDisabled',
            type: 'boolean',
            header: 'optional',
            desc: 'Disable the button if sets true.',
          },
          {
            name: 'buttonHoverStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the hoverStyle style of button.',
          },
          {
            name: 'buttonText',
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
            name: 'buttonStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the button component.',
          },
        ],
      },
      {
        name: 'Events',
        infoArray: [
          {
            name: 'onTouchTap',
            header: 'function(event)',
            desc: 'Callback function which is return the text input value',
          },
          {
            name: 'onBlur',
            header: 'function(event)',
            desc: 'Callback function which is return the event',
          },
          {
            name: 'onFocus',
            header: 'function(event)',
            desc: 'Callback function which is return the event',
          },
        ],
      },
    ];

    return (
      <ComponentDoc
        name="SearchBox"
        desc={desc}
        componentInfo={componentInfo}>
        <Paper style = {{ marginBottom: '22px' }}>
          <CodeBlock>
          {
            '//Import statement:\nimport {SearchBox} from \'uniqlo-ui\';\n\n' +
            '//See uniqlo-ui/lib/index.js for more\n'
          }
          </CodeBlock>
        </Paper>

        <CodeExample code={Code}>
          <ClearFix>
            <div>
              <SearchBox
                buttonType="iconButton"
                expand={true}
                searchIcon="ActionSearch"
                closeIcon="CloseIcon"
                onTouchTap={this.getSearchValue}
                hintText="Enter Your Name"
              />
              <br />
              <ClearFix />
              <br />
              <SearchBox buttonText="click" onTouchTap={this.getTextResult}
                hintText="Enter Your Name" />
              <br />
              <ClearFix />
              <br />
            </div>
          </ClearFix>
        </CodeExample>
      </ComponentDoc>
    );
  },
});

export default searchBoxDocsPage;
