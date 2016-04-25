import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import SvgIcon from '../index';

const ActionMinus = React.createClass({

  mixins: [PureRenderMixin],

  render() {
    return (
      <SvgIcon {...this.props}>
        <path fill="#000000" d="M19,13H5V11H19V13Z" />
      </SvgIcon>
    );
  },

});

export default ActionMinus;
