import express from 'express';
import {
  getAllContacts,
  getContactById,
  createStudentController,
  deleteStudentController,
  upsertContact,
  patchContact,
} from '../controllers/contactsController.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = express.Router();

router.get('/', ctrlWrapper(getAllContacts));
router.get('/:contactId', ctrlWrapper(getContactById));
router.post('/contacts', ctrlWrapper(createStudentController));
router.delete('/contacts/:contactId', ctrlWrapper(deleteStudentController));
router.put('/contacts/:contactId', ctrlWrapper(upsertContact));
router.patch('/contacts/:contactId', ctrlWrapper(patchContact));

export default router;
