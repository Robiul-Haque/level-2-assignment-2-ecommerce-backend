import { z } from "zod";


const orderValidationSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    productId: z.string(),
    price: z.number().int().gt(0),
    quantity: z.number().int().gt(0),
})


export default orderValidationSchema;