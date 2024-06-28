import productModel from "../product/product.model";
import { TOrder } from "./order.interface";
import orderModel from "./order.model";


const createOrderIntoDB = async (payload: TOrder) => {
    const { productId, quantity } = payload;

    const product = await productModel.findById(productId);
    if (!product) {
        throw new Error('Product not found');
    }

    const totalProductQty = product.inventory?.quantity - quantity;
    if (totalProductQty !== 0 && product.inventory?.inStock !== false) {
        await productModel.findByIdAndUpdate({ _id: productId }, { $set: { 'inventory.quantity': totalProductQty } });
        const res = await orderModel.create(payload);
        return res;
    }
}

const getAllOrderIntoDB = async () => {
    const res = await orderModel.find({});
    return res;
}

const getSearchOrderIntoDB = async (email: string) => {
    const res = await orderModel.find({email});
    return res;
}


export const orderService = {
    createOrderIntoDB,
    getAllOrderIntoDB,
    getSearchOrderIntoDB,
}