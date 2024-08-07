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
exports.productService = void 0;
const product_model_1 = __importDefault(require("./product.model"));
// create product
const createProductIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield product_model_1.default.create(payload);
    return res;
});
// find all product
const getAllProductIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield product_model_1.default.find({});
    return res;
});
// find single product with product ID
const getSingleProductIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield product_model_1.default.findOne({ _id: id });
    return res;
});
// update single product with product ID
const singleProductUpdateIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield product_model_1.default.findByIdAndUpdate({ _id: id }, { $set: payload });
    return res;
});
// delete single product with product ID
const singleProductDeleteIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield product_model_1.default.deleteOne({ _id: id });
    return res;
});
// search single product by name or tags
const searchSingleProductIntoDB = (searchTxt) => __awaiter(void 0, void 0, void 0, function* () {
    const searchTerm = RegExp(searchTxt, 'i');
    const res = yield product_model_1.default.find({ $or: [{ name: searchTerm }, { tags: searchTerm }] });
    return res;
});
exports.productService = {
    createProductIntoDB,
    getAllProductIntoDB,
    getSingleProductIntoDB,
    singleProductUpdateIntoDB,
    singleProductDeleteIntoDB,
    searchSingleProductIntoDB,
};
