import TitleHelp from '../../TitleHelp/TitleHelp';
import './spotifyHelp.scss';

const SpotifyHelp = () => {

    return (
        <div id='spotifyHelp'>
            <TitleHelp 
                title='Como enlazar Spotify'
                paragraph='Conecta tus canciones de spotify en ti sitio UnderSite.'
                goTo={'spotifyLink'}
            />
        </div>
    );
};

export default SpotifyHelp;