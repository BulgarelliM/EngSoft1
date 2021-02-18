import * as React from "react";
import Input from "./components/Input";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const style = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "0px !important",
};

class CreateUser extends React.Component {
  constructor() {
    super();
    this.state = {
        nome:"",
        email:"",
        login:"",
        senha:"",
        telefone: "" 
    };

    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleDateChange = (name, value) => {
    console.log(value);
    this.setState({
      [name]: value,
    });
  };
// nome email login senha telefone 
  render() {
    return (
      <React.Fragment>
        <div style={style}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
            <Input  onChange={this.handleDateChange}
                name="nome"
                label="Nome"
                placeholder="Seu nome completo"
                >
              </Input>
            </Grid> <Grid item xs={12}>
            <Input  onChange={this.handleDateChange}
                name="email"
                label="Email"
                placeholder="example@google.com"
                >
              </Input>
            </Grid> <Grid item xs={12}>
            <Input  onChange={this.handleDateChange}
                name="login"
                label="Login"
                placeholder="Seu nome de usuario"
                >
              </Input>
            </Grid> <Grid item xs={12}>
            <Input  onChange={this.handleDateChange}
                name="senha"
                label="Senha"
                password={true}
                placeholder="Sua senha"
                >
              </Input>
            </Grid> <Grid item xs={12}>
            <Input  onChange={this.handleDateChange}
                name="telefone"
                label="Telefone"
                placeholder="(00) 00000-0000"
                >
              </Input>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="outlined"
                onClick={this.getHouses}
                to="/Houses"
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
export default CreateUser;
