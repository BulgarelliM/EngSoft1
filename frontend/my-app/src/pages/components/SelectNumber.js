import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';

class SelectNumber extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <React.Fragment>
       <TextField
          id="standard-select"
          select
          label={this.props.label}
          value={this.props.value}
          style={{width: "100%"}}
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={this.props.handleChange}
        >
          {this.props.options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
          
        </TextField>
      </React.Fragment>
    );
  }
}

export default SelectNumber;
