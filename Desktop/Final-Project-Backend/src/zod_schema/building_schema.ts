import { z } from 'zod';

export const buildregister = z.object({
  body: z.object({
    username: z
      .string({
        required_error: 'Username is required !',
        invalid_type_error: 'Username must be a string',
      })
      .min(6, 'Username must be more than 6 char')
      .max(15, 'Username must be less than 15 char'),
    })
});