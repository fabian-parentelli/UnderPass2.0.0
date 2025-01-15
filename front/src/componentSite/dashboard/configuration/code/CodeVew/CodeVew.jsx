import './codeVew.scss';
import { useState } from 'react';
import CodeForm from '../CodeForm/CodeForm';
import { getCodeApi } from '../../../../../helpers/code/getCodes.api.js';
import { updCodeApi } from '../../../../../helpers/code/updCodes.api.js';
import SnackbarAlert from '../../../../../component/utils/SnackbarAlert.jsx';

const CodeVew = ({ setLoading, setVew }) => {

    const [codes, setCodes] = useState(null);
    const [messages, setMessages] = useState('');
    const [message, setMessage] = useState({ status: '', mess: '' });
    const [open, setOpen] = useState(false);

    const handleChange = async (e) => {
        let name = '';
        if (e.target.value.length > 3) name = e.target.value
        else name = '';
        if (name.length > 0) {
            const response = await getCodeApi(name);
            if (response.status === 'success') setCodes(response.result);
            else {
                setMessages(response);
                setCodes(null);
            };
        };
    };

    const handleCodeChange = (e) => setCodes({ ...codes, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const response = await updCodeApi(codes);
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
        <div className='codeVew'>
            <input type="search" placeholder='nombre' onChange={handleChange} />
            {codes === null
                ? <p>{messages}</p>
                : <CodeForm
                    values={codes}
                    handleCodeChange={handleCodeChange}
                    handleSubmit={handleSubmit}
                    buttonName='Actualizar'
                />
            }

            <SnackbarAlert message={message} open={open} />
        </div>
    );
};

export default CodeVew;