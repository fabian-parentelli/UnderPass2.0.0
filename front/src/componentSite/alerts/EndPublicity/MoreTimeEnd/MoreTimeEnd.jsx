import './moreTimeEnd.scss';
import { useState } from 'react';
import Switch from '@mui/material/Switch';
import { imgages } from '../../../../utils/imagesData.utils.js';
import { useCartContext } from '../../../../context/CartContext';
import Price from '../../../../component/advertisting/Price/Price';
import SnackbarAlert from '../../../../component/utils/SnackbarAlert';
import { newApplicationApi } from '../../../../helpers/applications/newApplication.api.js';

const MoreTimeEnd = ({ data }) => {

    const { addToCart } = useCartContext();
    const [isInPortal, setIsInPortal] = useState(false);
    const [dataPrice, setDataPrice] = useState(null);
    const [costPerDay, setCostPerDay] = useState(0);
    const [values, setValues] = useState({ days: '', inPortal: isInPortal });
    const [isButton, setIsButton] = useState(false);
    const [message, setMessage] = useState({ status: '', mess: '' });
    const [open, setOpen] = useState(false);

    const handleSwitch = (e) => {
        setIsInPortal(e.target.checked);
        setValues({ ...values, inPortal: e.target.checked });
    };

    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    const handleApplication = async () => {
        setIsButton(true);
        const info = {
            title: data.title, days: values.days, inPortal: values.inPortal, userId: data.application.userId || '',
            country: data.country, type: `${data.type}MoreTime`, applicationId: data._id, text: 'Agregar mas tiempo'
        };
        const formData = new FormData();
        for (const key in info) if (info.hasOwnProperty(key)) formData.append(key, info[key]);
        const response = await newApplicationApi(formData);
        if (response.status === 'success') {
            setMessage({ status: 'success', mess: 'Solicitud exitosa, pendiente de pago' });
            setOpen(true);
            addToCart({
                _id: response.result._id,
                quantity: response.result.days,
                price: costPerDay,
                is: `moreTime`,
                name: response.result.title,
                description: `Agregar mas tiempo al ${data.type}`,
                img: imgages.moreTime,
                inPortal: values.inPortal,
                data: dataPrice
            });
        } else console.log(response);
        setTimeout(() => { setOpen(false) }, 3000);
    };

    return (
        <div className='moreTimeEnd'>
            <div className='moreTimeSwitch'>
                <p>General</p>
                <Switch value={isInPortal} onChange={handleSwitch} />
                <p>En la portada</p>
            </div>

            <Price
                country={data.country} handleChange={handleChange} values={values} setDataPrice={setDataPrice}
                name={data.type} dataPrice={isInPortal} setCostPerDay={setCostPerDay} costPerDay={costPerDay}
            />

            <button className='btnCard' onClick={handleApplication} disabled={isButton}>
                {isButton ? 'Hecho' : 'Solicitar'}
            </button>
            <SnackbarAlert message={message} open={open} />
        </div>
    );
};

export default MoreTimeEnd;