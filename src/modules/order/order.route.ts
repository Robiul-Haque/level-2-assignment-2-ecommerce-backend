import express from "express";
import { orderController } from "./order.controller";
const router = express.Router();


router.post('/', orderController.createOrder);
router.get('/', orderController.getAllOrder);
router.get('/search', orderController.getSearchOrder);


export const orderRouter = router;