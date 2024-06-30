import express from "express";
import { orderController } from "./order.controller";
const router = express.Router();


// order routes
router.post('/', orderController.createOrder);
router.get('', orderController.getAllOrderOrGetOrderWithEmail);


export const orderRouter = router;