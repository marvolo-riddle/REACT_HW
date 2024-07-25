import React from "react";
import Body from "./Body";
import Title from "./Title";
import Text from "./Text";

class Card extends React.Component {
  static Body = Body;
  static Title = Title;
  static Text = Text;

  render() {
    const props = {
      title: "Hello World",
      text: "Today is a beautiful day!",
    };

    return (
      <div className="card">
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
        </Card.Body>
      </div>
    );
  }
}

export default Card;
