import './publicityHelp.scss';
import TitleHelp from '../../TitleHelp/TitleHelp';
import { imagesHelp } from '../../../../utils/imagesData.utils';

const PublicityHelp = () => {

    return (
        <div id='publicityHelp'>
            <TitleHelp
                title='Menu Publcidad'
                paragraph='En este menú vas a poder configurar todo lo referido a las publicidades. '
                goTo='publicityHelp'
            />

            <div className='publicityHelpImgs'>
                <img src={imagesHelp.panel} alt="img" />
                <img src={imagesHelp.advertising} alt="img" />
            </div>

            <div className='publicityHelpText'>
                <p>Para acceder al Menú Publicidad, dirígete al desplegable <strong>Usuario</strong> en el navegador y selecciona <strong>Panel</strong>. Esto te llevará al panel de administración del usuario.</p>
                <p>En el lado izquierdo, encontrarás otro menú. Haz clic en <strong>Publicidad</strong>. Una vez dentro, tendrás dos opciones:</p>
                <ol>
                    <li>
                        <strong>Solicitudes:</strong> Aquí podrás ver y crear formularios para solicitar publicidad. Esta sección reúne toda la información necesaria para gestionar tus solicitudes de publicidad.
                    </li>
                    <li>
                        <strong>Publicidad:</strong> En esta sección, podrás ver las publicidades activas, solicitar aparecer en la portada de la página web o extender la duración de una campaña. También podrás revisar las publicidades caducadas.
                    </li>
                </ol>
            </div>

            <div className='publicityHelpImg'>
                <img src={imagesHelp.publicitiesMenu} alt="img" />
            </div>
        </div>
    );
};

export default PublicityHelp;