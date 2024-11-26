import './chooseSites.scss';
import { useEffect, useState } from 'react';
import Switch from '@mui/material/Switch';
import { getSiteByUserIdApi } from '../../../helpers/sites/getSiteByUserId.api';
import CheckBoxes2 from '../../utils/CheckBoxes2';

const ChooseSites = ({ values, handleInSite, type: texto, setValues, vew = true }) => {

    const [haveSite, setHaveSite] = useState(false);
    const [types, setType] = useState(null);
    const [labels, setLabels] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getSiteByUserIdApi(values.userId);
            if (response.status === 'success') {
                setLabels(response.result);
                setHaveSite(true);
            } else console.error(response.error);
        }; fetchData();
    }, []);

    useEffect(() => {
        setValues({ ...values, sites: types })
    }, [types]);

    return (
        <div className='chooseSites'>
            {haveSite &&
                <>
                    {vew &&
                        <div className='chooseSitesDivSwitch'>
                            <label>Ver en tu sitio</label>
                            <div className='chooseSitesSwitch'>
                                <p>NO</p>
                                <Switch checked={values.inSite} onChange={handleInSite} />
                                <p>SI</p>
                            </div>
                            <p className='chooseSitesMessage'>¿Quieres que se muestre este {texto} en tu sitio?</p>
                        </div>
                    }

                    {values.inSite &&
                        <>
                            <details>
                                <summary>Tus sitios</summary>
                                <div className='chooseSitesYourSites'>
                                    <CheckBoxes2 labels={labels} setType={setType} multiselect={true} />
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