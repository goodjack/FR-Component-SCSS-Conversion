import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import SvgIcon from '../index';

const AddFavoriteBorder = React.createClass({

  mixins: [PureRenderMixin],

  render() {
    let pathValue = 'm16.5,3c-1.74,0 -3.41,0.81 -4.5,2.09c-1.09,-1.28 -2.76,-2.09 -4.5,-2.09';
    pathValue += 'c-3.08,0 -5.5,2.42 -5.5,5.5c0,3.78 3.4,6.86 8.55,11.54l1.45,1.31l1.45,-1.32';
    pathValue += 'c5.15,-4.67 8.55,-7.75 8.55,-11.53c0,-3.08 -2.42,-5.5 -5.5,-5.5zm-4.4,15.55';
    pathValue += 'l-0.1,0.1l-0.1,-0.1c-4.76,-4.31 -7.9,-7.16 -7.9,-10.05c0,-2 1.5,-3.5 3.5,-3.5';
    pathValue += 'c1.54,0 3.04,0.99 3.57,2.36h1.87c0.52,-1.37 2.02,-2.36 3.56,-2.36';
    pathValue += 'c2,0 3.5,1.5 3.5,3.5c0,2.89 -3.14,9.9 -5.7,10.05m3.2,-3.55v-1.25h-1.25v2.5h-2.5';
    pathValue += 'v1.25h2.5v2.5h1.25v-2.5h2.5v-1.25h-2.5l0,-1.25z';
    return (
      <SvgIcon {...this.props}>
     <path d={pathValue}/>
      </SvgIcon>
    );
  },

});

export default AddFavoriteBorder;
