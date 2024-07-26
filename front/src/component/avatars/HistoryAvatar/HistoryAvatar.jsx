import './historyAvatar.scss';
import { Fragment, useEffect, useState } from 'react';
import { getUserByIdApi } from '../../../helpers/users/getUserByIdApi.api.js';
import BigImg from '../../utils/BigImg/BigImg.jsx';

const HistoryAvatar = ({ id, setLoading, setImage }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getUserByIdApi(id);
            if (response.status === 'success') setImages(response.result.avatar);
            else console.log(response);
            setLoading(false);
        }; fetchData();
    }, []);

    

    return (
        <fomr className='historyAvatar'>
            {images && images.map((img, index) => (
                <div key={index}>
                    <BigImg img={img} />
                    <button className='btn btnD'>Elegír</button>
                </div>
            ))}
        </fomr>
    );
};

export default HistoryAvatar;