import './descriptionSite.scss';
import { useState, useEffect } from 'react';
import ImgUpload from '../ImgUpload/ImgUpload';
import CharacterCounter from '../../../utils/CharacterCounter';

const DescriptionSite = ({ values, handleValues, setFiles, setValues }) => {

    const [isMobile, setIsMobile] = useState(window.innerWidth >= 510 ? 510 : window.innerWidth);

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
                <div className='descriptionSiteDiv'>
                    <textarea name="descriptionShort" onChange={handleValues} placeholder='Describe una descripción de tu proyecto.' required></textarea>
                    <CharacterCounter min={800} max={900} text={values.descriptionShort} />
                </div>

                <ImgUpload width={`${isMobile - 50}px`} height={`${isMobile * 40 / 100}px`} name={'photoDescription'} setFiles={setFiles} setValues={setValues} />
            </section>

            <textarea
                name="descriptionLong" onChange={handleValues}
                placeholder='Sigue ampliando una descripción, esta no es obligatoria.'
            ></textarea>
            <div className='descriptionSiteText2'>
                <CharacterCounter min={800} max={900} text={values.descriptionLong} />
            </div>
        </div>
    );
};

export default DescriptionSite;