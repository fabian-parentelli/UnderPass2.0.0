import './siteUpdatePortal.scss';
import SelectedProvince from '../../../utils/SelectedProvince.jsx';
import ImgUpload from '../../newSiteSeccion/ImgUpload/ImgUpload.jsx';
import { sitiesCategories, sitiesSubCategories } from '../../../../utils/sitiesCategories.js';

const SiteUpdatePortal = ({ site, setFiles, handleSubmit, handleValues, values, setValues }) => {

    return (
        <form className='siteUpdatePortal' onSubmit={handleSubmit}>
            <h3>Portada</h3>

            <section>
                <input type="text" name='title' value={values.title} placeholder='Título' onChange={handleValues} />

                <div className='siteUpdatePortalCat'>
                    <select name="category" onChange={handleValues} value={values.category} required>
                        <option value="">Catgeoría</option>
                        {sitiesCategories.map((sit, ind) => (
                            <option key={ind} value={sit.value}>{sit.name}</option>
                        ))}
                    </select>

                    <select name="subCategory" onChange={handleValues} value={values.subCategory} required>
                        <option value="">Sub-Categoría</option>
                        {values.category === 'art' && sitiesSubCategories.art.map((cat, ind) => (
                            <option key={ind} value={cat.value}>{cat.name}</option>
                        ))}
                        {values.category === 'trade' && sitiesSubCategories.trade.map((cat, ind) => (
                            <option key={ind} value={cat.value}>{cat.name}</option>
                        ))}
                        {values.category === 'premises' && sitiesSubCategories.premises.map((cat, ind) => (
                            <option key={ind} value={cat.value}>{cat.name}</option>
                        ))}
                        {values.category === 'stream' && sitiesSubCategories.stream.map((cat, ind) => (
                            <option key={ind} value={cat.value}>{cat.name}</option>
                        ))}
                    </select>
                </div>

                <div className='siteUpdatePortalCat'>
                    <input type="text" name='city' placeholder='Ciudad' onChange={handleValues} value={values.city} required />
                    <div style={{ width: '250px' }}>
                        <SelectedProvince handleChange={handleValues} value={values.province} />
                    </div>
                </div>

            </section>

            <section className='siteUpdatePortalImages'>
                <div>
                    <h4>Banner</h4>
                    <p className='pgray'>Imagen actual</p>
                    <img
                        src={site.images.find(img => img.name === 'banner').url}
                        alt="imgBanner" className='imgBanner'
                        style={{ objectPosition: site.images.find(i => i.name === 'banner')?.position }}
                    />
                    <p className='pgray'>Nueva imagen</p>
                    <ImgUpload width='280px' height='150px' name={'banner'} setFiles={setFiles} setValues={setValues} />
                </div>

                <div>
                    <h4>Logo</h4>
                    <p className='pgray'>Imagen actual</p>
                    <img
                        src={site.images.find(img => img.name === 'logo').url}
                        alt="imgBanner" className='imgLogo'
                        style={{ objectPosition: site.images.find(i => i.name === 'logo')?.position }}
                    />
                    <p className='pgray'>Nueva imagen</p>
                    <ImgUpload width='150px' height='150px' name={'logo'} radius='50%' setFiles={setFiles} setValues={setValues} />
                </div>
            </section>

            <button className='btn btnUS'>Actualizar</button>
        </form>
    );
};

export default SiteUpdatePortal;