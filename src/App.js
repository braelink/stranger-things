import "./App.css";
import Login from "./Components/Login";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import { Switch, Route } from "react-router-dom";
import NewPosts from "./Components/NewPosts";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/login" component={Login} />

        <Route path="/home" component={Home} />
      </Switch>
      <NewPosts />
    </div>
  );
}

export default App;
