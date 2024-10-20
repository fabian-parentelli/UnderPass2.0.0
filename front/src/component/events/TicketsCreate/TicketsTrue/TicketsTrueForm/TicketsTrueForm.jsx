import './ticketsTrueForm.scss';
import Switch from '@mui/material/Switch';

const TicketsTrueForm = ({ values, handleSubmit, ticket, setTicket, tic }) => {

    const handleChange = (e) => setTicket({ ...ticket, [e.target.name]: e.target.value });
    const handleSwitch = (e) => setTicket({ ...ticket, active: e.target.checked });

    return (
        <form className='ticketsTrueForm' onSubmit={handleSubmit}>

            <section>
                <div>
                    <label>Activa</label>
                    <div className='ticketsTrueFormSwitch'>
                        <p>NO</p>
                        <Switch defaultChecked onChange={handleSwitch} />
                        <p>SI</p>
                    </div>
                </div>
                <div>
                    <label>Descripción</label>
                    <input
                        type="text" name='description' placeholder='Anticipadas - generales - remanente'
                        onChange={handleChange} value={ticket.description || ''} required
                    />
                </div>
            </section>

            <section>
                <div>
                    <label>Cantidad - stock</label>
                    <input
                        type="number" name='quantity' placeholder='ejemplo: 50'
                        onChange={handleChange} value={ticket.quantity || ''} required
                    />
                </div>
                <div>
                    <label>Precios <span>en moneda local.</span></label>
                    {tic
                        ? <p style={{textAlign: 'left'}}>Entradas libres</p>
                        : <input
                            type="number" name='price' placeholder='$' onChange={handleChange}
                            value={ticket.price || ''} required
                        />
                    }
                </div>
            </section>

            <section>
                <div>
                    <label>Hora de vencimiento</label>
                    <input
                        type="time" name='hourEnd' placeholder='ejemplo: 50'
                        onChange={handleChange} value={ticket.hourEnd || ''} required
                    />
                </div>
                <div>
                    <label>Día de vencimiento</label>
                    <input
                        type="date" name='dateEnd' placeholder='$' onChange={handleChange}
                        value={ticket.dateEnd ? new Date(ticket.dateEnd).toISOString().split('T')[0] : ''} required
                    />
                </div>
            </section>

            <section>
                <div>
                    <button className='btn btnUE'>Agregar</button>
                </div>
                <div className='ticketsTrueForm'>
                    <label>Fecha del evento</label>
                    <p>{values.startHour}hs - {new Date(values.startDate).toLocaleDateString()}</p>
                </div>
            </section>

        </form>
    );
};

export default TicketsTrueForm;