import * as React from "react";
import InputNumber from "./components/InputNumber";
import InputText from "./components/InputText";
import InputArea from "./components/InputArea";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import CheckButton from "./components/CheckButton";
import ToogleButton from "./components/ToogleButton";
const style = {
  position: "fixed",
  top: "20%",
  left: "50%",
  width: "50%",
  transform: "translate(-50%, -50%)",
  padding: "0px !important",
  margin: "5px",
};

class HouseAdd extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
      suites: 0,
      sala_de_estar: 0,
      quartos: 0,
      vagas_garagem: 0,
      area: 0.0,
      armario_embutido: false,
      descricao: "",
    };

    this.handleDateChange = this.handleDateChange.bind(this);
    this.save_house = this.save_house.bind(this);
  }

  handleDateChange = (name, value) => {
    console.log(value);
    this.setState({
      [name]: value,
    });
  };

  save_house = () => {
    console.log(this.state);
  };

  render() {
    return (
      <React.Fragment>
        <div style={style}>
          <Grid container spacing={1}>
            <Grid item xs={12} style={{ color: "#505050" }}>
              Casa
              <ToogleButton onChange={this.handleDateChange} name="house" />
              Apartamento
            </Grid>
            <Grid item xs={12} style={{ color: "#505050" }}>
            {this.state.house?<div>Brasil</div>:""}
            </Grid>
            <Grid item xs={4}>
              <InputNumber
                onChange={this.handleDateChange}
                name="quartos"
                label="Quartos"
              />
            </Grid>
            <Grid item xs={4}>
              <InputNumber
                onChange={this.handleDateChange}
                name="suites"
                label="Suítes"
              />
            </Grid>
            <Grid item xs={4}>
              <InputNumber
                onChange={this.handleDateChange}
                name="sala_de_estar"
                label="Sala de estar"
              />
            </Grid>
            <Grid item xs={4}>
              <InputNumber
                onChange={this.handleDateChange}
                name="vagas_garagem"
                label="Vagas de garagem"
              />
            </Grid>
            <Grid item xs={4}>
              <InputText
                onChange={this.handleDateChange}
                name="area"
                label="Área m²"
              />
            </Grid>
            <Grid item xs={4}>
              <CheckButton
                onChange={this.handleDateChange}
                name="armario_embutido"
                label="Armário embutido"
              />
            </Grid>
            <Grid item xs={12}>
              <InputArea
                onChange={this.handleDateChange}
                name="descricao"
                label="Descrição"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                onClick={this.save_house}
                variant="outlined"
                color="primary"
                style={{ width: "100%" }}
              >
                Salvar
              </Button>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default HouseAdd;
