import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;
export const selectContactsLoading = (state) => state.contacts.loading;
export const selectContactsError = (state) => state.contacts.error;
export const selectEditContact = (state) => state.contacts.items;
export const selectCurrentContact = (state) => state.contacts.currentContact;

export const selectIsMovedInTrash = createSelector(
  [selectContacts, (_, id) => id],
  (contacts, id) => contacts.find((contact) => contact.id === id)?.moveToTrash
);
export const selectIsMovedtoTrashCounter = (state) => {
  const contacts = selectContacts(state);
  return contacts.reduce(
    (total, curr) => (curr.moveToTrash ? total + 1 : total),
    0
  );
};

// export const selectSortContacts = createSelector(
//   [selectContacts, selectSortByType],
//   (contacts, sortByType) => {}
// );

// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, filterValue) =>
//     contacts.filter((contact) => {
//       return (
//         contact.name.toLowerCase().includes(filterValue.toLowerCase()) ||
//         contact.number.includes(filterValue)
//       );
//     })
// );
