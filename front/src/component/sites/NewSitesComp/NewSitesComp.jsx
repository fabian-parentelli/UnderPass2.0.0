import './newSitesComp.scss';
import { useState } from 'react';
import NewPortal from '../newSiteSeccion/NewPortal/NewPortal';
import EventSite from '../newSiteSeccion/EventSite/EventSite';
import DescriptionSite from '../newSiteSeccion/DescriptionSite/DescriptionSite';
import SocialMediaSite from '../newSiteSeccion/SocialMediaSite/SocialMediaSite';
import Cast from '../newSiteSeccion/Cast/Cast';
import Discography from '../newSiteSeccion/Discography/Discography';
import ProductSite from '../newSiteSeccion/ProductSite/ProductSite';
import ImagesSities from '../newSiteSeccion/ImagesSities/ImagesSities';

const NewSitesComp = ({ userId }) => {

    const [formData, setFormData] = useState(new FormData());
    const [values, setValues] = useState({ isEvent: false, userId, events: [], isProduct: false });

    const handleValues = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    const handleSubmit = (e) => { //-----------------------------------------
        e.preventDefault();
        formData.append('userId', userId);
        for (const field in values) formData.set(field, values[field]);

        formData.forEach((value, key) => { // Solo Visualizo esto se borra !!!
            console.log(`${key}:`, value); // Solo Visualizo esto se borra !!!
        });                                // Solo Visualizo esto se borra !!!

    }; //---------------------------------------------------------------------

    return (
        <form className='newSitesComp' onSubmit={handleSubmit}>
            <NewPortal formData={formData} values={values} handleValues={handleValues} />
            <EventSite values={values} setValues={setValues} />
            <DescriptionSite formData={formData} values={values} handleValues={handleValues} />
            <SocialMediaSite values={values} handleValues={handleValues} />
            <Cast formData={formData} values={values} handleValues={handleValues} />
            <Discography formData={formData} handleValues={handleValues} />
            <ProductSite values={values} setValues={setValues} />

            <ImagesSities formData={formData} />

            <div className='newSitesButton'>
                <button className='btn btnUS'>Crear</button>
            </div>
        </form>
    );
};

export default NewSitesComp;