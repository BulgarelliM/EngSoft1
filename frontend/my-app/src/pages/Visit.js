import * as React from "react";
import InputNumber from "./components/InputNumber";
import InputText from "./components/InputText";
import InputArea from "./components/InputArea";
import DatePicker from "./components/DatePicker";
import TimePicker from "./components/TimePicker";
import Grid from "@material-ui/core/Grid";

class HouseAdd extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
      suítes: 0,
      sala_de_estar: 0,
      vagas_garagem: 0,
      area: 0.0,
      armario_embutido: false,
      descricao: "",
    };

    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleDateChange = (date) => {
    this.setState({
      date: date,
    });
  };
  setRooms = (number) => {
    this.setState({
      rooms: number,
    });
  };
  
  render() {
    return (
      <React.Fragment>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={3}>
            <DatePicker
              handleDateChange={this.handleDateChange}
              selectedDate={this.state.date}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TimePicker
              handleDateChange={this.handleDateChange}
              selectedDate={this.state.date}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default HouseAdd;
