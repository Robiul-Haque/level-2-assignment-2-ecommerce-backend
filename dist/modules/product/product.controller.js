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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const product_service_1 = require("./product.service");
const product_validation_1 = __importDefault(require("./product.validation"));
// create product
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productData = req.body;
        const validateProductData = product_validation_1.default.parse(productData);
        ;
        const result = yield product_service_1.productService.createProductIntoDB(validateProductData);
        res.status(200).json({
            success: true,
            message: 'Product create successfully!',
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Product create unsuccessfully',
            data: error
        });
        console.log(error);
    }
});
// find all product
const getAllProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_service_1.productService.getAllProductIntoDB();
        res.status(200).json({
            success: true,
            message: 'Product fetched successfully!',
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Product fetched unsuccessfully',
            data: error
        });
        console.log(error);
    }
});
// find single product with product ID
const getSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.productService.getSingleProductIntoDB(productId);
        res.status(200).json({
            success: true,
            message: 'Product fetched successfully!',
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Product fetched unsuccessfully',
            data: error
        });
        console.log(error);
    }
});
// update single product with product ID
const updateSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const productData = req.body;
        yield product_service_1.productService.singleProductUpdateIntoDB(productId, productData);
        res.status(200).json({
            success: true,
            message: 'Product update successfully!',
            data: productData
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Product fetched unsuccessfully',
            data: error
        });
        console.log(error);
    }
});
// delete single product with product ID
const deleteSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        yield product_service_1.productService.singleProductDeleteIntoDB(productId);
        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: null
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Product delete unsuccessfully',
            data: error
        });
        console.log(error);
    }
});
// search single product by name or tag name
const searchSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { searchTerm } = req.query;
        const result = yield product_service_1.productService.searchSingleProductIntoDB(searchTerm);
        res.status(200).json({
            success: true,
            message: `Products matching search term '${searchTerm}' fetched successfully!`,
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
exports.productController = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    updateSingleProduct,
    deleteSingleProduct,
    searchSingleProduct,
};
