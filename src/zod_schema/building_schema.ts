import { z } from 'zod';

export const buildregister = z.object({
  body: z.object({
    name: z
      .string({
        required_error: 'Name is required !',
        invalid_type_error: 'Name must be a string',
      })
      .min(6, 'Building name must be more than 6 char'),
      location: z
      .string({
        required_error: 'Location is required !',
        invalid_type_error: 'Location must be a string',
      })
      .min(6, 'Location must be more than 6 char'),
      apartment: z
      .string({
        required_error: 'Apartment is required',
        invalid_type_error: 'Apartment must be a string',
      }),
      
      
    })
    
})