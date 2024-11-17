import './siteUpdate.scss';
import { useState } from 'react';
import Load from '../../utils/Load';
import SiteUpdateButtons from './SiteUpdateButtons.jsx';
import { updSiteApi } from '../../../helpers/sites/updSite.api.js';
import SiteUpdatePortal from '../siteUpdateComp/SiteUpdatePortal/SiteUpdatePortal';
import SiteUpdateEvent from '../siteUpdateComp/SiteUpdateEvent/SiteUpdateEvent.jsx';
import SiteUpdateDescription from '../siteUpdateComp/SiteUpdateDescription/SiteUpdateDescription.jsx';
import SiteUpdateSocialMed from '../siteUpdateComp/SiteUpdateSocialMed/SiteUpdateSocialMedia.jsx';
import SiteUpdateCastAll from '../siteUpdateComp/SiteUpdateCastAll/SiteUpdateCastAll.jsx';

const SiteUpdate = ({ site, sites, setSites }) => {

    const [vew, setVew] = useState(null);
    const [loading, setLoading] = useState(false);
    const [files, setFiles] = useState([]);
    const [formData, setFormData] = useState(new FormData());
    const [values, setValues] = useState({
        _id: site._id, title: site.title, category: site.category, type: 'portal',
        subCategory: site.subCategory, city: site.location.city, province: site.location.province,
        userId: site.userId, isEvent: site.isEvent, events: [...site.events] || [],
        descriptionLong: site.description.long, descriptionShort: site.description.short || '',
        facebook: site.socialMedia.facebook || '', instagrame: site.socialMedia.instagrame || '',
        twitter: site.socialMedia.twitter || '', spotify: site.socialMedia.spotify || '',
        youtube: site.socialMedia.youtube || '', whatsApp: site.socialMedia.whatsApp || '',
        cast: site.cast ? site.cast : []
    });

    const handleValues = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        formData.set('folderName', `sites/${site.link}`);
        const addedFiles = new Set();
        formData.delete('files');
        files.forEach((file) => {
            if (!addedFiles.has(file.name)) {
                formData.append('files', file);
                addedFiles.add(file.name);
            };
        });
        formData.set('cast', JSON.stringify(values.cast));
        for (const field in values) {
            if (field !== 'cast') {
                formData.set(field, values[field]);
            }
        }

        formData.forEach((value, key) => { //--------Borrar
            console.log(`${key}:`, value); //--------Borrar
        });                                //--------Borrar

        const response = await updSiteApi(formData);
        if (response.status === 'success') {
            const data = [...sites];
            const index = data.findIndex(site => site._id == response.result._id);
            data[index] = response.result;
            setSites((preSite) => ({ ...preSite, docs: data }));
        }

        // Dar el mensjae por el titulo si no es el correcto.....
        setLoading(false);
    };

    return (
        <div className='siteUpdate'>
            <SiteUpdateButtons site={site} vew={vew} setVew={setVew} />
            {vew === 'portal' && <SiteUpdatePortal site={site} setFiles={setFiles} handleSubmit={handleSubmit} handleValues={handleValues} values={values} setValues={setValues} />}
            {vew === 'events' && <SiteUpdateEvent values={values} setValues={setValues} handleSubmit={handleSubmit} />}
            {vew === 'description' && <SiteUpdateDescription site={site} setFiles={setFiles} handleSubmit={handleSubmit} handleValues={handleValues} values={values} setValues={setValues} />}
            {vew === 'socialMedia' && <SiteUpdateSocialMed values={values} setValues={setValues} handleSubmit={handleSubmit} handleValues={handleValues} />}
            {vew === 'castAll' && <SiteUpdateCastAll site={site} setFiles={setFiles} handleSubmit={handleSubmit} handleValues={handleValues} values={values} setValues={setValues} setSites={setSites} />}

            <Load loading={loading} />
        </div>
    );
};

export default SiteUpdate;