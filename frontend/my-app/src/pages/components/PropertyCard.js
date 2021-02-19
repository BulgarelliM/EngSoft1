import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import SingleBedIcon from "@material-ui/icons/SingleBed";
import DialogTitle from "@material-ui/core/DialogTitle";
import StraightenOutlinedIcon from "@material-ui/icons/StraightenOutlined";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import getVisits from "../functions/getVisits";

var visits = []
class PropertyCard extends React.Component {
  constructor() {
    super();
    this.state = {
      showDates: false,
      selectedDate: new Date(),
    };
    this.changeShowDates = this.changeShowDates.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
  }
  async componentWillMount(){
    
  }
   changeShowDates = async() => {
    visits = []
    visits = await getVisits(this.props.id)
    console.log(visits)
    this.setState({
      showDates: !this.state.showDates,
    });
  };
  handleDateChange = (date) => {
    this.setState({
      date: date,
    });
  };
  closeDialog = () => {
    this.setState({
      showDates: false,
    });
  };
  handleChange = (name, value) => {
    console.log(name, value);
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <React.Fragment>
        <Card style={{ textAlign: "initial" }} variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {this.props.type}
            </Typography>
            <Typography  component="h4">
              {this.props.neighborhood},{this.props.city}
            </Typography>
            <Typography color="textSecondary">
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <div>
                    <SingleBedIcon /> {this.props.rooms}
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div>
                    <StraightenOutlinedIcon /> {this.props.area}m²
                  </div>
                </Grid>
              </Grid>
            </Typography>
            <Typography color="textSecondary">
              Aluguel: R$ {this.props.price}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={this.changeShowDates} size="small">
              Ver Visitias
            </Button>
          </CardActions>
        </Card>
        <Dialog
          onClose={this.changeShowDates}
          aria-labelledby="simple-dialog-title"
          open={this.state.showDates}
        >
          <DialogTitle id="simple-dialog-title">Visitas Agendadas</DialogTitle>
          <DialogContent>{
          visits.map((visit) => {
            var data = new Date(visit.data)
            let dataFormatada = ((data.getDate() )) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear(); 
              return (
                <div>
                  Data:{dataFormatada} Nome:{visit.nome} Telefone: {visit.telefone}
                </div>
              );
            })} 
          </DialogContent>
          <DialogActions>
            <Button onClick={this.closeDialog} color="primary">
              Fechar
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default PropertyCard;
