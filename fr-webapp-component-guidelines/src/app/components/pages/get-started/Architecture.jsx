import React from 'react';
const ArchitectureDocsPage = React.createClass({

  render() {

    let styles = {
      headline: {
        fontSize: '24px',
        lineHeight: '32px',
        paddingTop: '16px',
        marginBottom: '12px',
        letterSpacing: '0',
      },
    };

    return (
      <div>
        <div style={styles.headline}>Component Architecture</div>
        <br/>
        <img src="images/architecture.png"/>
      </div>
    );
  },

});

export default ArchitectureDocsPage;
