import { useState } from 'react';
import BigImg from '../../../../../../component/utils/BigImg/BigImg.jsx';
import bannersCategory from '../../../../../../utils/bannersCategory.utils.js';
import { updBannerApi } from '../../../../../../helpers/images/banners/updBanner.api.js';

const PrintBanners = ({ banners, setLoading, handleActive }) => {

    const [values, setValues] = useState({});

    const handleChange = (e, id) => {
        const { name, value } = e.target;
        setValues(prevValues => ({ ...prevValues, [id]: { ...prevValues[id], [name]: value } }));
    };

    const handleBlur = async (id) => {
        setLoading(true);
        const response = await updBannerApi(values[id], id);
        if (response.status === 'success') {
            setLoading(false)
        } else console.log(response);
        setLoading(false);
    };

    return (
        <div style={{ margin: '1rem 0 2rem 0' }}>
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
                        <th>activo</th>
                    </tr>
                </thead>
                <tbody>
                    {banners && banners.map((ban) => (
                        <tr key={ban._id}>
                            <td><BigImg img={ban.imgUrl[1]} border={false} /></td>
                            <td>{ban.title}</td>
                            <td>{bannersCategory(ban.category)}</td>
                            <td style={{ width: '0' }}>
                                <input
                                    type="text"
                                    name="links"
                                    value={values[ban._id]?.links || ban.links}
                                    style={{ width: '100px' }}
                                    onChange={(e) => handleChange(e, ban._id)}
                                    onBlur={() => handleBlur(ban._id)}
                                />
                            </td>
                            <td>{ban.folders}</td>
                            <td>{ban.country}</td>
                            <td style={{ width: '0' }}>
                                <input
                                    type="text"
                                    name="end"
                                    value={values[ban._id]?.end || ban.end || ''}
                                    style={{ width: '190px' }}
                                    onChange={(e) => handleChange(e, ban._id)}
                                    onBlur={() => handleBlur(ban._id)}
                                />
                            </td>
                            <td
                                style={{ color: ban.active ? 'green' : 'red', cursor: 'pointer' }}
                                onClick={()=> handleActive(ban._id)}
                            >
                                {ban.active ? 'SI' : 'NO'}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PrintBanners;