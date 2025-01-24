import ContactList from "../components/ContactList/ContactList";
import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader/Loader";
import { selectError, selectLoading } from "../redux/contacts/selectors";
import { fetchContacts } from "../redux/contacts/operations";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      {" "}
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
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
