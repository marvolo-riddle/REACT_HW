import { Modal } from "@mui/material";
import Form from "./Form.jsx";

const EditModal = ({ open, onClose, post, handleChange }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="edit-modal-title"
      aria-describedby="edit-modal-description"
    >
      <div
        role="dialog"
        aria-labelledby="edit-modal-title"
        aria-describedby="edit-modal-description"
      >
        <Form onSubmit={handleChange} initialValues={post} />
      </div>
    </Modal>
  );
};

export default EditModal;
