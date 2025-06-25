import React, { useState } from "react";
import "./App.css";

// TODO: Styling

type ToDoItem = { id: number; text: string };

function App() {
  const [listText, setListText] = useState<ToDoItem[]>([]);
  const [inputValue, setInputValue] = useState("");

  const isAddItemButtonDisabled = inputValue.length === 0;

  const handleAdd = () => {
    if (inputValue.trim()) {
      setListText([...listText, { id: Date.now(), text: inputValue.trim() }]);
      setInputValue("");
    }
  };

  const handleRemove = (id: number) => {
    setListText(listText.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Julia's To-Do List</h1>
      </header>
      <div className="Input-Bar">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        />
        <button onClick={handleAdd} disabled={isAddItemButtonDisabled}>
          Add Item
        </button>
      </div>
      <ul>
        {listText.map((item) => (
          <li
            key={item.id}
            className="strikethrough-hover cursor-pointer"
            onClick={() => handleRemove(item.id)}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
