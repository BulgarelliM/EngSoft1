import * as React from "react";
import PropertyCard from "./components/PropertyCard";
import Grid from "@material-ui/core/Grid";
import queryString from 'query-string';
import getPropertyById from "./functions/getPropertyById"

const style = {
  position: "fixed",
  top: "50%",
  left: "50%",
  width: "50%",
  transform: "translate(-50%, -50%)",
  padding: "0px !important",
  margin: "5px",
};
var id = 0
var houses = []

class ListProperty extends React.Component {
  constructor() {
    super();
    this.state = {
      houses: [],
      id: 0
    };
  }

  handleDateChange = (name, value) => {
    console.log(value);
    this.setState({
      [name]: value,
    });
  };

  async componentWillMount (){
    let params = queryString.parse(this.props.location.search)
    id = params.id
    console.log("id: "+id)
    houses =  await getPropertyById(id)
    return Promise.resolve();
  }
  render() {
    return (
      <React.Fragment>
        <div style={style}>
          <Grid container spacing={1}>
            {houses.map((house) => {
              return (<Grid item xs={4}>
                <PropertyCard
                  onChange={this.handleDateChange}
                  type={house.portaria_24 != undefined?"Apartamento":"Casa"}
                  city={house.municipio}
                  neighborhood={house.bairro}
                  rooms={house.num_quartos}
                  price={house.valor_aluguel}
                  area={house.area}
                  visits={house.visits}
                />
              </Grid>)
            })}
            
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default ListProperty;
