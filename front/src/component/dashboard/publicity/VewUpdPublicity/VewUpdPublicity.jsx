import './vewUpdPuiblicity.scss';
import BigImg from '../../../utils/BigImg/BigImg';
import bannersCategory from '../../../../utils/bannersCategory.utils.js';
import { useState } from 'react';
import { updPublicityApi } from '../../../../helpers/publicity/updPublicity.api.js';
import { updActivePublicityApi } from '../../../../helpers/publicity/updActivePublicity.api.js';
import { updPortalPublicitaryApi } from '../../../../helpers/publicity/updPortalPublicitary.api.js';

const VewUpdPuiblicity = ({ publicity, setPublicity, setLoading }) => {

    const [values, setValues] = useState({})

    const handleChange = (e, id) => {
        const { name, value } = e.target;
        setValues(prevValues => ({ ...prevValues, [id]: { ...prevValues[id], [name]: value } }));
    };

    const handleBlur = async (id) => {
        setLoading(true);
        const response = await updPublicityApi(values[id], id);
        if (response.status === 'success') {
            setLoading(false)
        } else console.log(response);
        setLoading(false);
    };

    const handleActive = async (id) => {
        setLoading(true);
        const response = await updActivePublicityApi(id);
        if (response.status === 'success') {
            const publicities = { ...publicity }
            const index = publicities.docs.findIndex(pub => pub._id == id);
            publicities.docs[index] = response.result;
            setPublicity(publicities);
        } else console.log(response);
        setLoading(false);
    };
    
    const handlePortal = async (id) => {
        setLoading(true);
        const response = await updPortalPublicitaryApi(id);
        if (response.status === 'success') {
            const publicities = { ...publicity }
            const index = publicities.docs.findIndex(pub => pub._id == id);
            publicities.docs[index] = response.result;
            setPublicity(publicities);
        } else console.log(response);
        setLoading(false);
    };

    return (
        <div className='vewUpdPuiblicity'>
            <table>
                <thead>
                    <tr>
                        <th>img</th>
                        <th>titulo</th>
                        <th>categoría</th>
                        <th>links</th>
                        <th>carpeta</th>
                        <th>País</th>
                        <th>cierre</th>
                        <th>Tipo</th>
                        <th>Portal</th>
                        <th>activo</th>
                    </tr>
                </thead>
                <tbody>
                    {publicity && publicity.docs.map((val) => (
                        <tr key={val._id}>
                            <td><BigImg img={val.imgUrl[0]} border={false} /></td>
                            <td>{val.title}</td>
                            <td>{bannersCategory(val.category)}</td>
                            <td style={{ width: '0' }}>
                                <input
                                    type="text"
                                    name="links"
                                    value={values[val._id]?.links || val.links}
                                    style={{ width: '100px' }}
                                    onChange={(e) => handleChange(e, val._id)}
                                    onBlur={() => handleBlur(val._id)}
                                />
                            </td>
                            <td>{val.folders}</td>
                            <td>{val.country}</td>
                            <td style={{ width: '0' }}>
                                <input
                                    type="text"
                                    name="end"
                                    value={values[val._id]?.end || val.end || ''}
                                    style={{ width: '190px' }}
                                    onChange={(e) => handleChange(e, val._id)}
                                    onBlur={() => handleBlur(val._id)}
                                />
                            </td>
                            <td>{val.type}</td>
                            <td
                                style={{ color: val.inPortal ? 'red' : 'green' }}
                                className='tdBack'
                            onClick={() => handlePortal(val._id)}
                            >
                                {val.inPortal ? 'Portal' : 'Body'}
                            </td>
                            <td
                                style={{ color: val.active ? 'green' : 'red' }}
                                className='tdBack'
                                onClick={() => handleActive(val._id)}
                            >
                                {val.active ? 'SI' : 'NO'}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default VewUpdPuiblicity;