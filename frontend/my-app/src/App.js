import './App.css';
import HouseAdd from "./pages/HouseAdd"
import Search from "./pages/SearchPage"
import ListHouses from "./pages/ListHouses"
import Login from "./pages/Login"
import Logo from "./logo.png"
import CreateUser from "./pages/CreateUser"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
const style = {
  position: "fixed",
  top: "0%",
  left: "50%",
  width: "50%",
  transform: "translate(-50%, 0%)",
  padding: "0px !important",
  margin: "5px",
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={style}><img src={Logo} alt="logo" /></div>
      <BrowserRouter>
      <Switch>
            <Route path="/" exact={true} component={Search} />
            <Route path="/logar" component={Login} />
            <Route path="/add" component={HouseAdd} />
            <Route path="/houses" component={ListHouses} />
            <Route path="/create" component={CreateUser} />
        </Switch>
    </ BrowserRouter>
      </header>
    </div>
  );
}

export default App;
