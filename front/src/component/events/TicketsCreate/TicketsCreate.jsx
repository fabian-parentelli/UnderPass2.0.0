import TicketsStrue from "./TicketsTrue/TicketsTrue";

const TicketCreate = ({ values, setValues, setLoading, setProgres }) => {

    return (
        <>
            {values.tickets
                ? <TicketsStrue values={values} setValues={setValues} setLoading={setLoading} setProgres={setProgres} />
                : <TicketsStrue values={values} setValues={setValues} setLoading={setLoading} setProgres={setProgres} tic={true} />
            }
        </>
    );
};

export default TicketCreate;