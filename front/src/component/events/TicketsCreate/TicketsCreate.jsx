import TicketsFalse from "./TicketsFalse/TicketsFalse";
import TicketsStrue from "./TicketsTrue/TicketsTrue";

const TicketCreate = ({ values, setValues, setLoading, setProgres }) => {

    return (
        <>
            {values.tickets
                ? <TicketsStrue values={values} setValues={setValues} setLoading={setLoading} setProgres={setProgres} />
                : <TicketsFalse values={values} setValues={setValues} setLoading={setLoading} setProgres={setProgres} />
            }
        </>
    );
};

export default TicketCreate;