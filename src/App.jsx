import React from "react";
import "./App.css";
import Allert from "./components/Allert.jsx";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Allert type="danger" text="What is power?"></Allert>
      </div>
    );
  }
}

export default App;
