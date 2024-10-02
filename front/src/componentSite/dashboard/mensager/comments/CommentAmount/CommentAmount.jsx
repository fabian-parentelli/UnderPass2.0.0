import { useEffect } from 'react';
import './commentAmount.scss';
import { getAllAmountMessagesApi } from '../../../../../helpers/message/getAllAmountMessage.api.js';

const CommentAmount = () => {

    useEffect(() => {
        const fetchData = async () => {
            const response = await getAllAmountMessagesApi();
            

        }; fetchData();
    }, []);

    return (
        <div className='commentAmount'>
            <button className='btn btnD'>Noticias</button>
            <button className='btn btnD'>Sitios</button>
            <button className='btn btnD'>Eventos</button>
            <button className='btn btnD'>Productos</button>
        </div>
    );
};

export default CommentAmount;