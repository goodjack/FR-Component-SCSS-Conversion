import React from 'react';
import mui from 'material-ui';
import uni from 'uniqlo-ui';

const {
  Mixins,
} = mui;

const {
  Styles,
  Configuration,
  TextInput,
  Grid,
  GridCell,
} = uni;

const {StylePropable, StyleResizable} = Mixins;
const {Typography} = Styles;
const ThemeManager = Styles.ThemeManager;
const DarkRawTheme = Styles.darkBaseTheme;

//Configuration
const ConfigurationManager = Configuration.ConfigurationManager;
const BaseConfig = Configuration.baseConfig;

const ThemesPage = React.createClass({

  contextTypes: {
    muiTheme: React.PropTypes.object,
    muiConfig: React.PropTypes.object,
    compTheme: React.PropTypes.object,
    compConfig: React.PropTypes.object,
  },

  //for passing default theme context to children
  childContextTypes: {
    muiTheme: React.PropTypes.object,
    muiConfig: React.PropTypes.object,
    compTheme: React.PropTypes.object,
    compConfig: React.PropTypes.object,
  },

  mixins: [StylePropable, StyleResizable],

  getInitialState() {
    return {
      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DarkRawTheme),
      muiConfig: this.context.muiConfig ? this.context.muiConfig : ConfigurationManager.getMuiConfig(BaseConfig),
      compTheme: this.context.compTheme ? this.context.compTheme : ThemeManager.getCompTheme(DarkRawTheme),
      compConfig: this.context.compConfig ? this.context.compConfig : ConfigurationManager.getCompConfig(BaseConfig),
      isThemeDark: false,
      isSiteBConfig: false,
      dialogOpen: false,
      snackbarOpen: false,
      leftNavOpen: false,
    };
  },

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme,
      muiConfig: this.state.muiConfig,
      compTheme: this.state.compTheme,
      compConfig: this.state.compConfig,
    };
  },

  //to update config inside state whenever a new theme is passed down
  //from the parent / owner using context
  componentWillReceiveProps(nextProps, nextContext) {
    let newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
    let newMuiConfig = nextContext.muiConfig ? nextContext.muiConfig : this.state.muiConfig;
    this.setState({muiTheme: newMuiTheme, muiConfig: newMuiConfig});
  },

  getStyles() {
    let borderColor = this.state.muiTheme.rawTheme.palette.borderColor;
    let styles = {
      group: {
        float: 'left',
        width: '100%',
        marginTop: '16px',
        padding: 20,
        boxSizing: 'border-box',
        border: '1px solid',
        borderColor: borderColor,
      },
      container: {
        marginBottom: '16px',
        minHeight: '24px',
        textAlign: 'left',
      },
      textfield: {
        width: '100%',
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
      boxStyle: {
        background: '#ccc',
        lineHeight: '60px',
        color: '#333',
        fontSize: '1em',
        textAlign: 'center',
        border:'1px solid #888',
      }
    };

    return styles;
  },

  render() {
    let styles = this.getStyles();

    return (
      <div>
        <h2 style={styles.headline}>Site A Configuration</h2>
        <Grid maxCols={1}>
          <GridCell style={{ background: '#ccc', height: '20px', lineHeight: '20px', color: '#333', fontSize: '0.7em', textAlign: 'center' }}>
            Default Value of 'maxCols' in Grid is 12.
          </GridCell>
        </Grid>
        <Grid>
          <GridCell style={styles.boxStyle}>1</GridCell>
          <GridCell style={styles.boxStyle}>1</GridCell>
          <GridCell style={styles.boxStyle}>1</GridCell>
          <GridCell style={styles.boxStyle}>1</GridCell>
          <GridCell style={styles.boxStyle}>1</GridCell>
          <GridCell style={styles.boxStyle}>1</GridCell>
          <GridCell style={styles.boxStyle}>1</GridCell>
          <GridCell style={styles.boxStyle}>1</GridCell>
          <GridCell style={styles.boxStyle}>1</GridCell>
          <GridCell style={styles.boxStyle}>1</GridCell>
          <GridCell style={styles.boxStyle}>1</GridCell>
          <GridCell style={styles.boxStyle}>1</GridCell>
        </Grid>
        <div style={this.mergeStyles(styles.group, {marginTop: 0})}>
          <div style={styles.container}>
            <TextInput
              style={styles.textfield}
              hintText="This is sample Hint Text"/>
          </div>
        </div>
      </div>
    );
  },

});

export default ThemesPage;
