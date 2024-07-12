import './footer.scss';
import { Link } from 'react-router-dom';
import ShareIcon from '@mui/icons-material/Share';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useLoginContext } from '../../context/LoginContext';

const Footer = () => {

    const { user } = useLoginContext();

    return (
        <div className="foot">
            <div className='footerUp'>
                <div className='fottWe'>
                    <div className='logoImgCont'>
                        <Link to={'/'}><img id='logoImg' src='https://res.cloudinary.com/dtzy75wyt/image/upload/v1720368314/images/wdai77ft9i6ydwoqr1sz.png' alt='Pasarela' /></Link>
                        <p>UnderPass</p>
                    </div>
                    <p>En UndePass trabajamos arduamente en la construcción de un sitio seguro para la interacción entre productores y clientes. Brindamos servicios de venta de entradas, alquiler de salas de ensayo, estudios de grabación, teatro y otros relacionados al arte. Además contamo con un mercado de productos realcionados al arte.</p>

                    <div className='footnetWorks'>
                        <FacebookIcon className='icon' />
                        <InstagramIcon className='icon' />
                        <YouTubeIcon className='icon' />
                        <ShareIcon className='icon' />
                    </div>

                    <div className='footWhatsapp'>
                        <WhatsAppIcon />
                        <p>WhatsApp</p>
                    </div>
                </div>

                <div className='separador'></div>

                <div className='footCards'>
                    <div className='footCards_children'>
                        <h2>Categorías</h2>
                        <ul>
                            <li><a href='#'>Música</a></li>
                            <li><a href='#'>Teatro</a></li>
                            <li><a href='#'>Cine</a></li>
                            <li><a href='#'>Salas de ensayo</a></li>
                            <li><a href='#'>Estudios de grabación</a></li>
                            <li><a href='#'>Estidos de danza</a></li>
                        </ul>
                    </div>

                    <div className='footCards_children'>
                        <h2>Usuarios</h2>
                        <ul>
                            <li className="loginDiv">
                                {!user.logged ? <Link to={'/login'}>Inisiar Sesión</Link> : 'Sesión iniciada'}
                            </li>
                            <li className="registerId">
                                {!user.registered ? <Link to={'/register'} href='#'>Registrarte</Link> : 'Registrado'}
                            </li>
                            <li className="updateUserDiv"><Link to={'/profile'}>Tu Perfil</Link></li>
                            <li><Link to={'/newevent_user'}>Crear un evento</Link></li>
                            {user.logged ? <li><Link to={'/newsite'}>Tu Página</Link> </li> : ''}
                            <li><Link to={'/contactus'}>Contacto</Link></li>
                        </ul>
                    </div>

                    <div className='footCards_children'>
                        <h2>Mercado</h2>
                        <ul>
                            <li><a href='#'>Ver el mercado</a></li>
                            <li><a href='#'>Publicar</a></li>
                            <li><a href='#'>Tus ventas</a></li>
                            <li><a href='#'>Tus compras</a></li>
                            <li><a href='#'>Mensajes</a></li>
                            <li><a href='#'>Información</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='footerBotom'>
                <div className='separador'></div>
                <p>UnderPass es una plataforma que sirve para intermediar entre productores y clientes. La calidad de los servicios prestados no son de nuestra responsabilidad.</p>
                <div className='footerBotomDiv'>
                    <p>UnderPass es un producto de Faraday's House</p>
                    <img src="https://res.cloudinary.com/dtzy75wyt/image/upload/v1720390765/images/gcxnrgkwp1ublhdipuej.png" alt="img" />
                </div>
            </div>
        </div>
    )
};

export default Footer;