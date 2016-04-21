import React from 'react';
import {ClearFix, Paper} from 'material-ui';
import { Tabs, Tab, Text } from 'uniqlo-ui';
import ComponentDoc from '../../component-doc';
// import Code from 'tab-set-code';
import CodeExample from '../../CodeExample';
import CodeBlock from '../../CodeExample/CodeBlock';


const TabSetDocsPage = React.createClass({

  onPress(index) {
    console.log(index + ' Tab clicked');
  },

  render() {
    const styles = {
      redborder: {
        borderBottom: '3px solid #FF0000',
      },
      blackborder: {
        borderBottom: '3px solid #000066',
      },
      blueborder: {
        borderBottom: '3px solid #54b2ef',
      },
      greenborder: {
        borderBottom: '3px solid #99cc00',
      },
      image: {
        height: '10px',
        marginTop: '10px',
      },
      tabDafault: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
        borderRight: '1px dashed #e5e5e5',
        height: '32px',
        textDecoration: 'none',
        color: '#ADA5A5',
        fontWeight: 'bold',
      },
      tabHover: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
        borderRight: '1px dashed #e5e5e5',
        height: '32px',
        color: '#FF0000',
        textDecoration: 'none',
        fontWeight: 'bold',
      },
    };

    let desc = `This component renders navigation items called tabs which
       can be text or image and will support the hover fucntionality`;

    let componentInfo = [
      {
        name: 'Tabs Props',
        infoArray: [
          {
            name: 'defaultIndex',
            type: 'number',
            header: 'optional',
            desc: 'Index of tab to be selected default.',
          },
          {
            name: 'cols',
            type: 'number',
            header: 'optional',
            desc: 'This property sets the number of columns in which children Tabs are to be rendered.',
          },
          {
            name: 'padding',
            type: 'number',
            header: 'optional',
            desc: 'This property sets the space between the columns in which children Tabs are to be rendered.',
          },
          {
            name: 'style',
            type: 'object',
            header: 'optional',
            desc: 'Style object to override inherited styles.',
          },
        ],
      },
      {
        name: 'Tabs Events',
        infoArray: [
          {
            name: 'onTabChange',
            header: 'function(index)',
            desc: 'Called when any of the tabe item is clicked.',
          },
        ],
      },
      {
        name: 'Tab Props',
        infoArray: [
          {
            name: 'active',
            type: 'bool',
            header: 'optional',
            desc: 'If set true it will be the active.',
          },
          {
            name: 'defaultImage',
            type: 'string',
            header: 'optional',
            desc: 'The default image source url if the tab type is image.',
          },
          {
            name: 'hoverImage',
            type: 'string',
            header: 'optional',
            desc: 'The image to be shown on hovering the tab.',
          },
          {
            name: 'link',
            type: 'string',
            header: 'optional',
            desc: 'Link to a section in the same page or an external link.',
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
            desc: 'The text to be displayed or will take as alt text if image provided',
          },
          {
            name: 'defaultStyle',
            type: 'object',
            header: 'optional',
            desc: 'The default style to be applied to the tab.',
          },
          {
            name: 'hoverStyle',
            type: 'object',
            header: 'optional',
            desc: 'The style that is to be applied on hovering the tab element.',
          },
          {
            name: 'imageStyle',
            type: 'object',
            header: 'optional',
            desc: 'Image style object to override inherited image styles.',
          },
        ],
      },

      {
        name: 'Tab Events',
        infoArray: [
          {
            name: 'onPress',
            header: 'function(index)',
            desc: 'Called when the tabe is clicked',
          },
        ],
      },
    ];
    const sample = [
      `
      <Tabs cols={4} padding={5} >
        <Tab type="text"
          text="WOMEN"
          defaultImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_women.gif"
          hoverImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_women_o.gif"
        >
          <Text style={{color: 'red', display: 'block'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </Text>
        </Tab>
        <Tab
          text="MEN"
          defaultImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_men.gif"
          hoverImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_men_o.gif"
        >
          <Text style={{color: 'blue', display: 'block'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </Text>
        </Tab>
        <Tab
          text="KDS"
          defaultImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_kids.gif"
          hoverImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_kids_o.gif"
        >
          <Text style={{color: 'green', display: 'block'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </Text>
        </Tab>
        <Tab
          text="BABY"
          defaultImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_baby.gif"
          hoverImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_baby_o.gif"
        >
          <Text style={{color: 'darkblue', display: 'block'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </Text>
        </Tab>
      </Tabs>`,
      `
      <div style={{width: '228px', padding: '10px 10px'}} >
        <Tabs cols={4}>
          <Tab
            text="BABY"
            defaultImage="http://www.uniqlo.com/jp/images/top/z_02/icon/women.png"
            hoverImage="http://www.uniqlo.com/jp/images/top/z_02/icon/women_on.png"
            link="http://www.uniqlo.com/jp/store/feature/uq/new/women/"
            imageStyle={styles.image}
            defaultStyle={Object.assign({}, styles.redborder, styles.tabDafault)}
            hoverStyle={Object.assign({}, styles.redborder, styles.tabHover)}
          />
          <Tab
            text="BABY"
            defaultImage="http://www.uniqlo.com/jp/images/top/z_02/icon/men.png"
            hoverImage="http://www.uniqlo.com/jp/images/top/z_02/icon/men_on.png"
            link="http://www.uniqlo.com/jp/store/feature/uq/new/men/"
            imageStyle={styles.image}
            defaultStyle={Object.assign({}, styles.blackborder, styles.tabDafault)}
            hoverStyle={Object.assign({}, styles.blackborder, styles.tabHover)}
          />
          <Tab
            text="BABY"
            defaultImage="http://www.uniqlo.com/jp/images/top/z_02/icon/kids.png"
            hoverImage="http://www.uniqlo.com/jp/images/top/z_02/icon/kids_on.png"
            link="http://www.uniqlo.com/jp/store/feature/uq/new/baby/"
            imageStyle={styles.image}
            defaultStyle={Object.assign({}, styles.blueborder, styles.tabDafault)}
            hoverStyle={Object.assign({}, styles.blueborder, styles.tabHover)}
          />
          <Tab
            text="BABY"
            defaultImage="http://www.uniqlo.com/jp/images/top/z_02/icon/baby.png"
            hoverImage="http://www.uniqlo.com/jp/images/top/z_02/icon/baby_on.png"
            link="http://www.uniqlo.com/jp/store/feature/uq/new/baby/"
            imageStyle={styles.image}
            defaultStyle={Object.assign({}, styles.greenborder, styles.tabDafault)}
            hoverStyle={Object.assign({}, styles.greenborder, styles.tabHover)}
          />
        </Tabs>
      </div>`,
      `
      <Tabs cols={8} >
        <Tab
          text="スウェットフルジップパーカ"
          link="#section-link"
          defaultImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/sweat/men/160108-anchor-01.jpg"
          hoverImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/sweat/men/160108-anchor-01_o.jpg"
        />
        <Tab
          text="スウェットフルジップパーカ"
          link="#section-link"
          defaultImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/sweat/men/150724-anchor-02.jpg"
          hoverImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/sweat/men/150724-anchor-02_o.jpg"
        />
        <Tab
          text="スウェットフルジップパーカ"
          link="#section-link"
          defaultImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/sweat/men/160202-anchor-21.jpg"
          hoverImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/sweat/men/160202-anchor-21_o.jpg"
        />
        <Tab
          text="スウェットフルジップパーカ"
          link="#section-link"
          defaultImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/sweat/men/150724-anchor-04.jpg"
          hoverImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/sweat/men/150724-anchor-04_o.jpg"
        />
      </Tabs>`,
      `
      <div style={{width: '300px', padding: '10px 10px'}} >
        <Tabs cols={4} >
          <Tab
            text="WOMEN"
            link="http://www.uniqlo.com/jp/store/feature/uq/new/baby/"
            defaultStyle={Object.assign({}, styles.redborder, styles.tabDafault)}
            hoverStyle={Object.assign({}, styles.redborder, styles.tabHover)}
          />
          <Tab
            text="MEN"
            link="http://www.uniqlo.com/jp/store/feature/uq/new/baby/"
            defaultStyle={Object.assign({}, styles.blackborder, styles.tabDafault)}
            hoverStyle={Object.assign({}, styles.blackborder, styles.tabHover)}
          />
          <Tab
            text="KIDS"
            link="http://www.uniqlo.com/jp/store/feature/uq/new/baby/"
            defaultStyle={Object.assign({}, styles.blueborder, styles.tabDafault)}
            hoverStyle={Object.assign({}, styles.blueborder, styles.tabHover)}
          />
          <Tab
            text="BABY"
            link="http://www.uniqlo.com/jp/store/feature/uq/new/baby/"
            defaultStyle={Object.assign({}, styles.greenborder, styles.tabDafault)}
            hoverStyle={Object.assign({}, styles.greenborder, styles.tabHover)}
          />
        </Tabs>
      </div>`,
    ];
    return (
      <ComponentDoc
        name="Tabs"
        desc={desc}
        componentInfo={componentInfo}>
        <Paper style={{marginBottom: '22px'}}>
          <CodeBlock>
          {
            '//Import statement:\nimport {Tabs, Tab} from \'uniqlo-ui\';\n\n' +
            '//See uniqlo-ui/lib/index.js for more\n'
          }
          </CodeBlock>
        </Paper>

        <CodeExample code={sample[0]}>
          <ClearFix>
            <div style={{backgroundColor: '#333', padding: '10px 10px'}} >
              <Tabs cols={4} padding={5} >
                <Tab type="text"
                  text="WOMEN"
                  defaultImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_women.gif"
                  hoverImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_women_o.gif"
                >
                  <Text style={{color: 'red', display: 'block'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                  </Text>
                </Tab>
                <Tab
                  text="MEN"
                  defaultImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_men.gif"
                  hoverImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_men_o.gif"
                >
                  <Text style={{color: 'darkblue', display: 'block'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </Text>
                </Tab>
                <Tab
                  text="KDS"
                  defaultImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_kids.gif"
                  hoverImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_kids_o.gif"
                >
                  <Text style={{color: 'lightblue', display: 'block'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                  </Text>
                </Tab>
                <Tab
                  text="BABY"
                  defaultImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_baby.gif"
                  hoverImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_baby_o.gif"
                >
                  <Text style={{color: 'green', display: 'block'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                  </Text>
                </Tab>
              </Tabs>
            </div>
          </ClearFix>
        </CodeExample>
        <CodeExample code={sample[1]}>
          <ClearFix >
            <div style={{width: '228px', padding: '10px 10px'}} >
              <Tabs cols={4}>
                <Tab
                  text="BABY"
                  defaultImage="http://www.uniqlo.com/jp/images/top/z_02/icon/women.png"
                  hoverImage="http://www.uniqlo.com/jp/images/top/z_02/icon/women_on.png"
                  link="http://www.uniqlo.com/jp/store/feature/uq/new/women/"
                  imageStyle={styles.image}
                  defaultStyle={Object.assign({}, styles.redborder, styles.tabDafault)}
                  hoverStyle={Object.assign({}, styles.redborder, styles.tabHover)}
                />
                <Tab
                  text="BABY"
                  defaultImage="http://www.uniqlo.com/jp/images/top/z_02/icon/men.png"
                  hoverImage="http://www.uniqlo.com/jp/images/top/z_02/icon/men_on.png"
                  link="http://www.uniqlo.com/jp/store/feature/uq/new/men/"
                  imageStyle={styles.image}
                  defaultStyle={Object.assign({}, styles.blackborder, styles.tabDafault)}
                  hoverStyle={Object.assign({}, styles.blackborder, styles.tabHover)}
                />
                <Tab
                  text="BABY"
                  defaultImage="http://www.uniqlo.com/jp/images/top/z_02/icon/kids.png"
                  hoverImage="http://www.uniqlo.com/jp/images/top/z_02/icon/kids_on.png"
                  link="http://www.uniqlo.com/jp/store/feature/uq/new/baby/"
                  imageStyle={styles.image}
                  defaultStyle={Object.assign({}, styles.blueborder, styles.tabDafault)}
                  hoverStyle={Object.assign({}, styles.blueborder, styles.tabHover)}
                />
                <Tab
                  text="BABY"
                  defaultImage="http://www.uniqlo.com/jp/images/top/z_02/icon/baby.png"
                  hoverImage="http://www.uniqlo.com/jp/images/top/z_02/icon/baby_on.png"
                  link="http://www.uniqlo.com/jp/store/feature/uq/new/baby/"
                  imageStyle={styles.image}
                  defaultStyle={Object.assign({}, styles.greenborder, styles.tabDafault)}
                  hoverStyle={Object.assign({}, styles.greenborder, styles.tabHover)}
                />
              </Tabs>
            </div>
          </ClearFix>
        </CodeExample>
        <CodeExample code={sample[2]}>
          <ClearFix >
            <Tabs cols={8} >
              <Tab
                text="スウェットフルジップパーカ"
                link="#section-link"
                defaultImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/sweat/men/160108-anchor-01.jpg"
                hoverImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/sweat/men/160108-anchor-01_o.jpg"
              />
              <Tab
                text="スウェットフルジップパーカ"
                link="#section-link"
                defaultImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/sweat/men/150724-anchor-02.jpg"
                hoverImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/sweat/men/150724-anchor-02_o.jpg"
              />
              <Tab
                text="スウェットフルジップパーカ"
                link="#section-link"
                defaultImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/sweat/men/160202-anchor-21.jpg"
                hoverImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/sweat/men/160202-anchor-21_o.jpg"
              />
              <Tab
                text="スウェットフルジップパーカ"
                link="#section-link"
                defaultImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/sweat/men/150724-anchor-04.jpg"
                hoverImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/sweat/men/150724-anchor-04_o.jpg"
              />
            </Tabs>
          </ClearFix>
        </CodeExample>
        <CodeExample code={sample[3]}>
          <ClearFix >
            <div style={{width: '300px', padding: '10px 10px'}} >
              <Tabs cols={4} >
                <Tab
                  text="WOMEN"
                  link="http://www.uniqlo.com/jp/store/feature/uq/new/baby/"
                  defaultStyle={Object.assign({}, styles.redborder, styles.tabDafault)}
                  hoverStyle={Object.assign({}, styles.redborder, styles.tabHover)}
                />
                <Tab
                  text="MEN"
                  link="http://www.uniqlo.com/jp/store/feature/uq/new/baby/"
                  defaultStyle={Object.assign({}, styles.blackborder, styles.tabDafault)}
                  hoverStyle={Object.assign({}, styles.blackborder, styles.tabHover)}
                />
                <Tab
                  text="KIDS"
                  link="http://www.uniqlo.com/jp/store/feature/uq/new/baby/"
                  defaultStyle={Object.assign({}, styles.blueborder, styles.tabDafault)}
                  hoverStyle={Object.assign({}, styles.blueborder, styles.tabHover)}
                />
                <Tab
                  text="BABY"
                  link="http://www.uniqlo.com/jp/store/feature/uq/new/baby/"
                  defaultStyle={Object.assign({}, styles.greenborder, styles.tabDafault)}
                  hoverStyle={Object.assign({}, styles.greenborder, styles.tabHover)}
                />
              </Tabs>
            </div>
          </ClearFix>
        </CodeExample>
      </ComponentDoc>
    );
  },

});

export default TabSetDocsPage;
