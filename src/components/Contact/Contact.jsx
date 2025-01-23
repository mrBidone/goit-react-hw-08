import { FaUser, FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";

const Contact = ({ name, number, onDeleteContact, id }) => {
  return (
    <>
      <div className={css.contactValueWrapper}>
        <p>
          <FaUser className={css.userIcon} />
          {name}
        </p>
        <p>
          <FaPhoneAlt className={css.telIcon} />
          {number}
        </p>
      </div>
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </>
  );
};

export default Contact;
