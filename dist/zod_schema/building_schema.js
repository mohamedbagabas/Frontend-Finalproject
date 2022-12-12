"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildregister = void 0;
const zod_1 = require("zod");
exports.buildregister = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string({
            required_error: 'Name is required !',
            invalid_type_error: 'Name must be a string',
        })
            .min(6, 'Building name must be more than 6 char'),
        location: zod_1.z
            .string({
            required_error: 'Location is required !',
            invalid_type_error: 'Location must be a string',
        })
            .min(6, 'Location must be more than 6 char'),
        apartment: zod_1.z
            .string({
            required_error: 'Apartment is required',
            invalid_type_error: 'Apartment must be a string',
        }),
    })
});
