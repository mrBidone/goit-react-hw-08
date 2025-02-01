import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";

import Contact from "../Contact/Contact";

import { deleteContactThunk } from "../../redux/contacts/operations";
import { selectFilteredContacts } from "../../redux/filters/selectors";

// import { TiArrowUnsorted } from "react-icons/ti";
import css from "./ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  // const [isSortedByName, setIsSortedByName] = useState(false);
  // const [isSortedByAdd, setIsSortedByAdd] = useState(false);
  const filteredContacts = useSelector(selectFilteredContacts);

  // const sortedContacts = [...filteredContacts].sort((a, b) => {
  //   if (isSortedByName) {
  //     return a.name.localeCompare(b.name);
  //   }
  //   return 0;
  // });

  // if (isSortedByAdd) {
  //   sortedContacts.reverse();
  // }

  return (
    <>
      {/* <button onClick={() => setIsSortedByName((prev) => !prev)}>
        Sorted by Name <TiArrowUnsorted />
      </button>
      <button onClick={() => setIsSortedByAdd((prev) => !prev)}>
        Sorted by Add <TiArrowUnsorted />
      </button> */}
      <ul className={css.ContactList}>
        {filteredContacts.map(({ id, name, number }) => (
          <li className={css.ContactListItem} key={id}>
            <Contact
              id={id}
              name={name}
              number={number}
              onDeleteContact={(contactId) => {
                dispatch(deleteContactThunk(contactId));
              }}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
