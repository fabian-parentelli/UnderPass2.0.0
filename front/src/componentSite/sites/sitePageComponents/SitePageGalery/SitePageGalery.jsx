import './sitePageGalery.scss';
import { Fragment, useState } from 'react';
import ModalCustom from '../../../../component/utils/ModalCustom/ModalCustom';
import SitePageGaleryVew from '../SitePageGaleryVew/SitePageGaleryVew';

const SitePageGalery = ({ site }) => {

    const [vew, setVew] = useState({ index: null, open: false });

    const handleOpen = (ind) => setVew({ index: ind, open: true });
    const handleClosed = () => setVew({ index: null, open: false });

    return (
        <div className='sitePageGalery'>
            <h2>Galería</h2>
            <section>
                {site?.galery && site?.galery.map((img, ind) => (
                    <Fragment key={ind}>
                        <img
                            src={img.url}
                            alt={img.name}
                            className={img.name}
                            style={{ objectPosition: img.position }}
                            onClick={() => handleOpen(ind)}
                        />
                        {vew.index === ind &&
                            <ModalCustom modalIsOpen={vew.open} closeModal={handleClosed} >
                                <SitePageGaleryVew img={img} handleOpen={handleOpen} vew={vew} />
                            </ModalCustom>
                        }
                    </Fragment>
                ))
                }
            </section>
        </div>
    );
};

export default SitePageGalery;