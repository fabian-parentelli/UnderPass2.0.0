import './printUsers.scss';
import { useState, Fragment } from 'react';
import BigImg from '../../../utils/BigImg/BigImg';
import PrintExpand from '../PrintExpand/PrintExpand';
import flagsIcon from '../../../../utils/flagsIcon.utils';
import { useLoginContext } from '../../../../context/LoginContext';

const PrintUsers = ({ users, handleRole, handleActive }) => {

    const { user } = useLoginContext();
    const [vew, setVew] = useState(null);

    const handleInfo = (id) => setVew(vew === id ? null : id);

    return (
        <div className='printUsers'>
            <table>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Pais</th>
                        <th>Provincia</th>
                        <th>Ciudad</th>
                        <th>Active</th>
                        {user.data.role === 'master' && <th>Rol</th>}
                    </tr>
                </thead>
                <tbody>
                    {users && users.docs.map((us) => (
                        <Fragment key={us._id}>
                            <tr>
                                <td><BigImg img={us.avatar[0]} border={true} /> </td>
                                <td className='printUsersName' onClick={() => handleInfo(us._id)} >
                                    <p>{us.name}</p>
                                    <p style={{ fontSize: '12px' }}>{us._id}</p>
                                </td>
                                <td>{us.email}</td>

                                <td>
                                    <img
                                        className='flagsIcon'
                                        src={us.location.country === 'UY' ? flagsIcon.uy : flagsIcon.ar}
                                        alt={us.location.country}
                                    />
                                </td>
                                
                                <td>{us.location.province}</td>
                                <td>{us.location.city}</td>

                                <td
                                    onClick={() => handleActive(us._id)}
                                    style={{ color: us.active ? 'green' : 'red' }}
                                    className='printUsersActive'
                                >
                                    {us.active ? 'Si' : 'No'}
                                </td>

                                {user.data.role === 'master' &&
                                    <td onClick={() => handleRole(us._id)} className='printUsersRole'>
                                        {us.role === 'user' ? 'Usuario' : 'Administrador'}
                                    </td>
                                }

                            </tr>
                            {vew === us._id && (
                                <tr className='expandRow'>
                                    <td colSpan="8">
                                        <PrintExpand us={us} />
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

export default PrintUsers;