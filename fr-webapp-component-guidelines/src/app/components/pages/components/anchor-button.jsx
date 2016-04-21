import React from 'react';
import {ClearFix, Paper} from 'material-ui';
import Grid from 'uniqlo-ui/core/Grid';
import GridCell from 'uniqlo-ui/core/GridCell';
import AnchorButton from 'uniqlo-ui/AnchorButton';
import Image from 'uniqlo-ui/core/Image';
import ComponentDoc from '../../component-doc';
import Code from 'anchor-button-code';
import CodeExample from '../../CodeExample';
import CodeBlock from '../../CodeExample/CodeBlock';

const anchorButtonsData = {
  categoryFirst: [
    {
      defaultImage: 'https://s3-ap-northeast-1.amazonaws.com/fastretail/fr-ariake-stage/component-docs/160122-anchor-01.jpg',
      rollOverImage: 'https://s3-ap-northeast-1.amazonaws.com/fastretail/fr-ariake-stage/component-docs/160122-anchor-01_o.jpg',
      sectionLink: 'section_a_1',
    },
    {
      defaultImage: 'https://s3-ap-northeast-1.amazonaws.com/fastretail/fr-ariake-stage/component-docs/160122-anchor-02.jpg',
      rollOverImage: 'https://s3-ap-northeast-1.amazonaws.com/fastretail/fr-ariake-stage/component-docs/160122-anchor-02_o.jpg',
      sectionLink: 'section_a_2',
    },
    {
      defaultImage: 'https://s3-ap-northeast-1.amazonaws.com/fastretail/fr-ariake-stage/component-docs/151110-anchor-03.jpg',
      rollOverImage: 'https://s3-ap-northeast-1.amazonaws.com/fastretail/fr-ariake-stage/component-docs/151110-anchor-03_o.jpg',
      sectionLink: 'section_a_3',
    },
    {
      defaultImage: 'https://s3-ap-northeast-1.amazonaws.com/fastretail/fr-ariake-stage/component-docs/151110-anchor-05.jpg',
      rollOverImage: 'https://s3-ap-northeast-1.amazonaws.com/fastretail/fr-ariake-stage/component-docs/151110-anchor-05_o.jpg',
      sectionLink: 'section_a_4',
    },
    {
      defaultImage: 'https://s3-ap-northeast-1.amazonaws.com/fastretail/fr-ariake-stage/component-docs/151110-anchor-05.jpg',
      rollOverImage: 'https://s3-ap-northeast-1.amazonaws.com/fastretail/fr-ariake-stage/component-docs/151110-anchor-05_o.jpg',
      sectionLink: 'section_a_5',
    },
    {
      defaultImage: 'https://s3-ap-northeast-1.amazonaws.com/fastretail/fr-ariake-stage/component-docs/151110-anchor-08.jpg',
      rollOverImage: 'https://s3-ap-northeast-1.amazonaws.com/fastretail/fr-ariake-stage/component-docs/151110-anchor-08_o.jpg',
      sectionLink: 'section_a_6',
    },
    {
      defaultImage: 'https://s3-ap-northeast-1.amazonaws.com/fastretail/fr-ariake-stage/component-docs/151110-anchor-02.jpg',
      rollOverImage: 'https://s3-ap-northeast-1.amazonaws.com/fastretail/fr-ariake-stage/component-docs/151110-anchor-02_o.jpg',
      sectionLink: 'section_a_7',
    },
    {
      defaultImage: 'https://s3-ap-northeast-1.amazonaws.com/fastretail/fr-ariake-stage/component-docs/151110-anchor-01.jpg',
      rollOverImage: 'https://s3-ap-northeast-1.amazonaws.com/fastretail/fr-ariake-stage/component-docs/151110-anchor-01_o.jpg',
      sectionLink: 'section_a_8',
    },
  ],
  categorySecond: [
    {
      defaultImage: 'https://s3-ap-northeast-1.amazonaws.com/fastretail/fr-ariake-stage/component-docs/160209-anchor-14.jpg',
      rollOverImage: 'https://s3-ap-northeast-1.amazonaws.com/fastretail/fr-ariake-stage/component-docs/160209-anchor-14_o.jpg',
      sectionLink: 'section_b_1',
    },
    {
      defaultImage: 'https://s3-ap-northeast-1.amazonaws.com/fastretail/fr-ariake-stage/component-docs/160209-anchor-101.jpg',
      rollOverImage: 'https://s3-ap-northeast-1.amazonaws.com/fastretail/fr-ariake-stage/component-docs/160209-anchor-101_o.jpg',
      sectionLink: 'section_b_2',
    },
    {
      defaultImage: 'https://s3-ap-northeast-1.amazonaws.com/fastretail/fr-ariake-stage/component-docs/160209-anchor-17.jpg',
      rollOverImage: 'https://s3-ap-northeast-1.amazonaws.com/fastretail/fr-ariake-stage/component-docs/160209-anchor-17_o.jpg',
      sectionLink: 'section_b_3',
    },
  ],
};


const AnchorButtonDocsPage = React.createClass({

  getInitialState() {
    return {
    };
  },

  onPress(text, e) {
    alert(text + ' ' + e.target.innerText);
  },

  render() {
    const styles = {
      container: {
        width: 960,
        maxHeight: 320,
        marginLeft: -10,
      },
      categoryFirst: {
        width: 930,
        maxHeight: 142, // 111 + 6 + 25
        marginBottom: 6,
      },
      categorySecond: {
        width: 930,
        maxHeight: 142, // 111 + 6 + 25
      },
      categoryArea: {
        width: 934,
        height: 25,
      },
      buttonArea: {
        width: 930,
        height: 111,
        marginTop: 6,
      },
    };

    let anchorButtons = {};
    anchorButtons.categoryFirst = anchorButtonsData.categoryFirst.map(item =>
      <AnchorButton
        key={item.sectionLink}
        defaultImage={item.defaultImage}
        rollOverImage={item.rollOverImage}
        sectionLink={item.sectionLink}/>
    );

    anchorButtons.categorySecond = anchorButtonsData.categorySecond.map(item =>
      <AnchorButton
        key={item.sectionLink}
        defaultImage={item.defaultImage}
        rollOverImage={item.rollOverImage}
        sectionLink={item.sectionLink}/>
    );

    let desc = `This component renders the AnchorButton and will support all of its props.
     style can be overridden for customisation`;

    let componentInfo = [
      {
        name: 'Props',
        infoArray: [
          {
            name: 'defaultImage',
            type: 'string',
            header: 'required',
            desc: 'Source of the default image of the component.',
          },
          {
            name: 'rollOverImage',
            type: 'string',
            header: 'required',
            desc: 'Source of image that should be shown on hovering the default image.',
          },
          {
            name: 'sectionLink',
            type: 'string',
            header: 'required',
            desc: 'Link of target section.',
          },
          {
            name: 'style',
            type: 'object',
            header: 'optional',
            desc: 'Override inherited styles.',
          },
        ],
      },
      {
        name: 'Events',
        infoArray: [
          {
            name: 'onClick',
            header: 'function(event)',
            desc: 'Callback function that is fired when the each section clicked.',
          },
        ],
      },
    ];

    return (
      <ComponentDoc
        name="AnchorButton"
        desc={desc}
        componentInfo={componentInfo}>
        <Paper style={{marginBottom: '22px'}}>
          <CodeBlock>
          {
            '//Import statement:\nimport {AnchorButton} from \'uniqlo-ui\';\n\n' +
            '//See uniqlo-ui/lib/index.js for more\n'
          }
          </CodeBlock>
        </Paper>

        <CodeExample code={Code}>
          <ClearFix>
            <div style={styles.container}>
              <div style={styles.categoryFirst}>
                <Grid maxCols={1} style={styles.categoryArea}>
                  <GridCell>
                    <Image source="https://placehold.it/930x25"/>
                  </GridCell>
                </Grid>
                <Grid maxCols={8} cellPadding={6} style={styles.buttonArea}>
                  {anchorButtons.categoryFirst}
                </Grid>
              </div>
              <div style={styles.categorySecond}>
                <Grid maxCols={1} style={styles.categoryArea}>
                  <GridCell>
                    <Image source="https://placehold.it/345x25"/>
                  </GridCell>
                </Grid>
                <Grid maxCols={8} cellPadding={6} style={styles.buttonArea}>
                  {anchorButtons.categorySecond}
                </Grid>
              </div>
            </div>
          </ClearFix>
        </CodeExample>
      </ComponentDoc>
    );
  },

});

export default AnchorButtonDocsPage;
