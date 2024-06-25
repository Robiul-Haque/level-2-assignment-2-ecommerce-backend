import express from 'express';
import { productController } from './product.controller';
const router = express.Router();

router.post('/create-product', productController.createProduct);
router.get('/get-all-product', productController.getAllProduct);

export const productRouter = router;