import './ticketOnly.scss';
import { useUnderContext } from '../../../context/UnderContext.jsx';
import NumToString from '../../../component/utils/NumToString.jsx';

const TicketOnly = ({ ticket }) => {

    const { underData } = useUnderContext();

    return (
        <div className='ticketOnly'>
            {ticket &&
                <>
                    <h2>Recibo de pago</h2>
                    <div className='ticketOnlyData'>
                        <p className='ticketOnlyDataPsmall'><strong>N° recibo:</strong> {ticket._id}</p>
                        <p><strong>Fecha:</strong> {new Date(ticket.date).toLocaleDateString()}</p>
                        <p><strong>Lugar:</strong> {ticket.country === 'UY' ? 'Uruguay' : 'Argentina'}</p>
                    </div>

                    <div className='line' style={{ marginTop: '1.4rem' }}></div>
                    <h4>Emisor</h4>

                    <div className='ticketOnlyData'>
                        <p><strong>Nombre:</strong> {ticket.userBy?.name || 'UnderPass'}</p>
                        {ticket.userBy?.dni && <p><strong>{ticket.country === 'UY' ? 'C.I' : 'DNI'}:</strong> {ticket.userBy.dni || ''}</p>}
                        {ticket.userBy?.phone && <p><strong>Teléfono:</strong> {ticket.userBy.phone || underData.phone}</p>}
                        <p><strong>Email:</strong> {ticket.userBy?.email || underData.email}</p>
                    </div>

                    <div className='line' style={{ marginTop: '1.4rem' }}></div>
                    <h4>Receptor</h4>

                    <div className='ticketOnlyData'>
                        <p><strong>Nombre:</strong> {ticket.userTo?.name || 'UnderPass'}</p>
                        {ticket.userTo?.dni && <p><strong>{ticket.country === 'UY' ? 'C.I' : 'DNI'}:</strong> {ticket.userTo?.dni || ''}</p>}
                        <p><strong>Teléfono:</strong> {ticket.userTo?.phone || underData.phone}</p>
                        <p><strong>Email:</strong> {ticket.userTo?.email || underData.email}</p>
                    </div>

                    <div className='line' style={{ marginTop: '1.4rem' }}></div>
                    <h4>Total</h4>

                    <div className='ticketOnlyData'>
                        <p>${ticket.total}</p>
                        <p><strong>Tipo:</strong> {getType(ticket.type)}</p>
                        <NumToString number={ticket.total} />
                        <p className='ticketOnlyDataInf'>Documento no valido como factura</p>
                    </div>
                </>
            }
        </div>
    );
};

export default TicketOnly;

function getType(types) {
    const pay = {
        'transfer': () => { return 'Transferencia' },
        'mp': () => { return 'Mercado Pago' },
        'underPay': () => { return 'Billetera UnderPay' },
        'default': () => { return 'otro' },
    };
    return (pay[types] || pay['default'])();
};