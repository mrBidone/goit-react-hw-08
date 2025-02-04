import { selectCurrentContact } from "../../redux/contacts/selectors";
import { useDispatch, useSelector } from "react-redux";
import {
  editContactThunk,
  fetchContactsThunk,
} from "../../redux/contacts/operations";
import { disableCurrentContact } from "../../redux/contacts/slice";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import css from "./EditForm.module.css";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import clsx from "clsx";

const EditForm = () => {
  const dispatch = useDispatch();
  const currentContact = useSelector(selectCurrentContact);

  const INITIAL_VALUES = {
    editContactName: currentContact.name,
    editContactNumber: currentContact.number,
  };

  const phoneRegExp = /^[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/;

  const ContactValidationSchema = Yup.object().shape({
    editContactName: Yup.string()
      .required("Required!")
      .min(3, "Too short!")
      .max(50, "Too long!"),

    editContactNumber: Yup.string()
      .required("Required!")
      .min(7, "Too Short!")
      .matches(
        phoneRegExp,
        "The phone number must match the format 'xxx-xxx-xx-xx'"
      ),
  });

  const editNameFieldId = useId();
  const editNumberFieldId = useId();

  const handleSubmit = (values) => {
    const updatedContact = {
      name: values.editContactName,
      number: values.editContactNumber,
    };

    dispatch(
      editContactThunk({
        contactId: currentContact.id,
        updatedData: updatedContact,
      })
    ).then(() => {
      dispatch(fetchContactsThunk());
      dispatch(disableCurrentContact());
    });
  };

  return (
    <>
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={handleSubmit}
        enableReinitialize={true}
        validationSchema={ContactValidationSchema}
      >
        {({ dirty }) => (
          <Form className={css.form}>
            <div className={css.editFormWrapper}>
              <label htmlFor={editNameFieldId}>
                <span className={css.formIcon}>
                  <FaUser />
                </span>
                <Field
                  className={css.field}
                  type="text"
                  name="editContactName"
                  id={editNameFieldId}
                />
                <ErrorMessage
                  className={css.errorMessage}
                  name="editContactName"
                  component="span"
                />
              </label>
              <label htmlFor={editNumberFieldId}>
                <span className={css.formIcon}>
                  <FaPhoneAlt />
                </span>
                <Field
                  className={css.field}
                  type="text"
                  name="editContactNumber"
                  id={editNumberFieldId}
                />
                <ErrorMessage
                  className={css.errorMessage}
                  name="editContactNumber"
                  component="span"
                />
              </label>
            </div>
            <div className={css.btnWrapper}>
              <button
                className={clsx(css.editBtn, css.submitBtn)}
                type="submit"
                disabled={!dirty}
              >
                <FaCheck />
              </button>
              <button
                className={clsx(css.editBtn, css.crossBtn)}
                onClick={() => dispatch(disableCurrentContact())}
                type="button"
              >
                <ImCross />
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default EditForm;
