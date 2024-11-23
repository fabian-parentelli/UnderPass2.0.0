import './siteUpdateCastAll.scss';
import { useEffect } from 'react';
import ImgUpload from '../../newSiteSeccion/ImgUpload/ImgUpload';

import SiteUpdateAddCast from './SiteUpdateAddCast.jsx';

const SiteUpdateCastAll = ({ site, setFiles, handleSubmit, handleValues, values, setValues, setSites }) => {

    useEffect(() => { setValues({ ...values, type: 'castAll' }) }, []);

    const handleCast = (e, ind) => {
        const updatedCast = [...values.cast];
        updatedCast[ind] = { ...updatedCast[ind], [e.target.name]: e.target.value };
        setValues({ ...values, cast: updatedCast });
    };

    const handleDelete = async (index) => {

    };

    return (
        <form className='siteUpdateCastAll' onSubmit={handleSubmit}>
            <h3>Elenco:</h3>
            <section>
                {values && values.cast.map((cast, ind) => (
                    <div key={ind} className='siteUpdateCastAllImgs'>
                        <input name="castTitle" type="text" onChange={(e) => handleCast(e, ind)} value={cast.castTitle || ''} />
                        <div className='siteUpdateCastAllImg'>
                            <div>
                                <img
                                    src={site?.images.find(img => img.name === `castImg${ind}`).url}
                                    alt={`castImg${ind}`} className='imgBanner'
                                    style={{ objectPosition: site?.images.find(i => i.name === `castImg${ind}`)?.position }}
                                />
                                <p className='pgray'>Imagen Actual</p>
                            </div>
                            <div>
                                <ImgUpload width='150px' height='150px' name={`castImg${ind + 1}`} radius={'50%'} setFiles={setFiles} setValues={setValues} />
                            </div>
                        </div>
                        <textarea name="castText" type="text" onChange={(e) => handleCast(e, ind)} value={cast.castText || ''}></textarea>
                        <p className='siteUpdateCastAllDelete' onClick={() => handleDelete(ind)}>Eliminar integrante</p>
                        <div className='line siteUpdateCastAllLine'></div>
                    </div>
                ))}
            </section>

            <SiteUpdateAddCast values={values} handleValues={handleValues} setFiles={setFiles} setValues={setValues} />

            <button className='btn btnUS'>Actualizar</button>
        </form>
    );
};

export default SiteUpdateCastAll;