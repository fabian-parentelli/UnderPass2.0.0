import './newsVewTable.scss';
import { Link } from 'react-router-dom';
import { Fragment, useState } from 'react';
import BigImg from '../../utils/BigImg/BigImg';
import { useLoginContext } from '../../../context/LoginContext';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

const NewsVewTable = ({ news }) => {

    const { user } = useLoginContext();
    const [vew, setVew] = useState(null);
    const handlevew = (id) => setVew(vew === id ? null : id);

    return (
        <div className='newsVewTable'>
            <table>
                <thead>
                    <tr>
                        <th>Imágen</th>
                        <th>Título</th>
                        <th>Locación</th>
                        <th>Fecha</th>
                        {user.data.role !== 'usee' && <th>Modificar</th>}
                        {user.data.role !== 'usee' && <th>Activo</th>}
                    </tr>
                </thead>
                <tbody>
                    {news && news.map((ne) => (
                        <Fragment key={ne._id}>
                            <tr>
                                <td><BigImg img={ne.img[0]} border={false} /></td>
                                <td className='newsVewTableBack'  onClick={() => handlevew(ne._id)}>{ne.title}</td>
                                <td>{ne.location.city} - {ne.location.province}</td>
                                <td>{new Date(ne.date).toLocaleDateString()}</td>
                                <td className='newsVewTableBack'>{<AppRegistrationIcon />}</td>
                                <td className='newsVewTableBack' style={{ color: ne.active ? 'green' : 'red' }}>{ne.active ? 'SI' : 'NO'}</td>
                            </tr>

                            {vew === ne._id &&
                                <tr>
                                    <td colSpan={user.data !== 'user' ? 6 : 4}>
                                        <p style={{ width: '50%', marginBottom: '1rem' }}>{ne.subText}</p>
                                        <Link to={`/uniquenews/${ne._id}`}><button className='btn btnC'>Ver</button></Link>
                                    </td>
                                </tr>
                            }
                        </Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default NewsVewTable;