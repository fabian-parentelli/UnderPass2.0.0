import './shiftConf.scss';
import { useState } from 'react';
import ShiftCompany from './ShiftCompany/ShiftCompany';

const ShiftConf = ({ userId }) => {

    const [values, setValues] = useState({ userId, location: localStorage.getItem('country') });


    console.log(values);


    return (
        <div className='shiftConf'>
            <ShiftCompany />
            <ShiftCompany />
        </div>
    );
};

export default ShiftConf;