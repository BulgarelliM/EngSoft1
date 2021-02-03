import React from 'react';
import TextField from '@material-ui/core/TextField';


class InputArea extends React.Component {
  render() {
    return (
      <React.Fragment>
        <TextField
          id="outlined-multiline-flexible"
          label={this.props.label}
          style={{ margin: 8 }}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          multiline
          variant="outlined"
          rowsMax={10}
        />
      </React.Fragment>
    );
  }
}

export default InputArea;
