import { FormControl, Input, TextField, FormHelperText } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { StyledContainer, StyledStack, StyledButton } from "./style/style.jsx";
import React from "react";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Must be 2 characters or more")
    .required("Title is required!"),

  number: Yup.string()
    .matches(/^[0-9]+$/, "Must be a number")
    .min(2, "Must be 2 characters or more")
    .required("Number is required"),
});

const Form = React.forwardRef(
  ({ onSubmit, initialValues = { name: "", number: "" } }, ref) => {
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
          <form ref={ref} onSubmit={formik.handleSubmit}>
            <StyledStack>
              <FormControl
                error={Boolean(formik.touched.name && formik.errors.name)}
              >
                <Input
                  placeholder="Имя"
                  name="name"
                  type="text"
                  id="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  sx={{ border: "1px solid #ccc", padding: 1 }}
                />
                {formik.touched.name && formik.errors.name && (
                  <FormHelperText>{formik.errors.name}</FormHelperText>
                )}
              </FormControl>

              <FormControl
                error={Boolean(formik.touched.number && formik.errors.number)}
              >
                <TextField
                  placeholder="Номер"
                  type="number"
                  name="number"
                  multiline
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.number}
                  sx={{ border: "1px solid #ccc" }}
                />
                {formik.touched.number && formik.errors.number && (
                  <FormHelperText>{formik.errors.number}</FormHelperText>
                )}
              </FormControl>
              <StyledButton type="submit" variant="contained" color="primary">
                Добавить контакт
              </StyledButton>
            </StyledStack>
          </form>
        </StyledContainer>
      </div>
    );
  },
);

export default Form;
