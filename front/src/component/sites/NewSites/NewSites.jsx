import './newSites.scss';
import { Link, useSearchParams } from 'react-router-dom';
import NewSitesComp from '../NewSitesComp/NewSitesComp';

const NewSites = () => {

    const [searchParams] = useSearchParams();
    const userid = searchParams.get('userid');
    const id = searchParams.get('id');
        
    return (
        <div className='newSites'>
            <Link to={'/help'} className='newSitesHelp'><p>Ayuda</p></Link>
            <h2>Crear un Sitio</h2>
            <NewSitesComp userId={userid} id={id} />
        </div>
    );
};

export default NewSites;