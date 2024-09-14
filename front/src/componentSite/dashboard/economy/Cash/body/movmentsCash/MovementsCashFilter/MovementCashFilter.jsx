import { useState } from 'react';
import './movementCashFilter.scss';

const MovementCashFilter = ({ setQuery, country }) => {

    const [values, setValues] = useState({ inOut: '', type: '', date: '' });

    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery(prevQuery => ({ ...prevQuery, ...values }));
    };

    const handleReset = () => {
        setValues({ inOut: '', type: '', date: '' });
        setQuery({ country: country });
    };

    return (
        <form className='movementCashFilter' onSubmit={handleSubmit}>
            <select name="inOut" value={values.inOut} onChange={handleChange}>
                <option value="">Transacción</option>
                <option value="in">Ingreso</option>
                <option value="out">Egreso</option>
            </select>

            <select name="type" value={values.type} onChange={handleChange}>
                <option value="">Tipo</option>
                <option value="Mercado Pago">Pagos</option>
                <option value="mp">Mercado Pago</option>
                <option value="underPay">UnderPay</option>
                <option value="transfer">Transferencias</option>
            </select>

            <input type="date" name='date' value={values.date} onChange={handleChange} />

            <button type="submit" className='btn btnB' style={{ color: '#FFFFF' }}>Filtrar</button>
            <button type="button" className='btn btnE' onClick={handleReset}>Borrar</button>
        </form>
    );
};

export default MovementCashFilter;
