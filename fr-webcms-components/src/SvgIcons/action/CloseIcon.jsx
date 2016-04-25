import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import SvgIcon from '../index';

const CloseIcon = React.createClass({

  mixins: [PureRenderMixin],

  render() {
    const str = String.raw`M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,
      19L12,13.41L17.59,
      19L19,17.59L13.41,12L19,6.41Z`;
    return (
      <SvgIcon {...this.props}>
        <path d={str}/>
      </SvgIcon>
    );
  },

});

export default CloseIcon;
