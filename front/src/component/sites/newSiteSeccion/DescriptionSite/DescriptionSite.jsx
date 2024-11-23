import './descriptionSite.scss';
import { useState, useEffect } from 'react';
import ImgUpload from '../ImgUpload/ImgUpload';
import CharacterCounter from '../../../utils/CharacterCounter';

const DescriptionSite = ({ values, setFiles, setValues }) => {

    const [isMobile, setIsMobile] = useState(window.innerWidth >= 510 ? 510 : window.innerWidth);
    const handleDescription = (e) => setValues({ ...values, description: { ...values.description, [e.target.name]: e.target.value } });

    useEffect(() => { localStorage.setItem('to', 'socialMedia') }, []);
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
        <div className='descriptionSite'>
            <p className='pLabel'>Descripción</p>
            <section>
                <div className='short'>
                    <textarea name="short" onChange={handleDescription} placeholder='Describe una descripción de tu proyecto.' value={values?.description?.short || ''} required></textarea>
                    <CharacterCounter min={480} max={520} text={values?.description?.short} />
                </div>
                <ImgUpload width={`${isMobile - 50}px`} height={`${isMobile * 40 / 100}px`} name={'photoDescription'} setFiles={setFiles} img={values?.description?.img || ''} setValues={setValues} />
            </section>

            <textarea
                name="long" onChange={handleDescription}
                placeholder='Sigue ampliando una descripción, esta no es obligatoria.'
                value={values?.description?.long || ''}
            ></textarea>
            <div className='descriptionSiteText2'>
                <CharacterCounter min={800} max={900} text={values.descriptionLong} />
            </div>
        </div>
    );
};

export default DescriptionSite;