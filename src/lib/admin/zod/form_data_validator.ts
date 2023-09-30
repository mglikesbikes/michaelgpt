import { z } from 'zod';

export const form_data_validator = z.object({
  question: z.string().min(1),
  answer: z.string().min(1)
});
