import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const ContactForm = () => {
  const dispatch = useDispatch();

  const onAddContact = (contact) => {
    dispatch(addContact(contact));
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
      .matches(
        phoneRegExp,
        "The phone number must match the format 'xxx-xxx-xx-xx'"
      ),
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
        <Form className={css.form}>
          <label className={css.label} htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            className={css.field}
            type="text"
            name="contactName"
            id={nameFieldId}
          />
          <ErrorMessage
            className={css.errorMessage}
            name="contactName"
            component="span"
          />

          <label className={css.label} htmlFor={numberFieldId}>
            Number
          </label>
          <Field
            className={css.field}
            type="text"
            name="contactNumber"
            id={numberFieldId}
          />
          <ErrorMessage
            className={css.errorMessage}
            name="contactNumber"
            component="span"
          />

          <button className={css.submitBtn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
