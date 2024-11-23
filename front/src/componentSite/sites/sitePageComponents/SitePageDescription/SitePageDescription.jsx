import './sitePageDescription.scss';

const SitePageDescription = ({ site }) => {

    return (
        <div className='sitePageDescription'>
            <h2>Te cuento de {site.title}:</h2>
            <div className='sitePageDescriptionTop'>
                <p>{site.description.short}</p>
                <img
                    src={site.description.img.url}
                    alt="img" className='sitePageDescriptionImg'
                    style={{ objectPosition: site.description.img?.position }}
                />
            </div>
            <p>{site.description.long}</p>
        </div>
    );
};

export default SitePageDescription;