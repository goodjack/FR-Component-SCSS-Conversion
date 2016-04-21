import React from 'react';
import {ClearFix, Paper} from 'material-ui';
import BreadCrumbs,{BreadCrumb} from 'uniqlo-ui/lib/core/BreadCrumbs';
import ComponentDoc from '../../component-doc';
import Code from 'bread-crumb-code';
import CodeExample from '../../CodeExample';
import CodeBlock from '../../CodeExample/CodeBlock';
const BreadCrumbDocsPage = React.createClass({

  render() {
    let desc = `Breadcrumb component  render Breadcrumb Items with text, link and with a seperator `;

    let componentInfo = [
      {
        name: 'Breadcrumb Props',
        infoArray: [
          {
            name: 'style',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the Breadcrumb\'s root element.',
          },
          {
            name: 'separator',
            type: 'string',
            header: 'optional',
            desc: 'Override the inline-styles of the separator element.',
          },
          {
            name: 'separatorStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the separator element.',
          },
        ],

      },
      {
        name: 'BreadItem Props',
        infoArray: [
          {
            name: 'style',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the BreadItem\'s root element.',
          },
          {
            name: 'hoverStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the hover-styles of the root element.',
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
        fontSize: '0.8125rem',
        letterSpacing: '0.02em',
      },
      link:{
        color: '#535353',
      },
      hovered:{
        color: '#FF0000',
      },
      lastItem:{
        color: '#a9a9a9'
      },
    };


    return (
      <ComponentDoc
        name="BreadCrumb"
        desc={desc}
        componentInfo={componentInfo}>

        <Paper style = {{marginBottom: 22}}>
          <CodeBlock>
          {
            '//Import statement:\nimport {BreadCrumbs, BreadCrumb} from \'uniqlo-ui\';\n\n' +
            '//See uniqlo-ui/lib/index.js for more\n'
          }
          </CodeBlock>
        </Paper>

        <CodeExample code={Code}>
          <ClearFix>
            <div>
              <BreadCrumbs separator="/" style={styles.rootStyle}>
                 <BreadCrumb text="男裝" link="http://uniqlo.com" target="_blank" style={styles.link} hoverStyle={styles.hovered}></BreadCrumb>
                 <BreadCrumb text="特別企劃" link="http://uniqlo.com" target="_blank" style={styles.link} hoverStyle={styles.hovered} ></BreadCrumb>
                 <BreadCrumb text="期間限定特價" style={styles.lastItem} />
              </BreadCrumbs>
            </div>
          </ClearFix>

        </CodeExample>


      </ComponentDoc>
    );
  },

});

export default BreadCrumbDocsPage;
