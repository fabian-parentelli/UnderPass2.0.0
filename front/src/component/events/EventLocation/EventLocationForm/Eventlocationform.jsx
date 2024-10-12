import './eventLocationForm.scss';
import SelectedProvince from '../../../utils/SelectedProvince.jsx';

const EventLocationForm = ({ handleChange, country, handleSubmit }) => {

    return (
        <form className='eventLocationForm' onSubmit={handleSubmit}>

            <section className='eventlocationSect'>
                <div>
                    <label>{country === 'UY' ? 'Departamento' : 'Provincia'}</label>
                    <SelectedProvince handleChange={handleChange} required={true} coun={country} />
                </div>
                <div>
                    <label>Ciudad</label>
                    <input type="text" name='city' onChange={handleChange} />
                </div>
            </section>

            <section className='eventlocationSect'>
                <div>
                    <label>Direccón</label>
                    <input type="text" name='address' onChange={handleChange} />
                </div>
                <div>
                    <label>Número de Puerta</label>
                    <input type="text" name='door' onChange={handleChange} />
                </div>
            </section>

            <section className='eventlocationSect'>
                <div>
                    <label>Lugar <span>Teatro, bar, centro cultural, etc</span></label>
                    <input type="text" name='place' onChange={handleChange} />
                </div>
                <div>
                    <button className='btn eventLocationFormBtn'>Selccionar</button>
                </div>
            </section>

        </form>
    );
};

export default EventLocationForm;