import "./App.css";
import Register from "./Components/Register";
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
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/posts" component={NewPosts} />
        <Route path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
