import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SnackbarAlert from '../../../utils/SnackbarAlert';
import FinancialHtml from './FinancialHtml/FinancialHtml';
import { newFinancialDataApi } from '../../../../helpers/users/newFinacialData.api';
import { getFinancialApi } from '../../../../helpers/users/getFinancial.api';
import { updFinancialApi } from '../../../../helpers/users/updFinancial.api';
import { useLoginContext } from '../../../../context/LoginContext';

const FinancialData = ({ id, setLoading }) => {

    const [isFinancial, setIsFinancial] = useState(false);
    const [message, setMessage] = useState({ status: '', mess: '' });
    const [open, setOpen] = useState(false);
    const [values, setValues] = useState({
        holder: '', cuit: '', bank: '', account: '', cbu: '', userId: id
    });
    const navigate = useNavigate();
    const { current } = useLoginContext();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getFinancialApi(id);
            if (response.status === 'success') {
                setValues({
                    holder: response.result.holder,
                    cuit: response.result.cuit,
                    bank: response.result.bank,
                    account: response.result.account,
                    cbu: response.result.cbu,
                    userId: id
                });
                setIsFinancial(true);
            } else console.log(response);
            setLoading(false);
        }; fetchData();
    }, []);

    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (!isFinancial) {
            const response = await newFinancialDataApi(values);
            if (response.status === 'success') {
                setMessage({ status: 'success', mess: 'Datos financieros creados correctamente' });
                setOpen(true);
                if (response.accesToken) {
                    localStorage.setItem('token', response.accesToken);
                    await current();
                };
                setTimeout(() => {
                    setOpen(false);
                    const path = localStorage.getItem('path');
                    if (path) {
                        localStorage.removeItem('path');
                        navigate(`/${path}`);
                    };
                }, 2000);
            } else console.log(response);
        } else {
            const response = await updFinancialApi(values);
            if (response.status === 'success') {
                setMessage({ status: 'success', mess: 'Datons financieros actualizados correctamente' });
                setOpen(true);
                setTimeout(() => { setOpen(false) }, 2000);
            } else console.log(response);
        };
        setLoading(false);
    };

    return (
        <>
            <FinancialHtml
                values={values}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                isFinancial={isFinancial}
            />
            <SnackbarAlert message={message} open={open} />
        </>
    );
};

export default FinancialData;