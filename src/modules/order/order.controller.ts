import { Request, Response } from "express";
import { orderService } from "./order.service";

const createOrder = async (req: Request, res: Response) => {
    try {
        const orderData = req.body;
        const result = await orderService.createOrderIntoDB(orderData);
        res.status(200).json({
            success: true,
            message: 'Order created successfully!',
            data: result
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Product not found',
            data: error
        })
        console.log(error);
    }
}

const getAllOrder = async (req: Request, res: Response) => {
    try {
        const result = await orderService.getAllOrderIntoDB();
        res.status(200).json({
            success: true,
            message: 'Order fetched successfully!',
            data: result
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Product not found',
            data: error
        })
        console.log(error);
    }
}

const getSearchOrder = async (req: Request, res: Response) => {
    try {
        const { email } = req.query;
        if (typeof email === 'string') {
            const result = await orderService.getSearchOrderIntoDB(email);
            res.status(200).json({
                success: true,
                message: 'Order fetched successfully!',
                data: result
            })
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

export const orderController = {
    createOrder,
    getAllOrder,
    getSearchOrder,
}