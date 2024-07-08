import React from "react";
import "./App.css";
import Card from "./components/Card.jsx";

class App extends React.Component {
  render() {
    return (
      <div>
        <Card title="hello!" />
        <Card text="how are you?" />
        <Card title="hello" text="how are you?" />
      </div>
    );
  }
}

export default App;
