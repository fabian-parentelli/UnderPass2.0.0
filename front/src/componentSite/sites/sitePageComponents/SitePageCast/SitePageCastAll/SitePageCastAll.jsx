import './sitePageCastAll.scss';
import { Fragment, useState } from 'react';
import SitePageCastModal from '../SitePageCastModal/SitePageCastModal';
import ModalCustom from '../../../../../component/utils/ModalCustom/ModalCustom';

const SitePageCastAll = ({ site }) => {

    const [vew, setVew] = useState({ index: null, open: false });

    const hanldeOpen = (index) => setVew({ index, open: true });
    const handleClosed = () => setVew({ index: null, open: false });

    return (
        <div className='sitePageCastAll'>
            <h2>Quienes integramos {site.title}:</h2>

            <section>
                {site.cast && site.cast.map((cast, ind) => (
                    <Fragment key={ind}>
                        <div className='sitePageCastAllCard' onClick={() => hanldeOpen(ind)}>
                            <img
                                src={cast.img.url}
                                alt="img" className='sitePageCastAllImg'
                                style={{ objectPosition: cast.img?.position }}
                            />
                            <p>{cast.title}</p>
                        </div>

                        {vew.index === ind &&
                            <ModalCustom modalIsOpen={vew.open} closeModal={handleClosed}>
                                <SitePageCastModal cast={cast} />
                            </ModalCustom>
                        }
                    </Fragment>
                ))}
            </section>

        </div>
    );
};

export default SitePageCastAll;