import './imagesSities.scss';
import Switch from '@mui/material/Switch';
import { useState, useEffect } from 'react';
import ImgUpload from '../ImgUpload/ImgUpload';

const ImagesSities = ({ setFiles, setValues }) => {

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
                        <ImgUpload width={`${isMobile / 3}px`} height={`${isMobile * 25 / 100}px`} name={'galery1'} setFiles={setFiles} setValues={setValues} />
                        <ImgUpload width={`${isMobile / 3}px`} height={`${isMobile * 25 / 100}px`} name={'galery2'} setFiles={setFiles} setValues={setValues} />
                        <ImgUpload width={`${isMobile / 3}px`} height={`${isMobile * 25 / 100}px`} name={'galery3'} setFiles={setFiles} setValues={setValues} />
                    </div>

                    <div className='imagesSitiesGaleryBottom'>
                        <ImgUpload width={`${isMobile / 3}px`} height={`${isMobile * 50 / 100}px`} name={'glery4'} setFiles={setFiles} setValues={setValues} />
                        <div className='imagesSitiesGaleryBottomIn'>
                            <ImgUpload width={`${isMobile / 1.5}px`} height={`${isMobile * 25 / 100}px`} name={'galery5'} setFiles={setFiles} setValues={setValues} />
                            <div className='imagesSitiesGaleryIn'>
                                <ImgUpload width={`${isMobile / 3}px`} height={`${isMobile * 25 / 100}px`} name={'galery6'} setFiles={setFiles} setValues={setValues} />
                                <ImgUpload width={`${isMobile / 3}px`} height={`${isMobile * 25 / 100}px`} name={'galery7'} setFiles={setFiles} setValues={setValues} />
                            </div>
                        </div>
                    </div>

                </section>
            }

        </div>
    );
};

export default ImagesSities;