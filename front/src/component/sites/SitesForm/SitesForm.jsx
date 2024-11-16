import './sitesForm.scss';
import { Fragment, useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import BigImg from '../../utils/BigImg/BigImg';
import PersonIcon from '@mui/icons-material/Person';
import SiteUpdate from '../SiteUpdate/SiteUpdate.jsx';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import ModalCustom from '../../utils/ModalCustom/ModalCustom.jsx';
import UserVewSmall from '../../user/UserVewSmall/UserVewSmall.jsx';
import { useLoginContext } from '../../../context/LoginContext.jsx';
import { updSiteActiveApi } from '../../../helpers/sites/updSiteActive.api.js';
import { typeSitesCategory, typeSitesSubCategory } from '../../../utils/sitiesCategories.js';

const SitesForm = ({ sites, setSites, setLoading }) => {

    const { user } = useLoginContext();
    const [vew, setVew] = useState({ id: null, open: false });
    const [update, setUpdate] = useState({ id: null, open: false });

    const handleOpen = (id) => setVew({ id: id, open: true });
    const handleUpdate = (id) => setUpdate({ id: id, open: true });

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
                        {user.data.role !== 'user' && <th>Usuario</th>}
                        <th>Turnos</th>
                        <th>Actualizar</th>
                        <th>Activo</th>
                    </tr>
                </thead>

                <tbody>
                    {sites && sites.map((site) => (
                        <Fragment key={site._id}>
                            <tr>
                                <td>
                                    <BigImg img={site.images.find(img => img.name === 'logo').url} border={false} />
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
                                    <p className='pgray'>{site?.shifts?.length || 0}</p>
                                </td>

                                {user.data.role !== 'user' &&
                                    <td className='sitesFormBack' onClick={() => handleOpen(site._id)}>
                                        <Tooltip title='Ver usuario' placement="left-start">
                                            <PersonIcon />
                                        </Tooltip>
                                    </td>
                                }

                                <Tooltip title='Actualizar' placement="left-start">
                                    <td className='sitesFormBack' onClick={() => handleUpdate(site._id)}>
                                        <SyncAltIcon />
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

                            {update.id === site._id &&
                                <ModalCustom modalIsOpen={update.open} closeModal={() => setUpdate({ id: null, open: false })}>
                                    <SiteUpdate site={site} />
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