import './historyAvatar.scss';
import BigImg from '../../utils/BigImg/BigImg.jsx';
import { Fragment, useEffect, useState } from 'react';
import { useLoginContext } from '../../../context/LoginContext.jsx';
import { getUserByIdApi } from '../../../helpers/users/getUserByIdApi.api.js';
import { updHistoryAvatarApi } from '../../../helpers/users/updHistoryAvatar.api.js';

const HistoryAvatar = ({ id, setLoading, setImage }) => {

    const [images, setImages] = useState([]);
    const { current } = useLoginContext();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getUserByIdApi(id);
            if (response.status === 'success') setImages(response.result.avatar);
            else console.log(response);
            setLoading(false);
        }; fetchData();
    }, []);

    const handleHistory = async (index) => {
        setLoading(true);
        const response = await updHistoryAvatarApi(id, { img: index });
        if (response.status === 'success') {
            const data = await getUserByIdApi(id);
            if (data.status === 'success') setImages(data.result.avatar);
            else console.log(data);
            if (response.accesToken) {
                localStorage.setItem('token', response.accesToken);
                await current();
            } else setImage(response.result.avatar[0]);
        } else console.log(response);
        setLoading(false);
    };

    return (
        <div className='historyAvatar'>
            {images && images.map((img, index) => (
                <div key={index}>
                    <BigImg img={img} />
                    <button onClick={() => handleHistory(index)} className='btn btnD'>Elegír</button>
                </div>
            ))}
        </div>
    );
};

export default HistoryAvatar;