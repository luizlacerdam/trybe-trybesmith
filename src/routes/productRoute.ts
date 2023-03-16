import { Router } from 'express';
import * as productController from '../controllers/productController';
import productInputValidation from '../middlewares/productInputValidation';

const router = Router();

router.post('/', productInputValidation, productController.createProduct);
router.get('/', productController.getAllProducts);

export default router;