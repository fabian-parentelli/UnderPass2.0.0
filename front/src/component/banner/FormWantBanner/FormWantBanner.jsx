import './formWantBanner.scss';
import { useState } from 'react';
import Price from './Price/Price';
import Load from '../../utils/Load.jsx';
import Switch from '@mui/material/Switch';
import MyBanner from './MyBanner/MyBanner';
import { useNavigate } from 'react-router-dom';
import AlertDialog from '../../utils/AlertDialog';
import UnderBanner from './UnderBanner/UnderBanner';
import { newApplBannerApi } from '../../../helpers/applications/newApplBanner.api.js';
import CategorySelected from '../../dashboard/banner/CategorySelected/CategorySelected';
import { useCartContext } from '../../../context/CartContext.jsx';

const FormWantBanner = ({ user, country }) => {

    const { addToCart } = useCartContext();
    const navigate = useNavigate();
    const [dataPrice, setDataPrice] = useState(0);
    const [formData, setFormData] = useState(new FormData());
    const [underBanner, setUnderBanner] = useState(false);
    const [values, setValues] = useState({
        title: '', category: '', days: '', underBanner: underBanner, textBanner: '',
        user: user._id, country: country, type: 'banner'
    });
    const [message, setMessage] = useState({ open: false, title: '', content: '' });
    const [loading, setloading] = useState(false);

    const handleSwitchChange = (event) => {
        setUnderBanner(event.target.checked);
        setValues({ ...values, underBanner: event.target.checked });
    };
    const handleFileChange = (data) => setFormData(data);
    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setloading(true);
        for (const field in values) formData.set(field, values[field]);
        const response = await newApplBannerApi(formData);
        if (response.status === 'success') {
            setMessage({
                open: true,
                title: 'Recibimos con éxito tu solicitud',
                content: 'Una vez realizado el pago nuestro personal de artística, revisará tu solicitud, en menos de 24 horas hábiles tu banner ya se va a encontrar habilitado.'
            });
            const path = localStorage.getItem('path');
            if (path) { localStorage.removeItem('path'); navigate(`/${path}`) };

            console.log(response.result.days);

            addToCart({
                id: response.result._id,
                quantity: response.result.days,
                price: dataPrice,
                is: 'banner',
                name: response.result.title,
                description: 'Solicitud de banner',
                img: 'https://res.cloudinary.com/dtzy75wyt/image/upload/v1720899516/banners/wnatToBanner/exave8yrcu9dpqtyalgo.png'
            });

            // Estoy acá -- La idea es agregar al carrito --

        } else console.log(response);
        setloading(false);
    };

    return (
        <div className='formWantBanner'>
            <p className='formWantBannerP'>Podempos hacer tu banner o puedes crear el tuyo propio, tienes que respetar las medidas. Debes de hacer 2 banners. Uno que la medida sea 1583*380px y otro que sea de 1080*1080px. Recuerda que este es revisado por nuestro personal de artística para mejorar su visualización. Una vez que esté listo se pondrá en marcha. La cantidad de días seleccionados para que se vea tu banner empieza a correr una vez que el banner esté exhibido.</p>
            <form onSubmit={handleSubmit}>
                <div className='formWantBannerDiv'>
                    <label>Título</label>
                    <input type="text" name='title' onChange={handleChange} required />
                </div>

                <div className='formWantBannerDiv'>
                    <CategorySelected handleChange={handleChange} />
                </div>

                <Price
                    country={country} handleChange={handleChange} values={values} setDataPrice={setDataPrice}
                />

                <div className='formWantBannerRow'>
                    <p>Mi banner</p>
                    <Switch checked={underBanner} onChange={handleSwitchChange} />
                    <p>Banner de UnderPass</p>
                </div>

                {underBanner && <UnderBanner handleChange={handleChange} />}

                <MyBanner handleFileChange={handleFileChange} user={user} />

                <button className='btn btnB'>Solicitar</button>
            </form>
            <AlertDialog message={message} setMessage={setMessage} />
            <Load loading={loading} />
        </div>
    );
};

export default FormWantBanner;