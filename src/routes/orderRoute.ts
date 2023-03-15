import { Router } from 'express';
import * as orderController from '../controllers/orderController';

const router = Router();

router.get('/', orderController.getOrderwithProductsIds);

export default router;