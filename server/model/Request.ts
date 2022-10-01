import { z } from 'zod';

export const requestSchema = z.object({
    fullName: z.string().min(1),
    idNumber: z.string().length(9).regex(/^\d+$/),
});

export type RequestType = z.infer<typeof requestSchema>;
