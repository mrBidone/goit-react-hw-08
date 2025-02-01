import { FaUser, FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";
import { useDispatch, useSelector } from "react-redux";
import { currentContact } from "../../redux/contacts/slice";
import { selectCurrentContact } from "../../redux/contacts/selectors";
import EditForm from "../EditForm/EditForm";

const Contact = ({ name, number, onDeleteContact, id }) => {
  const dispatch = useDispatch();
  const isCurrentContact = useSelector(selectCurrentContact);
  const isCurrent = isCurrentContact?.id === id;

  const onEditContact = (contact) => {
    dispatch(currentContact(contact));
  };

  return (
    <>
      <div className={css.contactValueWrapper}>
        {isCurrent ? (
          <EditForm />
        ) : (
          <>
            <p>
              <FaUser className={css.userIcon} />
              {name}
            </p>
            <p>
              <FaPhoneAlt className={css.telIcon} />
              {number}
            </p>
          </>
        )}
      </div>
      {!isCurrent && (
        <>
          <button
            type="button"
            onClick={() => {
              onEditContact({ id, name, number });
            }}
          >
            Edit
          </button>
          <button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </>
      )}
    </>
  );
};

export default Contact;
