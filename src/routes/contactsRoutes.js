import express from 'express';
import {
  getAllContacts,
  getContactById,
} from '../controllers/contactsController.js';
import { ctrlWrappr } from '../utils/ctrlWrapper.js';

const router = express.Router();

router.get('/', ctrlWrappr(getAllContacts));
router.get('/:contactId', ctrlWrappr(getContactById));

export default router;
