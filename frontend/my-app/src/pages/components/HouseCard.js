import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import DialogActions from '@material-ui/core/DialogActions';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import SingleBedIcon from "@material-ui/icons/SingleBed";
import DatePicker from "./DatePicker";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

class HouseCard extends React.Component {
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

  changeShowDates = () => {
    this.setState({
      showDates: !this.state.showDates,
    });
  };
  handleDateChange = (date) => {
    this.setState({
      date: date
    });
  };
  closeDialog = () => {
    this.setState({
      showDates: false,
    });
  }
  render() {
    return (
      <React.Fragment>
        <Card style={{ textAlign: "initial" }} variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {this.props.title}
            </Typography>
            <Typography variant="h6" component="h2">
              {this.props.end}
            </Typography>
            <Typography color="textSecondary">
              {this.props.neighborhood},{this.props.city}
            </Typography>
            <Typography color="textSecondary">
              <Grid container spacing={1}>
                <Grid item xs={3}>
                  {" "}
                  <SingleBedIcon /> {this.props.rooms}{" "}
                </Grid>
                <Grid item xs={3}>
                  {" "}
                  <SingleBedIcon /> {this.props.area}
                </Grid>
              </Grid>
            </Typography>
            <Typography color="textSecondary">
              Aluguel: {this.props.price}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={this.changeShowDates} size="small">
              Agendar Visitia
            </Button>
          </CardActions>
        </Card>
        <Dialog
          onClose={this.changeShowDates}
          aria-labelledby="simple-dialog-title"
          open={this.state.showDates}
        >
          <DialogTitle id="simple-dialog-title">Escolha a data</DialogTitle>
          <DatePicker
            onChange={this.handleDateChange}
            selectedDate={this.state.date}
          />
           <DialogActions>
          <Button onClick={this.closeDialog} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
      </React.Fragment>
    );
  }
}

export default HouseCard;
