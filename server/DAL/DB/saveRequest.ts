import { PrismaClient } from '@prisma/client';

import { RequestType } from '../../model/request';

const prisma = new PrismaClient();

export const saveRequest = async (request: RequestType) => {
    await prisma.request.create({
        data: {
            fullName: request.fullName,
            email: request.email,
            taxCheck: request.taxCheck,
            marriage: request.marriage.toString(),
            parallelJobs: request.parallelJobs,
            independent: request.independent,
            cleanedTax: request.cleanedTax,
            compensation: request.compensation,
            payedTaxCompensation: request.payedTaxCompensation.toString(),
            gotMoneyFromBituhLeumi: request.gotMoneyFromBituhLeumi.toString(),
            withdrewMoney: request.withdrewMoney.toString(),
            depositedMoney: request.depositedMoney,
            stockExchangeActivity: request.stockExchangeActivity.toString(),
            mashkanta: request.mashkanta.toString(),
            disabledFamily: request.disabledFamily,
            familyHospitalization: request.familyHospitalization,
            donations: request.donations,
            degreeEligibility: request.degreeEligibility,
            dischargeDateFromMilitary: request.dischargeDateFromMilitary,
            childrenInfo: request.childrenInfo,
        },
    });
};
