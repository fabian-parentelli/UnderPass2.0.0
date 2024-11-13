import './sitePageOnly.scss';

const SitePageOnly = ({ site }) => {

    return (
        <div className='sitePageOnly'>
            <h2>Quien soy</h2>

            <section>
                {site.castPerson &&
                    <p>{site.castPerson}</p>
                }
                <img
                    src={site.images.find(i => i.name === 'castImg')?.url}
                    alt="img" className='sitePageOnlyImg'
                    style={{ objectPosition: site.images.find(i => i.name === 'castImg')?.position }}
                />
            </section>
        </div>
    );
};

export default SitePageOnly;