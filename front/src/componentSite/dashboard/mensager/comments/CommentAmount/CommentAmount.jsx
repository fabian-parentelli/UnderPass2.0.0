import { getMessageByTypeApi } from '../../../../../helpers/message/getMessageByType.api';
import './commentAmount.scss';
import { useEffect, useState } from 'react';

const CommentAmount = () => {

    const [vew, setVew] = useState(null);
    const [country, setCountry] = useState(null);
    const handdleVew = (set) => setVew(vew === set ? null : set);

    useEffect(() => {
        const fetchData = async () => {            
            const response = await getMessageByTypeApi(vew, country);

        }; if (vew) fetchData();
    }, [vew]);

    return (
        <div className='commentAmount'>

            <select name="" onChange={(e) => setCountry(e.target.value)}>
                <option value="">Seleccionar un país</option>
                <option value="UY">Uruguay</option>
                <option value="AR">Argentina</option>
            </select>

            <div className='commentAmountButtons'>
                <button disabled={!country} className='btn btnC' onClick={() => handdleVew('news')}>Noticias</button>
                <button disabled={!country} className='btn btnC' onClick={() => handdleVew('site')}>Sitios</button>
                <button disabled={!country} className='btn btnC' onClick={() => handdleVew('event')}>Eventos</button>
                <button disabled={!country} className='btn btnC' onClick={() => handdleVew('product')}>Productos</button>
            </div>

            {!country && <p className='commentAmountP'>Selecciona un país</p>}

        </div>
    );
};

export default CommentAmount;