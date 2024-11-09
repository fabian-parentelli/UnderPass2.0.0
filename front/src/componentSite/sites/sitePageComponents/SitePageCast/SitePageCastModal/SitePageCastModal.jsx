import './sitePageCastModal.scss';

const SitePageCastModal = ({ cast, images, ind }) => {

    console.log(cast);


    return (
        <div className='sitePageCastModal'>
            <img
                src={images.find(i => i.name === `castImg${ind}`)?.url}
                alt="img" className='sitePageCastAllImg'
                style={{ objectPosition: images.find(i => i.name === `castImg${ind}`)?.position }}
            />
            <p className='sitePageCastModalTitle'>{cast.castTitle}</p>
            <p>{cast.castText}</p>
        </div>
    );
};

export default SitePageCastModal;