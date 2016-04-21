import React, { Component, PropTypes } from 'react';

export default function attachThemeContext(OriginalComponent) {
  class connectContext extends Component {
    render() {
      return <OriginalComponent {...this.props} {...this.state} />;
    }
  }

  connectContext.contextTypes = {
    muiTheme: PropTypes.object,
  };

  return connectContext;
}
