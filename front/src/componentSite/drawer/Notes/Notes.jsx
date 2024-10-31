import './notes.scss';
import { useState } from 'react';
import NoteInputs from './NoteInputs';

const Notes = () => {

    const [vew, setVew] = useState(false);

    return (
        <div className='notes'>
            <h3>Notas</h3>
            {!vew ?
                <div className='notesAdd' onClick={() => setVew(true)}>
                    <p>+</p>
                    <p>Añande una nota...</p>
                </div>
                : <NoteInputs />
            }

        </div>
    );
};

export default Notes;