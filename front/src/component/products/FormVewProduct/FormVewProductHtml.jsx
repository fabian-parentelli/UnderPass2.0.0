import './formVewProductHtml.scss';
import { Fragment, useState } from 'react';
import BigImg from '../../utils/BigImg/BigImg';

const FormVewProductHtml = ({ products, handleChange, handleUpdate }) => {

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
                                        onBlur={(e) => handleUpdate(e, prod._id)}
                                        style={{ width: '150px' }}
                                    />
                                </td>
                                <td>$
                                    <input type="text"
                                        name='price'
                                        value={prod.price || ''}
                                        onChange={(e) => handleChange(e, prod._id, 'price')}
                                        onBlur={(e) => handleUpdate(e, prod._id)}
                                        style={{ width: '80px' }}
                                    />
                                </td>
                                <td>
                                    <input type="text"
                                        name='quantity'
                                        value={prod.quantity || ''}
                                        onChange={(e) => handleChange(e, prod._id, 'quantity')}
                                        onBlur={(e) => handleUpdate(e, prod._id)}
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

                                    <td colSpan="8">
                                        {/* 
                                            Estoy aca seguir generado la info
                                            Darle estylo 
                                            hacer que funcione los update.......
                                        */}
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