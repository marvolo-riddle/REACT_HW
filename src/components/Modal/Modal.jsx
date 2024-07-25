import React from "react";
import classNames from "classnames";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

class Modal extends React.Component {
  static Header = Header;
  static Body = Body;
  static Footer = Footer;

  render() {
    const { onClick, isOpen } = this.props;

    const classes = classNames({
      modal: true,
      "fade show": isOpen,
    });

    const styles = {
      display: isOpen ? "block" : "none",
    };

    return (
      <div className={classes} style={styles} role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <Modal.Header onClick={onClick} />
            <Modal.Body />
            <Modal.Footer onClick={onClick} />
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
