import { presetModel } from '../models/preset.model.js';

export default class Preset {

    newPresets = async (preset) => {
        return await presetModel.create(preset);
    };

    getPreset = async () => {
        return await presetModel.find();
    };

    getPresetById = async (id) => {
        return await presetModel.findById(id).lean();
    };

    updatePreset = async (preset) => {
        return await presetModel.findByIdAndUpdate(preset._id, preset, { lean: true, new: true });
    };

};