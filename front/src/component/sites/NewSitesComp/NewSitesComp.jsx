import './newSitesComp.scss';
import { useState } from 'react';
import NewPortal from '../newSiteSeccion/NewPortal/NewPortal';

const NewSitesComp = ({ userId }) => {

    const [formData, setFormData] = useState(new FormData());
    const [values, setValues] = useState({});

    const handleValues = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        formData.append('userId', userId);
        for (const field in values) formData.set(field, values[field]);

        formData.forEach((value, key) => { // Solo Visualiso esto se borra !!!
            console.log(`${key}:`, value); // Solo Visualiso esto se borra !!!
        });                                // Solo Visualiso esto se borra !!!
    };

    return (
        <form className='newSitesComp' onSubmit={handleSubmit}>
            <NewPortal formData={formData} values={values} handleValues={handleValues} />
            


            <div className='newSitesButton'>
                <button className='btn btnUS'>Crear</button>
            </div>
        </form>
    );
};

export default NewSitesComp;