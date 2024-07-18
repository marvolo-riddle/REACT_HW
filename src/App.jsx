import React from "react";
import Carousel from "./components/Carousel.jsx";

class App extends React.Component {
  render() {
    const images = [
      "./src/img/first.jpeg",
      "./src/img/second.jpeg",
      "./src/img/third.jpeg",
    ];

    return <Carousel images={images} />;
  }
}

export default App;
