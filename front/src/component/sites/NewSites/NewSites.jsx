import './newSites.scss';
import { Link, useParams } from 'react-router-dom';
import NewSitesComp from '../NewSitesComp/NewSitesComp';

const NewSites = () => {

    const { userid } = useParams();

    return (
        <div className='newSites'>
            <Link to={'/help'} className='newSitesHelp'><p>Ayuda</p></Link>
            <h2>Crear un Sitio</h2>
            <NewSitesComp userId={userid} />
        </div>
    );
};

export default NewSites;