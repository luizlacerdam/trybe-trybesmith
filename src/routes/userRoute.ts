import { Router } from 'express';
import * as userController from '../controllers/userController';

const router = Router();

router.post('/users', userController.createUser);
router.post('/login', userController.userLogin);

export default router;