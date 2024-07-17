import React from "react";

class Progress extends React.Component {
  render() {
    const { value, min = 0, max = 100 } = this.props;

    return (
      <div>
        <h1>Progress: {value}%</h1>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow={value}
            aria-valuemin={min}
            aria-valuemax={max}
            aria-label="progressbar"
            style={{ width: `${value}%` }}
          ></div>
        </div>
      </div>
    );
  }
}

export default Progress;
