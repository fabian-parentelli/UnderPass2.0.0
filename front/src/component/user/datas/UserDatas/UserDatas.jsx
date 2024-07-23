import './userDatas.scss';
import DataU from "../DataU/DataU.jsx";
import Load from "../../../utils/Load.jsx";
import { useEffect, useState } from "react";
import FinancialData from '../FinancialData/FinancialData.jsx';
import { useLoginContext } from '../../../../context/LoginContext.jsx';
import { getUserByIdApi } from '../../../../helpers/users/getUserByIdApi.api.js';
import SnackbarAlert from '../../../utils/SnackbarAlert.jsx';

const UserDatas = ({ id }) => {

    const [values, setValues] = useState(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ status: '', mess: '' });
    const [open, setOpen] = useState(false);
    const { updateUser } = useLoginContext();

    useEffect(() => {
        const chData = async () => {
            setLoading(true);
            const response = await getUserByIdApi(id);
            if (response.status === 'success') setValues(response.result);
            else console.log(response);
            setLoading(false);
        }; if (id) chData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prevValues => {
            const keys = name.split('.');
            if (keys.length === 1) {
                return { ...prevValues, [name]: value };
            } else if (keys.length === 2) {
                return { ...prevValues, [keys[0]]: { ...prevValues[keys[0]], [keys[1]]: value } };
            };
        });
    };

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const response = await updateUser(values);
        if (response.status === 'success') {
            setMessage({ status: 'success', mess: 'Datos actualizados correctamente' });
            setOpen(true);
            setTimeout(() => { setOpen(false) }, 2000);
        } else console.log(response);
        setLoading(false);
    };

    return (
        <div className='userDatas'>
            <div>
                <h2>Datos de Usuario</h2>
                {values && <DataU
                    values={values}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    setValues={setValues}
                />}
            </div>
            <div>
                <h2>Datos Financieros</h2>
                {id && <FinancialData id={id} setLoading={setLoading} />}
            </div>
            <Load loading={loading} />
            <SnackbarAlert message={message} open={open} />
        </div>
    );
};

export default UserDatas;