import './dataU.scss';
import Copy from '../../../utils/Copy';

const DataU = ({ values }) => {

    const country = localStorage.getItem('country');

    return (
        <form className='dataU'>

            <div className='datUDiv'>
                <div>
                    <label>Nombre</label>
                    <input type="text" name='name' value={values.name || ''} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name='emial' value={values.email || ''} />
                </div>
            </div>

            <div className='datUDiv'>
                <div>
                    <label>Cumpleaños</label>
                    <input
                        type="text"
                        name='birthday'
                        value={new Date(values.birthday).toLocaleDateString() || ''}
                    />
                </div>
                <div>
                    <label>Phone</label>
                    <input type="phone" name='phone' value={values.phone || ''} />
                </div>
            </div>

            <div className='datUDiv'>
                <div>
                    <label>{country === 'AR' ? 'Provincia' : 'Departamento'}</label>
                    <input type="text" name='location.province' value={values.location.province || ''} />
                </div>
                <div>
                    <label>Ciudad</label>
                    <input type="text" name='location.city' value={values.location.city || ''} />
                </div>
            </div>

            <div className='datUDiv'>
                <div>
                    <label>Dirección</label>
                    <input type="text" name='location.address' value={values.location.address || ''} />
                </div>
                <div>
                    <label>Codigo Postal</label>
                    <input type="text" name='location.postalCode' value={values.location.postalCode || ''} />
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