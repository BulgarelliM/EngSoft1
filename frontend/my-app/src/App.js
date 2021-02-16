import './App.css';
import HouseAdd from "./pages/HouseAdd"
import Search from "./pages/SearchPage"
import Visit from "./pages/Visit"
import ListHouses from "./pages/ListHouses"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
      <Switch>
            <Route path="/" exact={true} component={Search} />
            <Route path="/add" component={HouseAdd} />
            <Route path="/houses" component={ListHouses} />
        </Switch>
    </ BrowserRouter>
      </header>
    </div>
  );
}

export default App;
