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
        <Form
        //   className={css.form}
        >
          <Field
            //   className={css.field}
            type="text"
            name="editContactName"
            id={editNameFieldId}
          />
          <ErrorMessage
            //   className={css.errorMessage}
            name="editContactName"
            component="span"
          />
          <Field
            //   className={css.field}
            type="text"
            name="editContactNumber"
            id={editNumberFieldId}
          />
          <ErrorMessage
            //   className={css.errorMessage}
            name="editContactNumber"
            component="span"
          />
          <button type="submit">✅</button>
          <button
            onClick={() => dispatch(disableCurrentContact())}
            type="button"
          >
            ❌
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default EditForm;
