import { Router } from 'express';
import {
  getAllContacts,
  getContactById,
  createContactController,
  deleteContactController,
  patchContactController,
} from '../controllers/contactsController.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { isValidId } from '../middlewares/isValidId.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createContactSchema,
  updateContactSchema,
} from '../validation/contactValidation.js';
import { authenticate } from '../middlewares/auth.js';
import upload from '../middlewares/uploadMiddleware.js';

const router = Router();

router.use(authenticate);

router.get('/', ctrlWrapper(getAllContacts));
router.get('/:contactId', isValidId, ctrlWrapper(getContactById));
router.post(
  '/',
  authenticate,
  upload.single('photo'),
  validateBody(createContactSchema),
  ctrlWrapper(createContactController),
);
router.put(
  '/:contactId',
  isValidId,
  validateBody(createContactSchema),
  ctrlWrapper(),
);
router.patch(
  '/:contactId',
  authenticate,
  isValidId,
  upload.single('photo'),
  validateBody(updateContactSchema),
  ctrlWrapper(patchContactController),
);
router.delete('/:contactId', isValidId, ctrlWrapper(deleteContactController));

export default router;
