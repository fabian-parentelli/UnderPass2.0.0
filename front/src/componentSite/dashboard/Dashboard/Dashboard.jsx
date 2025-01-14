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
import NewNews from '../news/NewNews/NewNews';
import VewNewsDas from '../news/VewNewsDas/VewNewsDas';
import UpdNewsDas from '../news/UpdNewsDas/UpdNewsDas';
import Comment from '../mensager/comments/Comment/Comment';
import PresetDas from '../images/preset/PresetDas/PresetDas';
import GetEvents from '../events/GetEvents/GetEvents';
import GetEventUser from '../events/GetEventUser/GetEventUser';
import AllSitesDas from '../sites/AllSitesDas/AllSitesDas';
import UserSiteDas from '../sites/UserSiteDas/UserSiteDas';
import ShiftUserDas from '../shifts/ShiftUserDas/ShiftUserDas';
import ShiftPanelDas from '../shifts/ShiftPanelDas/ShiftPanelDas';
import CodeMain from '../configuration/code/CodeMain/CodeMain';

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

                <Fields title={'Eventos'} category={[{ name: 'Ver eventos', path: 'getevent' }, { name: 'Usuarios', path: 'eventuser' }]} />

                <Fields title={'Sitios'} category={[{ name: 'Ver sitios', path: 'allsitedas' }, { name: 'Sitio usuario', path: 'usersitedas' }]} />

                <Fields title={'Turnos'}
                    category={[
                        { name: 'Ver', path: 'shiftpanel' },
                        { name: 'Usuarios', path: 'shiftuser' }
                    ]}
                />

                <Fields
                    title={'Mensajes'} category={[{ name: 'Contactos sin ver', path: 'vewcontact' }, { name: 'Enviar email', path: 'newcontact' }, { name: 'Comentarios', path: 'comments' }]}
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

                <Fields
                    title={'Imágenes'}
                    category={[{ name: 'Avatares', path: 'newavatar' }, { name: 'Presets', path: 'presetdas' }, { name: 'Videos tutoriales', path: 'videotut' }]}
                />

                <Fields
                    title={'UnderNews'}
                    category={[{ name: 'Crear noticia', path: 'newscreate' }, { name: 'Ver noticias', path: 'vewnews' }]}
                />

                {user.data.role === 'master' &&
                    <Fields
                        title={'Configuraciones'}
                        category={[{ name: 'Generales', path: 'configuration' }, { name: 'Código', path: 'codemain' }]}
                    />
                }
            </div>
            <Routes>
                <Route path='/' element={<Panel />} />
                <Route path='/helpdas' element={<HelpDas />} />

                <Route path='/vewusers' element={<VewUsersDashboards />} />
                <Route path='/userdashboard' element={<UserDashboard />} />
                <Route path='/avatardas' element={<AvatarUserDas />} />

                <Route path='/productuser' element={<ProductUserDas />} />
                <Route path='/vewproducts' element={<VewProductsDas />} />
                <Route path='/bookingdas' element={<BookingDas />} />

                <Route path='/getevent' element={<GetEvents />} />
                <Route path='/eventuser' element={<GetEventUser />} />

                <Route path='/allsitedas' element={<AllSitesDas />} />
                <Route path='/usersitedas' element={<UserSiteDas />} />

                <Route path='/shiftuser' element={<ShiftUserDas />} />
                <Route path='/shiftpanel' element={<ShiftPanelDas />} />

                <Route path='/cash' element={<Cash />} />
                <Route path='/pricelist' element={<PriceList />} />
                <Route path='/walletdas' element={<WalletDas />} />
                <Route path='/datapass' element={<DataPass />} />

                <Route path='/comments' element={<Comment />} />

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

                <Route path='/newavatar' element={<Avatars />} />
                <Route path='/videotut' element={<VideoTut />} />
                <Route path='/presetdas' element={<PresetDas />} />

                <Route path='/newscreate' element={<NewNews />} />
                <Route path='/vewnews' element={<VewNewsDas />} />
                <Route path='/updnews/:id' element={<UpdNewsDas />} />

                <Route path='/configuration' element={<Configuration />} />
                <Route path='/codemain' element={<CodeMain />} />
            </Routes>
        </div>
    );
};

export default Dashboard;