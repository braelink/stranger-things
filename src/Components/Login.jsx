import React, { useState } from "react";

const Form = () => {
  const [user, setUser] = useState("* Username");
  const [pass, setPass] = useState("* Password");

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: 20,
  };

  return (
    <div>
      <h1>Please sign in!</h1>
      <form
        style={formStyle}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          value={user}
          onChange={(e) => {
            e.preventDefault();
            setUser(e.target.value);
          }}
        ></input>
        <input
          type="text"
          value={pass}
          onChange={(e) => {
            e.preventDefault();
            setPass(e.target.value);
          }}
        ></input>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
