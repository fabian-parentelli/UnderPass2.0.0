import './dashboard.scss';
import Panel from '../panel/Panel/Panel';
import { Routes, Route, Link, RouterProvider } from 'react-router-dom';
import Fields from '../../../component/dashboard/Fields/Fields';
import VideoTut from '../images/videoTutoriales/VideoTut/VideoTut';
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
import UserOrders from '../orders/UserOrders/UserOrders';
import AllOrders from '../orders/AllOrders/AllOrders';
import WalletDas from '../economy/WalletDas/WalletDas';
import DataPass from '../economy/DataPass/DataPass';
import Cash from '../economy/Cash/Cash';
import Configuration from '../configuration/Configuration/Configuration';
import { useLoginContext } from '../../../context/LoginContext';
import BookingDas from '../product/BookingDas/BookingDas';

const Dashboard = () => {

    const { user } = useLoginContext();

    return (
        <div className='dashboard'>
            <div className='dashboardCont'>
                <Link to={'/dashboard'} className='dashboardH2'><h2>Panel</h2></Link>

                <Fields
                    title={'Economía'}
                    category={[{ name: 'Caja', path: 'cash' }, { name: 'Precios', path: 'pricelist' }, { name: 'Billeteras', path: 'walletdas' }, { name: 'UnderDatos', path: 'datapass' }]}
                />

                <Fields
                    title={'Ordenes'}
                    category={[{ name: 'Usuarios', path: 'userorders' }, { name: 'Todas las ordenes', path: 'alloreders' }]}
                />

                <Fields
                    title={'Usuarios'}
                    category={[{ name: 'Ver', path: 'vewusers' }, { name: 'Buscar', path: 'userdashboard' }, { name: 'Avatar', path: 'avatardas' }]}
                />

                <Fields
                    title={'Productos'}
                    category={[{ name: 'Usuario', path: 'productuser' }, { name: 'Ver todo', path: 'vewproducts' }, { name: 'Reservas', path: 'bookingdas' }]}
                />

                <Fields title={'Eventos'} category={[{ name: 'Ver eventos', path: 'getevent' }, { name: 'Crear evento', path: 'newevent' }]} />
                <Fields title={'Sitios'} category={[{ name: 'Nuevo sitio', path: 'newsite' }, { name: 'Ver sitios', path: 'vewsite' }]} />
                <Fields title={'Mensajes'} category={[{ name: 'Contactos sin ver', path: 'vewcontact' }, { name: 'Enviar email', path: 'newcontact' }]} />

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

                <Fields
                    title={'Imágenes'}
                    category={[{ name: 'Avatares', path: 'newavatar' }, { name: 'Nuevo Evento', path: 'newimgevent' }, { name: 'Videos tutoriales', path: 'videotut' }]}
                />

                {user.data.role === 'master' &&
                    <Fields
                        title={'Configuraciones'}
                        category={[{ name: 'Generales', path: 'configuration' }]}
                    />
                }
            </div>
            <Routes>
                <Route path='/' element={<Panel />} />
                <Route path='/helpdas' element={<HelpDas />} />

                <Route path='/newavatar' element={<Avatars />} />
                <Route path='/videotut' element={<VideoTut />} />

                <Route path='/vewusers' element={<VewUsersDashboards />} />
                <Route path='/userdashboard' element={<UserDashboard />} />
                <Route path='/avatardas' element={<AvatarUserDas />} />

                <Route path='/productuser' element={<ProductUserDas />} />
                <Route path='/vewproducts' element={<VewProductsDas />} />
                <Route path='/bookingdas' element={<BookingDas />} />

                <Route path='/cash' element={<Cash />} />
                <Route path='/pricelist' element={<PriceList />} />
                <Route path='/walletdas' element={<WalletDas />} />
                <Route path='/datapass' element={<DataPass />} />

                <Route path='/newapplication' element={<NewApplication />} />
                <Route path='/vewapplicattion' element={<VewApplication />} />
                <Route path='/vewapplicattionuser' element={<VewUserApplication />} />

                <Route path='/newpublicity/:appli?' element={<NewPublicity />} />
                <Route path='/vewpublicity' element={<VewPublicity />} />
                <Route path='/userpublicity' element={<UserPublicityDas />} />

                <Route path='/mayalert' element={<MayAlerts />} />
                <Route path='/useralert' element={<UserAlerts />} />

                <Route path='/userorders' element={<UserOrders />} />
                <Route path='/alloreders' element={<AllOrders />} />

                <Route path='/configuration' element={<Configuration />} />
            </Routes>
        </div>
    );
};

export default Dashboard;