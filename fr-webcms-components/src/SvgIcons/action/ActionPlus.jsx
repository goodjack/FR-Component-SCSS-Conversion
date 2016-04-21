import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import SvgIcon from '../index';

const ActionPlus = React.createClass({

  mixins: [PureRenderMixin],

  render() {
    return (
      <SvgIcon {...this.props}>
        <path fill="#000000" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
      </SvgIcon>
    );
  },

});

export default ActionPlus;
