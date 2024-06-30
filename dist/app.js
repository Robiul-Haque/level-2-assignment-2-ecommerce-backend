"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const product_route_1 = require("./modules/product/product.route");
const order_route_1 = require("./modules/order/order.route");
// middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api/products', product_route_1.productRouter);
app.use('/api/orders', order_route_1.orderRouter);
// base route
app.get('/', (req, res) => {
    res.send('E-com App');
});
// route not found 
app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found'
    });
});
exports.default = app;
