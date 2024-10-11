import './createPresets.scss';
import { useState } from 'react';
import SnackbarAlert from '../../../../../component/utils/SnackbarAlert';
import CloudFile from '../../../../../component/utils/CloudFile/CloudFile';
import { newPresetApi } from '../../../../../helpers/images/preset/newPresets.api.js';

const CreatePresets = ({ setLoading, setVew }) => {

    const [formData, setFormData] = useState(null);
    const [values, setValues] = useState('');
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState({ status: '', mess: '' });

    const handleFileChange = (data) => setFormData(data);
    const handleChangue = (e) => setValues(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        formData.set('name', values);
        const response = await newPresetApi(formData);
        if (response.status === 'success') {
            setMessage({ status: 'success', mess: 'Preset guardado con exitoso' });
            setOpen(true);
        } else {
            setMessage({ status: 'error', mess: 'No se puede guardar el Preset' });
            setOpen(true);
        };
        setLoading(false);
        setTimeout(() => { setVew(true) }, 2000);
    };

    return (
        <form className='createPresets' onSubmit={handleSubmit}>
            <h3>Crear presets</h3>
            <p>Las dimenciones deben de ser 250px por 250px.</p>
            <p>Igual que un post de Instagrame.</p>
            <CloudFile onChange={handleFileChange} folderName='preset' contClass='cfRect' />
            <input type="text" placeholder='Nombre' onChange={handleChangue} />
            <button className='btn btnB'>Subir</button>
            <SnackbarAlert message={message} open={open} />
        </form>
    );
};

export default CreatePresets;