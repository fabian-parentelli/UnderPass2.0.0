import { messnewsModel } from '../models/messnews.model.js';

export default class Messnews {

    newMessage = async (message) => {
        return await messnewsModel.create(message);
    };

};