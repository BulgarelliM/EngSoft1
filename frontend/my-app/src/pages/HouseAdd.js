import * as React from "react";
import InputNumber from "./components/InputNumber";
import InputText from "./components/InputText";
import InputArea from "./components/InputArea";
import InputValues from "./components/InputValues";
import Input from "./components/Input";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import ComboBox from "./components/ComboBox";
import ToogleButton from "./components/ToogleButton";
import municipios from "./base/municipios.json";
import bairros from "./base/bairros.json";

const style = {
  position: "fixed",
  top: "20%",
  left: "50%",
  width: "50%",
  transform: "translate(-50%, 0%)",
  padding: "0px !important",
  margin: "5px",
};
function getCitys() {
  let response = municipios.map((a) => {
    return a.Nome;
  });

  return response.sort();
}
function getNeighborhood(city) {
  let response = bairros.filter((a) => {
    return a.Nome.split("-")[1].trim() === city;
  });
  response = response.map((a) => {
    return a.Nome.split("-")[0].trim();
  });
  return response.sort();
}


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
      aluguel: 0.0,
      city: "",
      neighborhood: "",
      neighborhoodsOptions: [],
      citys:[]
    };

    this.handleDateChange = this.handleDateChange.bind(this);
    this.save_house = this.save_house.bind(this);
    this.changeCity = this.changeCity.bind(this);
    this.changeNeighborhood = this.changeNeighborhood.bind(this);
  }
  
changeNeighborhood = (text) => {
  this.setState({
    neighborhood: text,
  });
};
changeCity = (text) => {
  this.setState({
    city: text,
    neighborhoodsOptions: getNeighborhood(text),
  });
};

  handleDateChange = (name, value) => {
    console.log(value);
    this.setState({
      [name]: value,
    });
  };

  save_house = () => {
    console.log(this.state);
  };

  componentWillMount(){
    this.setState({
      citys: getCitys(),
    })
  }
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
            <Grid item xs={8}>
              <InputValues
                onChange={this.handleDateChange}
                name="Aluguel"
                label="Aluguel"
                placeholder="Valor do aluguel"
              />
            </Grid>
            {this.state.house ? (
              <Grid item xs={4}>
                <InputValues
                  onChange={this.handleDateChange}
                  name="Condominio"
                  label="Condominio"
                  placeholder="Valor do condominio"
                />
              </Grid>
            ) : (
              <Grid item xs={4}></Grid>
            )}
            <Grid item xs={4}>
              <InputNumber
                onChange={this.handleDateChange}
                name="quartos"
                label="Quartos"                
                placeholder="Nº de quartos"
              />
            </Grid>
            <Grid item xs={4}>
              <InputNumber
                onChange={this.handleDateChange}
                name="suites"
                label="Suítes"
                placeholder="Nº de suites"
              />
            </Grid>
            <Grid item xs={4}>
              <InputNumber
                onChange={this.handleDateChange}
                name="sala_de_estar"
                label="Sala de estar"
                placeholder="Nº de salas de estar"
              />
            </Grid>
            <Grid item xs={4}>
              <InputNumber
                onChange={this.handleDateChange}
                name="vagas_garagem"
                label="Vagas de garagem"
                placeholder="Nº de vagas de garagem"
              />
            </Grid>

            <Grid item xs={4}>
              <InputText
                onChange={this.handleDateChange}
                name="area"
                label="Área m²"
                placeholder="Área do imovel²"
              />
            </Grid>

            <Grid item xs={4}>
              <ComboBox
                label="Armário embutido"
                placeholder="Contem Armarios?"
                name="armario_embutido"
                options={["Sim", "Não"]}
                onChange={this.handleDateChange}
              />
            </Grid>
            <Grid item xs={12} style={{ color: "#505050" }}>
              {this.state.house ? (
                <Grid container spacing={1}>
                  <Grid item xs={4}>
                    <InputNumber
                      onChange={this.handleDateChange}
                      name="sala_de_jantar"
                      label="Sala de jantar"
                      placeholder="Nº de Salas de jantar"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <InputNumber
                      onChange={this.handleDateChange}
                      name="Andar"
                      label="Andar"
                      placeholder="Nº Andar"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <ComboBox
                      placeholder="Portaria 24 Hrs?"
                      options={["Sim", "Não"]}
                      onChange={this.handleDateChange}
                      name="portaria_24h"
                      label="Portaria 24 Hrs"
                    />
                  </Grid>
                </Grid>
              ) : (
                ""
              )}
  </Grid>
            <Grid item xs={8}>
              <ComboBox
                label="Cidade"
                placeholder="Nome da cidade"
                options={this.state.citys}
                onChange={this.changeCity}
              />
            </Grid>
            <Grid item xs={4}>
              <ComboBox
                label="Bairro"
                placeholder="Nome do bairro"
                options={this.state.neighborhoodsOptions}
                onChange={this.changeNeighborhood}
              />
            </Grid>
            <Grid item xs={12}>
              <Input  onChange={this.handleDateChange}
                name="endereco"
                label="Endereço"
                placeholder=" Nome da rua, nº xx"
                >
              </Input>
            </Grid>
            <Grid item xs={12}>
              <InputArea
                onChange={this.handleDateChange}
                name="descricao"
                label="Descrição"
                placeholder="Breve descrição do imovel"
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
