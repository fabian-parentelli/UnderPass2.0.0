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
                                src={site.images.find(i => i.name === `castImg${ind}`)?.url}
                                alt="img" className='sitePageCastAllImg'
                                style={{ objectPosition: site.images.find(i => i.name === `castImg${ind}`)?.position }}
                            />
                            <p>{cast.castTitle}</p>
                        </div>

                        {vew.index === ind &&
                            <ModalCustom modalIsOpen={vew.open} closeModal={handleClosed}>
                                <SitePageCastModal cast={cast} images={site.images} ind={ind} />
                            </ModalCustom>
                        }
                    </Fragment>
                ))}
            </section>

        </div>
    );
};

export default SitePageCastAll;