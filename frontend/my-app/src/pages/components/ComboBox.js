import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

class ComboBox extends React.Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.props.onChange(event.target.value);
  }
  render() {
    return (
      <React.Fragment>
        <Autocomplete
          id="country-select-demo"
          options={this.props.options}
          autoHighlight
          getOptionLabel={(option) => option}
          renderOption={(option) => (
            <React.Fragment>
              <span>{option}</span>
            </React.Fragment>
          )}
          renderInput={(params) => (
            <TextField
              fullWidth
              {...params}
              label={this.props.label}
              onChange={this.onChange}
              onSelect={this.onChange}
              placeholder={this.props.placeholder}
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                ...params.inputProps,
                autoComplete: "new-password", // disable autocomplete and autofill
              }}
            />
          )}
        />{" "}
      </React.Fragment>
    );
  }
}

export default ComboBox;
