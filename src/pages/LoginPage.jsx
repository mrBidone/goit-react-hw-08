import { Form, ErrorMessage, Field, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { apiLoginThunk } from "../redux/auth/operations";
import { selectAuthError } from "../redux/auth/selectors";
import SpotlightCard from "../components/SpotlightCard/SpotlightCard";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router";

const LoginValuesValidationSchema = Yup.object().shape({
  password: Yup.string()
    .required("The password is required!")
    .min(8, "The password - min. 8 symbols")
    .max(30, "The password - max. 30 symbols"),
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
    <div className="authPageWrapper">
      <SpotlightCard spotlightColor="rgba(231, 15, 177, 0.58)">
        <Formik
          initialValues={INITITAL_VALUES}
          onSubmit={handleSubmit}
          validationSchema={LoginValuesValidationSchema}
        >
          <Form className="authContainer">
            <h1 className="loginMainTitle">Login</h1>
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
                  id="password"
                  placeholder="Enter your password"
                />
                <ErrorMessage
                  className="formErrorMessage"
                  name="password"
                  component="span"
                />
              </div>
            </label>
            <button className="authBtn" type="submit">
              Login
            </button>
            <p className="loginQuestion">
              Don`t have an account?{" "}
              <Link className="loginAuthRegisterLink" to="/register">
                Register
              </Link>
            </p>
            {isError && <p>Oooops, some error occured... {isError}</p>}
          </Form>
        </Formik>
      </SpotlightCard>
    </div>
  );
};

export default LoginPage;
