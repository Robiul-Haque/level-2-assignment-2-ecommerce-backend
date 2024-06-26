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
exports.productController = void 0;
const product_service_1 = require("./product.service");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productData = req.body;
        const result = yield product_service_1.productService.createProductIntoDB(productData);
        res.status(200).json({ success: true, message: 'Product create successfully!', data: result });
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Product create unsuccessfully', data: error });
        console.log(error);
    }
});
const getAllProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_service_1.productService.getAllProductIntoDB();
        res.status(200).json({ success: true, message: 'Product fetched successfully!', data: result });
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Product fetched unsuccessfully', data: error });
        console.log(error);
    }
});
const getSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.productService.getSingleProductIntoDB(productId);
        res.status(200).json({ success: true, message: 'Product fetched successfully!', data: result });
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Product fetched unsuccessfully', data: error });
        console.log(error);
    }
});
const singleProductUpdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const productData = req.body;
        yield product_service_1.productService.singleProductUpdateIntoDB(productId, productData);
        res.status(200).json({ success: true, message: 'Product update successfully!', data: productData });
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Product fetched unsuccessfully', data: error });
        console.log(error);
    }
});
exports.productController = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    singleProductUpdate,
};
