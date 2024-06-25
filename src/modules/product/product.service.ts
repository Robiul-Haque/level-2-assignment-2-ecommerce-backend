import { TProduct } from "./product.interface";
import productModel from "./product.model";

const createProductIntoDB = async (payload: TProduct) => {
    const res = await productModel.create(payload);
    return res;
}

const getAllProductIntoDB = async () => {
    const res = await productModel.find({});
    return res;
}

export const productService = {
    createProductIntoDB,
    getAllProductIntoDB,
}