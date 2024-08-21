import './dashboard.scss';
import Panel from '../panel/Panel/Panel';
import { Routes, Route, Link, RouterProvider } from 'react-router-dom';
import Fields from '../../../component/dashboard/Fields/Fields';
import VideoTut from '../images/videoTutoriales/VideoTut/VideoTut';
import Banner from '../images/banners/Banner/Banner';
import PriceList from '../economy/PriceList/PriceList';
import NewApplication from '../application/NewApplication/NewApplication';
import VewApplication from '../application/VewApplication/VewApplication';
import VewUserApplication from '../application/VewUserApplication/VewUserApplication';
import UserDashboard from '../user/UserDashboard/UserDashboard';
import VewUsersDashboards from '../user/VewUsersDashboard/VewUsersDashboard';
import Avatars from '../images/avatars/Avatars/Avatars';
import AvatarUserDas from '../user/AvatarUserDas/AvatarUserDas';
import ProductUserDas from '../product/ProductUserDas/ProductUserDas';
import VewProductsDas from '../product/VewProductsDas/VewProductsDas';
import NewPublicity from '../publicity/NewPublicity/NewPublicity';
import VewPublicity from '../publicity/VewPublicity/VewPublicity';
import UserPublicityDas from '../publicity/UserPublicityDas/UserPublicityDas';
import HelpDas from '../helpDashboard/HelpDas/HelpDas';
import UserAlerts from '../alerts/UserAlerts/UserAlerts';
import MayAlerts from '../alerts/MyAlerts/MyAlerts';

const Dashboard = () => {

    return (
        <div className='dashboard'>
            <div className='dashboardCont'>
                <Link to={'/dashboard'} className='dashboardH2'><h2>Panel</h2></Link>

                <Fields
                    title={'Imágenes'}
                    category={[{ name: 'Banners', path: 'banners' }, { name: 'Avatares', path: 'newavatar' }, { name: 'Nuevo Evento', path: 'newimgevent' }, { name: 'Videos tutoriales', path: 'videotut' }]}
                />
                <Fields
                    title={'Usuarios'}
                    category={[{ name: 'Ver', path: 'vewusers' }, { name: 'Buscar', path: 'userdashboard' }, { name: 'Avatar', path: 'avatardas' }]}
                />
                <Fields title={'Mensajes'} category={[{ name: 'Contactos sin ver', path: 'vewcontact' }, { name: 'Enviar email', path: 'newcontact' }]} />
                <Fields title={'Eventos'} category={[{ name: 'Ver eventos', path: 'getevent' }, { name: 'Crear evento', path: 'newevent' }]} />
                <Fields title={'Sitios'} category={[{ name: 'Nuevo sitio', path: 'newsite' }, { name: 'Ver sitios', path: 'vewsite' }]} />

                <Fields
                    title={'Productos'}
                    category={[{ name: 'Usuario', path: 'productuser' }, { name: 'Ver todo', path: 'vewproducts' }]}
                />

                <Fields
                    title={'Economía'}
                    category={[{ name: 'Caja', path: 'newsMessage' }, { name: 'Precios', path: 'pricelist' }]}
                />
                <Fields
                    title={'Solicitudes'}
                    category={[{ name: 'Crear', path: 'newapplication' }, { name: 'Ver', path: 'vewapplicattion' }, { name: 'Como usuario', path: 'vewapplicattionuser' }]}
                />
                <Fields
                    title={'Publicidad'}
                    category={[{ name: 'Crear', path: 'newpublicity' }, { name: 'Ver', path: 'vewpublicity' }, { name: 'Como usuario', path: 'userpublicity' }]}
                />

                <Fields
                    title={'Alertas'}
                    category={[{ name: 'Mis Alertas', path: 'mayalert' }, { name: 'Usuario', path: 'useralert' }]}
                />
            </div>
            <Routes>
                <Route path='/' element={<Panel />} />
                <Route path='/helpdas' element={<HelpDas />} />

                <Route path='/banners' element={<Banner />} />
                <Route path='/newavatar' element={<Avatars />} />
                <Route path='/videotut' element={<VideoTut />} />

                <Route path='/vewusers' element={<VewUsersDashboards />} />
                <Route path='/userdashboard' element={<UserDashboard />} />
                <Route path='/avatardas' element={<AvatarUserDas />} />

                <Route path='/productuser' element={<ProductUserDas />} />
                <Route path='/vewproducts' element={<VewProductsDas />} />

                <Route path='/pricelist' element={<PriceList />} />

                <Route path='/newapplication' element={<NewApplication />} />
                <Route path='/vewapplicattion' element={<VewApplication />} />
                <Route path='/vewapplicattionuser' element={<VewUserApplication />} />

                <Route path='/newpublicity/:appli?' element={<NewPublicity />} />
                <Route path='/vewpublicity' element={<VewPublicity />} />
                <Route path='/userpublicity' element={<UserPublicityDas />} />

                <Route path='/mayalert' element={<MayAlerts />} />
                <Route path='/useralert' element={<UserAlerts />} />
            </Routes>
        </div>
    );
};

export default Dashboard;