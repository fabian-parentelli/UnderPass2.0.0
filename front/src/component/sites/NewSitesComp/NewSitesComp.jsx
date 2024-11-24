import './newSitesComp.scss';
import Load from '../../utils/Load';
import { useEffect, useState } from 'react';
import Cast from '../newSiteSeccion/Cast/Cast.jsx';
import ScrollToTop from '../../utils/ScrollToTop.jsx';
import NewPortal from '../newSiteSeccion/NewPortal/NewPortal';
import EventSite from '../newSiteSeccion/EventSite/EventSite.jsx';
import { newSitesApi } from '../../../helpers/sites/newSites.api.js';
import NewSiteButtom from '../newSiteSeccion/NewSiteButton/NewSiteBurron';
import { getSiteByIdApi } from '../../../helpers/sites/getSiteById.api.js';
import DescriptionSite from '../newSiteSeccion/DescriptionSite/DescriptionSite.jsx';
import SocialMediaSite from '../newSiteSeccion/SocialMediaSite/SocialMediaSite.jsx';
import Discography from '../newSiteSeccion/Discography/Discography.jsx';
import ProductSite from '../newSiteSeccion/ProductSite/ProductSite.jsx';
import ImagesSities from '../newSiteSeccion/ImagesSities/ImagesSities.jsx';
import SiteVideo from '../newSiteSeccion/SiteVideo/SiteVideo.jsx';
import EndSections from '../newSiteSeccion/EndSections/EndSections.jsx';

const NewSitesComp = ({ userId, id }) => {

    const [vewButton, setVewButton] = useState(true);
    const [loading, setLoading] = useState(false);
    const [vew, setVew] = useState('portal');
    const [files, setFiles] = useState([]);
    const [values, setValues] = useState({ userId: userId || '', location: { country: localStorage.getItem('country') } });

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getSiteByIdApi(id);
            if (response.status === 'success') setValues({ ...response.result, post: 'portal' });
            else console.error(response.error);
            setLoading(false);
        }; if (id) fetchData();
    }, []);

    useEffect(() => { setValues({ ...values, post: vew }) }, [vew]);

    useEffect(() => {
        const checkUniqueTitles = () => {
            let castUnique = true;
            let discographyUnique = true;
            if (values.cast && values.cast.length > 0) {
                const castTitles = values.cast.map(item => item.title);
                castUnique = castTitles.length === new Set(castTitles).size;
            };
            if (values.discography && values.discography.length > 0) {
                const discographyTitles = values.discography.map(item => item.title);
                discographyUnique = discographyTitles.length === new Set(discographyTitles).size;
            };
            setVewButton(castUnique && discographyUnique);
        };
        checkUniqueTitles();
    }, [values.cast, values.discography]);


    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        let formdata = new FormData()
        const folderName = formatText(values.title);
        setValues({ ...values, link: folderName });
        formdata.set('folderName', `sites/${folderName}`);
        const addedFiles = new Set();
        formdata.delete('files');
        files.forEach((file) => {
            if (!addedFiles.has(file.name)) {
                formdata.append('files', file);
                addedFiles.add(file.name);
            };
        });
        formdata.set('values', JSON.stringify(values));
        const response = await newSitesApi(formdata);
        if (response.status === 'success') {
            setFiles([]);
            setValues(response.result);
            localStorage.setItem('site', response.result._id);
            setVew(localStorage.getItem('to'));
        } else console.error(response.error);
        formdata = new FormData()
        setLoading(false);
    };

    if (id && loading) return <Load loading={loading} />

    return (
        <form className='newSitesComp' onSubmit={handleSubmit}>
            <ScrollToTop>
                <NewSiteButtom vew={vew} setVew={setVew} values={values} />
                {vew === 'portal' && <NewPortal values={values} setFiles={setFiles} setValues={setValues} />}
                {vew === 'events' && <EventSite values={values} setValues={setValues} />}
                {vew === 'description' && <DescriptionSite values={values} setFiles={setFiles} setValues={setValues} />}
                {vew === 'socialMedia' && <SocialMediaSite values={values} setValues={setValues} />}
                {vew === 'cast' && <Cast values={values} setValues={setValues} setFiles={setFiles} setVew={setVew} />}
                {vew === 'discography' && <Discography values={values} setFiles={setFiles} setValues={setValues} />}
                {vew === 'products' && <ProductSite values={values} setValues={setValues} />}
                {vew === 'galery' && <ImagesSities values={values} setFiles={setFiles} setValues={setValues} />}
                {vew === 'videos' && <SiteVideo values={values} setValues={setValues} />}
                {vew === 'end' && <EndSections values={values} />}
                <button className='btn btnUS' disabled={!vewButton}>{id ? 'Actualizar' : 'Agragar'}</button>
                {!vewButton && <p className='newSitesCompAlert'>No se puede repetir los nombres</p>}
                <Load loading={loading} />
            </ScrollToTop>
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