import express from 'express';
const router = express.Router();
import { productController } from './product.controller';

// product routes
router.post('/create-product', productController.createProduct);
router.get('/get-all-product', productController.getAllProduct);
router.get('/:productId', productController.getSingleProduct);
router.put('/:productId', productController.updateSingleProduct);
router.delete('/:productId', productController.deleteSingleProduct);
router.get('', productController.searchSingleProduct);

export const productRouter = router;