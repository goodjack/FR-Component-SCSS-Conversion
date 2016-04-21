import React from 'react';

export default function exporter(customConfig) {

  return function componentCreator(Component) {

    class Decorator extends React.Component {

      childContextTypes: {
        muiConfig: React.PropTypes.object,
      };

      render() {
        return React.createElement(Component, this.props);
      }
    }
    Decorator.getChildContext = function getChildContext() {
      return {
        muiConfig: customConfig,
      };
    };

    return Decorator;
  };
}
