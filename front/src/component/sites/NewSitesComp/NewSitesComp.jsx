import './newSitesComp.scss';
import { useState } from 'react';
import Cast from '../newSiteSeccion/Cast/Cast';
import NewPortal from '../newSiteSeccion/NewPortal/NewPortal';
import EventSite from '../newSiteSeccion/EventSite/EventSite';
import Discography from '../newSiteSeccion/Discography/Discography';
import ProductSite from '../newSiteSeccion/ProductSite/ProductSite';
import VideoSities from '../newSiteSeccion/VideoSities/VideoSities';
import ShiftSities from '../newSiteSeccion/ShiftSities/ShiftSities';
import StreamVideo from '../newSiteSeccion/StreamVideo/StreamVideo';
import ImagesSities from '../newSiteSeccion/ImagesSities/ImagesSities';
import SocialMediaSite from '../newSiteSeccion/SocialMediaSite/SocialMediaSite';
import DescriptionSite from '../newSiteSeccion/DescriptionSite/DescriptionSite';
import { newSitesApi } from '../../../helpers/sites/newSites.api';

const NewSitesComp = ({ userId }) => {

    const [formData, setFormData] = useState(new FormData());
    const [files, setFiles] = useState([]);
    const [values, setValues] = useState({
        isEvent: false, userId, events: [], isProduct: false, isDiscography: false, isVideo: false,
        isShift: false
    });

    const [loading, setLoading] = useState(false);

    const handleValues = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        formData.set('userId', userId);
        formData.set('folderName', `/sites/${values.title}`);
    
        const addedFiles = new Set();  // Para llevar el control de los archivos agregados
        files.forEach((file) => {
            // Verifica si el archivo ya fue agregado
            if (!addedFiles.has(file.name)) {
                formData.append('files', file);
                addedFiles.add(file.name);  // Marca el archivo como agregado
            }
        });
    
        // Agregar otros campos de formData
        for (const field in values) formData.set(field, values[field]);
    
        // Para verificar que solo se agreguen los archivos correctamente
        for (const [key, value] of formData.entries()) {
            console.log(key, value);
        }
    
        // Enviar los datos con la API
        const response = await newSitesApi(formData);

        setLoading(false);
    };
    

    return (
        <form className='newSitesComp' onSubmit={handleSubmit}>
            <NewPortal values={values} handleValues={handleValues} setFiles={setFiles} setValues={setValues} />
            <EventSite values={values} setValues={setValues} />
            <DescriptionSite values={values} handleValues={handleValues} setFiles={setFiles} setValues={setValues} />
            <SocialMediaSite values={values} handleValues={handleValues} />
            <Cast values={values} handleValues={handleValues} setFiles={setFiles} setValues={setValues} />
            {values.category === 'art' && values.subCategory && (values.subCategory === 'musicalGroup' || values.subCategory === 'solist') && (
                <Discography handleValues={handleValues} values={values} setValues={setValues} setFiles={setFiles} />
            )}
            <ProductSite values={values} setValues={setValues} />
            <ImagesSities setFiles={setFiles} setValues={setValues} />
            {values.category && values.category === 'stream'
                ? <StreamVideo values={values} handleValues={handleValues} />
                : <VideoSities values={values} setValues={setValues} handleValues={handleValues} />
            }
            <ShiftSities values={values} />

            <div className='newSitesButton'>
                <button className='btn btnUS' disabled={loading}>Crear</button>
            </div>
        </form>
    );
};

export default NewSitesComp;