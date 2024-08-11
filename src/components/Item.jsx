function Item({ items, onItemClick }) {
  return items.map((item) => (
    <div key={item.id}>
      <div className="row">
        <div className="col-auto">
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => onItemClick(item.id)}
          >
            -
          </button>
        </div>
        <div className="col">{item.value}</div>
      </div>
      <hr />
    </div>
  ));
}

export default Item;
