import express from 'express';
import {
  getAllContacts,
  getContactById,
  createContactController,
  deleteContactController,
  patchContactController,
} from '../controllers/contactsController.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { isValidId } from '../middlewares/isValidId.js';

const router = express.Router();

router.get('/', ctrlWrapper(getAllContacts));
router.get('/:contactId', isValidId, ctrlWrapper(getContactById));
router.post('/', ctrlWrapper(createContactController));
router.patch('/:contactId', isValidId, ctrlWrapper(patchContactController));
router.delete('/:contactId', isValidId, ctrlWrapper(deleteContactController));

export default router;
