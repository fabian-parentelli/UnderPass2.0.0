import './formVewProductHtml.scss';
import Switch from '@mui/material/Switch';
import { Fragment, useState } from 'react';
import BigImg from '../../utils/BigImg/BigImg';
import { useLoginContext } from '../../../context/LoginContext';
import CloudFile from '../../utils/CloudFile/CloudFile';

const FormVewProductHtml = ({
    products, handleChange, handleDescription, handleLocation, handleSwitchChange, handleUpdate }) => {

    const { user } = useLoginContext();
    const [vew, setVew] = useState(null);
    const handleInfo = (id) => setVew(vew === id ? null : id);

    return (
        <div className='formVewProductHtml'>
            <table>
                <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th>Información</th>
                        <th>Activo</th>
                    </tr>
                </thead>
                <tbody>
                    {products && products.map((prod) => (
                        <Fragment key={prod._id}>
                            <tr>
                                <td><BigImg img={prod.img[0].imgUrl} border={false} /></td>
                                <td>
                                    <input type="text"
                                        name='name'
                                        value={prod.name || ''}
                                        onChange={(e) => handleChange(e, prod._id, 'name')}
                                        onBlur={(e) => handleUpdate(prod._id)}
                                        style={{ width: '150px' }}
                                    />
                                </td>
                                <td>$
                                    <input type="text"
                                        name='price'
                                        value={prod.price || ''}
                                        onChange={(e) => handleChange(e, prod._id, 'price')}
                                        onBlur={(e) => handleUpdate(prod._id)}
                                        style={{ width: '80px' }}
                                    />
                                </td>
                                <td>
                                    <input type="text"
                                        name='quantity'
                                        value={prod.quantity || ''}
                                        onChange={(e) => handleChange(e, prod._id, 'quantity')}
                                        onBlur={(e) => handleUpdate(prod._id)}
                                        style={{ width: '40px', marginRight: '3px' }}
                                    />
                                    unid.
                                </td>
                                <td
                                    onClick={() => handleInfo(prod._id)}
                                    className='formVewProductHtmlInf'
                                >Ver</td>
                                <td style={{ color: prod.active ? 'green' : 'red' }} >
                                    {prod.active ? 'SI' : 'NO'}
                                </td>
                            </tr>
                            {vew === prod._id && (
                                <tr className='expandRow'>
                                    <td colSpan="6">

                                        <p><strong>Fecha de creación:</strong> {new Date(prod.date).toLocaleDateString()}</p>

                                        <div className='expandRowDiv'>
                                            <label><strong>Descripción corta</strong></label>
                                            <input
                                                type="text"
                                                name='small'
                                                value={prod?.description?.small || ''}
                                                onChange={(e) => handleDescription(e, prod._id, 'small')}
                                                onBlur={(e) => handleUpdate(prod._id)}
                                                style={{ width: '200px', marginRight: '3px' }}
                                            />
                                        </div>

                                        <p><strong>Carpeta de imagens:</strong> {prod.folderName}</p>

                                        <div className='expandRowDiv'>
                                            <label><strong>Descripción larga</strong></label>
                                            <textarea
                                                name='long'
                                                value={prod?.description?.long || ''}
                                                onChange={(e) => handleDescription(e, prod._id, 'long')}
                                                onBlur={(e) => handleUpdate(prod._id)}
                                                style={{ width: '100%', marginRight: '3px', minHeight: '100px' }} // Ajusta el tamaño según sea necesario
                                            />
                                        </div>

                                        <div className='expandRowDiv'>
                                            <label><strong>
                                                {user.data.location.country === 'AR' ? 'Provincia' : 'Departamento'}
                                            </strong></label>
                                            <input
                                                type="text"
                                                name='province'
                                                value={prod?.location?.province || ''}
                                                onChange={(e) => handleLocation(e, prod._id, 'province')}
                                                onBlur={(e) => handleUpdate(prod._id)}
                                                style={{ width: '200px', marginRight: '3px' }}
                                            />
                                        </div>

                                        <div className='expandRowDiv'>
                                            <label><strong>Ciudad</strong></label>
                                            <input
                                                name='city'
                                                value={prod?.location?.city || ''}
                                                onChange={(e) => handleLocation(e, prod._id, 'city')}
                                                onBlur={(e) => handleUpdate(prod._id)}
                                                style={{ width: '200px', marginRight: '3px' }}
                                            />
                                        </div>

                                        <div className='expandRowSwitch'>
                                            <label><strong>Ver en tu sitio</strong></label>
                                            <p>No <Switch
                                                checked={prod.inSite}
                                                onChange={(e) => handleSwitchChange(e, prod._id)}
                                            /> Si</p>
                                        </div>

                                        <div className='expandRowImg'>
                                            {prod.img.map((img) => (
                                                <Fragment key={img._id}>
                                                    {img.active &&
                                                        <div className='expandRowImgIn'>
                                                            <BigImg img={img.imgUrl} />
                                                            <button className='btn btnE'>Desactivar</button>
                                                        </div>
                                                    }
                                                </Fragment>
                                            ))}
                                            <CloudFile onChange={''} folderName={''} contClass='cfCircle' />
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FormVewProductHtml;