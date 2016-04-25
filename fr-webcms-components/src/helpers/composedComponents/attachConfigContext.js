import React, { Component, PropTypes } from 'react';

export default function attachConfigContext(OriginalComponent) {
  class connectContext extends Component {
    render() {
      return <OriginalComponent {...this.props} {...this.state} />;
    }
  }

  connectContext.contextTypes = {
    muiConfig: PropTypes.object,
  };

  return connectContext;
}
