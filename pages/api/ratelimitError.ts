import type { NextApiRequest, NextApiResponse } from 'next';
import { registerRequest } from '../../server/BL';
import { requestSchema } from '../../server/model/Request';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const parseResult = requestSchema.safeParse(req.body);

        if (!parseResult.success) {
            return res.status(400).send({
                message: 'Bad Request',
            });
        }

        const request = parseResult.data;

        await registerRequest(request);

        return res.status(200).send({
            sucess: true,
        });
    }
}
