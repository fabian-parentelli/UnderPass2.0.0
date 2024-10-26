import './eventFilter.scss';
import { useEffect, useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import CloseIcon from '@mui/icons-material/Close';
import InventoryIcon from '@mui/icons-material/Inventory';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import SelectedProvince from '../../utils/SelectedProvince.jsx';
import { useLoginContext } from '../../../context/LoginContext.jsx';
import { getEventsApi } from '../../../helpers/event/getEvents.api.js';
import { eventCategorysArray } from '../../../utils/typeEventCategory.utils.js';
import { getEventsPublicApi } from '../../../helpers/event/getEventsPublic.api.js';
import { Tooltip } from '@mui/material';

const EventFilter = ({ query, setQuery, setEvents, setLoading, isActive = true, isFavorite = false }) => {

    const { user } = useLoginContext();
    const [prequery, setPrequery] = useState({ category: '', province: '', startDate: '', title: '', active: 'true', confirm: '' });
    const [data, setData] = useState(query.publicity ? true : false);
    const [star, setStar] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            let response;
            if (localStorage.getItem('token')) response = await getEventsApi(query);
            else response = await getEventsPublicApi(query);
            if (response.status === 'success') {
                setEvents(response.result);
            } else console.error(response.error);
            setLoading(false);
        }; fetchData();
    }, [query]);

    const handleChangue = (e) => setPrequery({ ...prequery, [e.target.name]: e.target.value });
    const handleProvince = (e) => setPrequery({ ...prequery, province: e.target.value });
    const handleSearch = (e) => {
        if (e.target.value === '') setQuery({ ...query, title: null, publicity: data });
        if (e.target.value.length > 4) setQuery({ ...query, title: e.target.value, publicity: false });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery({ ...query, ...prequery, publicity: false });
    };

    const handleDelete = () => {
        setPrequery({ category: '', province: '', startDate: '', active: 'true', publicity: data, favorite: '', confirm: '' });
        setQuery({ ...query, category: null, province: null, startDate: null, active: true, publicity: data, favorite: '', confirm: null });
    };

    const handleStar = () => {
        setStar(!star);
        if (!star) setQuery({ ...query, favorite: true, publicity: false });
        else setQuery({ ...query, favorite: undefined, publicity: data });
    };

    const hanldeConfirm = () => {
        if (prequery.confirm === 'false') {
            setPrequery({ ...prequery, confirm: '', active: true });
            setQuery({ ...query, confirm: null, active: true });
        };
        if (prequery.confirm === '') {
            setPrequery({ ...prequery, confirm: 'false', active: false });
            setQuery({ ...query, confirm: 'false', active: false });
        };
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

                {user.data.role !== 'user' && !isFavorite &&
                    <Tooltip title='Sin Confirmar' placement="top">
                        <InventoryIcon
                            onClick={hanldeConfirm}
                            className='eventFilterConfirm'
                            style={{ color: prequery.confirm === 'false' ? '#383f84' : 'gray' }}
                        />
                    </Tooltip>
                }

            </div>

            <div className='eventFilterR'>
                <input type="search" placeholder='Buscar, al menos 4 letras' name='title' onChange={handleSearch} />

                {isFavorite && user && user.logged && user.data.favorites.length > 0 && (
                    star
                        ? <StarIcon className='iconStar' onClick={handleStar} />
                        : <StarBorderIcon className='iconStar' onClick={handleStar} />
                )}
            </div>
        </form>
    );
};

export default EventFilter;