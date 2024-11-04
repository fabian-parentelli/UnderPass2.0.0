import './imagesSities.scss';
import { useState, useEffect } from 'react';
import Switch from '@mui/material/Switch';
import ImgUpload from '../ImgUpload/ImgUpload';

const ImagesSities = ({ formData }) => {

    const [vew, setVew] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth >= 900 ? 900 : window.innerWidth);

    const handleVew = (e) => setVew(e.target.checked);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth >= 900 ? 900 : window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='imagesSities'>

            <section className='imagesSitiesSectA'>
                <p>Galería de imagenes</p>
                <div className='imagesSitiesSwitch'>
                    <p>NO</p>
                    <Switch value={vew} onChange={handleVew} />
                    <p>SI</p>
                </div>
            </section>

            {vew &&
                <section className='imagesSitiesGalery'>

                    <div className='imagesSitiesGaleryTop'>
                        <ImgUpload width={`${isMobile / 3}px`} height={`${isMobile * 25 / 100}px`} name={'galery1'} formData={formData} />
                        <ImgUpload width={`${isMobile / 3}px`} height={`${isMobile * 25 / 100}px`} name={'galery2'} formData={formData} />
                        <ImgUpload width={`${isMobile / 3}px`} height={`${isMobile * 25 / 100}px`} name={'galery3'} formData={formData} />
                    </div>

                    <div className='imagesSitiesGaleryBottom'>
                        <ImgUpload width={`${isMobile / 3}px`} height={`${isMobile * 50 / 100}px`} name={'glery4'} formData={formData} />
                        <div className='imagesSitiesGaleryBottomIn'>
                            <ImgUpload width={`${isMobile / 1.5}px`} height={`${isMobile * 25 / 100}px`} name={'galery5'} formData={formData} />
                            <div className='imagesSitiesGaleryIn'>
                                <ImgUpload width={`${isMobile / 3}px`} height={`${isMobile * 25 / 100}px`} name={'galery6'} formData={formData} />
                                <ImgUpload width={`${isMobile / 3}px`} height={`${isMobile * 25 / 100}px`} name={'galery7'} formData={formData} />
                            </div>
                        </div>
                    </div>

                </section>
            }

        </div>
    );
};

export default ImagesSities;