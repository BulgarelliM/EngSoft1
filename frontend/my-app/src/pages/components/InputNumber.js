import React from "react";
import TextField from "@material-ui/core/TextField";

class InputNumber extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <React.Fragment>
        <TextField
          id="outlined-number"
          label={this.props.label}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={this.props.value}
          onChange={this.props.setValue}
          variant="outlined"
        />
      </React.Fragment>
    );
  }
}

export default InputNumber;
