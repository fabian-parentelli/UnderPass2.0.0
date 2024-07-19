import { apllicationModel } from '../models/application.model.js';

export default class Application {

    appliBanner = async (application) => {
        return await apllicationModel.create(application);
    };

};