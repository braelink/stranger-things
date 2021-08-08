import React, { useState } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [kind, setKind] = useState("");
  const [body, setBody] = useState("");

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "20px",
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const sendPost = {
      title,
      kind,
      body,
    };

    console.log(sendPost);
  };

  const updateTitle = (e) => {
    setTitle(e.target.value);
  };

  const updateKind = (e) => {
    setKind(e.target.value);
  };

  const updateBody = (e) => {
    setBody(e.target.value);
  };

  return (
    <div>
      <h2>Create a new post</h2>
      <form style={formStyle} onSubmit={onFormSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={updateTitle} />
        </label>
        <label>
          Kind:
          <input type="text" value={kind} onChange={updateKind} />
        </label>
        <label>
          Body:
          <input type="text" value={body} onChange={updateBody} />
        </label>
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
