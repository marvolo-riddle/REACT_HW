import React from "react";
import classNames from "classnames";

class Collapse extends React.Component {
  render() {
    const { text, expanded, handleClick } = this.props;

    const classes = classNames({
      collapse: true,
      show: expanded,
    });

    return (
      <div>
        <p>
          <a
            className="btn btn-primary"
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded={expanded}
            onClick={handleClick}
          >
            Link with href
          </a>
        </p>
        <div className={classes} id="collapseExample">
          <div className="card card-body">{text}</div>
        </div>
      </div>
    );
  }
}

export default Collapse;
