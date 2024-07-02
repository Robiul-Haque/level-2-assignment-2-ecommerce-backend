"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const orderValidationSchema = zod_1.z.object({
    email: zod_1.z.string().email({ message: "Invalid email address" }),
    productId: zod_1.z.string(),
    price: zod_1.z.number().gt(0),
    quantity: zod_1.z.number().int().gt(0),
});
exports.default = orderValidationSchema;
