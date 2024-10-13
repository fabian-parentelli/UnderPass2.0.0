import TicketFalseForm from './TicketFalseForm/TicketFalseForm';
import './ticketsFalse.scss';

const TicketsFalse = ({ values, setValues, setLoading, setProgres }) => {

    return (
        <div className='ticketsFalse'>
            <h3>Entradas libres</h3>
            <p>Puedes crear una entrada simbólica. Los usuarios se registran pero no van a pagar nada.</p>

            <TicketFalseForm />
        </div>
    );
};

export default TicketsFalse;