import React from "react";
import "./App.css";
import Definitions from "./components/Definitions.jsx";

class App extends React.Component {
  render() {
    const definitions = [
      { dt: "one", dd: "two", id: 1 },
      { dt: "another term", dd: "another description", id: 2 },
    ];
    return <Definitions definitions={definitions} />;
  }
}

export default App;
