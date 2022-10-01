import { PrismaClient } from '@prisma/client';

import { RequestType } from '../../model/Request';

const prisma = new PrismaClient();

export const saveRequest = async (request: RequestType) => {
    await prisma.request.create({
        data: {
            fullName: request.fullName,
            idNumber: request.idNumber,
        },
    });
};
