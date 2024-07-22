import React from "react";
import "./App.css";
import Collapse from "./components/Collapse";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      expanded: !prevState.expanded,
    }));
  }

  render() {
    const text = "Collapse me";
    return (
      <Collapse
        text={text}
        expanded={this.state.expanded}
        handleClick={this.handleClick}
      ></Collapse>
    );
  }
}

export default App;
