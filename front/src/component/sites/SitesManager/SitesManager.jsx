import './sitesManagger.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

const SitesManagger = ({ userId }) => {

    const [sites, setSites] = useState([]);

    return (
        <div className='sitesManagger'>
            {sites && sites.length > 0 && sites.map((sit, ind) => (
                <div key={ind} className='sitesManaggerCards'>
                    <h4>{sit.title}</h4>
                    <img src={sit.img} alt="img" width='160px' />
                    <p className='sitesManagger1'>Ver</p>
                    <p className='sitesManagger2'>Actualizar</p>
                </div>
            ))}
            <Link to={`/newsites/${userId}`} className='sitesManaggerNew'>
                <div className='sitesManaggerNewCircule'>
                    <AddIcon className='sitesManaggerNewIcon' />
                </div>
                <p>Nuevo sitio</p>
            </Link>
        </div>
    );
};

export default SitesManagger;