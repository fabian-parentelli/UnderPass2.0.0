import SitePageCastAll from "./SitePageCastAll/SitePageCastAll";

const SitePageCast = ({ site }) => {

    return (
        <div style={{marginTop: '6rem'}}>
            {site.castPerson
                ? 'Solo'
                : <SitePageCastAll site={site} />
            }
        </div>
    );
};

export default SitePageCast;