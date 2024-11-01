import Tooltip from '@mui/material/Tooltip';
import { useEffect, useState } from 'react';
import TextAreas from '../../../component/utils/TextAreas/TextAreas';
import { putNotesApi } from '../../../helpers/notes/putNotes.api';

const NoteInputs = ({ values, setValues, handle, handleClosed, vew, notes, setNotes }) => {

    const [note, setNote] = useState(values || { title: '', text: '' });

    useEffect(() => { if (values) setNote(values) }, [values]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNote((prev) => ({ ...prev, [name]: value }));
        if (setValues) setValues((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async () => {
        const response = await putNotesApi(note);
        if (response.status === 'success') {
            const data = { ...notes };
            const index = data.docs.findIndex(ind => ind._id == response.result._id);
            data.docs[index] = response.result;
            setNotes(data);
        } else console.error(response.error);
    };

    return (
        <div className='notesInputs'>

            <input
                type="text"
                name='title'
                placeholder='Titulo'
                value={note.title || ''}
                onChange={handleChange}
            />

            <TextAreas
                placeholder='Añade un texto...'
                value={note.text || ''}
                handleChange={handleChange}
                name='text'
            />

            <div>
                {!vew ? (
                    <Tooltip title='Eliminar'>
                        <p className='notesNo' onClick={() => handleClosed(note.id ? note.id : undefined)}>x</p>
                    </Tooltip>
                ) : (
                    <p></p>
                )}
                <p className='notesOk' onClick={handle ? handle : handleSubmit}>Hecho</p>
            </div>

        </div>
    );
};

export default NoteInputs;
