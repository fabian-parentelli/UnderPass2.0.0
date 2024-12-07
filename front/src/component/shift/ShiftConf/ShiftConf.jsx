import './shiftConf.scss';
import { useState } from 'react';
import Load from '../../utils/Load';
import ShiftRooms from './ShiftRooms/ShiftRooms';
import ShiftCompany from './ShiftCompany/ShiftCompany';
import ShiftSeccion from './ShiftSeccion/ShiftSeccion';
import ShiftSections from './ShiftSections/ShiftSections';
import { newShiftconfApi } from '../../../helpers/shiftsconf/newShiftconf.api.js';

const ShiftConf = ({ userId }) => {

    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState({ userId, location: { country: localStorage.getItem('country') }, rooms: 1 });

    const handleValues = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        // setLoading(true);
        let formdata = new FormData();
        const folderName = formatText(values.title);
        formdata.set('folderName', `shift/${folderName}`);
        const addedFiles = new Set();
        formdata.delete('files');
        files.forEach((file) => {
            if (!addedFiles.has(file.name)) {
                formdata.append('files', file);
                addedFiles.add(file.name);
            };
        });
        formdata.set('values', JSON.stringify(values));
        const response = await newShiftconfApi(formdata);
        if (response.status === 'success') {
            
        } else console.error(error);
        // setLoading(false);
    };

    return (
        <form className='shiftConf' onSubmit={handleSubmit}>
            <ShiftCompany values={values} setValues={setValues} setFiles={setFiles} handleValues={handleValues} />
            <ShiftRooms values={values} setValues={setValues} handleValues={handleValues} />
            <ShiftSeccion values={values} setValues={setValues} handleValues={handleValues} />
            <ShiftSections values={values} setValues={setValues} handleValues={handleValues} />
            <button className='btn btnSH'>Aceptar</button>
            <Load loading={loading} />
        </form>
    );
};

export default ShiftConf;

function formatText(text) {
    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "");
};