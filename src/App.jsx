import React from "react";
import "./App.css";
import uniqueId from "lodash/uniqueId";
import Input from "./components/Input.jsx";
import Items from "./components/Items.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      inputValue: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onItemClick = this.onItemClick.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({ ...this.state, inputValue: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { inputValue } = this.state;

    if (inputValue.trim() === "") {
      return;
    }
    const item = {
      id: uniqueId("item_"),
      value: inputValue,
    };
    this.setState((prevState) => ({
      items: [...prevState.items, item],
      inputValue: "",
    }));
  }

  onItemClick(id) {
    const { items } = this.state;
    const newItems = items.filter((item) => item.id !== id);
    this.setState({ items: newItems, inputValue: "" });
  }

  render() {
    const { items } = this.state;
    return (
      <div className="App">
        <Input
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          inputValue={this.state.inputValue}
        ></Input>
        <div className="items">
          {items.length > 0 ? (
            <Items
              items={this.state.items}
              onItemClick={this.onItemClick}
            ></Items>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
