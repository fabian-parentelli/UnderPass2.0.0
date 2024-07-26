import './vewAvatars.scss';
import { useEffect, useState } from 'react';
import BigImg from '../../utils/BigImg/BigImg.jsx';
import { getAvatarsApi } from '../../../helpers/images/avatars/getAvatars.api.js';

const VewAvatars = ({ type, setLoading, handleSet, change }) => {

    const [avatars, setAvatars] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const reponse = await getAvatarsApi(type);
            if (reponse.status === 'success') setAvatars(reponse.result);
            else console.log(reponse);
            setLoading(false);
        }; fetchData();
    }, [change]);

    return (
        <div className='vewAvatars'>
            <table>
                <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Descripción</th>
                        {type === 'admin'
                            ? <th>Activo</th>
                            : <th>Elegir</th>
                        }
                    </tr>
                </thead>
                <tbody>
                    {avatars && avatars.map((ava) => (
                        <tr key={ava._id}>
                            <td><BigImg img={ava.imgUrl} /></td>
                            <td>{ava.name}</td>
                            {type === 'admin'
                                ? <td
                                    onClick={() => handleSet(ava._id)}
                                    style={{ color: ava.active === true ? 'Green' : 'Red' }}
                                    className='selected'
                                >
                                    {ava.active === true ? 'SI' : 'NO'}
                                </td>
                                : <td
                                    onClick={() => handleSet(ava.imgUrl)}
                                    className='selected'
                                >
                                    Elegír
                                </td>
                            }
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default VewAvatars;