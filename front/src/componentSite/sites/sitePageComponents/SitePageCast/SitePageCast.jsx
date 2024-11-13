import SitePageCastAll from "./SitePageCastAll/SitePageCastAll";
import SitePageOnly from './SitePageOnly/SitePageOnly';

const SitePageCast = ({ site }) => {

    return (
        <div style={{marginTop: '6rem'}}>
            {site.castPerson
                ? <SitePageOnly site={site} />
                : site.cast.length > 0 ? <SitePageCastAll site={site} /> : null
            }
        </div>
    );
};

export default SitePageCast;