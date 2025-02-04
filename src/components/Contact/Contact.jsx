import { FaUser, FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";
import { useDispatch, useSelector } from "react-redux";
import { currentContact } from "../../redux/contacts/slice";
import { selectCurrentContact } from "../../redux/contacts/selectors";
import EditForm from "../EditForm/EditForm";
import { RiEdit2Fill } from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md";
import toast from "react-hot-toast";

const Contact = ({ id, name, number, handleDeleteContact }) => {
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
        <div className={css.btnWrapper}>
          <button
            className={css.contactBtn}
            type="button"
            onClick={() => {
              onEditContact({ id, name, number });
            }}
          >
            <RiEdit2Fill />
          </button>
          <button
            className={css.contactBtn}
            type="button"
            onClick={() => handleDeleteContact(id, name)}
          >
            <MdDeleteForever />
          </button>
        </div>
      )}
    </>
  );
};

export default Contact;
