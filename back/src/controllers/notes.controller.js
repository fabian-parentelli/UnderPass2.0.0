import * as notesService from '../services/notes.service.js';
import { NotesNotFound } from '../utils/custom-exceptions.utils.js';

const newNotes = async (req, res) => {
    try {
        const result = await notesService.newNotes({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof NotesNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getNotes = async (req, res) => {
    const { page } = req.params;
    try {
        const result = await notesService.getNotes(page, { ...req.user });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof NotesNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const putNotes = async (req, res) => {
    try {
        const result = await notesService.putNotes({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof NotesNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const deleteNotes = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await notesService.deleteNotes(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof NotesNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { newNotes, getNotes, putNotes, deleteNotes };