import './dashboard.scss';
import Panel from '../Panel/Panel';
import { Routes, Route, Link, RouterProvider } from 'react-router-dom';
import Fields from '../../../component/dashboard/Fields/Fields';
import VideoTut from '../images/videoTutoriales/VideoTut/VideoTut';
import Banner from '../images/banners/Banner/Banner';
import PriceList from '../economy/PriceList/PriceList';
import NewApplication from '../application/NewApplication/NewApplication';
import VewApplication from '../application/VewApplication/VewApplication';

const Dashboard = () => {

    return (
        <div className='dashboard'>
            <div className='dashboardCont'>
                <Link to={'/dashboard'} className='dashboardH2'><h2>Panel</h2></Link>
                <Fields
                    title={'Imágenes'}
                    category={[
                        { name: 'Banners', path: 'banners' },
                        { name: 'Avatares', path: 'newavatar' },
                        { name: 'Nuevo Evento', path: 'newimgevent' },
                        { name: 'Videos tutoriales', path: 'videotut' }
                    ]}
                />
                <Fields title={'Usuarios'} category={[{ name: 'Ver', path: 'vewuser' }, { name: 'Modificar', path: 'upadUser' }, { name: 'x', path: '' }]} />
                <Fields title={'Mensajes'} category={[{ name: 'Contactos sin ver', path: 'vewcontact' }, { name: 'Enviar email', path: 'newcontact' }]} />
                <Fields title={'Eventos'} category={[{ name: 'Ver eventos', path: 'getevent' }, { name: 'Crear evento', path: 'newevent' }]} />
                <Fields title={'Sitios'} category={[{ name: 'Nuevo sitio', path: 'newsite' }, { name: 'Ver sitios', path: 'vewsite' }]} />
                <Fields title={'Economía'} category={[{ name: 'Caja', path: 'newsMessage' }, { name: 'Precios', path: 'pricelist' }]} />
                <Fields title={'Solicitudes'} category={[{ name: 'Crear', path: 'newapplication' }, { name: 'Ver', path: 'vewapplicattion' }]} />
            </div>
            <Routes>
                <Route path='/' element={<Panel />} />

                <Route path='/videotut' element={<VideoTut />} />
                <Route path='/banners' element={<Banner />} />

                <Route path='/pricelist' element={<PriceList />} />
                <Route path='/newapplication' element={<NewApplication />} />
                <Route path='/vewapplicattion' element={<VewApplication />} />
            </Routes>
        </div>
    );
};

export default Dashboard;