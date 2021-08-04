import React from "react";

const dummyPosts = [
  { title: "First Post", kind: "Car", body: "Nice car, well maintained!" },
  { title: "Second Post", kind: "Motorcycle", body: "It runs like new!" },
  { title: "Third Post", kind: "Truck", body: "Room for everything!" },
  { title: "Fourth Post", kind: "Car", body: "Minor damage but reliable!" },
  { title: "Fifth Post", kind: "SUV", body: "Gas saver!" },
  { title: "Sixth Post", kind: "Electric Car", body: "Go green!" },
  { title: "Seventh Post", kind: "Food Truck", body: "Best tacos ever!" },
];

const NewPosts = (props) => {
  console.log(props.match.params);
  return (
    <div>
      {dummyPosts.map((singlePost) => (
        <div
          style={{
            padding: "3px",
            backgroundColor: "lightgray",
            margin: "15px",
          }}
        >
          <h2>{singlePost.title}</h2>
          <h3>{singlePost.kind}</h3>
          <p>{singlePost.body}</p>
        </div>
      ))}
    </div>
  );
};

export default NewPosts;
