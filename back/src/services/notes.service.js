import { notesRepository } from "../repositories/index.repositories.js";
import { NotesNotFound } from '../utils/custom-exceptions.utils.js';

const newNotes = async (notes) => {
    const result = await notesRepository.newNotes(notes);
    if (!result) throw new NotesNotFound('No se puede guardar la nota');
    return { status: 'success', result };
};

const getNotes = async (page, { user }) => {
    const result = await notesRepository.getNotes(page, user._id);
    if (!result) throw new NotesNotFound('No se puede encontrar las notas');
    return { status: 'success', result };
};

const putNotes = async (note) => {
    const notedb = await notesRepository.getById(note._id);
    if (!notedb) throw new NotesNotFound('No se puede encontrar la nota');
    const newNote = { ...notedb, ...note };
    const result = await notesRepository.update(newNote);
    if (!result) throw new NotesNotFound('No se puede actualizar la nota');
    return { status: 'success', result };
};

const deleteNotes = async (id) => {
    const result = await notesRepository.deleteNotes(id);
    if (!result) throw new NotesNotFound('No se puede encontrar las notas');
    return { status: 'success', result };
};

export { newNotes, getNotes, putNotes, deleteNotes };