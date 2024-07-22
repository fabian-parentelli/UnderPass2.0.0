import './userDatas.scss';
import DataU from "../DataU/DataU.jsx";
import Load from "../../../utils/Load.jsx";
import { useEffect, useState } from "react";
import { getUserByIdApi } from '../../../../helpers/users/getUserByIdApi.api.js';

const UserDatas = ({ id }) => {

    const [values, setValues] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const chData = async () => {
            setLoading(true);
            const response = await getUserByIdApi(id);
            if (response.status === 'success') setValues(response.result);
            else console.log(response);
            setLoading(false);
        }; if (id) chData();
    }, []);

    return (
        <div className='userDatas'>
            <div>
                <h2>Datos de Usuario</h2>
                {values && <DataU values={values} />}
            </div>
            <div>
                <h2>Datos Financieros</h2>
                datos financieros
            </div>
            <Load loading={loading} />
        </div>
    );
};

export default UserDatas;