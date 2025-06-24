import React, { useState, useRef } from "react";
import "./App.css";
import ItemInput from "./ItemInput";
import AddItemButton from "./ItemButton";

// TODO: hover over an item to see it strikethrough and click to delete
// TODO: disable Add Item button if text input is empty
// TODO: Styling

function App() {
  // want to use useState below to update a paragraph component that hosts all the to-do items
  const [listText, setListText] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  function newHandleClick() {
    // Add input text to list text
    const newToDoItem = inputRef.current?.value;
    if (newToDoItem) {
      setListText([...listText, newToDoItem]);
      // clear input
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  }

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Julia's To-Do List</h1>
        </header>
        <div>
          <div className="Input-Bar">
            <ItemInput ref={inputRef} />
            <AddItemButton buttonText="Add Item" buttonClick={newHandleClick} />
          </div>
          {listText.map((listItem, index) => (
            <div key={"listItem" + index}>{listItem}</div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
