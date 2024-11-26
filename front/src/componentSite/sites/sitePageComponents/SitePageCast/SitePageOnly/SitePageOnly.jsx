import './sitePageOnly.scss';

const SitePageOnly = ({ site }) => {

    return (
        <div className='sitePageOnly'>
            <h2>Quien soy</h2>

            <section>
                {site.castPerson &&
                    <p>{site.castPerson.text}</p>
                }
                <img
                    src={site.castPerson.img.url}
                    alt="img" className='sitePageOnlyImg'
                    style={{ objectPosition: site.castPerson.img?.position}}
                />
            </section>
        </div>
    );
};

export default SitePageOnly;