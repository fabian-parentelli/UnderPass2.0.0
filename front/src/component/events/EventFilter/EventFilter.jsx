import './eventFilter.scss';
import { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import SelectedProvince from '../../utils/SelectedProvince.jsx';
import { getEventsApi } from '../../../helpers/event/getEvents.api.js';
import { eventCategorysArray } from '../../../utils/typeEventCategory.utils.js';

const EventFilter = ({ query, setQuery, setEvents, setLoading, isActive = true }) => {

    const [prequery, setPrequery] = useState({ category: '', province: '', startDate: '', title: '', active: 'true' });

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getEventsApi(query);
            if (response.status === 'success') {
                setEvents(response.result);
            } else console.error(response.error);
            setLoading(false);
        }; fetchData();
    }, [query]);

    const handleChangue = (e) => setPrequery({ ...prequery, [e.target.name]: e.target.value });
    const handleProvince = (e) => setPrequery({ ...prequery, province: e.target.value });
    const handleSearch = (e) => {
        if (e.target.value === '') setQuery({ ...query, title: null });
        if (e.target.value.length > 4) setQuery({ ...query, title: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery({ ...query, ...prequery });
    };

    const handleDelete = () => {
        setPrequery({ category: '', province: '', startDate: '', active: 'true' });
        setQuery({ ...query, category: null, province: null, startDate: null, active: 'true' });
    };

    return (
        <form className='eventFilter' onSubmit={handleSubmit}>

            <div className='eventFilterL'>
                <div>
                    <select name="category" onChange={handleChangue} value={prequery.category} >
                        <option value="">Elige una categoría</option>
                        {eventCategorysArray.map((cat, i) => (
                            <option key={i} value={cat.val}>{cat.name}</option>
                        ))}
                    </select>
                </div>
                <div><SelectedProvince handleChange={handleProvince} required={false} value={prequery.province} /></div>
                <div>
                    <input type="date" name='startDate' onChange={handleChangue} value={prequery.startDate} />
                </div>

                {isActive &&
                    <div>
                        <select name="active" onChange={handleChangue} value={prequery.active}>
                            <option value="true">Si</option>
                            <option value="false">No</option>
                        </select>
                    </div>
                }

                <button className='btn btnUE'>Filtrar</button>
                <CloseIcon className='eventFilterIcon' onClick={handleDelete} />
            </div>

            <div className='eventFilterR'>
                <input type="search" placeholder='Buscar, al menos 4 letras' name='title' onChange={handleSearch} />
            </div>

        </form>
    );
};

export default EventFilter;