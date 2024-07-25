import React from "react";
import Modal from "./components/Modal/Modal.jsx";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen = () => {
    this.setState({ isOpen: true });
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <div>
        <button
          type="button"
          className="modal-open-button btn btn-danger"
          onClick={this.handleOpen}
        >
          Open
        </button>
        <Modal isOpen={this.state.isOpen} onClick={this.handleClose}></Modal>
      </div>
    );
  }
}

export default App;
