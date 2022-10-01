import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';

const requestSchema = z.object({
    fullName: z.string().min(1),
    id: z.string().length(9).regex(/^\d+$/),
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const request = requestSchema.parse(req.body);
            console.log('success', request);
            return res.status(200).send({
                sucess: true,
            });
        } catch (e) {
            return res.status(400).send({
                message: 'Bad Request',
            });
        }
    }
}
