import productModel from "../product/product.model";
import { TOrder } from "./order.interface";
import orderModel from "./order.model";

// create order
const createOrderIntoDB = async (payload: TOrder) => {
    const { productId, quantity } = payload;

    // find the product with product ID
    const product = await productModel.findById(productId);
    if (!product) {
        throw new Error('Product not found');
    }
    // count the product and check it product is available then order is create complete
    const totalProductQty = product.inventory?.quantity - quantity;
    if (totalProductQty !== 0 && product.inventory?.inStock !== false) {
        await productModel.findByIdAndUpdate({ _id: productId }, { $set: { 'inventory.quantity': totalProductQty } });
        const res = await orderModel.create(payload);
        return res;
    } else {
        throw new Error('Product out of stock or insufficient quantity');
    }
}

// find all order in db
const getAllOrderOrGetOrderWithEmailIntoDB = async (email: string | undefined) => {
    if (email) {
        const res = await orderModel.find({ email });
        return res;
    } else {
        const res = await orderModel.find({});
        return res
    }
}

export const orderService = {
    createOrderIntoDB,
    getAllOrderOrGetOrderWithEmailIntoDB,
}