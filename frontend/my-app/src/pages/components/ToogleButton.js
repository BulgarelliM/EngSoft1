import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import React from "react";

class ToogleButton extends React.Component {
  render() {
    return (
      <React.Fragment>
        <FormControlLabel
        control={
          <Switch
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Primary"
      />
      </React.Fragment>
    );
  }
}

export default ToogleButton;
