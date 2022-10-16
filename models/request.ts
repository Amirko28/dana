export type RegisterRequest = {
    fullName: string;
    email: string;
    taxCheck: string;
    marriage: string[] | false;
    parallelJobs: string;
    independent: string;
    cleanedTax: string;
    compensation: string;
    payedTaxCompensation: string[] | false;
    gotMoneyFromBituhLeumi: string[] | false;
    withdrewMoney: string[] | false;
    depositedMoney: string;
    stockExchangeActivity: string[] | false;
    mashkanta: string[] | false;
    disabledFamily: string;
    familyHospitalization: string;
    donations: string;
    degreeEligibility: string;
    dischargeDateFromMilitary: Date;
    childrenInfo: string;
};
