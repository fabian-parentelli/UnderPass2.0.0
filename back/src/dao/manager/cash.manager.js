import { cashModel } from '../models/cash.model.js';

export default class Cash {

    newCash = async (cash) => {
        return await cashModel.create(cash);
    };

}