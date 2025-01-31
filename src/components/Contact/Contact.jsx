import { FaUser, FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";
import { useDispatch, useSelector } from "react-redux";
import { currentContact, moveContactToTrash } from "../../redux/contacts/slice";
import {
  selectCurrentContact,
  selectIsMovedInTrash,
} from "../../redux/contacts/selectors";
import EditForm from "../EditForm/EditForm";

const Contact = ({ name, number, onDeleteContact, id, onRestoreContact }) => {
  const dispatch = useDispatch();
  const isCurrentContact = useSelector(selectCurrentContact);
  const isCurrent = isCurrentContact?.id === id;
  const isMovedinTrash = useSelector((state) =>
    selectIsMovedInTrash(state, id)
  ); /// =============?

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

      {!isMovedinTrash ? (
        <>
          {" "}
          <button
            type="button"
            onClick={() => {
              onEditContact({ id, name, number });
            }}
          >
            Edit
          </button>
          <button
            type="button"
            onClick={() => {
              dispatch(moveContactToTrash(id));
            }}
          >
            toTrash
          </button>
        </>
      ) : (
        <>
          <button type="button" onClick={() => onRestoreContact(id)}>
            Restore
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
