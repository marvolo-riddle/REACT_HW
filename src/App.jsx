import "./App.css";
import React from "react";
import Progress from "./components/Progress.jsx";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Progress value={69}></Progress>
      </div>
    );
  }
}

export default App;
