function Footer({ onClick }) {
  return (
    <div className="modal-footer">
      <button
        type="button"
        className="modal-close-button btn btn-default"
        onClick={onClick}
      >
        Cancel
      </button>
    </div>
  );
}

export default Footer;
