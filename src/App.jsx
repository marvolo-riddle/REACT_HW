import "./App.css";
import React from "react";
import Buttons from "./components/Buttons";
import Log from "./components/Log";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
    };
    this.incrementLog = this.incrementLog.bind(this);
    this.decrementLog = this.decrementLog.bind(this);
  }

  incrementLog() {
    this.setState((prevState) => {
      const lastValue =
        prevState.entries.length > 0
          ? prevState.entries[prevState.entries.length - 1]
          : 0;
      const newValue = lastValue + 1;
      return { entries: [...prevState.entries, newValue] };
    });
  }

  decrementLog() {
    this.setState((prevState) => {
      const lastValue =
        prevState.entries.length > 0
          ? prevState.entries[prevState.entries.length - 1]
          : 0;
      const newValue = lastValue === 0 ? 0 : lastValue - 1;
      return { entries: [...prevState.entries, newValue] };
    });
  }

  render() {
    return (
      <div className="app">
        <Buttons
          decrement={this.decrementLog}
          increment={this.incrementLog}
        ></Buttons>
        <Log entries={this.state.entries}></Log>
      </div>
    );
  }
}

export default App;
