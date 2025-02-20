import React from "react";
import { comments } from "./commentData";
import Card from "./Card";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // const cards = comments.map((comment) => <Card commentObject={comment}/>);
  return (
    <div>
      {comments.map((comment) => (
        <Card commentObject={comment} />
      ))}
    </div>
  );
}

export default App;
