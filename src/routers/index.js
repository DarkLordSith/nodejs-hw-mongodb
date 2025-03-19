import { Router } from 'express';
import authRouter from './auth';
import contactsRouters from './contactsRouters';

const router = Router();

router.use('/contacts', contactsRouters);
router.use('/auth', authRouter);

export default router;
