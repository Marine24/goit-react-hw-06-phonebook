import { createSelector } from 'reselect';

export const getContacts = store => store.PhoneBook.contacts;

export const getFilter = store => store.PhoneBook.filter;

export const getFiltredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filtred) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filtred.toLowerCase()),
    ),
);
