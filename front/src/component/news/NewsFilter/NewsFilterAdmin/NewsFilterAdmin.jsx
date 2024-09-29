import './newsFilterAdmin.scss';
import { useEffect, useState } from 'react';

const NewsFilterAdmin = ({ news, setQuery }) => {

    const [options, setOptions] = useState([]);

    useEffect(() => {
        if (news) {
            const onlyNews = news.filter(n => n.type === 'news');
            const data = onlyNews.map((n) => {
                return {
                    province: n.location.province,
                    city: n.location.city
                };
            });
            setOptions(data);
        };
    }, [news]);

    return (
        <div className='newsFilterAdmin'>

            <select name="" >
                <option value="">País</option>
                <option value="UY">Uruguay</option>
                <option value="AR">Argentina</option>
            </select>

            <select name="">
                <option value="">Provincias</option>
                {options && options.map((n, index) => (
                    <option key={index} value={n.province} >{n.province}</option>
                ))}
            </select>
            
            <select name="">
                <option value="">Ciudades</option>
                {options && options.map((n, index) => (
                    <option key={index} value={n.city} >{n.city}</option>
                ))}
            </select>

        </div>
    );
};

export default NewsFilterAdmin;