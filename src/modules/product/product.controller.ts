import { Request, Response } from "express";
import { productService } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
    try {
        const productData = req.body;
        const result = await productService.createProductIntoDB(productData);
        res.status(200).json({ success: true, message: 'Product create successfully!', data: result });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Product create unsuccessfully', data: error })
        console.log(error);
    }
}

const getAllProduct = async (req: Request, res: Response) => {
    try {
        const result = await productService.getAllProductIntoDB();
        res.status(200).json({ success: true, message: 'Product fetched successfully!', data: result });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Product fetched unsuccessfully', data: error })
        console.log(error);
    }
}

const getSingleProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const result = await productService.getSingleProductIntoDB(productId);
        res.status(200).json({ success: true, message: 'Product fetched successfully!', data: result });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Product fetched unsuccessfully', data: error })
        console.log(error);
    }
}

export const productController = {
    createProduct,
    getAllProduct,
    getSingleProduct,
}