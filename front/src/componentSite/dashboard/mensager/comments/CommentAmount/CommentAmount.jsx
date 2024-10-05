import './commentAmount.scss';
import { useEffect, useState } from 'react';
import { getMessageByTypeApi } from '../../../../../helpers/message/getMessageByType.api.js';

const CommentAmount = ({ setComments, setLoading, pager, type, setType, isActive, onlyReport }) => {

    const [country, setCountry] = useState(null);

    const handleSetType = (set) => setType(type === set ? null : set);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const query = { country: country, type: type, active: isActive, report: onlyReport };
            if (pager) query.page = pager;
            const response = await getMessageByTypeApi(query);
            if (response.status === 'success') setComments(response.result);
            else console.error(response.error);
            setLoading(false);
        }; if (type && country) fetchData();
    }, [type, country, isActive, onlyReport]);

    return (
        <div className='commentAmount'>

            <select name="" onChange={(e) => setCountry(e.target.value)}>
                <option value="">Seleccionar un país</option>
                <option value="UY">Uruguay</option>
                <option value="AR">Argentina</option>
            </select>

            <div className='commentAmountButtons'>
                <button disabled={!country} className='btn btnC' onClick={() => handleSetType('news')}>Noticias</button>
                <button disabled={!country} className='btn btnC' onClick={() => handleSetType('site')}>Sitios</button>
                <button disabled={!country} className='btn btnC' onClick={() => handleSetType('event')}>Eventos</button>
                <button disabled={!country} className='btn btnC' onClick={() => handleSetType('product')}>Productos</button>
            </div>

            {!country && <p className='commentAmountP'>Selecciona un país</p>}

        </div>
    );
};

export default CommentAmount;