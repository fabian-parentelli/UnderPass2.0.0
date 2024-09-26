import { useEffect, useState } from 'react';
import * as provinces from '../../utils/provinces.utils.js';

const SelectedProvince = ({ handleChange, required = true, coun }) => {

    const [defaultOption, setDefaultOption] = useState(null)
    const [country, setCountry] = useState(coun ? coun : localStorage.getItem('country'))

    useEffect(() => {
        setCountry(coun ? coun : localStorage.getItem('country'));
        !coun 
            ? setDefaultOption(country === 'UY' ? 'Departamento' : 'Provincia')
            : setDefaultOption(coun === 'UY' ? 'Departamento' : 'Provincia')
    }, [coun]);

    return (
        <select name="province" style={{ width: '100%' }} onChange={handleChange} required={required} defaultValue="">
            <option value="" >
                {defaultOption}
            </option>
            {country === 'UY'
                ? provinces.uruguay.map((prov, index) => (
                    <option value={prov} key={index}>{prov}</option>
                ))
                : provinces.argentina.map((prov, index) => (
                    <option value={prov} key={index}>{prov}</option>
                ))
            }
        </select>
    );
};

export default SelectedProvince;