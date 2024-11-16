import './sitePagePortal.scss';
import { useState } from 'react';
const urlPage = import.meta.env.VITE_PAGE_URL;
import QrCode2Icon from '@mui/icons-material/QrCode2';
import MessageIcon from '@mui/icons-material/Message';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Favorite from '../../../../component/utils/Favorite/Favorite.jsx';
import { typeSitesCategory, typeSitesSubCategory } from '../../../../utils/sitiesCategories.js';
import ModalCustom from '../../../../component/utils/ModalCustom/ModalCustom.jsx';
import SitePageQr from '../SitePageQr/SitePageQr.jsx';

const SitePagePortal = ({ site }) => {

    const [open, setOpen] = useState(false);

    const handleClick = () => navigator.clipboard.writeText(`${urlPage}/site/${site.link}`);

    return (
        <div className='sitePagePortal'>

            <section className='sitePagePortalA'>
                <img
                    src={site.images.find(i => i.name === 'banner')?.url}
                    alt="img" className='sitePagePortalBanner'
                    style={{ objectPosition: site.images.find(i => i.name === 'banner')?.position }}
                />
                <div className='sitePagePortalDiv'>
                    <h2>{site.title}</h2>
                    <p className='pgray'>{typeSitesCategory(site.category)} - {typeSitesSubCategory(site.subCategory)}</p>
                    <p>{site.location.city} - {site.location.province}</p>
                </div>
                <img
                    src={site.images.find(i => i.name === 'logo')?.url}
                    alt="img" className='sitePagePortalLogo'
                    style={{ objectPosition: site.images.find(i => i.name === 'logo')?.position }}
                />
            </section>

            <section className='sitePagePortalB'>

                <div className='sitePagePortalButtons'>
                    <Favorite id={site._id} />
                    <p>Favoritos</p>
                </div>

                <div className='sitePagePortalButtons' style={{ cursor: 'pointer' }}>
                    <MessageIcon style={{ color: 'gray' }} />
                    <p>Mensaje</p>
                </div>

                <div className='sitePagePortalButtons' style={{ cursor: 'pointer' }} onClick={handleClick}>
                    <ContentCopyIcon style={{ color: 'gray' }} />
                    <p>Dirección url</p>
                </div>

                <div className='sitePagePortalButtons' style={{ cursor: 'pointer' }} onClick={() => setOpen(true)}>
                    <QrCode2Icon style={{ color: 'gray' }} />
                    <p>Código Qr</p>
                </div>

            </section>

            <ModalCustom modalIsOpen={open} closeModal={() => setOpen(false)}>
                <SitePageQr url={`${urlPage}/site/${site.link}`} name={site.title} />
            </ModalCustom>

        </div>
    );
};

export default SitePagePortal;