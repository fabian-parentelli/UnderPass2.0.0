import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useLoginContext } from '../../context/LoginContext.jsx';
import { useEffect } from 'react';

const Browser = ({ handleMenuClick, menuVisible, listElementsRef, setMenuVisible }) => {

    const { user, logout } = useLoginContext();

    const handleInsideClick = () => { setMenuVisible(false) };
    const handleLogout = () => logout();

    const handleItemClick = (e) => {
        const listItem = e.currentTarget;
        const nestedMenu = listItem.querySelector('.menu_nesting');
        const inside = listItem.querySelector('.menu_inside');

        if (listItem && nestedMenu) {
            listItem.classList.toggle('menu_item--active');
            if (listItem.classList.contains('menu_item--active')) {
                nestedMenu.style.height = `${nestedMenu.scrollHeight}px`;
            } else {
                nestedMenu.style.height = '0';
            };
        };
        if (inside && e.target.classList.contains('menu_inside')) {
            handleInsideClick();
        };
    };

    return (
        <div className="browser">
            <div className='prentation'>
                <Link to={'/'}><img src='https://res.cloudinary.com/dtzy75wyt/image/upload/v1720368314/images/wdai77ft9i6ydwoqr1sz.png' alt='Pasarela' /></Link>
                <p>UnderPass</p>
            </div>
            <ul className={`menu_links ${menuVisible ? 'menu_links--show' : ''}`} ref={listElementsRef}>

                <li className={`menu_item menu_item--show`} onClick={handleItemClick}>
                    <a href='#' className='menu_link'>Información <img src="arrow.png" className="menu_arrow" /></a>
                    <ul className={`menu_nesting`}>
                        <li className='menu_inside' onClick={handleInsideClick}><Link to='/help' className='menu_link menu_link--inside'>Información</Link></li>
                        <li className='menu_inside' onClick={handleInsideClick}><Link to='/' className='menu_link menu_link--inside'>Quienes somos</Link></li>
                        <li className='menu_inside' onClick={handleInsideClick}><a className='menu_link menu_link--inside' href='#'>Videos Tutoriales</a></li>
                        <li className='menu_inside' onClick={handleInsideClick}><a className='menu_link menu_link--inside' href='#'>Terminos y Condiciones</a></li>
                        <li className='menu_inside' onClick={handleInsideClick}><a className='menu_link menu_link--inside' href='#'>Faraday's House</a></li>
                    </ul>
                </li>

                <li className={`menu_item menu_item--show`} onClick={handleItemClick}>
                    <a href='#' className='menu_link'>Plataforma <img src="arrow.png" className="menu_arrow" /></a>
                    <ul className={`menu_nesting`}>

                        <li className='menu_inside' onClick={handleInsideClick}><Link to={'/newevent_user'} className='menu_link menu_link--inside' href='#'>Crear Evento</Link></li>
                        <li className='menu_inside' onClick={handleInsideClick}><Link to={'/'} className='menu_link menu_link--inside' href='#'>Ver Eventos</Link></li>

                        <li className='menu_inside' onClick={handleInsideClick}><Link to={'/newProduct'} className='menu_link menu_link--inside'>Crear producto</Link></li>
                        <li className='menu_inside' onClick={handleInsideClick}><a className='menu_link menu_link--inside' href='#'>Ver Mercado</a></li>

                        <li className='menu_inside' onClick={handleInsideClick}><Link to={'/newsite'} className='menu_link menu_link--inside' href='#'>Tu Página</Link></li>
                        <li className='menu_inside' onClick={handleInsideClick}><Link to={'/'} className='menu_link menu_link--inside' href='#'>UnderNews</Link></li>

                    </ul>
                </li>

                <li className={`menu_item menu_item--show`} onClick={handleItemClick}>
                    <a href='#' className='menu_link'>Usuario <img src="arrow.png" className="menu_arrow" /></a>
                    <ul className={`menu_nesting`}>
                        {!user.logged &&
                            <>
                                <li className='menu_inside loginDiv' onClick={handleInsideClick}><Link to={'/login'} className='menu_link menu_link--inside' >Iniciar Sesión</Link></li>
                                <li className='menu_inside registerId' onClick={handleInsideClick}><Link to={'/register'} className='menu_link menu_link--inside' href='#'>Registrarte</Link></li>
                            </>
                        }
                        {user.logged && <li className='menu_inside updateUserDiv' onClick={handleInsideClick}><Link to={'/profile'} className='menu_link menu_link--inside'>Panel</Link></li>}
                        <li className='menu_inside' onClick={handleInsideClick}><Link to={('/contactus')} className='menu_link menu_link--inside' >Contacto</Link></li>
                        {user.logged && <li className='menu_inside' onClick={handleInsideClick}><Link onClick={handleLogout} to={('/')} className='menu_link menu_link--inside' >Cerrar sesión</Link></li>}

                    </ul>
                </li>
            </ul >
            <div className="menu_hamburguer" onClick={handleMenuClick}>
                <MenuIcon className="menu_img" fontSize='large' />
            </div>
        </div >
    );
};

export default Browser;