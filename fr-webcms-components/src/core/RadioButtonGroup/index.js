import React, { Component, PropTypes } from 'react';
import composeContextPure from '../../helpers/composedComponents/contextPure';
import RadioButton from './RadioButton';

const {
  string,
  object,
  oneOf,
  func,
  node,
} = PropTypes;

class RadioButtonGroup extends Component {

  static propTypes = {
    children: node,
    labelPosition: oneOf(['left', 'right']),
    name: string.isRequired,
    onChange: func,
    style: object,
    valueSelected: string,
  };

  static contextTypes = {
    compTheme: object,
  };

  static defaultProps = {
    onChange: () => null,
  };

  state = {
    checkedCount: 0,
    selected: this.props.valueSelected || null,
  };

  componentWillMount = () => {
    let count = 0;
    React.Children.forEach(this.props.children, (option) => {
      if (this.hasCheckAttribute(option)) count++;
    }, this);
    this.setState({ checkedCount: count });
  };

  onChange = (event, newSelection) => {
    this.updateRadioButtons(newSelection);
    if (this.state.checkedCount === 0) {
      this.props.onChange(event, newSelection);
    }
  };

  hasCheckAttribute = (radioButton) =>
    radioButton.props.hasOwnProperty('checked') && radioButton.props.checked;

  updateRadioButtons = (newSelection) => {
    if (this.state.checkedCount === 0) {
      this.setState({ selected: newSelection });
    }
  };

  render() {
    const {
      children,
      style,
      labelPosition: propLabelPosition,
    } = this.props;

    const options = React.Children.map(children, (option) => {
      const {
        name,
        value,
        onCheck,
        labelPosition,
        ...other,
      } = option.props;

      return (
        <RadioButton
          {...other}
          name={name}
          key={value}
          labelPosition={ propLabelPosition || labelPosition }
          value={value}
          onCheck={this.onChange}
          checked={value === this.state.selected}
        />
      );
    }, this);

    return (
      <div
        style={style}
      > {options} </div>
    );
  }
}

export default composeContextPure(RadioButtonGroup);
