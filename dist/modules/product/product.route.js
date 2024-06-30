"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const product_controller_1 = require("./product.controller");
// product routes
router.post('/create-product', product_controller_1.productController.createProduct);
router.get('/get-all-product', product_controller_1.productController.getAllProduct);
router.get('/:productId', product_controller_1.productController.getSingleProduct);
router.put('/:productId', product_controller_1.productController.updateSingleProduct);
router.delete('/:productId', product_controller_1.productController.deleteSingleProduct);
router.get('', product_controller_1.productController.searchSingleProduct);
exports.productRouter = router;
