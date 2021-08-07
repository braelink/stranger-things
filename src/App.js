import "./App.css";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import { Switch, Route } from "react-router-dom";
import NewPosts from "./Components/NewPosts";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      fetch("https://strangers-things.herokuapp.com/api/2104-web-pt/users/me", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
        })
        .catch(console.error);
    }
    //Check if there is a token in local storage, if there is, fetch me
    // store the response of the fetch in state variables
    // const [myPosts, setMyPosts] = useState([])
    // when we have a result from our fetch use a setter to set the state variables
  }, []);
  //dependency array

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
