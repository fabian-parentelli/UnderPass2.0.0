import './newNews.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Load from '../../../../component/utils/Load';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Title from '../../../../component/dashboard/Title/Title';
import NewsTable from '../../../../component/news/NewsTable/NewsTable';
import { createNewsApi } from '../../../../helpers/news/createNews.api.js';
import SnackbarAlert from '../../../../component/utils/SnackbarAlert.jsx';

const NewNews = () => {

    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState(null);
    const [values, setValues] = useState({});
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState({ status: '', mess: '' });

    const handleValues = (e) => setValues({ ...values, [e.target.name]: e.target.value });
    const handleFileChange = (data) => setFormData(data);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        for (const field in values) formData.set(field, values[field]);
        const response = await createNewsApi(formData);
        if (response.status === 'success') {
            setOpen(true);
            setMessage({ status: 'success', mess: 'Artículo creado correctamaente' });
            setTimeout(() => { navigate('/dashboard/vewnews') }, 2000);
        } else {
            setLoading(false);
            setOpen(true);
            setMessage({ status: 'error', mess: response.error });
            setTimeout(() => { setOpen(false) }, 2000);
        };
    };

    return (
        <div className='newNews'>
            <Title Icon={NewspaperIcon} name='Nueva noticia' />

            <p>Acá poder seleccionar un artista o un proyecto para poder tomar los datos......</p>

            <NewsTable
                values={values}
                setValues={setValues}
                handleValues={handleValues}
                handleSubmit={handleSubmit}
                handleFileChange={handleFileChange}
            />

            <SnackbarAlert message={message} open={open} />
            <Load loading={loading} />
        </div>
    );
};

export default NewNews;