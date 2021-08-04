import React from "react";
import { Link } from "react-router-dom";

const possibleAutos = ["SUV", "Truck", "Car"];

const Nav = () => {
  return (
    <div id="nav">
      <h1>Stranger's Things</h1>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <Link to="/posts">
        <button>Posts</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>

      {possibleAutos.map((pageName) => (
        <Link key={pageName} to={`/new-posts/${pageName}`}>
          <button>{pageName}Posts</button>
        </Link>
      ))}
    </div>
  );
};

export default Nav;
