import React from 'react';
import mui from 'material-ui';
import uni from 'uniqlo-ui';
import CodeBlock from '../../CodeExample/CodeBlock';
import ComponentDoc from '../../component-doc';
import SiteBConfig from './siteB-config';

const {
  ClearFix,
  Mixins,
  Paper,
  Tabs,
  Tab,
} = mui;

const {
  Styles,
  Configuration,
  TextInput,
  SectionTitle,
} = uni;

const {StylePropable, StyleResizable} = Mixins;
const {Typography} = Styles;
const ThemeManager = Styles.ThemeManager;
const DefaultRawTheme = Styles.lightBaseTheme;
const DarkRawTheme = Styles.darkBaseTheme;

//Configuration
const ConfigurationManager = Configuration.ConfigurationManager;
const BaseConfig = Configuration.baseConfig;

const ThemesPage = React.createClass({

  contextTypes: {
    muiTheme: React.PropTypes.object,
    muiConfig: React.PropTypes.object,
  },

  //for passing default theme context to children
  childContextTypes: {
    muiTheme: React.PropTypes.object,
    muiConfig: React.PropTypes.object,
  },

  mixins: [StylePropable, StyleResizable],

  getInitialState() {
    return {
      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DarkRawTheme),
      muiConfig: this.context.muiConfig ? this.context.muiConfig : ConfigurationManager.getMuiConfig(BaseConfig),
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
    let canvasColor = this.state.muiTheme.rawTheme.palette.canvasColor;
    let borderColor = this.state.muiTheme.rawTheme.palette.borderColor;
    let styles = {
      group: {
        float: 'left',
        width: '100%',
        marginTop: '16px',
        padding: '0 50px',
        boxSizing: 'border-box',
      },
      groupSlider: {
        marginTop: '0px',
        width: '100%',
      },
      container: {
        marginBottom: '16px',
        minHeight: '24px',
        textAlign: 'left',
      },
      containerCentered: {
        textAlign: 'center',
      },
      paper: {
        height: '100px',
        width: '100px',
        margin: '0 auto',
        marginBottom: '64px',
      },
      textfield: {
        width: '100%',
      },
      slider: {
        marginTop: '0px',
        marginBottom: '0px',
      },
      codeExample: {
        backgroundColor: canvasColor,
        marginBottom: '32px',
      },
      title: {
        fontSize: '20px',
        lineHeight: '28px',
        paddingTop: '19px',
        marginBottom: '13px',
        letterSpacing: '0',
        fontWeight: Typography.fontWeightMedium,
        color: Typography.textDarkBlack,
      },
      liveExamplePaper: {
        backgroundColor: canvasColor,
        marginBottom: 32,
        overflow: 'hidden',
      },
      liveExampleBlock: {
        borderRadius: '0 0 2px 0',
        padding: this.state.muiTheme.rawTheme.spacing.desktopGutter,
        margin: 0,
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
      bottomBorderWrapper: {
        borderBottom: 'solid 1px ' + borderColor,
        paddingBottom: '10px',
      },
      inlineCode: {
        backgroundColor: '#F8F8F8',
      },
    };

    if (this.isDeviceSize(StyleResizable.statics.Sizes.MEDIUM)) {
      styles.group.width = '33%';
    }

    styles.containerCentered = this.mergeStyles(styles.container, styles.containerCentered);
    styles.groupSlider = this.mergeStyles(styles.group, styles.groupSlider);

    return styles;
  },

  getComponentGroup() {
    const styles = this.getStyles();

    return (
      <ClearFix>
        <div style={this.mergeStyles(styles.group, {marginTop: 0})}>
          <div style={styles.container}>
            <TextInput
              style={styles.textfield}
              hintText="This is sample Hint Text"/>
          </div>
          <div style={styles.container}>
            <SectionTitle title="カーディガン" subtitle="CARDIGANS"/>
          </div>
        </div>
      </ClearFix>
    );
  },

  getThemeExamples() {
    return (
      <div>
        <Tabs>
          <Tab label="Site A (Default)" onClick={this.onTabChange.bind(this, false)} />
          <Tab label="Site B (Override config)" onClick={this.onTabChange.bind(this, true)} />
        </Tabs>
        {this.getComponentGroup()}
      </div>
    );
  },


  // Toggles between light and dark themes
  onTabChange(isSiteBConfig) {
    if (this.state.isSiteBConfig === isSiteBConfig) {
      return;
    }
    let newMuiConfig = null;


    if (!this.state.isSiteBConfig) {
      newMuiConfig = ConfigurationManager.getMuiConfig(SiteBConfig);
    }
    else {
      newMuiConfig = ConfigurationManager.getMuiConfig(BaseConfig);
    }

    this.setState({muiConfig: newMuiConfig,
      isSiteBConfig: isSiteBConfig});
  },

  handleTouchTapLeftNav() {
    this.setState({
      leftNavOpen: true,
    });
  },

  handleRequestChangeLeftNav(open) {
    this.setState({
      leftNavOpen: open,
    });
  },

  handleTouchTapDialog() {
    this.setState({
      dialogOpen: true,
    });
  },

  handleRequestCloseDialog() {
    this.setState({
      dialogOpen: false,
    });
  },

  handleTouchTapSnackbar() {
    this.setState({
      snackbarOpen: true,
    });
  },

  handleRequestCloseSnackbar() {
    this.setState({
      snackbarOpen: false,
    });
  },

  render() {

    let lightRawTheme =
      'export default {\n' +
      '  textInput: {\n' +
      '    showHint: false,\n' +
      '  }\n' +
      '  sectionTitle: {\n' +
      '    showSubTitle: false,\n' +
      '  }\n' +
      '};\n';

    let reactContextExampleCode =
      'import React from \'react\';\n' +
      'import SectionTitle from \'material-ui\/lib\/section-title\';\n' +

      'import ConfigurationManager from \'material-ui\/lib\/configuration\/configuration-manager\';\n' +
      'import MySiteConfig from \'path\/to\/your\/site\/config\/file\';\n\n' +

      'const MySampleAppComponent = React.createClass({\n\n' +

      '  //the key passed through context must be called \"muiConfig\"\n' +
      '  childContextTypes : {\n' +
      '    muiConfig: React.PropTypes.object,\n' +
      '  },\n\n' +

      '  getChildContext() {\n' +
      '    return {\n' +
      '      muiConfig: ConfigurationManager.getMuiConfig(MySiteConfig),\n' +
      '    };\n' +
      '  },\n\n' +

      '  //the app bar and button will receive our configuration through\n' +
      '  //context and style accordingly\n' +
      '  render () {\n' +
      '    return (\n' +
      '      <div>\n' +
      '        <SectionTitle title=\"Hello\" subtitle=\"World\" \/>\n' +
      '      </div>\n' +
      '    );\n' +
      '  },\n' +
      '});\n\n' +
      'export default MySampleAppComponent;\n';

    let decoratorExampleCode =
      'import React from \'react\';\n' +
      'import SectionTitle from \'material-ui\/lib\/section-title\';\n' +

      'import MySiteConfig from \'path\/to\/your\/site\/config\/file\';\n' +
      'import ConfigurationManager from \'material-ui\/lib\/configuration\/configuration-manager\';\n' +
      'import ConfigurationDecorator from \'material-ui\/lib\/configuration\/configuration-decorator\';\n\n' +

      '@ConfigurationDecorator(ConfigurationManager.getMuiConfig(MySiteConfig))\n' +
      'class MySampleAppComponent extends React.Component {\n\n' +

      '  render() {\n' +
      '    return (\n' +
      '      <div>\n' +
      '        <SectionTitle title=\"Hello\" subtitle=\"World\" \/>\n' +
      '      </div>\n' +
      '    );\n' +
      '  }\n\n' +

      '  //arrow function automatically binds lexical \"this\"\n' +
      '  handleClick = () => {\n' +
      '    //do something in response to button click\n' +
      '  }\n' +
      '}\n\n' +

      'export default MySampleAppComponent;\n';

    let receiveThemeInContextCode =
      'const SpecificPageInApp = React.createClass({\n\n' +

      '...\n\n' +

      '//contextTypes declares the keys that this component expects\n' +
      '//to receive through context, and their corresponding value types\n' +
      'contextTypes: {\n' +
      '  muiConfig: React.PropTypes.object,\n' +
      '},\n\n' +

      'getInitialState () {\n' +
      '  return {\n' +
      '    muiConfig: this.context.muiConfig,\n' +
      '  };\n' +
      '},\n\n' +

      '...\n';

    let overrideAppBarTextColorCode =
      '//update config here\n' +
      'componentWillMount () {\n' +
      '  let newMuiConfig = this.state.muiConfig;\n' +
      '  newMuiConfig.sectionTitle.showSubTitle = false;\n\n' +

      '  this.setState({\n' +
      '    muiConfig: newMuiConfig,\n' +
      '  });\n' +
      '},\n\n' +

      '//pass down updated config to children\n' +
      'getChildContext () {\n' +
      '  return {\n' +
      '    muiConfig: this.state.muiConfig,\n' +
      '  };\n' +
      '},\n';

    let info = [
      {
        name: 'ConfigurationManager functions',
        infoArray: [
          {
            name: 'getMuiConfig(overrideConfig)',
            header: 'returns: calculated overridden config object',
            desc: `Accepts one argument which is a reference to a override config object,
              and returns the latest config object`,
          },
        ],
      },
    ];

    let styles = this.getStyles();

    return (
      <div>

        <h2 style={styles.headline}>Configuration</h2>

        <div style={styles.bottomBorderWrapper}>
          <p>
          </p>
        </div>

        <div style={styles.bottomBorderWrapper}>
          <ComponentDoc
            name=""
            componentInfo={info} />
        </div>

        <h2 style={styles.headline}>Custom Config</h2>
        <p>
          All Material-UI components use the base configuration by default. so you can provide site level override config to change the behaviour
        </p>

        <p>
          Internally, Material-UI components use React&#39;s
          <a href="https://facebook.github.io/react/blog/2014/03/28/the-road-to-1.0.html#context">
          context</a> feature to implement theming. Context is a way to pass down values through the component
          hierarchy without having to use props at every level.
          In fact, context is very convenient for concepts like theming,
          which are usually implemented in a hierarchical manner.
        </p>

        <p>
          There are two recommended ways to apply custom config:
          using React lifecycle methods with the context feature,
          <b>or</b>,
          using an ES7-style decorator. To start off, define your own configuration in a JS file like so:
        </p>

        <Paper style={styles.codeExample}>
          <CodeBlock>{lightRawTheme}</CodeBlock>
        </Paper>

        <h3 style={styles.title}>1. Using React Lifecycle Methods with Context</h3>

        <p>
          Once you have defined your configuration in a JS file, you can use React lifecycle methods
          and the context feature to apply your custom configuration as follows:
        </p>
        <Paper style={styles.codeExample}>
          <CodeBlock>{reactContextExampleCode}</CodeBlock>
        </Paper>

        <h3 style={styles.title}>2. Using ES7-style Decorator</h3>
        <p>
          Alternatively, we have provided an ES7-style configuration decorator that you can use to apply your
          custom configuration.
          Keep in mind that in order to use the decorator, you must use the ES6-style <i>class</i> syntax
          to declare your app component. Moreover, React may not be able to automatically bind event handlers
          to your component&#39;s <i>this</i>. Arrow functions allow you to overcome this limitation.
        </p>
        <Paper style={styles.codeExample}>
          <CodeBlock>{decoratorExampleCode}</CodeBlock>
        </Paper>
        <p>
          It is worth pointing out that underneath the covers,
          the decorator is also using React lifecycle methods
          with the context feature.
        </p>

        <h2 style={styles.headline}>Overriding Configuration Variables</h2>

        <p>
          Once you have obtained the calculated mui config in your app component, you can easily
          override specific attributes for particular components.
          These overrides can be performed at any level
          in the hierarchy and will only apply from that point downward.
        </p>

        <p>
          For instance, let&#39;s say that a specific page (component) in your app expects to receive the configuration
          from its parent/ancestors. However, in that page, the app bar text color should be different.
        </p>

        <Paper style={styles.codeExample}>
          <CodeBlock>{receiveThemeInContextCode}</CodeBlock>
        </Paper>

        <p>
          We recommend that you use state for intermediary storage of the configuration, and always
          access the configuration
          using <code style={styles.inlineCode}>this.state</code>. Then, to modify the configuration,
          use <code style={styles.inlineCode}>this.setState()</code> in an appropriate React lifecycle method.
          This is good practice because
          React componenets re-render every time the state of the component is updated.
        </p>

        <p>
          Coming back to our example, let&#39;s say that inside
          <code style={styles.inlineCode}>SpecificPageInApp</code> and
          all of its children, the text color of the app bar should be deep purple.
          This can be accomplished as follows:
        </p>

        <Paper style={styles.codeExample}>
          <CodeBlock>{overrideAppBarTextColorCode}</CodeBlock>
        </Paper>

        <p>
          Check out the
          <a href="https://github.com/callemall/material-ui/blob/master/src/configuration/base-config.js">
            <code style={styles.inlineCode}>base-config.js</code>
          </a> file for a complete list of
          component-specific config values that may be overridden.
        </p>

        <p>
          <b>Never</b> directly modify the base config file of an mui config object.
          Doing so will result in styling inconsistencies across your components.
          Always use the modifiers provided in the
          ConfigurationManager module.
        </p>

      </div>
    );
  },

});

export default ThemesPage;
