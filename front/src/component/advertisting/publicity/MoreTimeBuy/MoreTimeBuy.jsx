import './moreTimeBuy.scss';
import { useState } from 'react';
import Price from '../../Price/Price';
import { Spinner } from 'faradaycomp';
import Switch from '@mui/material/Switch';
import { imgages } from '../../../../utils/imagesData.utils.js';
import { useCartContext } from '../../../../context/CartContext';
import { newApplicationApi } from '../../../../helpers/applications/newApplication.api.js';

const MoreTimeBuy = ({ data, setMoreTime }) => {

    const { addToCart } = useCartContext();
    const [isInPortal, setIsInPortal] = useState(false);
    const [values, setValues] = useState({ days: '', inPortal: isInPortal });
    const [dataPrice, setDataPrice] = useState(null);
    const [costPerDay, setCostPerDay] = useState(0);
    const [laoding, setLoading] = useState(false);

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
            })
        } else console.error(response.error);
        setTimeout(() => { setLoading(false); setMoreTime({ open: false, vew: null }) }, 2000);
    };

    return (
        <div className='moreTimeBuy'>
            <h2>Agregar más tiempo</h2>
            {laoding ?
                <>
                    <Spinner color={'#f45c14'} />
                    <p>solicitud agregada al carrito</p>
                </>
                : <>
                    <div className='moreTimeSwitch'>
                        <p>General</p>
                        <Switch value={isInPortal} onChange={handleSwitch} />
                        <p>En la portada</p>
                    </div>
                    <Price country={data.country} handleChange={handleChange} values={values} setDataPrice={setDataPrice}
                        name={data.type} dataPrice={isInPortal} setCostPerDay={setCostPerDay} costPerDay={costPerDay} scss='center'
                    />
                    <button className='btn btnA' onClick={handleApplication}>Solicitar</button>
                </>
            }
        </div>
    );
};

export default MoreTimeBuy;