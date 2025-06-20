import React, { useState } from "react";
import "./App.css";
import ToDoItem from "./ToDoItem";
import ToDoButton from "./ToDoButton";

function App() {
  const [items, setItems] = useState<string[]>([]);

  function handleClick() {
    console.log("button pressed!");
    const newItem = `Task ${items.length + 1}`;
    setItems([...items, newItem]);
  }

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Julia's To-Do List</h1>
        </header>
        <div>
          <p>In the body</p>
          <ToDoButton buttonText={"Add Item"} buttonClick={handleClick} />
          {items.map((item, index) => (
            <ToDoItem key={index} text={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
