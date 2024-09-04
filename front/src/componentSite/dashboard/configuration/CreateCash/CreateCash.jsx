import { newCashApi } from "../../../../helpers/cash/newCash.api";

const CreateCash = () => {

    const handleCash = async () => await newCashApi();

    return (
        <button
            className='btn btnD'
            onClick={handleCash}
        >
            Crear Caja
        </button>
    );
};

export default CreateCash;