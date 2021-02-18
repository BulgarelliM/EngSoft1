import * as React from "react";
import ComboBox from "./components/ComboBox";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import municipios from "./base/municipios.json";
import bairros from "./base/bairros.json";

const style = {
  position: "fixed",
  top: "50%",
  left: "50%",
  width: "50%",
  transform: "translate(-50%, -50%)",
  padding: "0px !important",
};
const roomOpts = ["1", "2", "3", "4", "4 +"];
const valuesOpts = [
  "R$ 1000",
  "R$ 2000",
  "R$ 3000",
  "R$ 4000",
  "R$ 5000",
  "+ R$ 5000",
];

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
class SearchPage extends React.Component {
  constructor() {
    super();
    this.state = {
      city: "",
      neighborhood: "",
      price: 0.0,
      rooms: 0,
      neighborhoodsOptions: [],
      citys: [],
    };

    this.changeCity = this.changeCity.bind(this);
    this.changeNeighborhood = this.changeNeighborhood.bind(this);
    this.changeRooms = this.changeRooms.bind(this);
    this.changePrice = this.changePrice.bind(this);
    this.getHouses = this.getHouses.bind(this);
    this.addHouse = this.addHouse.bind(this);
  }

  changeNeighborhood = (text) => {
    this.setState({
      neighborhood: text,
    });
  };
  changePrice = (number) => {
    this.setState({
      price: number,
    });
  };
  changeRooms = (number) => {
    this.setState({
      rooms: number,
    });
  };
  changeCity = (text) => {
    this.setState({
      city: text,
      neighborhoodsOptions: getNeighborhood(text),
    });
  };

  getHouses = () => {
    let query = "?";
    this.state.city != ""
      ? (query = query + "city=" + this.state.city + "&")
      : (query = query);
    this.state.neighborhood != ""
      ? (query = query + "&neighborhood=" + this.state.neighborhood + "&")
      : (query = query);
    this.state.price != 0
      ? (query = query + "price=" + this.state.price + "&")
      : (query = query);
    this.state.rooms != 0
      ? (query = query + "rooms=" + this.state.rooms + "&")
      : (query = query);
    console.log("/houses" + query);
    this.props.history.push("/houses" + query);
  };

  addHouse = () => {
    if (this.props.userLogin) {
      this.props.history.push("/add");
    } else {
      this.props.history.push("/logar");
    }
  };
  componentWillMount() {
    this.setState({
      citys: getCitys(),
    });
  }

  render() {
    return (
      <React.Fragment>
        <div style={style}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <ComboBox
                label="Cidade"
                placeholder="Busque por cidade"
                options={this.state.citys}
                onChange={this.changeCity}
              />
            </Grid>
            <Grid item xs={4}>
              <ComboBox
                label="Bairro"
                placeholder="Busque por bairro"
                options={this.state.neighborhoodsOptions}
                onChange={this.changeNeighborhood}
              />
            </Grid>
            <Grid item xs={4}>
              <ComboBox
                label="Quartos"
                placeholder="Número de Quartos"
                options={roomOpts}
                onChange={this.changeRooms}
              />
            </Grid>
            <Grid item xs={4}>
              <ComboBox
                label="Aluguel até"
                placeholder="Aluguel até"
                options={valuesOpts}
                onChange={this.changePrice}
              />
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}>
              <Button
                variant="outlined"
                onClick={this.getHouses}
                to="/Houses"
                color="primary"
                style={{ width: "100%" }}
              >
                Buscar
              </Button>
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}>
              <Button
                onClick={this.addHouse}
                color="primary"
                style={{ width: "100%" }}
              >
                Anunciar imovel
              </Button>
            </Grid>
            <Grid item xs={4}></Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}
export default SearchPage;
