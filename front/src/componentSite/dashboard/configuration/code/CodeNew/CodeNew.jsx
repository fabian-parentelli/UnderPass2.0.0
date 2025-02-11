import { useState } from 'react';
import CodeForm from '../CodeForm/CodeForm';
import { newCodeApi } from '../../../../../helpers/code/newCode.api.js';
import SnackbarAlert from '../../../../../component/utils/SnackbarAlert.jsx';

const CodeNew = ({ setVew, setLoading }) => {

    const [values, setValues] = useState({
        route: '', name: '', type: '', code: '', description: '', version: ''
    });
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);

    const handleCodeChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const response = await newCodeApi(values);
        if (response.status === 'success') {
            setLoading(false);
            setMessage({ status: 'success', mess: 'Registro exitoso' });
            setOpen(true);
            setTimeout(() => { setVew(null); }, 2000)
        } else {
            setLoading(false);
            setMessage({ status: 'error', mess: response });
            setOpen(true);
        };
    };

    return (
        <>
            <CodeForm
                values={values}
                handleCodeChange={handleCodeChange}
                handleSubmit={handleSubmit}
                buttonName='Agregar'
            />

            <SnackbarAlert message={message} open={open} />
        </>
    );
};

export default CodeNew;