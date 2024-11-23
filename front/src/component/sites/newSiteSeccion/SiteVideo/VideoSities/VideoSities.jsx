import './videoSities.scss';
import Switch from '@mui/material/Switch';
import { useEffect, useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { imagesHelp } from '../../../../../utils/urlImages.utils';
import ModalCustom from '../../../../utils/ModalCustom/ModalCustom';

const VideoSities = ({ values, setValues }) => {

    const [vews, setVews] = useState(values.videos.length > 0 ? values.videos : [{}, {}, {}]);
    const [vewModal, setVewModal] = useState(false);
    const [message, setMessage] = useState(false);

    useEffect(() => { setVews(values.videos) }, [values.videos]);

    const addVideos = () => setVews([...vews, {}]);
    const handleVideo = (e) => setValues({ ...values, isVideo: e.target.checked });
    const handleValues = (e, ind) => {
        const newVideos = [...values.videos];
        newVideos[ind] = { ...newVideos[ind], url: e.target.value };
        setValues({ ...values, videos: newVideos });
    };

    const handleDelete = (index) => {
        const videos = [...values.videos];
        videos.splice(index, 1);
        setValues({ ...values, videos: videos });
        setMessage(true);
    };

    return (
        <div className='videoSities'>
            <h6>Videos</h6>

            <section className='videoSitiesSectSwitch'>
                <div className='videoSitiesSwitch'>
                    <p>NO</p>
                    <Switch checked={values.isVideo} onChange={handleVideo} />
                    <p>SI</p>
                </div>
                <p className='videoSitiesHelp'>Habilita una galería de videos</p>
            </section>

            <p className='videoSitiesHelpUrl' onClick={() => setVewModal(true)}>¿Qué es una url?</p>

            {values.isVideo &&
                <section className='videoSitiesCenter'>
                    {vews.map((vid, ind) => (
                        <div key={ind} className='videoSitiesInputsDiv'>
                            <input
                                type="text"
                                name='url'
                                placeholder='Url del video de youtube'
                                onChange={(e) => handleValues(e, ind)}
                                value={vid.url}
                            />
                            <Tooltip title='Eliminar video' placement='right' >
                                <DeleteForeverIcon className='videoSitiesIcon' onClick={() => handleDelete(ind)} />
                            </Tooltip>
                        </div>
                    ))}
                    <p className='btn btnUS btnVideoSities' onClick={addVideos}>Agragar</p>
                    {message &&
                        <p style={{color: 'red'}}>Debes actualizar para confirmar la eliminación del video</p>
                    }
                </section>
            }

            <ModalCustom modalIsOpen={vewModal} closeModal={() => setVewModal(false)}>
                <div className='videoSitiesModal'>
                    <h2>¿Qué es la url?</h2>
                    <img src={imagesHelp.youtubeUrl} className='videoSitiesModalImg' alt="img" />
                    <p>Al hacer doble click en el navegador mientras tu video se encuentra en funcionamiento, te mostrará la direccion del mismo (url). Ejemplo de la url de UnderPass: <br /> <strong>https://www.youtube.com/watch?v=d6RfiS15s3U</strong> </p>
                </div>
            </ModalCustom>
        </div>
    );
};

export default VideoSities;