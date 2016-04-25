import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import SvgIcon from '../index';

const HalfStar = React.createClass({

  mixins: [PureRenderMixin],

  render() {
    let pathValue = 'M12,15.89V6.59L13.71,10.63L18.09,11L14.77,13.88L15.76,18.16M22,9.74L14.81,';
    pathValue += '9.13L12,2.5L9.19,9.13L2,9.74L7.45,14.47L5.82,21.5L12,17.77L18.18,';
    pathValue += '21.5L16.54,14.47L22,9.74Z';
    return (
      <SvgIcon {...this.props}>
          <path d= {pathValue} />
      </SvgIcon>
    );
  },

});

export default HalfStar;
