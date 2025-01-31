import { useDispatch, useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/filters/selectors";
import css from "../Contact/Contact";
import Contact from "../Contact/Contact";
import { deleteContactThunk } from "../../redux/contacts/operations";
import { restoreContactFromTrash } from "../../redux/contacts/slice";

const TrashList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  const filteredContactsByTrash = filteredContacts.filter(
    (contact) => contact.moveToTrash
  );

  const handleRestoreContactFromTrash = (id) => {
    dispatch(restoreContactFromTrash(id));
  };

  return (
    <div>
      <ul>
        {filteredContactsByTrash.map(({ id, name, number }) => (
          <li className={css.ContactListItem} key={id}>
            <Contact
              id={id}
              name={name}
              number={number}
              onDeleteContact={(contactId) => {
                dispatch(deleteContactThunk(contactId));
              }}
              onRestoreContact={(contactId) => {
                handleRestoreContactFromTrash(contactId);
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrashList;
