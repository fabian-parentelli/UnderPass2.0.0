import Router from './routes.js';
import * as notesController from '../controllers/notes.controller.js';
import { passportEnum } from '../config/enums.config.js';

export default class NotesRouter extends Router {
    init() {
        this.post('/', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, notesController.newNotes);
        this.get('/:page', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, notesController.getNotes);
        this.put('/', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, notesController.putNotes)
        this.delete('/:id', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, notesController.deleteNotes);
    };
};