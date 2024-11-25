import './spotifyHelp.scss';
import TitleHelp from '../../TitleHelp/TitleHelp';
import { imagesHelp } from '../../../../utils/urlImages.utils';
import UnderSiteLog from '../../../../component/fonts/UnderSiteLog/UnderSiteLog';

const SpotifyHelp = () => {

    return (
        <div id='spotifyHelp'>
            <TitleHelp
                title='Como enlazar Spotify'
                paragraph='Conecta tus canciones de spotify en ti sitio UnderSite.'
                goTo={'spotifyHelp'}
            />

            <div className='spotifyHelpDivImg'>
                <img src={imagesHelp.spotifyOne} alt="spotifyOne" />
            </div>

            <section>
                <h4>Desde el reproductor web:</h4>
                <p>Abre Spotify Web en tu navegador y accede a tu cuenta.</p>
                <p>Busca la canción que deseas enlazar.</p>
                <p>Haz clic en los tres puntos (...) junto al título de la canción.</p>
                <p>Elige "Compartir" y haz clic en "Copiar enlace"</p>
            </section>

            <div className='spotifyHelpDivImg'>
                <img src={imagesHelp.spotifyTwo} alt="spotifyOne" />
            </div>

            <div className='spotifyHelpLog'>
                <UnderSiteLog size={3} />
                <p>Gracias por utilizar el módulo <span>UnderSite</span> de <span>UnderPass</span></p>
            </div>
        </div>
    );
};

export default SpotifyHelp;