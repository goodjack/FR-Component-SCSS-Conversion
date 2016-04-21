import React from 'react';
import {ClearFix, Paper} from 'material-ui';
import Styles from 'uniqlo-ui/helpers/styles';
import BaseTheme from 'uniqlo-ui/helpers/styles/baseThemes/defaultBaseTheme';
import UqLabel from 'uniqlo-ui/uniqlo/UqLabel';
import ComponentDoc from '../../component-doc';
import Code from 'uq-label-code';
import CodeExample from '../../CodeExample';
import CodeBlock from '../../CodeExample/CodeBlock';

// component specific theme
const styleObj = {
  uqLabel: {
    discountTextColor: Styles.Colors.black,
    discountBackgroundColor: Styles.Colors.redA500,
    promoTextColor: Styles.Colors.redA500,
    promoBackgroundColor: Styles.Colors.black,
    lowStockTextColor: Styles.Colors.white,
    lowStockBackgroundColor: Styles.Colors.grey700,
    newTextColor: Styles.Colors.white,
    newBackgroundColor: Styles.Colors.black,
    multiBuyTextColor: Styles.Colors.white,
    multiBuyBackgroundColor: Styles.Colors.black,
    limitedTextColor: Styles.Colors.white,
    limitedBackgroundColor: Styles.Colors.black,
    fontFamily: 'Roboto, san-serif',
  },
};

// base theme
const siteTheme = Styles.ThemeManager.getMuiTheme(BaseTheme);

// component theme merged with basetheme
const componentTheme = Object.assign({ }, siteTheme, styleObj);

const UqLabelDocsPage = React.createClass({

  getInitialState() {
    return {
      muiTheme: componentTheme,
    };
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object,
  },

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme,
    };
  },

  render() {
    let desc = `This component renders the uniqlo specific label. Styles can be customised throgh component theming.`;

    let componentInfo = [
      {
        name: 'Props',
        infoArray: [
          {
            name: 'id',
            type: 'string',
            header: 'optional',
            desc: 'Set the id of UqLabel\'s root element.',
          },
          {
            name: 'className',
            type: 'string',
            header: 'optional',
            desc: 'Set the class of UqLabel\'s root element.',
          },
          {
            name: 'text',
            type: 'string',
            header: 'required',
            desc: 'Label text to be displayed.',
          },
          {
            name: 'type',
            type: 'string',
            header: 'required',
            desc: 'Type to decide the label style.',
          },
        ],
      },
    ];

    return (
      <ComponentDoc
        name="UqLabel"
        desc={desc}
        componentInfo={componentInfo}>
        <Paper style = {{marginBottom: '22px'}}>
          <CodeBlock>
          {
            '//Import statement:\nimport {UqLabel} from \'uniqlo-ui/uniqlo/UqLabel\';\n\n' +
            '//See uniqlo-ui/lib/index.js for more\n'
          }
          </CodeBlock>
        </Paper>

        <CodeExample code={Code}>
          <ClearFix>
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
          </ClearFix>
        </CodeExample>
      </ComponentDoc>
    );
  },

});

export default UqLabelDocsPage;
