import './publicityTable.scss';
import { Fragment, useState } from 'react';
import { restDays } from 'faradayfunctions';
import BigImg from '../../../utils/BigImg/BigImg';
import { updPublicityApi } from '../../../../helpers/publicity/updPublicity.api.js';

const PublicityTable = ({ publicity, setLoading }) => {

    const [values, setValues] = useState({});

    const handleChange = (e, id) => setValues(prevValues => ({ ...prevValues, [id]: { links: e.target.value } }));

    const handleBlur = async (id) => {
        setLoading(true);
        const response = await updPublicityApi(values[id], id);
        if (response.status === 'success') setLoading(false);
        else console.error(response.error);
        setLoading(false);
    };

    return (
        <div className='publicityTables'>
            <table>
                <thead>
                    <tr>
                        <th>Img</th>
                        <th>Título</th>
                        <th>Tipo</th>
                        <th>Portal</th>
                        <th>Links</th>
                        <th>Cierre</th>
                        <th>+Tiempo</th>
                    </tr>
                </thead>

                <tbody>
                    {publicity && publicity.map((pub) => (
                        <Fragment key={pub._id}>
                            <tr>
                                <td><BigImg img={pub.imgUrl[0]} border={false} /></td>
                                <td>{pub.title}</td>
                                <td>{pub.type}</td>

                                <td
                                    style={{ color: pub.inPortal ? 'green' : 'red' }}
                                >
                                    {pub.inPortal ? 'SI' : 'NO'}
                                </td>

                                <td>
                                    <input
                                        type="text"
                                        value={values[pub._id]?.links || pub.links}
                                        onChange={(e) => handleChange(e, pub._id)}
                                        onBlur={() => handleBlur(pub._id)}
                                        style={{ width: '130px' }}
                                    />
                                </td>
                                <td>
                                    {new Date(pub.end).toLocaleDateString()}
                                    {restDays(new Date(pub.end)) > 0 &&
                                        <p>{restDays(new Date(pub.end))} días restantes</p>
                                    }
                                </td>
                                <td>Solicitar</td>
                            </tr>
                        </Fragment>
                    ))}
                </tbody>
            </table>
        </div >
    );
};

export default PublicityTable;