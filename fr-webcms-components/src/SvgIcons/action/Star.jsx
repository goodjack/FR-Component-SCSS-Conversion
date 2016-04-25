import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import SvgIcon from '../index';

const Star = React.createClass({

  mixins: [PureRenderMixin],

  render() {
    let pathValue = 'M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,';
    pathValue += '8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z';
    return (
      <SvgIcon {...this.props}>
    <path d={pathValue} />
          </SvgIcon>
        );
  },

});

export default Star;
