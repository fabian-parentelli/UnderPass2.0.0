import './shiftFilter.scss';
import { useEffect, useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import CheckBoxes2 from '../../utils/CheckBoxes2.jsx';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import SelectedProvince from '../../utils/SelectedProvince.jsx';
import { useLoginContext } from '../../../context/LoginContext.jsx';
import { daysOfWeek, typeShifts } from '../../../utils/typeShifts.utils.js';
import { getShiftconfApi } from '../../../helpers/shiftsconf/getShiftconf.api.js';
import { getPublicShiftconfApi } from '../../../helpers/shiftsconf/getPublicShift.api.js';

const ShiftFilter = ({ configs, setConfigs, query, setQuery, setLoading }) => {

    const { user } = useLoginContext();
    const [type, setType] = useState([]);
    const [favorite, setFavorite] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            let response;
            if (localStorage.getItem('token')) response = await getShiftconfApi(query);
            else response = await getPublicShiftconfApi(query);
            if (response.status === 'success') setConfigs(response.result);
            else {
                const data = { ...configs };
                data.docs = [];
                setConfigs(data);
            };
            setLoading(false);
        }; fetchData();
    }, [query]);

    const handleChange = (e) => setQuery({ ...query, [e.target.name]: e.target.value });
    useEffect(() => { setQuery({ ...query, days: type }) }, [type]);

    const handleSearch = (e) => {
        if (e.target.value.length < 4) setQuery({ ...query, title: null });
        else setQuery({ ...query, title: e.target.value });
    };

    useEffect(() => {
        if (favorite && user.logged) setQuery({ ...query, favorite: user.data.favorites });
        else setQuery({ ...query, favorite: undefined });
    }, [favorite]);

    return (
        <div className='shiftFilter'>
            {configs &&
                <>
                    <select name="category" className='shiftFilterCategory' onChange={handleChange}>
                        <option value="">Categoría</option>
                        {typeShifts.map((type, ind) => (
                            <option key={ind} value={type.value}>{type.type}</option>
                        ))}
                    </select>

                    <section className='shiftFilterDays'>
                        <details>
                            <summary>Días</summary>
                            <div className='shiftFilterDaysDiv'>
                                <CheckBoxes2 labels={daysOfWeek} setType={setType} multiselect={true} />
                            </div>
                        </details>
                    </section>

                    <section className='shiftFilterProvince'>
                        <SelectedProvince handleChange={handleChange} value={query.province} />
                    </section>

                    {user && user.data && user.data.role !== 'user' &&
                        <select className='shiftFilterProvince' name='active' onChange={handleChange}>
                            <option value={true}>Activo</option>
                            <option value={false}>Inactivo</option>
                        </select>
                    }

                    <section>
                        <input type="search" placeholder='Escribe más de 4 letras' onChange={handleSearch} />
                    </section>

                    {user && user.logged &&
                        <section onClick={() => setFavorite(!favorite)} className='colSH shiftFilterFavorite'>
                            {favorite ? <StarIcon /> : <StarBorderIcon />}
                        </section>
                    }

                </>
            }
        </div>
    );
};

export default ShiftFilter;