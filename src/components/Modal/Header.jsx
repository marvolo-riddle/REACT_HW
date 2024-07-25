function Header({ onClick }) {
  return (
    <div className="modal-header">
      <div className="modal-title">Modal title</div>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
        onClick={onClick}
      ></button>
    </div>
  );
}

export default Header;
