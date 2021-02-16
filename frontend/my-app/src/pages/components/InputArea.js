import React from 'react';
import TextField from '@material-ui/core/TextField';


class InputArea extends React.Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    console.log(event.target)
    this.props.onChange(event.target.name, event.target.value);
  }
  render() {
    return (
      <React.Fragment>
        <TextField
          id="outlined-multiline-flexible"
          label={this.props.label}
          name={this.props.name}
          onChange={this.onChange}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          multiline
          variant="outlined"
          rowsMax={10}
        />
      </React.Fragment>
    );
  }
}

export default InputArea;
