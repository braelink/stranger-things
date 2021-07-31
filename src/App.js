import logo from "./logo.svg";
import "./App.css";
import Login from "./Components/Login";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/login" component={Login} />

        <Route path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
