import { Modal } from "@mui/material";
import Form from "../Form/Form";
import { useData } from "../../context/DataContext.jsx";

const EditModal = ({ open, onClose, contact, id }) => {
  const { editItem } = useData();

  const handleChange = (values) => {
    editItem(id, values);
    onClose();
  };

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
        <Form onSubmit={handleChange} initialValues={contact} />
      </div>
    </Modal>
  );
};

export default EditModal;
