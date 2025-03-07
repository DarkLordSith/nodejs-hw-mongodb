import { Contact } from '../models/Contact.js';
import { initMongoConnection } from '../db/initMongoConnection.js';

export async function fetchAllContacts() {
  return await Contact.find();
}

export async function fetchContactById(contactId) {
  return await Contact.findById(contactId);
}

export const createStudent = async (payload) => {
  const student = await initMongoConnection.create(payload);
  return student;
};

export const deleteStudent = async (contactId) => {
  const student = await initMongoConnection.findOneAndDelete({
    _id: contactId,
  });
  return student;
};

export const updateContact = async (contactId, payload, options = {}) => {
  const rawResult = await initMongoConnection.findOneAndUpdate(
    { _id: contactId },
    payload,
    {
      new: true,
      includeResultMetadata: true,
      ...options,
    },
  );
  if (!rawResult || rawResult.value) return null;
  return {
    student: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};
