import './shiftConf.scss';
import Load from '../../utils/Load';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ShiftRooms from './ShiftRooms/ShiftRooms';
import ShiftCompany from './ShiftCompany/ShiftCompany';
import ShiftSeccion from './ShiftSeccion/ShiftSeccion';
import ShiftSections from './ShiftSections/ShiftSections';
import SnackbarAlert from '../../utils/SnackbarAlert.jsx';
import { newShiftconfApi } from '../../../helpers/shiftsconf/newShiftconf.api.js';
import { getShiftconfApi } from '../../../helpers/shiftsconf/getShiftconf.api.js';

const ShiftConf = ({ userId }) => {

    const navigate = useNavigate();
    const [files, setFiles] = useState([]);
    const [open, setOpen] = useState(false);
    const [updateData, setUpdateData] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ status: '', mess: '' });
    const [values, setValues] = useState({ userId, location: { country: localStorage.getItem('country') }, rooms: 1 });    

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getShiftconfApi({ userId });
            if (response.status === 'success') {
                setValues(response.result.docs[0]);
                setUpdateData(true);
            } else {
                setValues({ userId, location: { country: localStorage.getItem('country') }, rooms: 1 });
                setMessage({ status: 'error', mess: response });
                setOpen(true);
                setTimeout(() => { setOpen(false) }, 2000)
            };
            setLoading(false);
        }; fetchData();
    }, []);

    const handleValues = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        let formdata = new FormData();
        const folderName = formatText(values?.title);
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
            setOpen(true);
            setMessage({ status: 'success', mess: 'Configuración exitosa' });
        } else {
            setOpen(true);
            setMessage({ status: 'error', mess: response });
        };
        setLoading(false);
        setTimeout(() => { setOpen(false) }, 2000);
    };

    return (
        <form className='shiftConf' onSubmit={handleSubmit}>
            <p>Configuración de tu servicio de turnos.</p>
            <p>Puedes ver nuestra <span className='colSH' onClick={() => navigate('/help')}>Ayuda</span> con toda la info detallada e incluso ver un <span className='colSH' onClick={() => navigate('/help')}>video tutorial</span>.</p>
            <ShiftCompany values={values} setValues={setValues} setFiles={setFiles} handleValues={handleValues} />
            <ShiftRooms values={values} setValues={setValues} handleValues={handleValues} updateData={updateData} />
            <ShiftSeccion values={values} setValues={setValues} handleValues={handleValues} />
            <ShiftSections values={values} setValues={setValues} handleValues={handleValues} />
            <button className='btn btnSH'>
                {values?._id ? 'Actualizar' : 'Configurar'}
            </button>
            <Load loading={loading} />
            <SnackbarAlert message={message} open={open} />
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