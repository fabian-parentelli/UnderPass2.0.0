import './dashboard.scss';
import Panel from '../Panel/Panel';
import { Routes, Route, Link } from 'react-router-dom';
import Fields from '../../../component/dashboard/Fields/Fields';
import VideoTut from '../images/videoTutoriales/VideoTut/VideoTut';
import Banner from '../images/banners/Banner/Banner';

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
                    <Fields title={'x'} category={[{ name: 'x', path: 'newsMessage' }, { name: 'x', path: '' }]} />
                </div>
                <Routes>
                    <Route path='/' element={<Panel />} />

                    <Route path='/videotut' element={<VideoTut />} />
                    <Route path='/banners' element={<Banner />} />
                    {/* <Route path='/newavatar' element={<NewAvatar />} />
                <Route path='/vewavatar' element={<VewAvatar />} />
                <Route path='/newimgevent' element={<NewImEvent />} />
                <Route path='/videotutoriales' element={<VideoTutoriales />} />

                <Route path='/vewuser' element={<VewUsers />} />
                <Route path='/upadUser/:id?' element={<UpdateUser />} />

                <Route path='/vewcontact' element={<VewContact />} />
                <Route path='/newcontact/:id?' element={<Newcontact />} />

                <Route path='/getevent' element={<GetEvents />} />
                <Route path='/newevent' element={<NewEvents />} />
                <Route path='/updevent/:id' element={<UpdateEventAd />} />

                <Route path='/newsite' element={<NewSiteDas />} />
                <Route path='/vewsite' element={<VewSitesDas />} />
                <Route path='/updsite/:_id' element={<UpdSiteDas />} /> */}
                </Routes>
            </div>
    );
};

export default Dashboard;