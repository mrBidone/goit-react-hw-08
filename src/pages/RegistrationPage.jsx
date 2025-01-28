import { Form, ErrorMessage, Field, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import * as Yup from "yup";
import { apiRegisterThunk } from "../redux/auth/operations";
import { selectAuthError } from "../redux/auth/selectors";
import SpotlightCard from "../components/SpotlightCard/SpotlightCard";

const RegistrationValuesValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("The name is required!")
    .min(2, "The User`s name must been min. 2 symbols")
    .max(50, "The User`s name must been max. 50 symbols"),
  password: Yup.string()
    .required("The name is required!")
    .min(8, "The password must been min. 8 symbols")
    .max(30, "The password must been max. 30 symbols"),
  email: Yup.string()
    .email("The email is not correct")
    .required("The email is required!"),
});

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const isError = useSelector(selectAuthError);

  const INITITAL_VALUES = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    dispatch(apiRegisterThunk(values));
  };

  return (
    <SpotlightCard spotlightColor="rgba(14, 171, 32, 0.25)">
      <Formik
        initialValues={INITITAL_VALUES}
        onSubmit={handleSubmit}
        validationSchema={RegistrationValuesValidationSchema}
      >
        <Form>
          <label htmlFor="name">
            <span>User`s name:</span>
            <Field type="text" name="name" placeholder="Enter your name" />
            <ErrorMessage name="name" component="span" />
          </label>
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
          <button type="submit">Sign Up</button>
          {isError && <p>Oooops, some error occured... {isError}</p>}
        </Form>
      </Formik>
    </SpotlightCard>
  );
};

export default RegistrationPage;
