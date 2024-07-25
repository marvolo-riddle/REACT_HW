function Log({ entries }) {
  return (
    <div className="list-group">
      {entries.map((item) => {
        const key = Math.random();
        return item === null ? null : (
          <button
            key={key}
            type="button"
            className="list-group-item list-group-item-action"
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

export default Log;
