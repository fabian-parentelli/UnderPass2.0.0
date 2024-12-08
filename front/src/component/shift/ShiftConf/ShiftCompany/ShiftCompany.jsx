import './shiftCompany.scss';
import { useState } from 'react';
import InfoIcon from '@mui/icons-material/Info';
import { typeShifts } from '../../../../utils/typeShifts.utils.js';
import CharacterCounter from '../../../utils/CharacterCounter.jsx';
import SelectedProvince from '../../../utils/SelectedProvince.jsx';
import ImgUpload from '../../../sites/newSiteSeccion/ImgUpload/ImgUpload.jsx';

const ShiftCompany = ({ values, setValues, setFiles, handleValues }) => {

    const [info, setInfo] = useState(false);

    const country = localStorage.getItem('country');
    const handleChange = (e) => setValues({ ...values, location: { ...values.location, [e.target.name]: e.target.value } })

    return (
        <details className='shiftCompany' onClick={() => info && setInfo(false)}>
            <summary>Empresa</summary>

            <section className='shiftCompanyA'>
                <div>
                    <label>Nombre</label>
                    <input
                        type="text" name='title'
                        placeholder='Nombre de la empresa'
                        value={values?.title || ''}
                        onChange={handleValues} required
                    />
                </div>
                <div>
                    <label>Tipo de negocio</label>
                    <select name="category" onChange={handleValues} value={values?.category || ''} required>
                        <option value="" style={{ color: 'gray' }}>Elíge una categoría</option>
                        {typeShifts.map((typeS, ind) => (
                            <option value={typeS.value} key={ind}>{typeS.type}</option>
                        ))}
                    </select>
                </div>
                <div className='shiftCompanyInfo'>
                    <InfoIcon className='shiftCompanyInfoIcon' onClick={() => setInfo(!info)} />
                    <div className='shiftCompanyInfoText' style={{ display: info ? 'block' : 'none' }}>
                        <p><strong>Sala de ensayo:</strong> musical, teatro, danza.</p>
                        <p><strong>Estudio:</strong> grabación, filmaker, fotografía.</p>
                        <p><strong>Escenario:</strong> bar, pub, club, c.cultutal, teatro.</p>
                        <p><strong>Academia:</strong> varias disciplinas.</p>
                    </div>
                </div>
            </section>

            <section className='shiftCompanyA' style={{ marginTop: '1rem' }}>
                <div>
                    <label>Cuentanos sobre {values?.title || 'tu empresa'}</label>
                    <textarea
                        name="description" onChange={handleValues}
                        placeholder='Describe tu empresa.'
                        value={values?.description || ''}
                    ></textarea>
                    <CharacterCounter min={200} max={250} text={values?.description} />
                </div>

                <div>
                    <label>Imagen</label>
                    <ImgUpload width={220} height={230} name='img' setFiles={setFiles} img={values?.img} setValues={setValues} />
                </div>

            </section>

            <section className='shiftCompanyA' style={{ marginTop: '1rem' }}>

                <div>
                    <label>{country === 'UY' ? 'Departamento' : 'Provincia'}</label>
                    <div style={{ width: '220px' }}>
                        <SelectedProvince handleChange={handleChange} value={values?.location?.province || ''} />
                    </div>
                </div>

                <div>
                    <label>Ciudad</label>
                    <input type="text" name='city' placeholder='Ciudad' onChange={handleChange} value={values?.location?.city || ''} />
                </div>
                
                <div>
                    <label>Dirección</label>
                    <input type="text" name='address' placeholder='Dirección' onChange={handleChange} value={values?.location?.address || ''} />
                </div>
            </section>

        </details>
    );
};

export default ShiftCompany;