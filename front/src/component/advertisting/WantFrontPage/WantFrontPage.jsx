import './wantFrontPage.scss';
import { useEffect, useState } from 'react';
import AlertDialog from '../../utils/AlertDialog.jsx';
import LoadSmall from '../../utils/LoadSmall/LoadSmall';
import { imgages } from '../../../utils/imagesData.utils.js';
import ModalCustom from '../../utils/ModalCustom/ModalCustom';
import { useCartContext } from '../../../context/CartContext.jsx';
import PriceAddToPortal from '../PriceAddPortal/PriceAddPortal.jsx';
import { newApplicationApi } from '../../../helpers/applications/newApplication.api.js';
import { getAmountInPortalApi } from '../../../helpers/publicity/getAmountInPortal.api.js';

const WantFrontPage = ({ modalIsOpen, closeModal, data, setLoading, setModalIsOpen }) => {

    const { addToCart } = useCartContext();

    const [dataPrice, setDataPrice] = useState(null);
    const [isThere, setIsThere] = useState(0);
    const [small, setSmall] = useState(true);
    const [values, setValues] = useState({ days: 0 });
    const [message, setMessage] = useState({ open: false, title: '', content: '' });

    useEffect(() => {
        const fetchData = async () => {
            const response = await getAmountInPortalApi();
            if (response.status === 'success') setIsThere(response.result);
            else console.log(response);
            setSmall(false);
        }; fetchData();
    }, []);

    const handleApplication = async () => {
        setLoading(true);
        const info = {
            title: data.title,
            days: values.days,
            userId: data.application.userId || '',
            country: data.country,
            type: `${data.type}ToPortal`,
            applicationId: data._id,
            text: 'Agregar a la portada'
        };
        const formData = new FormData();
        for (const key in info) if (info.hasOwnProperty(key)) formData.append(key, info[key]);
        const response = await newApplicationApi(formData);        
        if (response.status === 'success') {
            setMessage({
                open: true,
                title: 'Recibimos con éxito tu solicitud',
                content: `Una vez realizado el pago nuestro personal de artística, revisará tu solicitud, en menos de 24 horas hábiles tu ${data.type} ya se encontrara en la portada.`
            });
            addToCart({
                _id: response.result._id,
                quantity: response.result.days,
                price: dataPrice.portal - dataPrice.price,
                is: `toPortal`,
                name: response.result.title,
                description: `Agregar ${data.type} al portal`,
                img: imgages.addToPort,
                data: dataPrice,
                end: data.end
            });
        };
        setTimeout(() => { setLoading(false); setModalIsOpen(false) }, 2000);
    };

    return (
        <ModalCustom modalIsOpen={modalIsOpen} closeModal={closeModal}>
            <div className='wantFrontPage'>
                <h2>Quiero estar en la Portada</h2>
                {small ? <LoadSmall />
                    : isThere >= 10
                        ? <p className='isThereNo'>No hay lugar por el momento</p>
                        : <p className='isThereOk'>Quadan {10 - isThere} lugares.</p>
                }
                {!small && isThere <= 10 &&
                    <>
                        <PriceAddToPortal data={data} values={values} setValues={setValues} setDataPrice={setDataPrice} />
                        <button className='btn btnA' onClick={handleApplication}>Solicitar</button>
                    </>
                }
            </div>
            <AlertDialog message={message} setMessage={setMessage} />
        </ModalCustom>
    );
};

export default WantFrontPage;