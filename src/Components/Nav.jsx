import React from "react";
import { Link } from "react-router-dom";

const headerStyle = {
  backgroundColor: "blue",
  color: "white",
};

const Nav = () => {
  return (
    <div>
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
    </div>
  );
};

export default Nav;
