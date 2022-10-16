import axios from 'axios';
import { RegisterRequest } from '../models/request';
import { MappedRequestPayload } from '../server/model/mappedRequest';

const convertToArrayIfEmpty = (data: string[] | false) => (data === false ? [] : data);

const mapPayload = (registerRequest: RegisterRequest): MappedRequestPayload => ({
    ...registerRequest,
    marriage: convertToArrayIfEmpty(registerRequest.marriage),
    parallelJobs: !registerRequest.parallelJobs,
    independent: !registerRequest.independent,
    compensation: !registerRequest.compensation,
    payedTaxCompensation: convertToArrayIfEmpty(registerRequest.payedTaxCompensation),
    gotMoneyFromBituhLeumi: convertToArrayIfEmpty(registerRequest.gotMoneyFromBituhLeumi),
    withdrewMoney: convertToArrayIfEmpty(registerRequest.withdrewMoney),
    depositedMoney: !registerRequest.depositedMoney,
    stockExchangeActivity: convertToArrayIfEmpty(registerRequest.stockExchangeActivity),
    mashkanta: convertToArrayIfEmpty(registerRequest.mashkanta),
    familyHospitalization: !registerRequest.familyHospitalization,
    donations: !registerRequest.donations,
    degreeEligibility: !registerRequest.degreeEligibility,
});

export const postRequest = (registerPayload: RegisterRequest) => {
    const mappedPayload = mapPayload(registerPayload);
    return axios.post('/api/request', mappedPayload);
};
