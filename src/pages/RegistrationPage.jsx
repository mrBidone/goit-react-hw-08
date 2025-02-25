import { Form, ErrorMessage, Field, Formik } from "formik";
import { useDispatch } from "react-redux";

import * as Yup from "yup";
import { apiRegisterThunk } from "../redux/auth/operations";
import SpotlightCard from "../components/SpotlightCard/SpotlightCard";
import { FaRegUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";
import toast from "react-hot-toast";

const RegistrationValuesValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("The name is required!")
    .min(2, "The User`s name - min. 2 symbols")
    .max(50, "The User`s name - max. 50 symbols"),
  password: Yup.string()
    .required("The password is required!")
    .min(8, "The password - min. 8 symbols")
    .max(30, "The password - max. 30 symbols"),
  email: Yup.string()
    .email("The email is not correct")
    .required("The email is required!"),
});

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const INITITAL_VALUES = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    dispatch(apiRegisterThunk(values))
      .unwrap()
      .then(() => toast.success("Registration was successful!"));
  };

  return (
    <div className="authPageWrapper">
      <SpotlightCard spotlightColor="rgba(14, 171, 32, 0.41)">
        <Formik
          initialValues={INITITAL_VALUES}
          onSubmit={handleSubmit}
          validationSchema={RegistrationValuesValidationSchema}
        >
          <Form className="authContainer">
            <h1 className="loginMainTitle">Registration</h1>
            <label htmlFor="name">
              <div className="formWrapper">
                <span className="formSpan">
                  <FaRegUserCircle />
                </span>
                <Field
                  className="authForm"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                />
                <ErrorMessage
                  className="formErrorMessage"
                  name="name"
                  component="span"
                />
              </div>
            </label>
            <label htmlFor="email">
              <div className="formWrapper">
                <span className="formSpan">
                  <MdAlternateEmail />
                </span>
                <Field
                  className="authForm"
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                />
                <ErrorMessage
                  className="formErrorMessage"
                  name="email"
                  component="span"
                />
              </div>
            </label>
            <label htmlFor="password">
              <div className="formWrapper">
                <span className="formSpan">
                  <RiLockPasswordFill />
                </span>
                <Field
                  className="authForm"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  id="password"
                />
                <ErrorMessage
                  className="formErrorMessage"
                  name="password"
                  component="span"
                />
              </div>
            </label>
            <button className="authBtn" type="submit">
              Sign Up
            </button>
          </Form>
        </Formik>
      </SpotlightCard>
    </div>
  );
};

export default RegistrationPage;
