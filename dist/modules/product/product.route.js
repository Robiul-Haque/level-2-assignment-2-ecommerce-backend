"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
router.post('/create-product', product_controller_1.productController.createProduct);
router.get('/get-all-product', product_controller_1.productController.getAllProduct);
router.get('/:productId', product_controller_1.productController.getSingleProduct);
exports.productRouter = router;
