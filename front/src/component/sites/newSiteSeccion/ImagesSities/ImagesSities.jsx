import './imagesSities.scss';
import Switch from '@mui/material/Switch';
import { useState, useEffect } from 'react';
import ImgUpload from '../ImgUpload/ImgUpload';

const ImagesSities = ({ values, setFiles, setValues }) => {

    console.log(values.galery);


    const [vew, setVew] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth >= 900 ? 900 : window.innerWidth);

    const handleVew = (e) => setValues({ ...values, isGalery: e.target.checked });

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth >= 900 ? 900 : window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        localStorage.setItem('to', 'videos');
        setValues({ ...values, post: 'galery' });
    }, []);

    return (
        <div className='imagesSities'>

            <section className='imagesSitiesSectA'>
                <p>Galería de imagenes</p>
                <div className='imagesSitiesSwitch'>
                    <p>NO</p>
                    <Switch checked={values.isGalery} onChange={handleVew} />
                    <p>SI</p>
                </div>
            </section>

            {values.isGalery &&
                <section className='imagesSitiesGalery'>

                    <div className='imagesSitiesGaleryTop'>
                        <ImgUpload width={`${isMobile / 3}px`} height={`${isMobile * 25 / 100}px`} name={'galery0'} setFiles={setFiles} img={values.galery[0]} setValues={setValues} />
                        <ImgUpload width={`${isMobile / 3}px`} height={`${isMobile * 25 / 100}px`} name={'galery1'} setFiles={setFiles} img={values.galery[1]} setValues={setValues} />
                        <ImgUpload width={`${isMobile / 3}px`} height={`${isMobile * 25 / 100}px`} name={'galery2'} setFiles={setFiles} img={values.galery[2]} setValues={setValues} />
                    </div>

                    <div className='imagesSitiesGaleryBottom'>
                        <ImgUpload width={`${isMobile / 3}px`} height={`${isMobile * 50 / 100}px`} name={'galery3'} setFiles={setFiles} img={values.galery[3]} setValues={setValues} />
                        <div className='imagesSitiesGaleryBottomIn'>
                            <ImgUpload width={`${isMobile / 1.5}px`} height={`${isMobile * 25 / 100}px`} name={'galery4'} setFiles={setFiles} img={values.galery[4]} setValues={setValues} />
                            <div className='imagesSitiesGaleryIn'>
                                <ImgUpload width={`${isMobile / 3}px`} height={`${isMobile * 25 / 100}px`} name={'galery5'} setFiles={setFiles} img={values.galery[5]} setValues={setValues} />
                                <ImgUpload width={`${isMobile / 3}px`} height={`${isMobile * 25 / 100}px`} name={'galery6'} setFiles={setFiles} img={values.galery[6]} setValues={setValues} />
                            </div>
                        </div>
                    </div>

                </section>
            }

        </div>
    );
};

export default ImagesSities;