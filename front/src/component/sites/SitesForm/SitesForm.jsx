import './sitesForm.scss';
import BigImg from '../../utils/BigImg/BigImg';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import { typeSitesCategory, typeSitesSubCategory } from '../../../utils/sitiesCategories.js';

const SitesForm = ({ sites }) => {

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
                        <th>Actualizar</th>
                        <th>Activo</th>
                    </tr>
                </thead>
                <tbody>
                    {sites && sites.map((site) => (
                        <tr key={site._id}>
                            <td>
                                <BigImg img={site.images.find(img => img.name === 'logo').url} border={false} />
                            </td>
                            <td>{site.title}</td>
                            <td>
                                <p>{typeSitesCategory(site.category)}</p>
                                <p>{typeSitesSubCategory(site.subCategory)}</p>
                            </td>
                            <td>
                                <p>{site.isEvent ? 'SI' : 'NO'}</p>
                                <p>{site.events.length}</p>
                            </td>
                            <td>
                                <p>{site.isProduct ? 'SI' : 'NO'}</p>
                                <p>{site?.products.length}</p>
                            </td>
                            <td>
                                <p>{site.isShift ? 'SI' : 'NO'}</p>
                                <p>{site?.shifts?.length || 0}</p>
                            </td>
                            <td> <SyncAltIcon /> </td>
                            <td>{site.active ? 'SI' : 'NO'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SitesForm;