import { FaUser, FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";
import { useDispatch, useSelector } from "react-redux";
import { currentContact } from "../../redux/contacts/slice";
import { selectCurrentContact } from "../../redux/contacts/selectors";
import EditForm from "../EditForm/EditForm";
import { RiEdit2Fill } from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md";
import AlertDialog from "../DeleteConfirm/DeleteConfirm";
import { useState } from "react";

const Contact = ({ name, number, onDeleteContact, id }) => {
  const dispatch = useDispatch();
  const isCurrentContact = useSelector(selectCurrentContact);
  const isCurrent = isCurrentContact?.id === id;
  const [open, setOpen] = useState(false);

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
            onClick={() => setOpen(true)}
          >
            <MdDeleteForever />
          </button>
        </div>
      )}
      <AlertDialog
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={() => onDeleteContact(id)} // Удаляем контакт
      />
    </>
  );
};

export default Contact;
