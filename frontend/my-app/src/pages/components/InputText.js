import React from 'react';
import TextField from '@material-ui/core/TextField';

import InputAdornment from '@material-ui/core/InputAdornment';

class InputText extends React.Component {
  render() {
    return (
      <React.Fragment>
        <TextField
          id="outlined-number"
          label={this.props.label}
          InputProps={{
            endAdornment: <InputAdornment position="end">m²</InputAdornment>,
          }}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
      </React.Fragment>
    );
  }
}

export default InputText;
