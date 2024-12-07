import { shiftconfModel } from '../models/shiftconf.model.js';

export default class Shiftconf {

    newShift = async (shift) => {
        return await shiftconfModel.create(shift);
    };

};