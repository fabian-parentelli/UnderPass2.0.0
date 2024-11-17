import { useEffect } from 'react';
import CharacterCounter from '../../../utils/CharacterCounter';
import ImgUpload from '../../newSiteSeccion/ImgUpload/ImgUpload';
import './siteUpdateDescription.scss';

const SiteUpdateDescription = ({ site, setFiles, handleSubmit, handleValues, values, setValues }) => {

    useEffect(() => { setValues({ ...values, type: 'description' }) }, []);

    return (
        <form className='siteUpdateDescription' onSubmit={handleSubmit}>

            <section className='siteUpdateDescImgs'>
                <div>
                    <p className='pgray'>Imágen actual</p>
                    <img
                        src={site.images.find(img => img.name === 'photoDescription').url}
                        alt="photoDescription" className='imgBanner'
                        style={{ objectPosition: site.images.find(i => i.name === 'photoDescription')?.position }}
                    />
                </div>
                <div>
                    <p className='pgray'>Imágen Nueva</p>
                    <ImgUpload width='280px' height='150px' name={'photoDescription'} setFiles={setFiles} setValues={setValues} />
                </div>
            </section>

            <div className='siteUpdateDescInputs'>
                <p>Descripción Corta <span>Requerida</span></p>
                <textarea name="descriptionShort" onChange={handleValues} value={values.descriptionShort} required></textarea>
                <CharacterCounter min={480} max={520} text={values.descriptionShort} />
            </div>

            <div className='siteUpdateDescInputs'>
                <p>Descripción Larga</p>
                <textarea name="descriptionLong" onChange={handleValues} value={values.descriptionLong}></textarea>
                <CharacterCounter min={550} max={600} text={values.descriptionShort} />
            </div>

            <button className='btn btnUS'>Actualizar</button>
        </form>
    );
};

export default SiteUpdateDescription;