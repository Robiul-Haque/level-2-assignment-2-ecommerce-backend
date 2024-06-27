import { TProduct } from "../product/product.interface";
import orderModel from "./order.model";


const createOrderIntoDB = async (payload: TProduct) => {
    const res = await orderModel.create(payload);
    return res;
}


export const orderService = {
    createOrderIntoDB,
}