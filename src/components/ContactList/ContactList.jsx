import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { deleteContact } from "../../redux/contacts/operations";
import { selectFilteredContacts } from "../../redux/filters/selectors";

const ContactList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.ContactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <li className={css.ContactListItem} key={id}>
          <Contact
            id={id}
            name={name}
            number={number}
            onDeleteContact={(contactId) => {
              dispatch(deleteContact(contactId));
            }}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
