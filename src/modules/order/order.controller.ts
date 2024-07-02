import { Request, Response } from "express";
import { orderService } from "./order.service";
import orderValidationSchema from "./order.validation";

// create order
const createOrder = async (req: Request, res: Response) => {
    try {
        const orderData = req.body;
        // order data validate with zod
        const validateOrderData = orderValidationSchema.parse(orderData);
        const result = await orderService.createOrderIntoDB(validateOrderData);
        res.status(200).json({
            success: true,
            message: 'Order created successfully!',
            data: result
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Order created unsuccessful',
            data: error
        })
        console.log(error);
    }
}

// show all order or show order by email
const getAllOrderOrGetOrderWithEmail = async (req: Request, res: Response) => {
    try {
        const { email } = req.query;

        // check the email is not undefine, when email is available it should be work with business logic
        if (typeof email === 'string') {
            const result = await orderService.getAllOrderOrGetOrderWithEmailIntoDB(email);
            if (result.length > 0) {
                res.status(200).json({
                    success: true,
                    message: 'Orders fetched successfully for user email!',
                    data: result
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: 'Order not found'
                })
            }
        } else {
            const result = await orderService.getAllOrderOrGetOrderWithEmailIntoDB(undefined);
            res.status(200).json({
                success: true,
                message: 'Order fetched successfully!',
                data: result
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Order fetched unsuccessfully!',
            data: error
        })
        console.log(error);
    }
}

export const orderController = {
    createOrder,
    getAllOrderOrGetOrderWithEmail,
}