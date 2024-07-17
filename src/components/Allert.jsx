import React from "react";

class Allert extends React.Component {
  render() {
    const { type, text } = this.props;
    return (
      <div className={`alert alert-${type}`} role="alert">
        {text}
      </div>
    );
  }
}

export default Allert;
