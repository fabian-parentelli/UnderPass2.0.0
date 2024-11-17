import './siteUpdateSocialMed.scss';
import { useEffect } from 'react';
import SocialMediaSite from '../../newSiteSeccion/SocialMediaSite/SocialMediaSite';

const SiteUpdateSocialMed = ({ values, setValues, handleSubmit, handleValues }) => {

    useEffect(() => { setValues({ ...values, type: 'socialMedia' }) }, []);

    return (
        <form className='siteUpdateSocialMed' onSubmit={handleSubmit}>
            <SocialMediaSite values={values} handleValues={handleValues} />
            <button className='btn btnUS' >Actualizar</button>
        </form>
    );
};

export default SiteUpdateSocialMed;