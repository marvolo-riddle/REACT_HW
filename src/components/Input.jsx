function Input({ handleChange, handleSubmit, inputValue }) {
  return (
    <div>
      <div className="mb-3">
        <form className="d-flex">
          <div className="me-3">
            <input
              type="text"
              required
              className="form-control"
              placeholder="I am going..."
              value={inputValue}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default Input;
