import { saveRequest, sendMail } from '../../DAL';
import { RequestType } from '../../model/request';

export const registerRequest = async (request: RequestType) => {
    await saveRequest(request);
    await sendMail(request);
};
