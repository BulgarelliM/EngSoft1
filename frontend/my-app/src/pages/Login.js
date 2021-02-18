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

class Login extends React.Component {
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
    this.create = this.create.bind(this);
  }

  handleDateChange = (name, value) => {
    console.log(value);
    this.setState({
      [name]: value,
    });
  };
  create = () =>{
    this.props.history.push("/create");
  }
// nome email login senha telefone 
  render() {
    return (
      <React.Fragment>
        <div style={style}>
          <Grid container spacing={1}>
             <Grid item xs={12}>
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
                placeholder="Sua senha"
                password={true}
                >
              </Input>
            </Grid> 
            <Grid item xs={6}>
              <Button
                variant="outlined"
                onClick={this.login}
                to="/login"
                color="primary"
                style={{ width: "100%" }}
              >
                Logar
              </Button>
            </Grid><Grid item xs={6}>
              <Button
                variant="outlined"
                onClick={this.create}
                color="primary"
                style={{ width: "100%" }}
              >
                Criar User
              </Button>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}
export default Login;
