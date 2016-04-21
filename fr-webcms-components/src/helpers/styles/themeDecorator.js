import React from 'react';

export default function themeDecorator(customTheme) {

  return function decoratorAdditions(Component) {

    class DecoratorAdditions extends React.Component {

      childContextTypes: {
        muiTheme: React.PropTypes.object,
      };

      render() {
        return React.createElement(Component, this.props);
      }
    }
    DecoratorAdditions.getChildContext = function getChildContext() {
      return {
        muiTheme: customTheme,
      };
    };

    return DecoratorAdditions;
  };
}
