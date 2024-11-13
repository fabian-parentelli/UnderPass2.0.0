import './sitesFilter.scss';
import { useEffect, useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import SelectedProvince from '../../utils/SelectedProvince';
import { sitiesCategories } from '../../../utils/sitiesCategories';
import { getSitesApi } from '../../../helpers/sites/getSites.api.js';
import { useLoginContext } from '../../../context/LoginContext.jsx';

const SitesFilter = ({ setSites, query, setQuery, setLoading }) => {

    const { user } = useLoginContext();
    const [favorite, setFavorite] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getSitesApi(query);
            if (response.status === 'success') setSites(response.result);
            else console.error(response.error);
            setLoading(false);
        }; fetchData();
    }, [query]);

    const handleChange = (e) => setQuery((prevQuery) => ({ ...prevQuery, [e.target.name]: e.target.value }));

    useEffect(() => {
        if (favorite && user.logged) setQuery((prevQuery) => ({ ...prevQuery, favorite: user.data.favorites }));
        else setQuery({ country: localStorage.getItem('country'), active: true, limit: 32 });
    }, [favorite]);

    const handleTitle = (e) => {
        if (e.target.value.length > 3) setQuery((prevQuery) => ({ ...prevQuery, title: e.target.value }));
        if ((e.target.value.length === 0)) setQuery({ country: localStorage.getItem('country'), active: true, limit: 32 });
    };

    return (
        <div className='sitesFilter'>

            {user.logged && user.data.role !== 'user' &&
                <select name='active' onChange={handleChange} className='sitesFilterWidth'>
                    <option value='true'>Activo</option>
                    <option value='false'>Inactivo</option>
                </select>
            }

            <div className='sitesFilterWidth'>
                <SelectedProvince handleChange={handleChange} required={false} value={query.province} />
            </div>

            <select name="category" onChange={handleChange} className='sitesFilterWidth'>
                <option value=''>Categoria</option>
                {sitiesCategories.map((cat, ind) => (
                    <option value={cat.value} key={ind}>{cat.name}</option>
                ))}
            </select>

            <input type="search" placeholder='Escribe al menos 4 letras' onChange={handleTitle} />
            {user.logged &&
                <div onClick={() => setFavorite(!favorite)} className='colUS sitesFilterFavorite'>
                    {favorite ? <StarIcon /> : <StarBorderIcon />}
                </div>
            }

        </div>
    );
};

export default SitesFilter;