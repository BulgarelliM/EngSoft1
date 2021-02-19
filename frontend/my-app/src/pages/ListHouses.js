import * as React from "react";
import HouseCard from "./components/HouseCard";
import Grid from "@material-ui/core/Grid";
import queryString from "query-string";
import findHouse from "./functions/findHouses";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import CircularProgress from "@material-ui/core/CircularProgress";

const style = {
  position: "fixed",
  top: "50%",
  left: "45%",
  width: "50%",
  display: "-webkit-inline-box",
  transform: "translate(-50%, -50%)",
  padding: "0px !important",
  margin: "5px",
};
var houses = [];
var init = 0;
var allHouses = [];
var emptys = [];
class ListHouses extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 1,
      limit: 6,
      loading: true,
    };
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

  async componentWillMount() {
    let params = queryString.parse(this.props.location.search);
    console.log(params);
    allHouses = await findHouse(
      params.city,
      params.neighborhood,
      params.rooms,
      params.price
    );
    allHouses.forEach((house, index) => {
      if (index >= init && houses.length < this.state.limit) {
        houses.push(house);
      }
    });
    this.setState({
      loading: false,
    });
    console.log(houses);
  }
  foward = () => {
    init = init + this.state.limit;
    houses = [];
    if (init > allHouses.length) init = allHouses.length;
    console.log(houses.length);
    allHouses.forEach((house, index) => {
      if (index >= init && houses.length < this.state.limit) {
        houses.push(house);
      }
    });
    emptys = [];
    for (let index = houses.length; index < this.state.limit; index++) {
      emptys.push(<Grid item xs={4} style={{display: "none"}}><HouseCard/></Grid>);
    }
    this.forceUpdate();
    console.log(houses);
  };
  back = () => {
    init = init - this.state.limit;
    if (init < 0) init = 0;
    houses = [];
    console.log(houses.length);
    allHouses.forEach((house, index) => {
      if (index >= init && houses.length < this.state.limit) {
        houses.push(house);
      }
    });
    emptys = [];
    for (let index = houses.length; index < this.state.limit; index++) {
      emptys.push(<Grid item xs={4} style={{display: "none"}}><HouseCard/></Grid>);
    }
    this.forceUpdate();
    console.log(houses);
  };
  render() {
    return (
      <React.Fragment>
        {this.state.loading ? (
          <CircularProgress />
        ) : (
          <div style={style}>
            <div style={{ "padding-top": "25%" }}>
              {init <= 0 ? (
                ""
              ) : (
                <IconButton aria-label="back" onClick={this.back}>
                  <ArrowBackIosIcon />
                </IconButton>
              )}
            </div>
            <div>
              <Grid container spacing={1}>
                {houses.map((house) => {
                  return (
                    <Grid item xs={4}>
                      <HouseCard
                        onChange={this.handleDateChange}
                        type={
                          house.portaria_24 != undefined
                            ? "Apartamento"
                            : "Casa"
                        }
                        id={house.codigo}
                        city={house.municipio}
                        neighborhood={house.bairro}
                        rooms={house.num_quartos}
                        price={house.valor_aluguel}
                        area={house.area}
                        visits={house.visits}
                      />
                    </Grid>
                  );
                })}
                {emptys}
              </Grid>
            </div>

            <div style={{ "padding-top": "25%" }}>
              {init + this.state.limit > allHouses.length ? (
                ""
              ) : (
                <IconButton aria-label="foward" onClick={this.foward}>
                  <ArrowForwardIosIcon />
                </IconButton>
              )}
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default ListHouses;
