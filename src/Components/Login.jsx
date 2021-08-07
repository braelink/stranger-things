import React, { useState } from "react";

const Form = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "20px",
  };

  const login = (e) => {
    e.preventDefault();
    console.log(user, pass);
    fetch(
      "https://strangers-things.herokuapp.com/api/2104-web-pt/users/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username: user,
            password: pass,
          },
        }),
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result.data.token);
        window.localStorage.setItem("token", result.data.token);
      })
      .catch(console.error);
  };

  return (
    <div>
      <h1>Please sign in</h1>
      <form style={formStyle} onSubmit={login}>
        <input
          placeholder="*username"
          type="text"
          value={user}
          onChange={(e) => {
            e.preventDefault();
            setUser(e.target.value);
          }}
        ></input>

        <input
          placeholder="*password"
          type="text"
          value={pass}
          onChange={(e) => {
            e.preventDefault();
            setPass(e.target.value);
          }}
        ></input>

        <button type="submit">Submit</button>
      </form>
      <a href="/register">Don't have an account? Register here!</a>
    </div>
  );
};

export default Form;
