import './newsFilterTitle.scss';
import { useEffect, useState } from 'react';

const NewsFilterTitle = ({ news, setQuery }) => {
    
    const [options, setOptions] = useState([]);

    useEffect(() => {
        const onlyNews = news.filter(n => n.type === 'news');
        const titles = onlyNews.map((n) => n.title);
        setOptions(titles);
    }, [news]);

    const handleChange = (e) => {
        const value = e.target.value;
        if (value === '' || options.includes(value)) setQuery((prevQuery) => ({ ...prevQuery, title: value }));
    };

    return (
        <div className='newsFilterTitle'>
            <input
                list="options"
                placeholder="Escribe un título"
                onChange={handleChange}
                type='search'
            />
            <datalist id="options">
                {options && options.map((opt, index) => (
                    <option key={index} value={opt} />
                ))}
            </datalist>
        </div>
    );
};

export default NewsFilterTitle;