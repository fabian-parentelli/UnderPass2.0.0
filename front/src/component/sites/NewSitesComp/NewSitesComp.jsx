import './newSitesComp.scss';
import { useState } from 'react';
import Load from '../../utils/Load.jsx';
import Cast from '../newSiteSeccion/Cast/Cast';
import { useNavigate } from 'react-router-dom';
import NewPortal from '../newSiteSeccion/NewPortal/NewPortal';
import EventSite from '../newSiteSeccion/EventSite/EventSite';
import Discography from '../newSiteSeccion/Discography/Discography';
import ProductSite from '../newSiteSeccion/ProductSite/ProductSite';
import VideoSities from '../newSiteSeccion/VideoSities/VideoSities';
import ShiftSities from '../newSiteSeccion/ShiftSities/ShiftSities';
import StreamVideo from '../newSiteSeccion/StreamVideo/StreamVideo';
import { newSitesApi } from '../../../helpers/sites/newSites.api.js';
import ImagesSities from '../newSiteSeccion/ImagesSities/ImagesSities';
import SocialMediaSite from '../newSiteSeccion/SocialMediaSite/SocialMediaSite';
import DescriptionSite from '../newSiteSeccion/DescriptionSite/DescriptionSite';

const NewSitesComp = ({ userId }) => {

    const [formData, setFormData] = useState(new FormData());
    const [files, setFiles] = useState([]);
    const [values, setValues] = useState({
        isEvent: false, userId, events: [], isProduct: false, isDiscography: false, isVideo: false,
        isShift: false, products: [], isGalery: false
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleValues = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        formData.set('userId', userId);
        const folderName = formatText(values.title);
        formData.set('folderName', `sites/${folderName}`);
        const addedFiles = new Set();
        formData.delete('files');
        files.forEach((file) => {
            if (!addedFiles.has(file.name)) {
                formData.append('files', file);
                addedFiles.add(file.name);  
            };
        });
        for (const field in values) formData.set(field, values[field]);
        const response = await newSitesApi(formData);
        if(response.status === 'success') navigate('/') // Cambiar a la página ya creada.
        else console.error(response.error);
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
            <ImagesSities setFiles={setFiles} setValues={setValues} values={values} />
            {values.category && values.category === 'stream'
                ? <StreamVideo values={values} handleValues={handleValues} />
                : <VideoSities values={values} setValues={setValues} handleValues={handleValues} />
            }
            <ShiftSities values={values} />

            <div className='newSitesButton'>
                <button className='btn btnUS'>Crear</button>
            </div>

            <Load loading={loading} />
        </form>
    );
};

export default NewSitesComp;

function formatText(text) {

    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "");
};