import './wantBanner.scss';
import PostApplication from '../../advertisting/Applications/PostApplication/PostApplication';
import { useState } from 'react';
import Load from '../../utils/Load';

const WantBanner = ({ user, country }) => {

    const [loading, setLoading] = useState(false);

    return (
        <div className='wantBanner'>
            <div className='wantBannerDiv'>
                <h2>Quiero estar en el Banner.</h2>
                {<PostApplication userId={user._id} type='banners' country={country} setLoading={setLoading} />}
            </div>
            <img src="https://res.cloudinary.com/dtzy75wyt/image/upload/v1720959207/images/hn8qgjvacj8lxqzuwoyq.png" alt="img" />
            <Load loading={loading} />
        </div>
    );
};

export default WantBanner;