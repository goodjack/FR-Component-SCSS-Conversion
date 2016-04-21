import React from 'react';
import {ClearFix, Paper} from 'material-ui';
import {SwipableNav, SwipableNavItem} from 'uniqlo-ui';
import ComponentDoc from '../../component-doc';
import Code from 'swipable-nav-code';
import CodeExample from '../../CodeExample';
import CodeBlock from '../../CodeExample/CodeBlock';

const SwipableNavDocsPage = React.createClass({

  render() {
    let desc = `SwipableNavItem component  render swipable navigation Items with text and link `;

    let componentInfo = [
      {
        name: 'SwipableNav Props',
        infoArray: [
          {
            name: 'style',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the Breadcrumb\'s root element.',
          },
          {
            name: 'activeIndex',
            type: 'number',
            header: 'optional',
            desc: 'The index of the item need to be selected by default',
          },
          {
            name: 'speed',
            type: 'number',
            header: 'optional',
            desc: 'Speed of prev and next transitions in milliseconds.',
          },
        ],

      },
      {
        name: 'SwipableNavItem Props',
        infoArray: [
          {
            name: 'style',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the BreadItem\'s root element.',
          },
          {
            name: 'activeStyle',
            type: 'number',
            header: 'optional',
            desc: 'The style of the selected item',
          },
          {
            name: 'link',
            type: 'string',
            header: 'optional',
            desc: 'The link to be provided for  the BreadItem.',
          },
          {
            name: 'target',
            type: 'string',
            header: 'optional',
            desc: 'Whether the linked to be opened in a new window or not.',
          },
          {
            name: 'text',
            type: 'string',
            header: 'optional',
            desc: 'The text to be displayed in breadItem.',
          },
        ],
      },
    ];

    const styles = {
      rootStyle: {
        border: '1px solid #CCC',
        padding: '5px 0',
      },
      link:{
        textDecoration: 'none',
      },
    };


    return (
      <ComponentDoc
        name="SwipableNav"
        desc={desc}
        componentInfo={componentInfo}>

        <Paper style = {{marginBottom: 22}}>
          <CodeBlock>
          {
            '//Import statement:\nimport {SwipableNav, SwipableNavItem} from \'uniqlo-ui\';\n\n' +
            '//See uniqlo-ui/lib/index.js for more\n'
          }
          </CodeBlock>
        </Paper>

        <CodeExample code={Code}>
          <ClearFix>
            <div>
              <SwipableNav style={styles.rootStyle} >
                <SwipableNavItem text="See All" link="#" style={styles.link} />
                <SwipableNavItem text="CottonCashmere" link="#"  style={styles.link} />
                <SwipableNavItem text="100% Cashmere" link="#" style={styles.link} />
                <SwipableNavItem text="UV Cut" link="#" style={styles.link} />
                <SwipableNavItem text="HEATTECH" link="#" style={styles.link} />
                <SwipableNavItem text="Lamswool" link="#" style={styles.link}/>
                <SwipableNavItem text="HEATTECH" link="#" style={styles.link} />
                <SwipableNavItem text="HEATTECH" link="#" style={styles.link} />
              </SwipableNav>
            </div>
          </ClearFix>

        </CodeExample>


      </ComponentDoc>
    );
  },

});
//https://react.parts/web?search=swipe
export default SwipableNavDocsPage;
