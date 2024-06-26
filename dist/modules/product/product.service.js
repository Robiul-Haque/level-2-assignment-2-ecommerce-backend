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
const createProductIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield product_model_1.default.create(payload);
    return res;
});
const getAllProductIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield product_model_1.default.findOne({});
    return res;
});
const getSingleProductIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield product_model_1.default.findOne({ _id: id });
    return res;
});
const singleProductUpdateIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield product_model_1.default.findByIdAndUpdate({ _id: id }, { $set: payload });
    return res;
});
const singleProductDeleteIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield product_model_1.default.deleteOne({ _id: id });
    return res;
});
const searchSingleProductIntoDB = (productName) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield product_model_1.default.findOne({ name: productName });
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
