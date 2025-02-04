import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import "react-international-phone/style.css";

import { useDispatch } from "react-redux";
import { addContactThunk } from "../../redux/contacts/operations";
import toast from "react-hot-toast";
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";

const ContactForm = () => {
  const dispatch = useDispatch();

  const onAddContact = (contact) => {
    dispatch(addContactThunk(contact))
      .unwrap()
      .then(() => {
        toast.success("Contact added successfully");
      });
  };

  const INITIAL_VALUES = {
    contactName: "",
    contactNumber: "",
  };

  const phoneRegExp = /^[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/;

  const ContactValidationSchema = Yup.object().shape({
    contactName: Yup.string()
      .required("Required!")
      .min(3, "Too short!")
      .max(50, "Too long!"),

    contactNumber: Yup.string()
      .required("Required!")
      .min(7, "Too Short!")
      .matches(phoneRegExp, "Correct format: 'xxx-xxx-xx-xx'"),
  });

  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    const contactObject = {
      name: values.contactName,
      number: values.contactNumber,
    };
    onAddContact(contactObject);
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={handleSubmit}
        validationSchema={ContactValidationSchema}
      >
        {({ isValid, dirty }) => (
          <Form className={css.form}>
            <label htmlFor={nameFieldId}>
              <div className="formWrapper">
                <span className={css.formSpan}>
                  <FaRegUserCircle />
                </span>
                <Field
                  className={css.contacthForm}
                  type="text"
                  name="contactName"
                  id={nameFieldId}
                  placeholder="John Smith"
                />
                <ErrorMessage
                  className={css.formErrorMessage}
                  name="contactName"
                  component="span"
                />
              </div>
            </label>
            <label className={css.label} htmlFor={numberFieldId}>
              <div className="formWrapper">
                <span className={css.formSpan}>
                  <HiOutlineDevicePhoneMobile />
                </span>
                <Field
                  className={css.contacthForm}
                  type="text"
                  name="contactNumber"
                  id={numberFieldId}
                  placeholder="111-222-33-44"
                />

                <ErrorMessage
                  className={css.formErrorMessage}
                  name="contactNumber"
                  component="span"
                />
              </div>
            </label>
            <button
              className={css.submitBtn}
              type="submit"
              disabled={!(isValid && dirty)}
            >
              Add contact
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ContactForm;
