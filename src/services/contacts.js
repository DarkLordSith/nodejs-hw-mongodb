import { Contact } from '../models/Contact.js';

export async function fetchAllContacts() {
  return await Contact.find();
}

export async function fetchContactById(contactId) {
  return await Contact.findById(contactId);
}
