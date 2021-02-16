import * as React from "react";
import Search from "./components/Search";
import ComboBox from "./components/ComboBox";
import Grid from "@material-ui/core/Grid";
import SelectNumber from "./components/SelectNumber";
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
const roomOpts = [
  {
    value: "1",
    label: "1+",
  },
  {
    value: "2",
    label: "2+",
  },
  {
    value: "3",
    label: "3+",
  },
  {
    value: "4",
    label: "4",
  },
];
const valuesOpts = [
  {
    value: "1000",
    label: "R$ 1000",
  },
  {
    value: "2000",
    label: "R$ 2000",
  },
  {
    value: "3000",
    label: "R$ 3000",
  },
  {
    value: "4000",
    label: "R$ 4000",
  },
  {
    value: "5000",
    label: "R$ 5000",
  },
  {
    value: "5000",
    label: "+R$ 5000",
  },
];

function getCitys() {
  let response = municipios.map((a) => {
    return a.Nome;
  });

  return response.sort();
}
function getNeighborhood(city) {
  let response = bairros.filter((a) => {
    return a.Nome.split("-")[1].trim() == city;
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
      neighborhoodsOptions: [],
    };

    this.changeCity = this.changeCity.bind(this);
    this.changeNeighborhood = this.changeNeighborhood.bind(this);
    this.changeRooms = this.changeRooms.bind(this);
    this.changePrice = this.changePrice.bind(this);
    this.getHouses = this.getHouses.bind(this);
  }

  changeNeighborhood = (text) => {
    this.setState({
      neighborhood: text
    });
  };
  changePrice = (number) => {
    this.setState({
      price: number,
    });
  }
  changeRooms = (number) => {
    this.setState({
      rooms: number,
    });
  }
  changeCity = (text) => {
    this.setState({
      city: text,
      neighborhoodsOptions: getNeighborhood(text),
    });
  };

  getHouses = () => {
    console.log(this.state)
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
                options={getCitys()}
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
              <SelectNumber label="Quartos" options={roomOpts} onChange={this.changeRooms}/>
            </Grid>
            <Grid item xs={4}>
              <SelectNumber label="Aluguel até" options={valuesOpts} onChange={this.changePrice}/>
            </Grid>

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
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}
export default SearchPage;
