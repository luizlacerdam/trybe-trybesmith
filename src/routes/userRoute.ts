import { Router } from 'express';
import * as userController from '../controllers/userController';
import loginValidate from '../middlewares/loginValidate';

const router = Router();

router.post('/users', userController.createUser);
router.post('/login', loginValidate, userController.userLogin);

export default router;