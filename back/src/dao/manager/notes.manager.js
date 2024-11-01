import { notesModel } from '../models/notes.model.js';

export default class Notes {

    newNotes = async (event) => {
        return await notesModel.create(event);
    };

    getNotes = async (page, userId) => {
        return await notesModel.paginate({ userId }, { limit: 3, page, lean: true });
    };

    deleteNotes = async (id) => {
        return await notesModel.findByIdAndDelete(id);
    };

    getById = async (id) => {
        return await notesModel.findById(id).lean();
    };

    update = async (note) => {
        return await notesModel.findByIdAndUpdate(note._id, note, { lean: true, new: true });
    };

};