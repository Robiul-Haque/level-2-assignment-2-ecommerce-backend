import { TProduct } from "./product.interface";
import productModel from "./product.model";


const createProductIntoDB = async (payload: TProduct) => {
    const res = await productModel.create(payload);
    return res;
}

const getAllProductIntoDB = async () => {
    const res = await productModel.findOne({});
    return res;
}

const getSingleProductIntoDB = async (id: string) => {
    const res = await productModel.findOne({ _id: id })
    return res;
}

const singleProductUpdateIntoDB = async (id: string, payload: TProduct) => {
    const res = await productModel.findByIdAndUpdate({ _id: id }, { $set: payload })
    return res;
}

const singleProductDeleteIntoDB = async (id: string) => {
    const res = await productModel.deleteOne({ _id: id });
    return res;
}

const searchSingleProductIntoDB = async (searchTxt: string | any) => {
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