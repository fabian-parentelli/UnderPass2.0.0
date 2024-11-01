import { notesManager } from '../dao/manager/index.manager.js';

export default class NotesRepository {

    newNotes = async (news) => {
        const result = await notesManager.newNotes(news);
        return result;
    };
    
    getNotes = async (page, userId) => {        
        const result = await notesManager.getNotes(page, userId);
        return result;
    };
    
    deleteNotes = async (id) => {        
        const result = await notesManager.deleteNotes(id);
        return result;
    };
    
    getById = async (id) => {        
        const result = await notesManager.getById(id);
        return result;
    };
    
    update = async (note) => {        
        const result = await notesManager.update(note);
        return result;
    };
    
};