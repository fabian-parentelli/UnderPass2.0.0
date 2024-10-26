import './chooseSites.scss';
import { useEffect, useState } from 'react';
import Switch from '@mui/material/Switch';
import Checkboxes from '../../utils/Checkboxes';

const ChooseSites = ({ values, handleInSite, type: texto }) => {

    const [haveSite, setHaveSite] = useState(false);
    const [types, setType] = useState(null);

    useEffect(() => {
        // busca en la base de datos si tengo sitios
        setHaveSite(true);
    }, []);

    // Aca tengo que crear un array 

    return (
        <div className='chooseSites'>
            {haveSite &&
                <>
                    <div className='chooseSitesDivSwitch'>
                        <label>Ver en tu sitio</label>
                        <div className='chooseSitesSwitch'>
                            <p>NO</p>
                            <Switch checked={values.inSite} onChange={handleInSite} />
                            <p>SI</p>
                        </div>
                        <p className='chooseSitesMessage'>¿Quieres que se muestre este {texto} en tu sitio?</p>
                    </div>

                    {values.inSite &&
                        <>
                            <details>
                                <summary>Tus sitios</summary>
                                <div className='chooseSitesYourSites'>
                                    <Checkboxes labels={['La sala de ensayo', 'La pastafrola']} setType={setType} multiSelect={true} />
                                </div>
                            </details>
                            <p className='chooseSitesMessage'>Selecciona el o los sitios en donde quieres que aparezca tu {texto}.</p>
                        </>
                    }
                </>
            }
        </div>
    );
};

export default ChooseSites;