import * as React from "react";
import PropertyCard from "./components/PropertyCard";
import Grid from "@material-ui/core/Grid";
import queryString from "query-string";
import getPropertyById from "./functions/getPropertyById";
import CircularProgress from "@material-ui/core/CircularProgress";
const style = {
  position: "fixed",
  top: "50%",
  left: "50%",
  width: "50%",
  transform: "translate(-50%, -50%)",
  padding: "0px !important",
  margin: "5px",
};
var id = 0;
var houses = [];

class ListProperty extends React.Component {
  constructor() {
    super();
    this.state = {
      houses: [],
      id: 0,
      loading: true,
    };
  }

  handleDateChange = (name, value) => {
    console.log(value);
    this.setState({
      [name]: value,
    });
  };

  async componentWillMount() {
    let params = queryString.parse(this.props.location.search);
    id = params.id;
    console.log("id: " + id);
    houses = await getPropertyById(id);
    console.log(houses)
    houses.map((h) => {
      console.log(h["login_proprietario"])
    })
    this.setState({
      loading: false,
    });
  }
  render() {
    return (
      <React.Fragment>
        {this.state.loading ? (
          <CircularProgress />
        ) : (
          <div style={style}>
            <Grid container spacing={1}>
              {houses.map((house) => {
               console.log(house.visits)
                return (
                  <Grid item xs={4}>
                    <PropertyCard
                      onChange={this.handleDateChange}
                      type={
                        house.portaria_24 != undefined ? "Apartamento" : "Casa"
                      }
                      id={house.codigo}
                      city={house.municipio}
                      neighborhood={house.bairro}
                      rooms={house.num_quartos}
                      price={house.valor_aluguel}
                      area={house.area}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default ListProperty;
