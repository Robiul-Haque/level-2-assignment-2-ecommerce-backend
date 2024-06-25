import { TProduct } from "./product.interface";
import productModel from "./product.model";

const createProductIntoBD = async (payload: TProduct) => {
    const res = await productModel.create(payload);
    return res;
}


export const productService = {
    createProductIntoBD,
}