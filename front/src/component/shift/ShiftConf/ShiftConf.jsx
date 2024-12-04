import './shiftConf.scss';
import { useState } from 'react';
import ShiftRooms from './ShiftRooms/ShiftRooms';
import ShiftCompany from './ShiftCompany/ShiftCompany';
import ShiftSeccion from './ShiftSeccion/ShiftSeccion';
import ShiftSections from './ShiftSections/ShiftSections';

const ShiftConf = ({ userId }) => {

    const [files, setFiles] = useState([]);
    const [values, setValues] = useState({ userId, location: localStorage.getItem('country'), rooms: 1 });

    const handleValues = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(values);
    };

    return (
        <form className='shiftConf' onSubmit={handleSubmit}>
            <ShiftCompany values={values} setValues={setValues} setFiles={setFiles} handleValues={handleValues} />
            <ShiftRooms values={values} setValues={setValues} handleValues={handleValues} />
            <ShiftSeccion values={values} setValues={setValues} handleValues={handleValues} />
            <ShiftSections values={values} setValues={setValues} handleValues={handleValues} />
            <button className='btn btnSH'>Aceptar</button>
        </form>
    );
};

export default ShiftConf;