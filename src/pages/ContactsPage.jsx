import ContactList from "../components/ContactList/ContactList";
import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader/Loader";
import {
  selectContacts,
  selectContactsError,
  selectContactsLoading,
} from "../redux/contacts/selectors";
import { fetchContactsThunk } from "../redux/contacts/operations";
import toast from "react-hot-toast";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectContactsLoading);
  const isError = useSelector(selectContactsError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContactsThunk())
      .unwrap()
      .then(() => {
        toast.success("Contacts was loaded"); // ==================== ??????????
      });
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      {contacts.length > 1 && <SearchBox />}
      {!isLoading ? <ContactList /> : <Loader />}
      {isError && (
        <p style={{ color: "red" }}>
          OOOPS... Error: "{isError}". Please try again later.
        </p>
      )}
    </div>
  );
};

export default ContactsPage;
