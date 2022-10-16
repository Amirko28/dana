import { z } from 'zod';

const dateSchema = z.preprocess((arg) => {
    if (typeof arg == 'string' || arg instanceof Date) return new Date(arg);
}, z.date());

export const requestSchema = z.object({
    fullName: z.string().min(1),
    email: z.string().email(),
    taxCheck: z.string().min(1),
    marriage: z.string().array(),
    parallelJobs: z.boolean(),
    independent: z.boolean(),
    cleanedTax: z.string().min(1),
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
    dischargeDateFromMilitary: dateSchema,
    childrenInfo: z.string(),
});

export type RequestType = z.infer<typeof requestSchema>;
