import * as React from "react";
import Search from "./components/Search";
import Grid from "@material-ui/core/Grid";
import SelectNumber from "./components/SelectNumber";
import Button from "@material-ui/core/Button";
const style = {
  position: "fixed",
  top: "50%",
  left: "50%",
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

class SearchPage extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <React.Fragment>
        <div style={style}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Search label="Cidade" placeholder="Busque por cidade" />
            </Grid>

            <Grid item xs={6} sm={6}>
              <SelectNumber label="Quartos" options={roomOpts} />
            </Grid>
            <Grid item xs={6} sm={6}>
              <SelectNumber label="Aluguel até" options={valuesOpts} />
            </Grid>

            <Grid item xs={12}>
              <Button variant="outlined" color="primary" style={{width:"100%"}}>
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
