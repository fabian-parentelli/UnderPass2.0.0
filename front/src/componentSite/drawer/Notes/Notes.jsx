import './notes.scss';
import NoteInputs from './NoteInputs';
import { useEffect, useState } from 'react';
import Pager from '../../../component/utils/Pager/Pager.jsx';
import { useLoginContext } from '../../../context/LoginContext';
import { newNotesApi } from '../../../helpers/notes/newNotes.api.js';
import { getNotesApi } from '../../../helpers/notes/getNotes.api.js';
import { deleteNotesApi } from '../../../helpers/notes/deleteNotes.api.js';

const Notes = () => {

    const { user } = useLoginContext();
    const [vew, setVew] = useState(false);
    const [notes, setNotes] = useState([]);
    const [values, setValues] = useState({ title: '', text: '', userId: user?.data?._id });
    const [pager, setPager] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getNotesApi(pager);
            if (response.status === 'success') setNotes(response.result);
            else console.error(response.error);
        }; fetchData();
    }, [pager]);

    const handleChangePage = (page) => setPager(page);

    const newPost = async () => {
        setVew(false);
        const response = await newNotesApi(values);
        if (response.status === 'success') {
            const data = { ...notes };
            data.docs.unshift(response.result);
            setNotes(data);
            setValues({ title: '', text: '', userId: user?.data?._id });
        } else console.error(response.error);
    };

    const handleClosed = () => setVew(false);

    const handleDelete = async (id) => {
        const response = await deleteNotesApi(id);
        if (response.status === 'success') {
            const data = { ...notes };
            data.docs = data.docs.filter(doc => doc._id !== response.result._id);
            setNotes(data);
        } else console.error(response.error);
    };

    return (
        <div className='notes'>
            <h3>Notas</h3>

            {!vew ?
                <div className='notesAdd' onClick={() => setVew(true)}>
                    <p>+</p>
                    <p>Añande una nota...</p>
                </div>
                : <NoteInputs values={values} setValues={setValues} handle={newPost} handleClosed={handleClosed} />
            }

            <div className='notesBook'>
                {notes && notes.docs && notes.docs.map((not) => (
                    <NoteInputs
                        key={not._id}
                        values={not}
                        handleClosed={handleDelete}
                        vew={vew}
                        notes={notes}
                        setNotes={setNotes}
                    />
                ))}
            </div>

            {notes && (notes.hasPrevPage || notes.hasNextPage) &&
                <Pager users={notes} HandleChangePage={handleChangePage} />
            }

        </div>
    );
};

export default Notes;