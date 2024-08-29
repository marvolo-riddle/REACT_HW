import { useFormik } from "formik";
import * as Yup from "yup";
import { useParams, useNavigate } from "react-router-dom";
import storageWorker from "../../utils/StorageWorker";
import { FormControl, Input, TextField, Button } from "@mui/material";

const validationSchema = Yup.object({
  title: Yup.string()
    .min(2, "Must be 2 characters or more")
    .required("Title is required!"),
  description: Yup.string()
    .min(2, "Must be 2 characters or more")
    .required("Description is required"),
});

const EditForm = ({ setTodos }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentTask = storageWorker.showItem(Number(id));

  const formik = useFormik({
    initialValues: {
      title: currentTask.title,
      description: currentTask.description,
    },
    validationSchema,
    onSubmit: (values) => {
      storageWorker.changeItem(Number(id), { ...currentTask, ...values });
      setTodos(storageWorker.getData());
      navigate("/");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl>
        <Input
          placeholder="Задача"
          name="title"
          type="text"
          id="todo-title"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
          sx={{ border: "1px solid #ccc", padding: 1 }}
        />
      </FormControl>

      <FormControl>
        <TextField
          placeholder="Описание"
          name="description"
          multiline
          rows={4}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
          sx={{ border: "1px solid #ccc" }}
        />
      </FormControl>

      <Button type="submit" variant="contained" color="primary">
        Сохранить изменения
      </Button>
    </form>
  );
};

export default EditForm;
