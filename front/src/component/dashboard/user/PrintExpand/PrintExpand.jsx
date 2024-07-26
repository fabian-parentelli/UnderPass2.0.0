import './printExpand.scss';

const PrintExpand = ({ us }) => {

    return (
        <div className='printExpand'>
            {us &&
                <ul className='expandList'>
                    <li><strong>Cumpleaños:</strong> {new Date(us.birthday).toLocaleDateString()}</li>
                    {us.dni && <li><strong>DNI:</strong> {us.dni} </li>}
                    {us.financeData && <li><strong>Datos Financieros:</strong> {us.financeData}</li>}
                    {us.phone && <li><strong>Teléfono:</strong> {us.phone}</li>}
                    {us.location.postalCode && <li><strong>Código postal:</strong> {us.location.postalCode}</li>}
                    {us.created && <li><strong>Con nosotros desde:</strong> {new Date(us.created).toLocaleDateString()}</li>}
                    <li style={{ margin: '.5rem 0' }}><button className='btn btnC'>Mensaje</button></li>
                </ul>
            }
        </div>
    );
};

export default PrintExpand;