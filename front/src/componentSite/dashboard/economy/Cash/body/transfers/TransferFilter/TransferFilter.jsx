import './transferFilter.scss';

const TransferFilter = ({ setValues }) => {

    const handleChange = (e) => setValues(prevValues => ({ ...prevValues, [e.target.name]: e.target.value }));

    return (
        <form className='transferFilter'>

            <select name="type" onChange={handleChange}>
                <option value="">Comprobantes</option>
                <option value="write">Fromulario</option>
                <option value="whatsapp">WhatsApp</option>
                <option value="ticket">Ticket</option>
            </select>

            <select name="confirm" onChange={handleChange}>
                <option value="">Confirmado</option>
                <option value="true">SI</option>
                <option value="false">No</option>
            </select>

        </form>
    );
};

export default TransferFilter;