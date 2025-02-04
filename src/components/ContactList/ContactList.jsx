import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { useConfirm } from "material-ui-confirm";
import { selectFilteredContacts } from "../../redux/filters/selectors";
import css from "./ContactList.module.css";
import { deleteContactThunk } from "../../redux/contacts/operations";
import toast from "react-hot-toast";

const ContactList = () => {
  const confirm = useConfirm();
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  const handleDeleteContact = (contactId, contactName) => {
    confirm({
      description: `Are you sure you want to delete ${contactName} contact.`,
      confirmationText: "YES",
      confirmationButtonProps: {
        sx: {
          backgroundColor: "#e70fb1",
          color: "white",
          minWidth: "100px",
          "&:hover": { color: "black" },
        },
      },
      cancellationButtonProps: {
        sx: {
          color: "#808080",
          backgroundColor: "transparent",
          "&:hover": { color: "black" },
        },
      },
    })
      .then(() => dispatch(deleteContactThunk(contactId)))
      .then(() => {
        toast.success(`The contact "${contactName}" was deleted successfully`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <ul className={css.ContactList}>
        {filteredContacts.map(({ id, name, number }) => (
          <li className={css.ContactListItem} key={id}>
            <Contact
              id={id}
              name={name}
              number={number}
              handleDeleteContact={(contactId, contactName) => {
                handleDeleteContact(contactId, contactName);
              }}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
