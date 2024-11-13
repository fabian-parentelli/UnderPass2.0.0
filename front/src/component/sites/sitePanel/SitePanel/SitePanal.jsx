import './sitePanal.scss';
import { useState } from 'react';
import SiteVewPanel from '../SiteVewPanel/SiteVewPanel';
import NewSitesComp from '../../NewSitesComp/NewSitesComp';

const SitePanal = ({ userId }) => {

    const [vew, setVew] = useState(null);

    const handleVew = (v) => setVew(vew === v ? null : v);

    return (
        <div className='sitePanal'>

            <section className='sitePanalButtons'>
                <button className='btn btnUS' onClick={() => handleVew('vew')}>Ver</button>
                <button className='btn btnUS' onClick={() => handleVew('new')}>Crear</button>
            </section>

            <section className='sitePanalBody'>
                {vew === 'vew' && <SiteVewPanel userId={userId} />}
                {vew === 'new' && <NewSitesComp userId={userId} />}
                {vew === null && <p>Nullo</p>}
            </section>

        </div>
    );
};

export default SitePanal;