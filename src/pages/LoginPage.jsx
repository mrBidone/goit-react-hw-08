import { Form, ErrorMessage, Field, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import * as Yup from "yup";
import { apiLoginThunk } from "../redux/auth/operations";
import { useScroll } from "@react-spring/web";
import { selectAuthError } from "../redux/auth/selectors";

const LoginValuesValidationSchema = Yup.object().shape({
  password: Yup.string()
    .required("The name is required!")
    .min(8, "The password must been min. 8 symbols")
    .max(30, "The password must been max. 30 symbols"),
  email: Yup.string()
    .email("The email is not correct")
    .required("The email is required!"),
});

const LoginPage = () => {
  const dispatch = useDispatch();
  const isError = useSelector(selectAuthError);

  const INITITAL_VALUES = {
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    dispatch(apiLoginThunk(values));
  };

  return (
    <Formik
      initialValues={INITITAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={LoginValuesValidationSchema}
    >
      <Form>
        <label htmlFor="email">
          <span>Email: </span>
          <Field type="text" name="email" placeholder="Enter your email" />
          <ErrorMessage name="email" component="span" />
        </label>
        <label htmlFor="password">
          <span>Password: </span>
          <Field
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <ErrorMessage name="password" component="span" />
        </label>
        <button type="submit">Login</button>
        {isError && <p>Oooops, some error occured... {isError}</p>}
      </Form>
    </Formik>
  );
};

export default LoginPage;
