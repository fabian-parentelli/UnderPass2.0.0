import './moreTime.scss';
import { useState } from 'react';
import Price from '../Price/Price';
import Switch from '@mui/material/Switch';
import AlertDialog from '../../utils/AlertDialog';
import { imgages } from '../../../utils/imagesData.utils.js';
import { useCartContext } from '../../../context/CartContext';
import ModalCustom from '../../utils/ModalCustom/ModalCustom';
import { newApplicationApi } from '../../../helpers/applications/newApplication.api.js';

const MoreTime = ({ moreTime, closeMoreTime, data, setLoading, setMoreTime }) => {

    const { addToCart } = useCartContext();
    const [isInPortal, setIsInPortal] = useState(false);
    const [dataPrice, setDataPrice] = useState(null);
    const [values, setValues] = useState({ days: '', inPortal: isInPortal });
    const [message, setMessage] = useState({ open: false, title: '', content: '' });

    const handleSwitch = (e) => {
        setIsInPortal(e.target.checked);
        setValues({ ...values, inPortal: e.target.checked });
    };
    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    const handleApplication = async () => {
        setLoading(true);
        const info = {
            title: data.title,
            days: values.days,
            inPortal: values.inPortal,
            userId: data.application.userId || '',
            country: data.country,
            type: `${data.type}MoreTime`,
            applicationId: data._id,
            text: 'Agregar mas tiempo'
        };
        const formData = new FormData();
        for (const key in info) if (info.hasOwnProperty(key)) formData.append(key, info[key]);
        const response = await newApplicationApi(formData);
        if (response.status === 'success') {
            setMessage({
                open: true,
                title: 'Recibimos con éxito tu solicitud',
                content: `Una vez realizado el pago nuestro personal de artística, revisará tu solicitud, en menos de 24 horas hábiles tu ${data.type} ya tendrá mas tiempo.`
            });
            addToCart({
                _id: response.result._id,
                quantity: response.result.days,
                price: isInPortal ? dataPrice.portal : dataPrice.price,
                is: `${data.type}MoreTime`,
                name: response.result.title,
                description: `Agregar mas tiempo al ${data.type}`,
                img: imgages.moreTime,
                inPortal: values.inPortal,
                data: dataPrice
            });
        } else console.log(response);
        setTimeout(() => { setLoading(false); setMoreTime(false) }, 2000);
    };

    return (
        <ModalCustom modalIsOpen={moreTime} closeModal={closeMoreTime} >
            <div className='moreTime'>
                <h2>Agregar más tiempo</h2>

                <div className='moreTimeSwitch'>
                    <p>General</p>
                    <Switch value={isInPortal} onChange={handleSwitch} />
                    <p>En la portada</p>
                </div>

                <Price
                    country={data.country} handleChange={handleChange} values={values} setDataPrice={setDataPrice} name={data.type} dataPrice={isInPortal}
                />

                <button className='btn btnA' onClick={handleApplication}>Solicitar</button>
            </div>
            <AlertDialog message={message} setMessage={setMessage} />
        </ModalCustom>
    );
};

export default MoreTime;