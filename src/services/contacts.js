import { Contact } from '../models/Contact.js';

export async function fetchAllContacts({
  page = 1,
  perPage = 10,
  sortBy = 'name',
  sortOrder = 'asc',
  type,
  isFavourite,
}) {
  const skip = (page - 1) * perPage;
  const filter = {};

  if (type) {
    filter.contactType = type;
  }
  if (isFavourite !== undefined) {
    if (isFavourite === 'true') {
      filter.isFavourite = true;
    } else if (isFavourite === 'false') {
      filter.isFavourite = false;
    }
  }

  const totalItems = await Contact.countDocuments(filter);
  const contacts = await Contact.find(filter)
    .sort({ [sortBy]: sortOrder === 'asc' ? 1 : -1 })
    .skip(skip)
    .limit(perPage);

  return {
    data: contacts,
    page,
    perPage,
    totalItems,
    totalPages: Math.ceil(totalItems / perPage),
    hasPreviousPage: page > 1,
    hasNextPage: page * perPage < totalItems,
  };
}

export async function fetchContactById(contactId) {
  return await Contact.findById(contactId);
}

export const createContact = async (payload) => {
  const contact = await Contact.create(payload);
  return contact;
};

export const removeContact = async (contactId) => {
  const deleteContact = await Contact.findByIdAndDelete(contactId);
  return deleteContact;
};

export const updateContact = async (contactId, payload) => {
  const contact = await Contact.findByIdAndUpdate(contactId, payload, {
    new: true,
  });
  return contact;
};
