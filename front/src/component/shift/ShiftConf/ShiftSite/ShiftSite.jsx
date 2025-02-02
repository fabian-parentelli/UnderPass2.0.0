import './shiftSite.scss';
import Switch from '@mui/material/Switch';
import { Spinner } from 'faradaycomp';
import { useEffect, useState } from 'react';
import { getSiteByUserIdApi } from '../../../../helpers/sites/getSiteByUserId.api.js';
import { updSiteIsShiftApi } from '../../../../helpers/sites/updSiteIsShift.api.js';

const ShiftSite = ({ values }) => {

    const [site, setSite] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState(false);

    const handleSites = async () => {
        setLoading(true);
        const response = await getSiteByUserIdApi(values.userId);
        if (response.status === 'success') {
            console.log(response);
            if (response.result.length < 1) setSearch(true);
            else setSite(response.result);
        } else console.error(response);
        setLoading(false);
    };

    const handleJoin = async (e, id) => {
        setLoading(true);
        setSite((prevSites) =>
            prevSites.map((sit) =>
                sit._id === id ? { ...sit, isShift: e.target.checked } : sit
            )
        );
        const response = await updSiteIsShiftApi(id);
        if (response.status === 'success') setLoading(false);
        else console.error(response);
        setLoading(false);
    };

    return (
        <details className='shiftSite'>
            <summary>Enlace a tu sitio</summary>

            <section className='shiftSiteBody'>

                <div className='shiftSiteSearch'>
                    <p className='pgray'>Lo primero que haremos es buscar si tienes sitios.</p>
                    <p className='pgray'>De ser así seleccionar el que quieras relacionar.</p>
                    <p className='btn btnSH shiftSiteButton' onClick={handleSites}>Buscar Sitios</p>
                </div>

                {loading && <div className='shiftSiteSpinner'><Spinner color='#ec3639' size={50} /></div>}

                <div className='shiftSiteSearchResult'>
                    {!loading && site && site.length > 0 && site.map((sit) => (
                        <div key={sit._id}>
                            <p>{sit.title}</p>
                            <div className='shiftSiteSwitch'>
                                <p>NO</p>
                                <Switch checked={sit.isShift} onChange={(e) => handleJoin(e, sit._id)} />
                                <p>SI</p>
                            </div>
                            <p className='pgray'>Habilita sistema de turnos</p>
                        </div>
                    ))}
                </div>

                {search && <p style={{ color: '#ec3639' }}>No tienes un sitio creado...</p>}
            </section>

        </details>
    );
};

export default ShiftSite;