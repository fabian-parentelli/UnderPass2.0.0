import './sitesManagger.scss';
import Load from '../../utils/Load.jsx';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { getSiteByUserIdApi } from '../../../helpers/sites/getSiteByUserId.api.js';

const SitesManagger = ({ userId }) => {

    const [sites, setSites] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getSiteByUserIdApi(userId);
            if (response.status === 'success') setSites(response.result);
            else console.error(response.error);
            setLoading(false);
        }; fetchData();
    }, []);    

    return (
        <div className='sitesManagger'>
            {sites && sites.length > 0 && sites.map((sit, ind) => (
                <div key={ind} className='sitesManaggerCards'>
                    <h4>{sit.title}</h4>
                    <img src={sit.imgPortal.logo.url} alt="img" width='160px' />
                    <Link to={`/site/${sit.link}`} className='sitesManagger1'>Ver</Link>
                    <Link to={`/newsites?id=${sit._id}`} className='sitesManagger2'>Actualizar</Link>
                </div>
            ))}
            <Link to={`/newsites?userid=${userId}`} className='sitesManaggerNew'>
                <div className='sitesManaggerNewCircule'>
                    <AddIcon className='sitesManaggerNewIcon' />
                </div>
                <p>Nuevo sitio</p>
            </Link>
            <Load loading={loading} />
        </div>
    );
};

export default SitesManagger;