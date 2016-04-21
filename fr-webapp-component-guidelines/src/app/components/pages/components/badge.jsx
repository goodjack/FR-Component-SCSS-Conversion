import React from 'react';
import {ClearFix, Paper} from 'material-ui';
import Styles from 'uniqlo-ui/helpers/styles';
import BaseTheme from 'uniqlo-ui/helpers/styles/baseThemes/defaultBaseTheme';
import Badge from 'uniqlo-ui/core/Badge';
import IconButton from 'uniqlo-ui/lib/IconButton';
import Label from 'uniqlo-ui/Label';
import ComponentDoc from '../../component-doc';
import Code from 'badge-code';
import CodeExample from '../../CodeExample';
import CodeBlock from '../../CodeExample/CodeBlock';

// component specific theme
const styleObj = {
  badge: {
    backgroundColor: 'black',
    textColor: 'white',
  }
};

// base theme
const siteTheme = Styles.ThemeManager.getMuiTheme(BaseTheme);

// component theme merged with basetheme
const componentTheme = Object.assign({ }, siteTheme, styleObj);

const BadgeDocsPage = React.createClass({

  getInitialState() {
    return {
      compTheme: componentTheme,
    };
  },

  childContextTypes: {
    compTheme: React.PropTypes.object,
  },

  getChildContext() {
    return {
      compTheme: this.state.compTheme,
    };
  },

  render() {
    let desc = `This component renders the Badge component. styles can be overriden for customisation`;

    let componentInfo = [
      {
        name: 'Props',
        infoArray: [
          {
            name: 'id',
            type: 'string',
            header: 'optional',
            desc: 'Set the id of Badge\'s root element.',
          },
          {
            name: 'className',
            type: 'string',
            header: 'optional',
            desc: 'Set the class of Badge\'s root element.',
          },
          {
            name: 'number',
            type: 'node',
            header: 'required',
            desc: 'This is the content rendered within the badge.',
          },
          {
            name: 'maxLimit',
            type: 'number',
            header: 'optional',
            desc: 'This sets the limit of the content to be displayed.',
          },

          {
            name: 'position',
            type: 'string',
            header: 'default:left',
            desc: 'This sets the position of the icon.',
          },
          {
            name: 'badgeStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the badge Icon element.',
          },
          {
            name: 'children',
            type: 'node',
            header: 'optional',
            desc: 'The badge will be added relativelty to this node.',
          },
          {
            name: 'style',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the root element.',
          },
        ],
      },
    ];

    return (
      <ComponentDoc
        name="Badge"
        desc={desc}
        componentInfo={componentInfo}>
        <Paper style = {{marginBottom: '22px'}}>
          <CodeBlock>
          {
            '//Import statement:\nimport {Badge} from \'uniqlo-ui/Badge\';\n\n' +
            '//See uniqlo-ui/lib/index.js for more\n'
          }
          </CodeBlock>
        </Paper>

        <CodeExample code={Code}>
          <ClearFix>
            <Badge
    		      number={24}
    		      badgeStyle={{borderRadius: 0}}
    		    />
    		    <br />
    		    <br />
    		    <Badge
    		      number={2}
    		    />
    		    <br />
    		    <br />
    		    <Badge
    		      number={130}
    		      badgeStyle={{backgroundColor: 'blue'}}
    		      maxLimit={99}
    		    >
    		      <IconButton
    		        iconclassName="muidocs-icon-custom-github"
    		        style={{backgroundColor: 'green'}}
    		       />
    		    </Badge>
    		    <br />
    		    <br />
    		    <Badge
    		      number={1400}
    		      mxLimit={999}
    		      position="left"
    		      badgeStyle={{backgroundColor: '#f00'}}
    		    >
    		      <Label
    		          text="Label Text that is going to have a very long text"
    			      background="black"
    			      foreground="white"
    			      style={{margin: 0}}
    		      />
    		    </Badge>
    		    <br />
    		    <br />
    		    <Badge
    		      number={10}
    		      position="center"
    		      maxLimit={99}
    		      badgeStyle={{backgroundColor: '#f00'}}
    		    >
    		      <Label
    			      text="Label Text that is going to have a very long text"
    			      background="black"
    			      foreground="white"
    			      style={{margin: 0}}
    			   />
    		    </Badge>
    		    <br />
    		    <br />
    		    <Badge
    		      number={1400}
    		      position="right"
    		      maxLimit={2000}
    		      badgeStyle={{backgroundColor: 'green', color: 'white', width: 30, height: 30, padding: 0}}
    		    >
    		      <Label
    			      text="Label Text that is going to have a very long text"
    			      background="black"
    			      foreground="white"
    			      style={{margin: 0}}
    			   />
    		    </Badge>
          </ClearFix>
        </CodeExample>
      </ComponentDoc>
    );
  },

});

export default BadgeDocsPage;
