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
            message: 'Product not found',
            data: error
        });
        console.log(error);
    }
});
const getAllOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_service_1.orderService.getAllOrderIntoDB();
        res.status(200).json({
            success: true,
            message: 'Order fetched successfully!',
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Product not found',
            data: error
        });
        console.log(error);
    }
});
const getSearchOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.query;
        if (typeof email === 'string') {
            const result = yield order_service_1.orderService.getSearchOrderIntoDB(email);
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
            message: 'Product not found',
            data: error
        });
        console.log(error);
    }
});
exports.orderController = {
    createOrder,
    getAllOrder,
    getSearchOrder,
};
