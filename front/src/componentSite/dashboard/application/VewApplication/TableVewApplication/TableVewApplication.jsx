import './tableVewApplication.scss';
import React, { Fragment, useState } from 'react';
import flagsIcon from '../../../../../utils/flagsIcon.utils';
import ExpandApplication from '../ExpandApplicattion/ExpandApplication';
import { useLoginContext } from '../../../../../context/LoginContext';

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
                        {user && user.data.role !== 'user' && <th>Visto</th>}
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
                                <td>{app.underBanner ? 'No' : 'Sí'}</td>
                                <td>
                                    <p>{app.user.name}</p>
                                    <p>{app.user.email}</p>
                                    <p className='pUser'>{app.user.userId}</p>
                                </td>
                                <td>{app.type}</td>
                                <td style={{ color: app.pay ? 'green' : 'red' }}>
                                    {app.pay ? 'Sí' : 'No'}
                                </td>
                                <td
                                    style={{ color: app.active ? 'green' : 'red' }}
                                    className='tdActive'
                                    onClick={() => handleActive(app._id)}
                                >
                                    {app.active ? 'Sí' : 'No'}
                                </td>
                                {user && user.data.role !== 'user' &&
                                    <td
                                        style={{ color: !app.underVew ? 'green' : 'red' }}
                                        className='tdActive'
                                        onClick={() => handeleVew(app._id)}
                                    >
                                        {app.underVew === false ? 'Si' : 'No'}
                                    </td>
                                }
                            </tr>
                            {vew === app._id && (
                                <tr className='expandRow'>
                                    <td colSpan="8">
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