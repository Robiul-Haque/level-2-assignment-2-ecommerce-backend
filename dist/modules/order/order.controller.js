"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderController = void 0;
const order_service_1 = require("./order.service");
// create order
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderData = req.body;
        const result = yield order_service_1.orderService.createOrderIntoDB(orderData);
        res.status(200).json({
            success: true,
            message: 'Order created successfully!',
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Order created unsuccessful',
            data: error
        });
        console.log(error);
    }
});
// show all order or show order by email
const getAllOrderOrGetOrderWithEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.query;
        // check the email is not undefine, when email is available it should be work with business logic
        if (typeof email === 'string') {
            const result = yield order_service_1.orderService.getAllOrderOrGetOrderWithEmailIntoDB(email);
            if (result.length > 0) {
                res.status(200).json({
                    success: true,
                    message: 'Orders fetched successfully for user email!',
                    data: result
                });
            }
            else {
                res.status(404).json({
                    success: false,
                    message: 'No orders found for this user email!'
                });
            }
        }
        else {
            const result = yield order_service_1.orderService.getAllOrderOrGetOrderWithEmailIntoDB(undefined);
            res.status(200).json({
                success: true,
                message: 'Order fetched successfully!',
                data: result
            });
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Order not found',
            data: error
        });
        console.log(error);
    }
});
exports.orderController = {
    createOrder,
    getAllOrderOrGetOrderWithEmail,
};
