import './newProductC.scss';
import { useState } from 'react';
import Switch from '@mui/material/Switch';
import { useNavigate } from 'react-router-dom';
import CloudFile from '../../utils/CloudFile/CloudFile';
import { newProductsApi } from '../../../helpers/products/newProducts.api';
import { useLoginContext } from '../../../context/LoginContext';

const NewProductC = ({ userId, setOpen, setMessage, setLoading }) => {

    const [checked, setChecked] = useState(false);
    const [formData, setFormData] = useState(null);
    const [values, setValues] = useState({
        userId: userId, name: '', price: '',
        description: { small: '', long: '' },
        quantity: '', inSite: checked
    });
    const { user } = useLoginContext();
    const navigate = useNavigate();

    const handleFileChange = (data) => setFormData(data);
    const handleSwitchChange = (e) => {
        const isChecked = e.target.checked;
        setChecked(isChecked);
        setValues(prevValues => ({ ...prevValues, inSite: isChecked }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const keys = name.split('.');
        if (keys.length > 1) {
            setValues(prevValues => {
                const nestedValues = { ...prevValues[keys[0]], [keys[1]]: value };
                return { ...prevValues, [keys[0]]: nestedValues };
            });
        } else setValues({ ...values, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        for (const field in values) {
            if (field === 'description') formData.set(field, JSON.stringify(values[field]));
            else formData.set(field, values[field]);
        };
        const response = await newProductsApi(formData);
        if (response.status === 'success') {
            setOpen(true);
            setMessage({ status: 'success', mess: 'Producto creado correctamente' });
            if (user.data._id === userId) setTimeout(() => { navigate('/profile') }, 2000);
            else setTimeout(() => { navigate('/') }, 2000);
        } else console.log(response);
        setLoading(false);
    };

    return (
        <div className='newProductC'>

            <div className='newProductCDiv'>
                <h2>Crear producto</h2>
                <p>Completa todos los campos</p>
                <CloudFile onChange={handleFileChange} folderName={`product/${userId}`} contClass='cfRect' />
            </div>

            <form className='newProductCForm' onSubmit={handleSubmit}>

                <div className='newProductCFormA'>

                    <div className='newProductCFormB'>

                        <div>
                            <label>Nombre</label>
                            <input type="text" name='name' placeholder='ej. Remera negra' onChange={handleChange} />
                        </div>

                        <div>
                            <label>Descripción corta</label>
                            <input type="text" name='description.small' placeholder='ej. Varios talles' onChange={handleChange} />
                        </div>
                    </div>

                    <div className='newProductCFormB'>
                        <div>
                            <label>Precio</label>
                            <input type="text" name='price' placeholder='En tu moneda local' onChange={handleChange} />
                        </div>

                        <div>
                            <label>Stock</label>
                            <input type="text" name='quantity' placeholder='Cantidad disponible' onChange={handleChange} />
                        </div>
                    </div>
                </div>

                <div className='newProductCSwitch'>
                    <label>Visible en ...</label>
                    <div>
                        <p>Solo el mercado</p>
                        <Switch
                            checked={checked}
                            onChange={handleSwitchChange}
                        />
                        <p>Mercado y Mi sitio</p>
                    </div>
                    <p className='newProductCSwitchText'>Tu producto se mostrará en el mercado, pero si quieres que aparezca <br /> en tu sitio  debes seleccionar este swich</p>
                </div>

                <div className='newProductText'>
                    <label>Descripción Larga</label>
                    <textarea name='description.long' placeholder='Descripción del producto' onChange={handleChange}></textarea>
                </div>

                <button className='btn btnB newProductCButton'>Crear</button>
            </form>

        </div>
    );
};

export default NewProductC;