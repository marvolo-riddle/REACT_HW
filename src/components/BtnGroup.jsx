import React from "react";
import classNames from "classnames";

class BtnGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActiveLeft: false,
      isActiveRight: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (event) => {
    const { name } = event.target;

    if (name === "button-left") {
      this.setState((prevState) => ({
        isActiveLeft: !prevState.isActiveLeft,
        isActiveRight: false,
      }));
    } else if (name === "button-right") {
      this.setState((prevState) => ({
        isActiveRight: !prevState.isActiveRight,
        isActiveLeft: false,
      }));
    } else {
      this.setState({ isActiveLeft: false, isActiveRight: false });
    }
  };

  //left right куда-то присунуть

  getBtnClasses = (isActive) => {
    return classNames({
      btn: true,
      "btn-primary": isActive,
      "btn-secondary": !isActive,
    });
  };

  render() {
    const { isActiveLeft, isActiveRight } = this.state;

    return (
      <div className="btn-group" role="group">
        <button
          name="button-left"
          type="button"
          className={this.getBtnClasses(isActiveLeft)}
          onClick={this.handleClick}
        >
          Left
        </button>
        <button
          name="button-right"
          type="button"
          className={this.getBtnClasses(isActiveRight)}
          onClick={this.handleClick}
        >
          Right
        </button>
      </div>
    );
  }
}

export default BtnGroup;
