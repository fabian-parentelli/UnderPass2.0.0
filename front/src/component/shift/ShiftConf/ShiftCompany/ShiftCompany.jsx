import './shiftCompany.scss';
import { useState } from 'react';
import InfoIcon from '@mui/icons-material/Info';
import { typeShifts } from '../../../../utils/typeShifts.utils.js';

const ShiftCompany = () => {

    const [info, setInfo] = useState(false);

    return (
        <details className='shiftCompany'>
            <summary>Empresa</summary>

            <section className='shiftCompanyA'>
                <div>
                    <label>Nombre</label>
                    <input type="text" name='title' placeholder='Nombre de la empresa' required />
                </div>
                <div>
                    <label>Tipo de negocio</label>
                    <select name="category" required>
                        <option value="" style={{ color: 'gray' }}>Elíge una categoría</option>
                        {typeShifts.map((typeS, ind) => (
                            <option value={typeS.value} key={ind}>{typeS.type}</option>
                        ))}
                    </select>
                </div>
                <div className='shiftCompanyInfo'>
                    <InfoIcon className='shiftCompanyInfoIcon' onClick={() => setInfo(!info)} />
                    <div className='shiftCompanyInfoText' style={{display: info ? 'block' : 'none'}}>
                        <p><strong>Sala de ensayo:</strong> musical, teatro, danza.</p>
                        <p><strong>Estudio:</strong> grabación, filmaker, fotografía.</p>
                        <p><strong>Escenario:</strong> bar, pub, club, c.cultutal, teatro.</p>
                        <p><strong>Academia:</strong> varias disiplinas.</p>
                    </div>
                </div>
            </section>

        </details>
    );
};

export default ShiftCompany;