import './helps.scss';
import SearchHelp from '../SearchHelp/SearchHelp';
import UserHelp from '../UserHelp/UserHelp';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AppHelp from '../AppHelp/AppHelp';

const Helps = () => {

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const elementId = location.hash.substring(1);
            const element = document.getElementById(elementId);
            if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        };
    }, [location]);

    return (
        <div className='helps'>
            <div className='helpHeader'>
                <div className='helpHCont'>
                    <div className='helpHTop'>
                        <h2>Información</h2>
                        <ul>
                            <li><a href="#appHelp">Plataforma</a></li>
                            <li><a href="#userHelp">Usuario</a></li>
                            <li><a href="#">General</a></li>
                        </ul>
                    </div>
                    <div className='line'></div>
                </div>
                <div className='helpHContBottom'>
                    <h3>Toda la información al alcance de un click</h3>
                    <p>A demás podés apoyarte con nuestros videos tutoriales</p>
                    <SearchHelp />
                </div>
            </div>
            <AppHelp />
            <UserHelp />
        </div>
    );
};

export default Helps;