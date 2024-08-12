import './tableVewApplication.scss';
import React, { Fragment, useState } from 'react';
import flagsIcon from '../../../../../utils/flagsIcon.utils';
import ExpandApplication from '../ExpandApplicattion/ExpandApplication';
import { useLoginContext } from '../../../../../context/LoginContext';
import { Link } from 'react-router-dom';

const TableVewApplication = ({ appli, handleActive, handeleVew }) => {

    const [vew, setVew] = useState(null);
    const { user } = useLoginContext();

    const handleInfo = (id) => setVew(vew === id ? null : id);

    return (
        <div className='tableVewApplication'>
            <table>

                <thead>
                    <tr>
                        <th>Título</th>
                        <th>País</th>
                        <th>Fecha</th>
                        <th>Img propia</th>
                        <th>Usuario</th>
                        <th>Tipo</th>
                        <th>Pago</th>
                        <th>Activo</th>
                        <th>Visto</th>
                    </tr>
                </thead>

                <tbody>
                    {appli && appli.docs && appli.docs.map(app => (
                        <Fragment key={app._id}>
                            <tr>
                                <td
                                    className='tdActive'
                                    onClick={() => handleInfo(app._id)}
                                >
                                    {app.title}
                                </td>
                                <td>
                                    <img
                                        className='flagsIcon'
                                        src={app.country === 'UY' ? flagsIcon.uy : flagsIcon.ar}
                                        alt={app.country}
                                    />
                                </td>
                                <td>
                                    {new Date(app.date).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })}
                                </td>
                                <td>{app.isWorkOur ? 'No' : 'Sí'}</td>
                                <td>
                                    <p>{app.userId.name}</p>
                                    <p>{app.userId.email}</p>
                                    <p className='pUser'>{app.userId.userId}</p>
                                </td>

                                <td
                                    style={{
                                        color: (app.type !== 'cards' && app.type !== 'banners' && app.type !== 'separator')
                                        ? '#00756F' : 'gray'
                                    }}
                                >{app.type}</td>

                                <td className='tdActive'>
                                    <Link to={'/cart'} style={{ color: app.pay ? 'green' : 'red', textDecoration: 'none' }}>
                                        {app.pay ? 'Sí' : 'No'}
                                    </Link>
                                </td>
                                <td
                                    style={{ color: app.active ? 'green' : 'red' }}
                                    className='tdActive'
                                    onClick={() => handleActive(app._id)}
                                >
                                    {app.active ? 'Sí' : 'No'}
                                </td>
                                {user && user.data.role !== 'user' ?
                                    <td
                                        style={{ color: !app.underVew ? 'green' : 'red' }}
                                        className='tdActive'
                                        onClick={() => handeleVew(app._id)}
                                    >
                                        {app.underVew === false ? 'Si' : 'No'}
                                    </td>
                                    : <td
                                        style={{ color: !app.underVew ? 'green' : 'red' }}
                                    >
                                        {app.underVew === false ? 'Si' : 'No'}
                                    </td>
                                }
                            </tr>
                            {vew === app._id && (
                                <tr className='expandRow'>
                                    <td colSpan="9">
                                        <ExpandApplication app={app} />
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

export default TableVewApplication;