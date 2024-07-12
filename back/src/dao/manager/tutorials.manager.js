import { tutorialModel } from '../models/tutorials.model.js';

export default class Tutorials {

    newVideoTut = async (tutorial) => {
        return await tutorialModel.create(tutorial);
    };

    getAllVideos = async () => {
        return await tutorialModel.find().lean();
    };

    getVideoTutByName = async (name) => {
        return await tutorialModel.findOne({ name: name }).lean();
    };

    getVideoById = async (id) => {
        return await tutorialModel.findOne({ _id: id }).lean();
    };

    updateVideo = async (user) => {
        return await tutorialModel.findByIdAndUpdate({_id: user._id}, user, { new: true } ).lean();
    }
};