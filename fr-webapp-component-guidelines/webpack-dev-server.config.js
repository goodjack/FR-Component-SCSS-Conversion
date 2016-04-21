const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'src/www');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const AppConfig = require('./config');

const config = {
  //Entry point to the project
  entry: [
    'webpack/hot/dev-server',
    'webpack/hot/only-dev-server',
    path.join(__dirname, '/src/app/app.jsx'),
  ],
  //Webpack config options on how to obtain modules
  resolve: {
    //When requiring, you don't need to add these extensions
    extensions: ['', '.js', '.jsx', '.md', '.txt', '.scss'],
    alias: {
      //uniqlo-ui requires will be searched in src folder, not in node_modules
      'uniqlo-ui/lib': path.resolve(__dirname, AppConfig.development.componentsSource + '/src'),
      'uniqlo-ui': path.resolve(__dirname, AppConfig.development.componentsSource + '/src'),
    },

    //Modules will be searched for in these directories
    modulesDirectories: [

      // We need /docs/node_modules to be resolved before /node_modules
      path.resolve(__dirname, 'node_modules'),
      'node_modules',
      path.resolve(__dirname, AppConfig.development.componentsSource + '/src'),
      path.resolve(__dirname, 'src/app/components/raw-code'),
      path.resolve(__dirname, 'src/app/components/markdown'),
    ],
  },

  //Configuration for dev server
  devServer: {
    contentBase: 'src/www',
    devtool: 'eval',
    hot: true,
    inline: true,
    host: '0.0.0.0',
    port: 5006,
  },
  devtool: 'eval',

  //Output file config
  output: {
    path: buildPath,    //Path of output file
    filename: 'app.js',  //Name of output file
  },
  plugins: [

    //Used to include index.html in build folder
    new HtmlWebpackPlugin({
      inject: false,
      template: path.join(__dirname, '/src/www/index.html'),
    }),

    new ExtractTextPlugin('css/app.css',{allChunks: true}),

    //Allows for sync with browser while developing (like BorwserSync)
    new webpack.HotModuleReplacementPlugin(),

    //Allows error warninggs but does not stop compiling. Will remove when eslint is added
    new webpack.NoErrorsPlugin(),
  ],
  externals: {
    fs: 'js', // To remove once https://github.com/benjamn/recast/pull/238 is released
  },
  module: {
    //eslint loader
    /*preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        include: [path.resolve(__dirname, '../src')],
        exclude: [
          path.resolve(__dirname, '../src/svg-icons'),
        ],
      },
    ],*/

    //Allow loading of non-es
    loaders: [
      {
        test: /\.jsx$/,
        loaders: [
          'react-hot',
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0', 'es2016-node5', 'react'],
        },
        exclude: /node_modules/,
      },
      {
        test: /\.txt$/,
        loader: 'raw-loader',
        include: path.resolve(__dirname, 'src/app/components/raw-code'),
      },
      {
        test: /\.md$/,
        loader: 'raw-loader',
        include: path.resolve(__dirname, 'src/app/components'),
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css?importLoaders=2&sourceMap!postcss!sass?outputStyle=expanded&sourceMap=true&sourceMapContents=true'),
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      },
    ],
  },
  eslint: {
    configFile: AppConfig.development.componentsSource + '/.eslintrc',
  },
};

module.exports = config;
