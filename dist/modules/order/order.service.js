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
exports.orderService = void 0;
const product_model_1 = __importDefault(require("../product/product.model"));
const order_model_1 = __importDefault(require("./order.model"));
// create order
const createOrderIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const { productId, quantity } = payload;
    // find the product with product ID
    const product = yield product_model_1.default.findById(productId);
    if (!product) {
        throw new Error('Product not found');
    }
    // count the product and check it product is available then order is create complete
    const totalProductQty = ((_a = product.inventory) === null || _a === void 0 ? void 0 : _a.quantity) - quantity;
    if (totalProductQty !== 0 && ((_b = product.inventory) === null || _b === void 0 ? void 0 : _b.inStock) !== false) {
        yield product_model_1.default.findByIdAndUpdate({ _id: productId }, { $set: { 'inventory.quantity': totalProductQty } });
        const res = yield order_model_1.default.create(payload);
        return res;
    }
    else {
        throw new Error('Product out of stock or insufficient quantity');
    }
});
// find all order in db
const getAllOrderOrGetOrderWithEmailIntoDB = (email) => __awaiter(void 0, void 0, void 0, function* () {
    if (email) {
        const res = yield order_model_1.default.find({ email });
        return res;
    }
    else {
        const res = yield order_model_1.default.find({});
        return res;
    }
});
exports.orderService = {
    createOrderIntoDB,
    getAllOrderOrGetOrderWithEmailIntoDB,
};
