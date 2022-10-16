import { Redis } from '@upstash/redis';
import { Ratelimit } from '@upstash/ratelimit';
import type { NextApiRequest, NextApiResponse } from 'next';
import { registerRequest } from '../../server/BL';
import { requestSchema } from '../../server/model/request';

const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL || '',
    token: process.env.UPSTASH_REDIS_REST_TOKEN || '',
});

const rateLimit = new Ratelimit({
    redis: redis,
    limiter: Ratelimit.fixedWindow(5, '5 s'),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const identifier = 'api';
    const rateLimitResult = await rateLimit.limit(identifier);
    res.setHeader('X-RateLimit-Limit', rateLimitResult.limit);
    res.setHeader('X-RateLimit-Remaining', rateLimitResult.remaining);
    if (!rateLimitResult.success)
        return res.status(429).json({
            message: 'The request has been rate limited.',
            rateLimitState: rateLimitResult,
        });

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
