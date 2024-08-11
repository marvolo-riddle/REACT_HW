import React, { useState } from "react";
import "./App.css";
import uniqueId from "lodash/uniqueId";
import Input from "./components/Input.jsx";
import Item from "./components/Item.jsx";

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setInputValue(value); // Устанавливаем значение поля ввода как новое состояние
  };
  // const handleChange = (event) => {
  //   const { value } = event.target;
  //   setInputValue((prevValue) => prevValue + value);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim() === "") {
      return;
    }
    const item = {
      id: uniqueId("item_"),
      value: inputValue,
    };

    setItems((prevItems) => [...prevItems, item]);
    setInputValue("");
  };

  const onItemClick = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    setInputValue("");
  };

  return (
    <div className="App">
      <Input
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        inputValue={inputValue}
      ></Input>
      <div className="items">
        {items.length > 0 ? (
          <Item items={items} onItemClick={onItemClick}></Item>
        ) : null}
      </div>
    </div>
  );
}

export default App;
