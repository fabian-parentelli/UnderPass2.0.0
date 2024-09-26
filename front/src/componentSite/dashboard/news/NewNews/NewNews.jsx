import './newNews.scss';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Title from '../../../../component/dashboard/Title/Title';
import NewsTable from '../../../../component/news/NewsTable/NewsTable';
import { useState } from 'react';

const NewNews = () => {

    const [formData, setFormData] = useState(null);
    const [values, setValues] = useState({});
    const handleValues = (e) => setValues({ ...values, [e.target.name]: e.target.value });
    const handleFileChange = (data) => setFormData(data);

    const handleSubmit = (e) => {
        e.preventDefault();
        for (const field in values) formData.set(field, values[field]);

        formData.forEach((value, key) => {
            console.log(`${key}:`, value);
        });
        
        // Ahora tengo que construir el back
        // de las noticias y conectarlos, 
        // esta parte ya funciona
        // ------------------------------------
        // ------------------------------------
        // ------------------------------------
        // ------------------------------------
        // ------------------------------------
        // ------------------------------------
        // ------------------------------------
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

        </div>
    );
};

export default NewNews;