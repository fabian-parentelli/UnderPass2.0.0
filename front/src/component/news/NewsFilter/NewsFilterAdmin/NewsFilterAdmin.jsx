import './newsFilterAdmin.scss';
import { useEffect, useState } from 'react';
import SearchOffIcon from '@mui/icons-material/SearchOff';

const NewsFilterAdmin = ({ news, setQuery, query }) => {

    const [options, setOptions] = useState([]);
    const [values, setValues] = useState('');

    useEffect(() => {
        const onlyNews = news.filter(n => n.type === 'news');
        const data = onlyNews.map((n) => {
            return {
                province: n.location.province,
                city: n.location.city
            };
        });
        setOptions(data);
    }, [query]);

    const handleChange = (e) => {
        if (e.target.name === 'province') setValues(e.target.value);
        setQuery((prevQuery) => ({ ...prevQuery, [e.target.name]: e.target.value }));
    };

    const handleClean = () => {
        setQuery({ publicity: 'false' })
        setOptions([]);
        setValues('');
    };

    return (
        <div className='newsFilterAdmin'>

            <select name="country" onChange={handleChange}>
                <option value="">País</option>
                <option value="UY">Uruguay</option>
                <option value="AR">Argentina</option>
            </select>

            <select name="province" onChange={handleChange}>
                <option value="">Provincias</option>
                {options && options.map((n, index) => (
                    <option key={index} value={n.province} >{n.province}</option>
                ))}
            </select>

            <select name="city" onChange={handleChange}>
                <option value="">Ciudades</option>
                {options && options.map((n, index) => (
                    values === n.province && <option key={index} value={n.city} >{n.city}</option>
                ))}
            </select>

            <div onClick={handleClean}>
                <SearchOffIcon className='newsFilterAdminIcon' />
            </div>

        </div>
    );
};

export default NewsFilterAdmin;