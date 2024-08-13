import './postApplication.scss';
import { useState } from 'react';
import Price from '../../Price/Price';
import Switch from '@mui/material/Switch';
import { useNavigate } from 'react-router-dom';
import AlertDialog from '../../../utils/AlertDialog';
import CloudFile from '../../../utils/CloudFile/CloudFile';
import { imgages } from '../../../../utils/imagesData.utils.js';
import TextApplication from '../../TextApplication/TextApplication';
import { useCartContext } from '../../../../context/CartContext.jsx';
import CategorySelected from '../../CategorySelected/CategorySelected';
import { newApplicationApi } from '../../../../helpers/applications/newApplication.api.js';

const PostApplication = ({ userId, type, country, setLoading }) => {

    const navigate = useNavigate();
    const { addToCart } = useCartContext();
    const [isWorkOur, setIsWorkOur] = useState(false);
    const [isInPortal, setIsInPortal] = useState(false);
    const [formData, setFormData] = useState(new FormData());
    const [values, setValues] = useState({
        title: '', category: '', days: '', isWorkOur: isWorkOur, text: '',
        userId: userId, country: country, type: type, inPortal: isInPortal
    });
    const [dataPrice, setDataPrice] = useState(0);
    const [message, setMessage] = useState({ open: false, title: '', content: '' });

    const handleSwitchChange = (event) => {
        setIsWorkOur(event.target.checked);
        setValues({ ...values, isWorkOur: event.target.checked });
    };
    const handleIsinPortal = (e) => {
        setIsInPortal(e.target.checked); setValues({ ...values, inPortal: e.target.checked });
    };
    const handleFileChange = (data) => setFormData(data);
    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        for (const field in values) formData.set(field, values[field]);
        const response = await newApplicationApi(formData);
        if (response.status === 'success') {
            setMessage({
                open: true,
                title: 'Recibimos con éxito tu solicitud',
                content: `Una vez realizado el pago nuestro personal de artística, revisará tu solicitud, en menos de 24 horas hábiles tu ${type} ya se va a encontrar habilitado.`
            });
            addToCart({
                _id: response.result._id,
                quantity: response.result.days,
                price: dataPrice.price,
                is: type,
                name: response.result.title,
                inPortal: values.inPortal,
                description: `Solicitud de ${type}`,
                img: imgages.cartBanner,
                data: dataPrice
            });
            setTimeout(() => {
                const path = localStorage.getItem('path');
                if (path) { localStorage.removeItem('path'); navigate(`/${path}`) }
                else navigate('/cart');
            }, 2000);
        } else console.log(response);
        setLoading(false);
    };

    return (
        <div className='postApplication'>
            <p className='postApplicationP'>{getData(type)}</p>
            <form onSubmit={handleSubmit}>
                <div className='formWantBannerDiv'>
                    <label>Título</label>
                    <input type="text" name='title' onChange={handleChange} required />
                </div>
                <div className='formWantBannerDiv'>
                    <CategorySelected handleChange={handleChange} />
                </div>

                {type !== 'banners' &&
                    <div div className='formWantBannerRow'>
                        <p>General</p>
                        <Switch checked={isInPortal} onChange={handleIsinPortal} />
                        <p>Portal</p>
                    </div>
                }

                <Price
                    country={country} handleChange={handleChange} values={values} setDataPrice={setDataPrice} name={type} dataPrice={isInPortal}
                />

                <div className='formWantBannerRow'>
                    <p>Mi banner</p>
                    <Switch checked={isWorkOur} onChange={handleSwitchChange} />
                    <p>Banner de UnderPass</p>
                </div>

                {isWorkOur && <TextApplication handleChange={handleChange} />}
                <div className='postApplicationCloud'>
                    <CloudFile onChange={handleFileChange} folderName={`getApplication/${userId}`} contClass='cfRect' />
                    <p>Aqui puedes subir las imagenes al mismo tiempo JPG o PNG.</p>
                </div>

                <button className='btn btnB'>Solicitar</button>
            </form >
            <AlertDialog message={message} setMessage={setMessage} />
        </div >
    );
};

export default PostApplication;

function getData(type) {

    const data = {
        'banners': () => { return `Podemos hacer tu banner o puedes crear el tuyo propio, tienes que respetar las medidas. Debes de hacer 2 banners. Uno que la medida sea 1583*380px y otro que sea de 1080*1080px. Recuerda que este es revisado por nuestro personal de artística para mejorar su visualización. Una vez que esté listo se pondrá en marcha. La cantidad de días seleccionados para que se vea tu banner empieza a correr una vez que el banner esté exhibido.` },
        'cards': () => { return 'Podemos hacer tu Cards o puedes crear el tuyo propio, tienes que respetar las medidas. La medida es 250*400px. Recuerda que este es revisado por nuestro personal de artística para mejorar su visualización. Una vez que esté listo se pondrá en marcha. La cantidad de días seleccionados para que se vea tu cards empieza a correr una vez que el banner esté exhibido.' },
        'separator': () => { return 'Podemos hacer tu separador o puedes crear el tuyo propio, tienes que respetar las medidas. La medida es 1583*150px. Recuerda que este es revisado por nuestro personal de artística para mejorar su visualización. Una vez que esté listo se pondrá en marcha. La cantidad de días seleccionados para que se vea tu separador empieza a correr una vez que el banner esté exhibido.' }
    };
    return (data[type])();
};