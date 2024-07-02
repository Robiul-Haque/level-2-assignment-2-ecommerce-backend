import { TProduct } from "./product.interface";
import productModel from "./product.model";

// create product
const createProductIntoDB = async (payload: TProduct) => {
    const res = await productModel.create(payload);
    return res;
}

// find all product
const getAllProductIntoDB = async () => {
    const res = await productModel.findOne({});
    return res;
}
// find single product with product ID
const getSingleProductIntoDB = async (id: string) => {
    const res = await productModel.findOne({ _id: id })
    return res;
}

// update single product with product ID
const singleProductUpdateIntoDB = async (id: string, payload: TProduct) => {
    const res = await productModel.findByIdAndUpdate({ _id: id }, { $set: payload })
    return res;
}

// delete single product with product ID
const singleProductDeleteIntoDB = async (id: string) => {
    const res = await productModel.deleteOne({ _id: id });
    return res;
}

// search single product by name or tags
const searchSingleProductIntoDB = async (searchTxt: string) => {
    const searchTerm = RegExp(searchTxt, 'i');
    const res = await productModel.find({ $or: [{ name: searchTerm }, { tags: searchTerm }] });
    return res;
}

export const productService = {
    createProductIntoDB,
    getAllProductIntoDB,
    getSingleProductIntoDB,
    singleProductUpdateIntoDB,
    singleProductDeleteIntoDB,
    searchSingleProductIntoDB,
}