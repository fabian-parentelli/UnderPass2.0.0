import './eventPageTick.scss';

const EventPageTick = ({ event }) => {

    return (
        <div className='eventPageTick'>
            <table>
                <thead>
                    <tr>
                        <th>Tipo de Ticket</th>
                        <th>Valor</th>
                        <th style={{ textAlign: 'right', paddingRight: '20px' }}>Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    {event && event.ticketInfo.map((tick) => (
                        <tr key={tick._id}>
                            <td>{tick.description}</td>
                            
                            <td style={{ color: tick.quantity <= 0 && 'red' }}>
                                {tick.quantity > 0 ? `$${tick.price}` : 'Agotadas'}
                            </td>
                            
                            <td style={{ textAlign: 'right' }}>
                                <select name="" className='input'>
                                    {Array.from({ length: Math.min(tick.quantity, 6) }, (_, i) => (
                                        <option key={i + 1} value={i + 1}>
                                            {i + 1}
                                        </option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className='eventPageB'>
                <button className='btn btnUE'>Comprar</button>
            </div>
        </div>
    );
};

export default EventPageTick;