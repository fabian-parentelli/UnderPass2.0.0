import { publicityModel } from '../models/publicity.model.js';

export default class Publicity {

    newPublicity = async (tutorial) => {
        return await publicityModel.create(tutorial);
    };
};