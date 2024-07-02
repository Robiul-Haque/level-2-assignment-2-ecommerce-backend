import { Request, Response } from "express";
import { productService } from "./product.service";
import productValidationSchema from "./product.validation";

// create product
const createProduct = async (req: Request, res: Response) => {
    try {
        const productData = req.body;
        const validateProductData = productValidationSchema.parse(productData);;
        const result = await productService.createProductIntoDB(validateProductData);
        res.status(200).json({
            success: true,
            message: 'Product create successfully!',
            data: result
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Product create unsuccessfully',
            data: error
        })
        console.log(error);
    }
}

// find all product
const getAllProduct = async (req: Request, res: Response) => {
    try {
        const result = await productService.getAllProductIntoDB();
        res.status(200).json({
            success: true,
            message: 'Product fetched successfully!',
            data: result
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Product fetched unsuccessfully',
            data: error
        })
        console.log(error);
    }
}

// find single product with product ID
const getSingleProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const result = await productService.getSingleProductIntoDB(productId);
        res.status(200).json({
            success: true,
            message: 'Product fetched successfully!',
            data: result
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Product fetched unsuccessfully',
            data: error
        })
        console.log(error);
    }
}

// update single product with product ID
const updateSingleProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const productData = req.body;
        await productService.singleProductUpdateIntoDB(productId, productData);
        res.status(200).json({
            success: true,
            message: 'Product update successfully!',
            data: productData
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Product fetched unsuccessfully',
            data: error
        })
        console.log(error);
    }
}

// delete single product with product ID
const deleteSingleProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        await productService.singleProductDeleteIntoDB(productId);
        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: null
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Product delete unsuccessfully',
            data: error
        })
        console.log(error);
    }
}

// search single product by name or tag name
const searchSingleProduct = async (req: Request, res: Response) => {
    try {
        const { searchTerm } = req.query;
        if (typeof searchTerm === 'string') {
            const result = await productService.searchSingleProductIntoDB(searchTerm);
            res.status(200).json({
                success: true,
                message: `Products matching search term '${searchTerm}' fetched successfully!`,
                data: result
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Product not found',
            data: error
        })
        console.log(error);
    }
}

export const productController = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    updateSingleProduct,
    deleteSingleProduct,
    searchSingleProduct,
}