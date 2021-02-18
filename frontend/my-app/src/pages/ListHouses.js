import * as React from "react";
import HouseCard from "./components/HouseCard";
import Grid from "@material-ui/core/Grid";
import queryString from 'query-string';
import findHouse from "./functions/findHouses"
const style = {
  position: "fixed",
  top: "50%",
  left: "50%",
  width: "50%",
  transform: "translate(-50%, -50%)",
  padding: "0px !important",
  margin: "5px",
};
var houses = []

class ListHouses extends React.Component {
  constructor() {
    super();
    
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

  async componentWillMount(){
    let params = queryString.parse(this.props.location.search)
    console.log(params)
    houses = findHouse(params.city,params.neighborhood,params.rooms,params.price)
  }

  render() {
    return (
      <React.Fragment>
        <div style={style}>
          <Grid container spacing={1}>
            {this.state.houses.map((house) => {
              return (<Grid item xs={4}>
                <HouseCard
                  photos={house.photos}
                  onChange={this.handleDateChange}
                  title={house.title}
                  end={house.end}
                  city={house.city}
                  neighborhood={house.neighborhood}
                  rooms={house.rooms}
                  area={house.area}
                />
              </Grid>)
            })}
            <Grid item xs={4}>
              <HouseCard
                onChange={this.handleDateChange}
                photos={["test"]}
                type="Apartamento"
                end="Rua dos bobos n 0"
                city="Contagem"
                neighborhood="Bairro da mari"
                rooms="5"
                area="4"
                price="R$2000"
              />
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default ListHouses;
