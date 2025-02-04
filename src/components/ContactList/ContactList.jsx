import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";

import Contact from "../Contact/Contact";

import { deleteContactThunk } from "../../redux/contacts/operations";
import { selectFilteredContacts } from "../../redux/filters/selectors";
import css from "./ContactList.module.css";
import AlertDialog from "../DeleteConfirm/DeleteConfirm";

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
      <ul className={css.ContactList}>
        {filteredContacts.map(({ id, name, number }) => (
          <li className={css.ContactListItem} key={id}>
            <Contact id={id} name={name} number={number} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
