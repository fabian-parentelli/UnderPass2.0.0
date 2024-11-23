import './sitePageCastModal.scss';

const SitePageCastModal = ({ cast }) => {

    return (
        <div className='sitePageCastModal'>
            <img
                src={cast.img.url}
                alt="img" className='sitePageCastAllImg'
                style={{ objectPosition: cast.img?.position }}
            />
            <p className='sitePageCastModalTitle'>{cast.title}</p>
            <p>{cast.text}</p>
        </div>
    );
};

export default SitePageCastModal;