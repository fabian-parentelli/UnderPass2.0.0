import * as provinces from '../../utils/provinces.utils.js';

const SelectedProvince = ({ handleChange, required = true }) => {

    const country = localStorage.getItem('country');

    const defaultOption = country === 'UY' ? 'Departamento' : 'Provincia';

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
