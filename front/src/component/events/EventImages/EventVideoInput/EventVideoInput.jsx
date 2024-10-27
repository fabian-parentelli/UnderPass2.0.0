import './eventVideoInput.scss';
import { useState } from 'react';
import SnackbarAlert from '../../../utils/SnackbarAlert';
import { updEventApi } from '../../../../helpers/event/updEvent.api.js';

const EventVideoInput = ({ values, setValues }) => {

    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState({ status: '', mess: '' });

    const handleChangue = (e) => setValues({ ...values, video: e.target.value });

    const handleBlur = async () => {
        const response = await updEventApi(values);
        if (response.status === 'success') {
            setMessage({ status: 'success', mess: 'Video actualizado correctamente' });
            setOpen(true);
        } else console.error(response.error);
        setTimeout(() => { setOpen(false) }, 2000);
    };

    return (
        <div className='eventVideoInput'>

            <h4>Sube un video promocional</h4>

            <div className='eventImagesVideo'>
                <label>Video promocional</label>
                <input
                    type="text"
                    placeholder='Ejemplo https://www.youtube.com/watch?v=d6RfiS15s3U'
                    onChange={handleChangue}
                    value={values.video || ''}
                    onBlur={handleBlur}
                />
                <p>Sube un video en donde promocionas el evento, es opcional.</p>
            </div>
            <SnackbarAlert message={message} open={open} />
        </div>
    );
};

export default EventVideoInput;