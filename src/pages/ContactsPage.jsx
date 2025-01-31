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
import { FaTrash } from "react-icons/fa";
import { RiContactsBook2Fill } from "react-icons/ri";
import { toggleShowTrash } from "../redux/filters/slice";
import { selectShowTrash } from "../redux/filters/selectors";
import { Link, Outlet } from "react-router";
import TrashList from "../components/TrashList/TrashList";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectContactsLoading);
  const isError = useSelector(selectContactsError);
  const contacts = useSelector(selectContacts);
  const showTrash = useSelector(selectShowTrash);

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
      <button type="button" onClick={() => dispatch(toggleShowTrash())}>
        {showTrash ? <RiContactsBook2Fill /> : <FaTrash color="white" />}
      </button>
      {showTrash ? (
        <TrashList />
      ) : (
        <>
          <ContactForm />
          {contacts.length > 1 && <SearchBox />}
          {!isLoading ? <ContactList /> : <Loader />}
          {isError && (
            <p style={{ color: "red" }}>
              OOOPS... Error: "{isError}". Please try again later.
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default ContactsPage;
