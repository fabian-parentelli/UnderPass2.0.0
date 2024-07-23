import { financialUserModel } from '../models/financialUsers.model.js';

export default class FinancialUser {

    newFinancial = async (data) => {
        return await financialUserModel.create(data);
    };

    getFinanceByUserId = async (id) => {
        return await financialUserModel.findOne({ userId: id }).lean();
    };

    updateFinace = async (finance) => {
        return await financialUserModel.findByIdAndUpdate({ _id: finance._id }, finance);
    };

};