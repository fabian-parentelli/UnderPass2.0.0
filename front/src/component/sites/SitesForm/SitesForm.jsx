import './sitesForm.scss';
import { Link } from 'react-router-dom';
import { Fragment, useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import BigImg from '../../utils/BigImg/BigImg';
import PersonIcon from '@mui/icons-material/Person';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import ModalCustom from '../../utils/ModalCustom/ModalCustom.jsx';
import UserVewSmall from '../../user/UserVewSmall/UserVewSmall.jsx';
import { useLoginContext } from '../../../context/LoginContext.jsx';
import { updSiteActiveApi } from '../../../helpers/sites/updSiteActive.api.js';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { typeSitesCategory, typeSitesSubCategory } from '../../../utils/sitiesCategories.js';

const SitesForm = ({ sites, setSites, setLoading }) => {

    const { user } = useLoginContext();
    const [vew, setVew] = useState({ id: null, open: false });

    const handleOpen = (id) => setVew({ id: id, open: true });

    const handleActive = async (id) => {
        setLoading(true);
        const response = await updSiteActiveApi(id);
        if (response.status === 'success') {
            const data = [...sites];
            const index = data.findIndex(site => site._id == response.result._id);
            data[index] = response.result;
            setSites((preSite) => ({ ...preSite, docs: data }));
        } else console.error(response.error);
        setLoading(false);
    };

    return (
        <div className='sitesForm'>
            <table>

                <thead>
                    <tr>
                        <th>Img</th>
                        <th>Nombre</th>
                        <th>Categoría</th>
                        <th>Eventos</th>
                        <th>Productos</th>
                        <th>Turnos</th>
                        {user.data.role !== 'user' && <th>Usuario</th>}
                        <th>Actualizar</th>
                        <th>Ver</th>
                        <th>Activo</th>
                    </tr>
                </thead>

                <tbody>
                    {sites && sites.map((site) => (
                        <Fragment key={site._id}>
                            <tr>
                                <td>
                                    <BigImg img={site.imgPortal.logo.url} border={false} />
                                </td>
                                <td>
                                    <p>{site.title}</p>
                                    <p className='pgray'>{site.location.city} - {site.location.province}</p>
                                </td>
                                <td>
                                    <p>{typeSitesCategory(site.category)}</p>
                                    <p className='pgray'>{typeSitesSubCategory(site.subCategory)}</p>
                                </td>
                                <td>
                                    <p>{site.isEvent ? 'SI' : 'NO'}</p>
                                    <p className='pgray'>{site.events.length}</p>
                                </td>
                                <td>
                                    <p>{site.isProduct ? 'SI' : 'NO'}</p>
                                    <p className='pgray'>{site?.products.length}</p>
                                </td>

                                <td>
                                    <p>{site.isShift ? 'SI' : 'NO'}</p>
                                    <p className='pgray'>{site?.isShift && 1}</p>
                                </td>

                                {user.data.role !== 'user' &&
                                    <td className='sitesFormBack' onClick={() => handleOpen(site._id)}>
                                        <Tooltip title='Ver usuario' placement="left-start">
                                            <PersonIcon />
                                        </Tooltip>
                                    </td>
                                }

                                <Tooltip title='Actualizar' placement="left-start">
                                    <td className='sitesFormBack'>
                                        <Link to={`/newsites?id=${site._id}`} className='sitesFormLink'>
                                            <SyncAltIcon />
                                        </Link>
                                    </td>
                                </Tooltip>

                                <Tooltip title='Ir al sitio' placement="left-start">
                                    <td className='sitesFormBack'>
                                        <Link to={`/site/${site.link}`} className='sitesFormLink'>
                                            <IndeterminateCheckBoxIcon />
                                        </Link>
                                    </td>
                                </Tooltip>

                                <Tooltip title={site.active ? 'Desactivar' : 'Activar'} placement="left-start">
                                    <td
                                        style={{ color: site.active ? 'green' : 'red' }}
                                        className='sitesFormBack'
                                        onClick={() => handleActive(site._id)}
                                    >
                                        {site.active ? 'SI' : 'NO'}
                                    </td>
                                </Tooltip>
                            </tr>

                            {vew.id == site._id &&
                                <ModalCustom modalIsOpen={vew.open} closeModal={() => setVew({ id: null, open: false })}>
                                    <UserVewSmall userId={site.userId} />
                                </ModalCustom>
                            }

                        </Fragment>
                    ))}
                </tbody>
            </table>
        </div >
    );
};

export default SitesForm;