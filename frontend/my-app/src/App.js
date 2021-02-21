import "./App.css";
import HouseAdd from "./pages/HouseAdd";
import Search from "./pages/SearchPage";
import ListHouses from "./pages/ListHouses";
import Login from "./pages/Login";
import CreateUser from "./pages/CreateUser";
import ListProperty from "./pages/ListProperty";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {

  return (
    <div className="App">
      <header className="App-header">
         
        <BrowserRouter>
          <Switch>
            <Route path="/AgataImobiliaria/" exact={true} component={Search} />
            <Route path="/AgataImobiliaria/logar" component={Login} />
            <Route path="/AgataImobiliaria/add" component={HouseAdd} />
            <Route path="/AgataImobiliaria/houses" component={ListHouses} />
            <Route path="/AgataImobiliaria/create" component={CreateUser} />
            <Route path="/AgataImobiliaria/listProperty" component={ListProperty} />
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
