import { useEffect, useState } from "react";
import PrintFormDataPass from "./PrintFormDataPass";
import SnackbarAlert from "../../../../../component/utils/SnackbarAlert.jsx";
import { newDataPassApi } from "../../../../../helpers/dataPass/newDataPass.api.js";
import { getDataPassApi } from "../../../../../helpers/dataPass/getDataPass.api.js";
import { updDataPassApi } from "../../../../../helpers/dataPass/updDataPrice.api.js";

const FormDataPass = ({ country, setLoading }) => {

    const [isValues, setIsValues] = useState(false);
    const [message, setMessage] = useState({ status: '', mess: '' });
    const [open, setOpen] = useState(false);
    const [values, setValues] = useState({
        bankingAlias: '', accountHolder: '', bank: '',
        perfomance: '', phone: '', instagrame: '',
        facebook: '', youtube: '', twitter: '', country: country
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        const response = await newDataPassApi(values);
        if (response.status === 'success') {
            setIsValues(true);
            setLoading(false);
            setMessage({ status: 'success', mess: 'Dato agregado' });
            setOpen(true);
        } else {
            setLoading(false);
            setMessage({ status: 'error', mess: response.error });
            setOpen(true);
        };
        setTimeout(() => { setOpen(false) }, 3000);
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);
        const response = await updDataPassApi(values);
        if (response.status === 'success') {
            setIsValues(true);
            setLoading(false);
            setMessage({ status: 'success', mess: 'Dato actualizado' });
            setOpen(true);
        } else {
            setLoading(false);
            setMessage({ status: 'error', mess: response.error });
            setOpen(true);
        };
        setTimeout(() => { setOpen(false) }, 3000);
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await getDataPassApi(country);
            if (response.status === 'success') {
                setValues(response.result);
                setIsValues(true);
            };
        }; fetchData();
    }, []);

    return (
        <>
            <form style={{ marginBottom: '4rem' }} onSubmit={isValues ? handleUpdate : handleSubmit} >
                <PrintFormDataPass
                    country={country}
                    values={values}
                    setValues={setValues}
                />
                <button className="btn btnB" style={{ marginTop: '2rem' }}>{isValues ? 'Actualizar' : 'Crear'}</button>
            </form>
            <SnackbarAlert message={message} open={open} />
        </>
    );
};

export default FormDataPass;