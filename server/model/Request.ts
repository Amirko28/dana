import { z } from 'zod';

export const requestSchema = z.object({
    fullName: z.string().min(1),
    idNumber: z.string().length(9).regex(/^\d+$/),
    taxCheck: z.string(),
    marriage: z.string().array(),
    parallelJobs: z.boolean(),
    independent: z.boolean(),
    cleanedTax: z.string(),
    compensation: z.boolean(),
    payedTaxCompensation: z.string().array(),
    gotMoneyFromBituhLeumi: z.string().array(),
    withdrewMoney: z.string().array(),
    depositedMoney: z.boolean(),
    stockExchangeActivity: z.string().array(),
    mashkanta: z.string().array(),
    disabledFamily: z.string(),
    familyHospitalization: z.boolean(),
    donations: z.boolean(),
    degreeEligibility: z.boolean(),
    dischargeDateFromMilitary: z.date(),
    childrenInfo: z.string(),
});

export type RequestType = z.infer<typeof requestSchema>;
