import { Router } from 'express';
import * as userController from '../controllers/userController';
import loginValidate from '../middlewares/loginValidate';
import { userInputValidations, levelInputValidation } from '../middlewares/userInputValidations';

const router = Router();

router.post('/users', levelInputValidation, userInputValidations, userController.createUser);
router.post('/login', loginValidate, userController.userLogin);

export default router;