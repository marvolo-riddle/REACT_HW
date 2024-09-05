import { FormControl, Input, TextField, FormHelperText } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { StyledContainer, StyledStack, StyledButton } from "./style/style.jsx";

const validationSchema = Yup.object({
  userId: Yup.number()
    .min(1, "Id должен быть заполнен")
    .required("ID пользователя обязателен"),
  title: Yup.string()
    .min(2, "Должно быть минимум 2 символа")
    .required("Вы не можете пропустить эту строку"),
  body: Yup.string()
    .min(2, "Должно быть минимум 2 символа")
    .required("Вы не можете пропустить эту строку"),
});

const TodoForm = ({
  onSubmit,
  initialValues = { userId: "", title: "", body: "" },
}) => {
  const formik = useFormik({
    initialValues,
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
            <FormControl
              error={formik.touched.userId && Boolean(formik.errors.userId)}
            >
              <Input
                placeholder="ID пользователя"
                name="userId"
                type="text"
                id="todo-userId"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.userId}
                sx={{ border: "1px solid #ccc", padding: 1 }}
              />
              {formik.touched.userId && formik.errors.userId ? (
                <FormHelperText>{formik.errors.userId}</FormHelperText>
              ) : null}
            </FormControl>

            <FormControl
              error={formik.touched.title && Boolean(formik.errors.title)}
            >
              <Input
                placeholder="Заголовок"
                name="title"
                type="text"
                id="todo-title"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.title}
                sx={{ border: "1px solid #ccc", padding: 1 }}
              />
              {formik.touched.title && formik.errors.title ? (
                <FormHelperText>{formik.errors.title}</FormHelperText>
              ) : null}
            </FormControl>

            <FormControl
              error={formik.touched.body && Boolean(formik.errors.body)}
            >
              <TextField
                placeholder="Описание"
                name="body"
                multiline
                rows={4}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.body}
                sx={{ border: "1px solid #ccc" }}
              />
              {formik.touched.body && formik.errors.body ? (
                <FormHelperText>{formik.errors.body}</FormHelperText>
              ) : null}
            </FormControl>

            <StyledButton type="submit" variant="contained" color="primary">
              Добавить пост
            </StyledButton>
          </StyledStack>
        </form>
      </StyledContainer>
    </div>
  );
};

export default TodoForm;
