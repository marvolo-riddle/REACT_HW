function Buttons({ increment, decrement }) {
  return (
    <div className="btn-group font-monospace" role="group">
      <button
        type="button"
        className="btn btn-outline-success"
        onClick={increment}
      >
        +
      </button>
      <button
        type="button"
        className="btn btn-outline-danger"
        onClick={decrement}
      >
        -
      </button>
    </div>
  );
}

export default Buttons;
