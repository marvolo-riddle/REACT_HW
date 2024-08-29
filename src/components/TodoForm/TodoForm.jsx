import { FormControl, Input, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { StyledContainer, StyledStack, StyledButton } from "./style/index.jsx";

const validationSchema = Yup.object({
  title: Yup.string()
    .min(2, "Must be 2 characters or more")
    .required("Title is required!"),

  description: Yup.string()
    .min(2, "Must be 2 characters or more")
    .required("Description is required"),
});

const TodoForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },

    validationSchema,

    onSubmit: (values, { resetForm }) => {
      onSubmit(values);
      resetForm();
    },
  });

  return (
    <div>
      <StyledContainer maxWidth={false}>
        <form onSubmit={formik.handleSubmit}>
          <StyledStack>
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
            <StyledButton type="submit" variant="contained" color="primary">
              Добавить задачу
            </StyledButton>
          </StyledStack>
        </form>
      </StyledContainer>
    </div>
  );
};

export default TodoForm;
