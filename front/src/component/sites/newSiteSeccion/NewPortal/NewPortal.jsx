import './newPortal.scss';
import ImgUpload from '../ImgUpload/ImgUpload';
import { sitiesCategories, sitiesSubCategories } from '../../../../utils/sitiesCategories.js';
import SelectedProvince from '../../../utils/SelectedProvince.jsx';
import { useState, useEffect } from 'react';

const NewPortal = ({ values, handleValues, setFiles, setValues }) => {

    const [isMobile, setIsMobile] = useState(window.innerWidth >= 1000 ? 1000 : window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth >= 1000 ? 1000 : window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='newPortal'>
            <ImgUpload width={`${isMobile - 50}px`} height={`${isMobile * 40 / 100}px`} name={'banner'} setFiles={setFiles} setValues={setValues} />

            <section className='newPortalCont'>

                <input
                    type="text" name='title'
                    placeholder='Título'
                    className='newPortalTitle'
                    onChange={handleValues}
                    required
                />

                <div className='newPortalCategories'>
                    <select name="category" onChange={handleValues} required>
                        <option value="">Catgeoría</option>
                        {sitiesCategories.map((sit, ind) => (
                            <option key={ind} value={sit.value}>{sit.name}</option>
                        ))}
                    </select>

                    <select name="subCategory" onChange={handleValues} required>
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

                <div className='newPortalCategories'>
                    <input type="text" name='city' placeholder='Ciudad' onChange={handleValues} required />
                    <div style={{ width: '200px' }}>
                        <SelectedProvince handleChange={handleValues} value={values.province} />
                    </div>
                </div>
            </section>

            <div className='newPortalLog'>
                <ImgUpload width={'200px'} height={'200px'} radius={'50%'} name={'logo'} setFiles={setFiles} setValues={setValues} />
            </div>
        </div>
    );
};

export default NewPortal;