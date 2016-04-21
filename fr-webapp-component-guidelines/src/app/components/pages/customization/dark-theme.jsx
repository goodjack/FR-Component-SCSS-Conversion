import React from 'react';
import mui from 'material-ui';
import uni from 'uniqlo-ui';
import SectionTitle from 'uniqlo-ui/SectionTitle';
import SectionAnchorBar from 'uniqlo-ui/SectionAnchorBar';
import SectionAnchorBarItem from 'uniqlo-ui/SectionAnchorBar/SectionAnchorBarItem';
import Hero from 'uniqlo-ui/uniqlo/Hero';
import Heading from 'uniqlo-ui/Heading';
import BreadCrumbs,{BreadCrumb} from 'uniqlo-ui/lib/core/BreadCrumbs';
import IconButton from 'uniqlo-ui/IconButton';
import Badge from 'uniqlo-ui/core/Badge';
import UqLabel from 'uniqlo-ui/uniqlo/UqLabel';

const {
  Mixins,
} = mui;

const {
  Styles,
  Button,
  Text,
} = uni;


const {StylePropable, StyleResizable} = Mixins;
const {Typography} = Styles;
const ThemeManager = Styles.ThemeManager;
const DarkRawTheme = Styles.darkBaseTheme;

const DarkThemePage = React.createClass({

  contextTypes: {
    muiTheme: React.PropTypes.object,
    compTheme: React.PropTypes.object,
  },

  //for passing default theme context to children
  childContextTypes: {
    muiTheme: React.PropTypes.object,
    compTheme: React.PropTypes.object,
  },


  mixins: [StylePropable, StyleResizable],

  getInitialState() {
    return {
      muiTheme: ThemeManager.getMuiTheme(DarkRawTheme),
      compTheme: ThemeManager.getCompTheme(DarkRawTheme),
    };
  },

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme,
      compTheme: this.state.compTheme,
    };
  },

  //to update theme inside state whenever a new theme is passed down
  //from the parent / owner using context
  componentWillReceiveProps() {

  },

  getStyles() {
    let canvasColor = this.state.muiTheme.rawTheme.palette.canvasColor;
    let borderColor = this.state.muiTheme.rawTheme.palette.borderColor;
    let styles = {
      containerDiv: {
        backgroundColor: canvasColor,
        border: '1px solid',
        borderColor: borderColor,
        padding: 20,
        marginTop: 15,
      },
      headline: {
        fontSize: '24px',
        lineHeight: '32px',
        paddingTop: '16px',
        marginBottom: '12px',
        letterSpacing: '0',
        fontWeight: Typography.fontWeightNormal,
        color: Typography.textDarkBlack,
      },
      align: {
        textAlign: 'center',
      },
    };

    return styles;
  },

  render() {
    let styles = this.getStyles();
    return (
      <div>
        <h2 style={styles.headline}>Dark Theme</h2>
        <div style={styles.containerDiv}>
          <SectionTitle title="カーディガン" subtitle="CARDIGANS"/>
          <BreadCrumbs separator="/" style={styles.rootStyle}>
             <BreadCrumb text="男裝" link="http://uniqlo.com" target="_blank"  ></BreadCrumb>
             <BreadCrumb text="特別企劃" link="http://uniqlo.com" target="_blank"  ></BreadCrumb>
             <BreadCrumb text="期間限定特價" style={styles.lastItem} />
          </BreadCrumbs>
          <div style={styles.align}>
            <Text>Text Component</Text>
          </div>
          <br/>
          <SectionAnchorBar>
            <SectionAnchorBarItem title="Section1" link="/section1"/>
            <SectionAnchorBarItem title="Section2" link="/section2"/>
            <SectionAnchorBarItem title="Section3" link="/section3"/>
            <SectionAnchorBarItem title="Section4" link="/section4"/>
          </SectionAnchorBar>
          <br/>
          <div style={styles.align}>
            <Heading type="h3" headingText="Heading" />
          </div>
          <br/>
          <Hero
            variation="imageRight"
            title="セーター・ カーディガン"
            subtitle="SWEATERS & CARDIGANS"
            text="コットンカシミヤ、ミドルゲージカシミヤ100% ラムウール。どんなシーンでも活用できる デザイン豊富なラインナップ"
            imageSrc="https://fastretail.s3-ap-northeast-1.amazonaws.com/fr-ariake-stage/publish/asset-manager/h1.ef200640-b468-11e5-bb7e-d9305fcaae55.jpg"
            imageTitle="imageAltText"
          />
          <Button label="Sign Up"/>
          <Heading type="h3" headingText="Badge component" />
          <br />
          <Badge
            number={10}
          >
            <IconButton
              iconclassName="muidocs-icon-custom-github"
              style={{backgroundColor: 'green'}}
             />
          </Badge>
          <br />
          <Heading type="h3" headingText="Uq Label components" />
          <br />
          <UqLabel text="sale" type="discount" />
          <br />
          <UqLabel text="promotion" type="promo" />
          <br />
          <UqLabel text="low stock" type="onlineLowStock" />
          <br />
          <UqLabel text="New" type="new" />
          <br />
          <UqLabel text="multi buy" type="multiBuy" />
          <br />
          <UqLabel text="limited" type="limitedOffer" />
        </div>
      </div>
    );
  },

});

export default DarkThemePage;
