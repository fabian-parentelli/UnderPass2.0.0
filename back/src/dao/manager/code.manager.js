import { codesModelSecondary } from '../models/code.model.js';

export default class Cash_uru {

    newCode = async (cash) => {
        return await codesModelSecondary.create(cash);
    };

    getCodes = async (query, page, limit = 12) => {
        return await codesModelSecondary.paginate(query, { limit, page, lean: true })
    };

};