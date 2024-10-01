import './updNewsDas.scss';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Load from '../../../../component/utils/Load';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import UpdateNewsDas from './UpdateNewsDas/UpdateNewsDas.jsx';
import Title from '../../../../component/dashboard/Title/Title';
import { updNewsApi } from '../../../../helpers/news/updNews.api.js';
import { getNewsByIdApi } from '../../../../helpers/news/getNewsById.api.js';

const UpdNewsDas = () => {

    const { id } = useParams();
    const [news, setNews] = useState(null);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState(new FormData());
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getNewsByIdApi(id);
            if (response.status === 'success') {
                const { socialMedia, location, ...obj } = response.result;
                const { result } = response;
                setNews({
                    ...obj, country: result.location.country,
                    province: result.location.country, city: result.location.city,
                    instagrame: result.socialMedia.instagrame, facebook: result.socialMedia.facebook, 
                    youtube: result.socialMedia.youtube, twetter: result.socialMedia.twetter,    
                });
            }
            else console.error(response.error);
            setLoading(false);
        }; fetchData();
    }, []);

    const handleChange = (e) => setNews({ ...news, [e.target.name]: e.target.value });
    const handleActive = (e) => setNews({ ...news, active: e.target.checked });
    const handleImg = (img) => {
        const data = { ...news };
        const index = data.img.findIndex(n => n === img);
        data.img.splice(index, 1);
        setNews(data);
    };
    const handleFileChange = (data) => setFormData(data);

    const handleSumit = async (e) => {
        e.preventDefault();
        // setLoading(true);
        for (const field in news) formData.set(field, news[field]);
        const response = await updNewsApi(formData);
        if (response.status === 'success') navigate('/dashboard/vewnews')
        else console.error(response.error);
        // setLoading(false);
    };

    return (
        <div className='updNewsDas'>
            <Title Icon={AttachFileIcon} name='Modificar noticias' />
            {news &&
                <UpdateNewsDas
                    news={news}
                    handleChange={handleChange}
                    handleActive={handleActive}
                    handleImg={handleImg}
                    handleFileChange={handleFileChange}
                    handleSumit={handleSumit}
                />
            }
            <Load loading={loading} />
        </div>
    );
};

export default UpdNewsDas;