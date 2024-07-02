import { z } from "zod";

const productValidationSchema = z.object({
    name: z.string(),
    description: z.string(),
    price: z.number().int().min(10),
    category: z.string(),
    tags: z.array(z.string()),
    variants: z.array(
        z.object({
            type: z.string(),
            value: z.string()
        })
    ),
    inventory: z.object({
        quantity: z.number().int(),
        inStock: z.boolean()
    })
});

export default productValidationSchema;