import { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import TextAreas from '../../../component/utils/TextAreas/TextAreas';

const NoteInputs = () => {

    const [note, setNote] = useState({ title: '', text: '' })
    const handleChange = (e) => setNote({ ...note, [e.target.name]: e.target.value });

    return (
        <div className='notesInputs'>
            <input type="text" placeholder='Titulo' />
            <TextAreas placeholder='Añade un texto...' value={note.text} handleChange={handleChange} name='text' />
            <div>
                <Tooltip title='Eliminar'>
                    <p className='notesNo' onClick={() => setVew(false)}>x</p>
                </Tooltip>
                <p className='notesOk' onClick={() => setVew(false)}>Hecho</p>
            </div>
        </div>
    );
};

export default NoteInputs;