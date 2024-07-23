import './dataU.scss';
import Copy from '../../../utils/Copy';
import DateConf from '../../../utils/DateConf/DateConf';

const DataU = ({ values, handleChange, handleSubmit, setValues }) => {

    const country = localStorage.getItem('country');

    const birthday = new Date(values.birthday);
    const birthdayParts = {
        day: birthday.getDate(),
        month: birthday.getMonth(),
        year: birthday.getFullYear()
    };

    return (
        <form className='dataU' onSubmit={handleSubmit}>

            <div className='datUDiv'>
                <div>
                    <label>Nombre</label>
                    <input type="text" name='name' value={values.name || ''} onChange={handleChange} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name='email' value={values.email || ''} onChange={handleChange} />
                </div>
            </div>

            <div className='datUDivDate'>
                <div>
                    <label>Cumpleaños</label>
                    <DateConf setValues={setValues} birthday={birthdayParts} />
                </div>
            </div>

            <div className='datUDiv'>
                <div className='datUDivPhone'>
                    <label>Teléfono</label>
                    <input type="phone" name='phone' value={values.phone || ''} onChange={handleChange} />
                </div>
                <div className='datUDivPhone'>
                    <label>{country === 'AR' ? 'DNI' : 'Cédula de identidad'}</label>
                    <input type="text" name='dni' value={values.dni || ''} onChange={handleChange} />
                </div>
            </div>

            <div className='datUDiv'>
                <div>
                    <label>{country === 'AR' ? 'Provincia' : 'Departamento'}</label>
                    <input type="text" name='location.province' value={values.location.province || ''} onChange={handleChange} />
                </div>
                <div>
                    <label>Ciudad</label>
                    <input type="text" name='location.city' value={values.location.city || ''} onChange={handleChange} />
                </div>
            </div>

            <div className='datUDiv'>
                <div>
                    <label>Dirección</label>
                    <input type="text" name='location.address' value={values.location.address || ''} onChange={handleChange} />
                </div>
                <div>
                    <label>Codigo Postal</label>
                    <input type="text" name='location.postalCode' value={values.location.postalCode || ''} onChange={handleChange} />
                </div>
            </div>

            <div className='dataUCopy'>
                <p><strong>Id del usuario</strong> {values._id}</p>
                <Copy values={values._id} />
            </div>
            <button className='btn btnD'>Actualizar</button>

        </form>
    );
};

export default DataU;